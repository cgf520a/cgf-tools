import { useSyncExternalStore } from 'use-sync-external-store/shim';

type VoidFn = () => void;
type AnyFn = (...args: unknown[]) => unknown;

type OneAction<V> = V | ((val: V) => V);
type ObjUpdater<Obj> = (obj: Obj) => Partial<Obj>;

export type Setter<Obj> = {
  <K extends keyof Obj>(key: K, oneAction: OneAction<Obj[K]>): void;
  (obj: Partial<Obj>): void;
  (objUpdater: ObjUpdater<Obj>): void;
};

export type Store<Obj> = Obj & Setter<Obj>;

const __DEV__ = process.env.NODE_ENV !== 'production';

const isObj = (val: unknown) => {
  return Object.prototype.toString.call(val) === '[object Object]';
};

const STATA_CHANGE = Symbol('STATA_CHANGE');
let isGetStateInMethod = false;
let run = (fn: VoidFn) => {
  fn();
};

type SetFn<T> = (params: { key: keyof T; val: unknown; type?: string; payload?: unknown }) => void;

type NextFn<T> = (next: SetFn<T>) => SetFn<T>;

type GetStateFn<K> = () => K;

export type Middleware = <T>(params: {
  getState: GetStateFn<unknown>;
  dispatch: SetFn<T>;
}) => NextFn<T>;

let innerMiddlewares: Middleware[] = [];

export type ReducerFn<T> = (store: Store<T>, action: { type: string; payload?: unknown }) => T;
let innerReducer: ReducerFn<any> | undefined = undefined;

export function compose<T>(...funcs: NextFn<T>[]) {
  if (funcs.length === 0) {
    return (arg: any) => arg;
  }

  if (funcs.length === 1) {
    return funcs[0];
  }

  return funcs.reduce(
    (a, b) =>
      (...args) =>
        a(b(...args))
  );
}

const resso = <Obj extends Record<string, unknown>>(obj: Obj): Store<Obj> => {
  type K = keyof Obj;
  type V = Obj[K];
  type State = Record<
    K,
    {
      subscribe: (listener: VoidFn) => VoidFn;
      getSnapshot: () => Obj[K];
      useSnapshot: () => Obj[K];
      setSnapshot: (val: Obj[K]) => void;
    }
  >;
  type Methods = Record<K, AnyFn>;

  if (__DEV__ && !isObj(obj)) {
    throw new Error('object required');
  }

  const state: State = {} as State;
  const methods: Methods = {} as Methods;

  Object.keys(obj).forEach((key: K) => {
    const initVal = obj[key];

    if (initVal instanceof Function) {
      methods[key] = (...args: unknown[]) => {
        isGetStateInMethod = true;
        const res = initVal(...args);
        isGetStateInMethod = false;
        return res;
      };
      return;
    }

    const listeners = new Set<VoidFn>();

    state[key] = {
      subscribe: listener => {
        listeners.add(listener);
        return () => listeners.delete(listener);
      },
      getSnapshot: () => obj[key],
      setSnapshot: val => {
        if (val !== obj[key]) {
          obj[key] = val;
          run(() => listeners.forEach(listener => listener()));
        }
      },
      useSnapshot: () => {
        return useSyncExternalStore(
          state[key].subscribe,
          state[key].getSnapshot,
          state[key].getSnapshot
        );
      },
    };
  });

  // 记录状态变更
  let oldObj = { ...obj };
  let store = {} as Store<Obj>;

  let setState = ({
    key,
    val,
    type = STATA_CHANGE,
    ...payload
  }: {
    key: K;
    val: unknown | OneAction<V>;
    type?: string | Symbol;
    payload?: unknown;
  }) => {
    if (type !== STATA_CHANGE && innerReducer) {
      // 暂时如此处理，后续再优化
      innerReducer(store, { type: type as string, payload });
    } else if (key in obj) {
      if (key in state) {
        const newVal = val instanceof Function ? val(obj[key]) : val;
        state[key].setSnapshot(newVal as V);
        oldObj = { ...obj };
        return {
          key,
          val: newVal,
          type,
          payload,
        };
      } else if (__DEV__) {
        throw new Error(`\`${key as string}\` is a method, can not update`);
      }
    } else if (__DEV__) {
      throw new Error(`\`${key as string}\` is not initialized in store`);
    }
  };

  // 适配redux中间件
  const getState: GetStateFn<Obj> = () => {
    return oldObj;
  };

  // 用于适配redux中间件，不应该给外部使用，违背此库的设计初衷
  let dispatch: typeof setState = setState;

  const chain = innerMiddlewares.map(middleware =>
    middleware({
      getState,
      dispatch,
    })
  );
  setState = compose(...chain)(setState);
  dispatch = setState;

  store = new Proxy(
    (() => undefined) as unknown as Store<Obj>,
    {
      get: (_target, key: K) => {
        if (key in methods) {
          return methods[key];
        }

        if (key in state) {
          if (isGetStateInMethod) {
            return obj[key];
          }

          try {
            return state[key].useSnapshot();
          } catch (err) {
            return obj[key];
          }
        }

        if (__DEV__) {
          if (key !== 'prototype' && key !== 'name' && key !== 'displayName') {
            throw new Error(`\`${key as string}\` is not initialized in store`);
          }
        }
      },
      set: (_target, key: K, val: V) => {
        dispatch({
          key,
          val,
          type: STATA_CHANGE,
        });
        return true;
      },
      apply: (
        _target,
        _thisArg,
        [firstArg, oneAction]: [K | Obj | ObjUpdater<Obj>, OneAction<V>]
      ) => {
        if (typeof firstArg === 'string') {
          setState({
            key: firstArg,
            val: oneAction,
            type: STATA_CHANGE,
          });
          return;
        }

        if (isObj(firstArg)) {
          const newObj = firstArg as Obj;
          Object.keys(newObj).forEach(key => {
            setState({
              key,
              val: newObj[key],
              type: STATA_CHANGE,
            });
          });
          return;
        }

        if (typeof firstArg === 'function') {
          const newObj = firstArg(obj);
          Object.keys(newObj).forEach(key => {
            setState({
              key,
              val: newObj[key],
              type: STATA_CHANGE,
            });
          });
        }
      },
    } as ProxyHandler<Store<Obj>>
  );

  return store;
};

resso.config = ({ batch }: { batch: typeof run }) => {
  run = batch;
};

// reducer给中间件用，适配redux中间件
resso.applyMiddlewares = <T>(middlewares: Middleware[], reducer?: ReducerFn<T>) => {
  innerMiddlewares = middlewares;
  innerReducer = reducer;
};

export default resso;
