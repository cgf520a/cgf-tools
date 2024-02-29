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

export type Store<Obj> = Obj &
  Setter<Obj> & {
    register: (obj: Obj) => void;
    onStateChange: (fn: (k: keyof Obj, val: Obj[keyof Obj]) => void) => void;
  };

const readonlyKeys = ['register', 'onStateChange'];

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
      getPrevSnapshot: () => V;
      subscribe: (listener: VoidFn) => VoidFn;
      getSnapshot: () => V;
      useSnapshot: () => V;
      setSnapshot: (val: V) => void;
    }
  >;
  type Methods = Record<K, AnyFn>;

  const state: State = {} as State;
  const methods: Methods = {} as Methods;

  let registerObj = {} as Obj;

  const register = (__obj: Obj) => {
    if (__DEV__ && !isObj(__obj)) {
      throw new Error('object required');
    }

    registerObj = { ...registerObj, ...__obj };

    Object.keys(__obj).forEach((key: K) => {
      const initVal = __obj[key];

      if (initVal instanceof Function && !(key in methods)) {
        methods[key] = (...args: unknown[]) => {
          isGetStateInMethod = true;
          const res = initVal(...args);
          isGetStateInMethod = false;
          return res;
        };
        return;
      }

      const listeners = new Set<VoidFn>();
      let prev = initVal;
      if (!(key in state)) {
        state[key] = {
          getPrevSnapshot: () => prev,
          subscribe: listener => {
            listeners.add(listener);
            return () => listeners.delete(listener);
          },
          getSnapshot: () => __obj[key],
          setSnapshot: val => {
            if (val !== __obj[key]) {
              prev = __obj[key];
              __obj[key] = val;
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
      }
    });
  };
  register(obj);
  let store = {} as Store<Obj>;

  const stateChangeListeners = new Set<(k: K, val: V) => void>();

  const onStateChange = (fn: (k: K, val: V) => void) => {
    stateChangeListeners.add(fn);
  };

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
    if (key !== 'register' && key !== 'onStateChange') {
      if (type !== STATA_CHANGE && innerReducer) {
        // 暂时如此处理，后续再优化
        innerReducer(store, { type: type as string, payload });
      } else if (key in state || key in methods) {
        if (key in state) {
          const newVal = val instanceof Function ? val(state[key].getSnapshot()) : val;
          state[key].setSnapshot(newVal as V);
          stateChangeListeners.forEach(fn => fn(key, newVal as V));
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
    }
  };

  // 适配redux中间件
  const getState: GetStateFn<Obj> = () => {
    const prevObj: Obj = {} as Obj;
    for (const key in state) {
      prevObj[key as keyof Obj] = state[key].getSnapshot();
    }
    return prevObj;
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
        if (key === 'onStateChange') {
          return onStateChange;
        }

        if (key === 'register') {
          return register;
        }

        if (key in methods) {
          return methods[key];
        }
        if (key in state) {
          if (isGetStateInMethod) {
            return state[key].getSnapshot();
          }
          try {
            return state[key].useSnapshot();
          } catch (err) {
            return state[key].getSnapshot();
          }
        }
        if (__DEV__) {
          if (
            key !== 'register' &&
            key !== 'onStateChange' &&
            key !== 'prototype' &&
            key !== 'name' &&
            key !== 'displayName'
          ) {
            throw new Error(`\`${key as string}\` is not initialized in store`);
          }
        }
      },
      set: (_target, key: K, val: V) => {
        if (typeof key === 'string' && readonlyKeys.includes(key)) {
          throw new Error(`${key} is readonly`);
        }
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
          if (typeof firstArg === 'string' && readonlyKeys.includes(firstArg)) {
            throw new Error(`${firstArg} is readonly`);
          }
          dispatch({
            key: firstArg,
            val: oneAction,
            type: STATA_CHANGE,
          });
          return;
        }

        if (isObj(firstArg)) {
          const newObj = firstArg as Obj;
          Object.keys(newObj).forEach(key => {
            if (typeof key === 'string' && readonlyKeys.includes(key)) {
              throw new Error(`${key} is readonly`);
            }
            dispatch({
              key,
              val: newObj[key],
              type: STATA_CHANGE,
            });
          });
          return;
        }

        if (typeof firstArg === 'function') {
          const newObj = firstArg(registerObj);
          Object.keys(newObj).forEach(key => {
            if (typeof key === 'string' && readonlyKeys.includes(key)) {
              throw new Error(`${key} is readonly`);
            }
            dispatch({
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

export * from './hooks';
export { default as atom } from './atom';
export { default as selector, selectorFamily } from './selector';

export type { MPromise } from './hooks/use';

export default resso;
