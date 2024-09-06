import createStore from '../index';
import type { Store } from '../index';
import atomMap from './atomMap';
import selectorMap from './selectorMap';
import { STORE_ATOM, PROMISE, STORE_SELECTOR } from '../share';

// 全局仓库 不能导出，只能在use中使用
let store: Store<Record<string, unknown>> | null = null;

export function refresh(key: keyof typeof store | string) {
  if (store) {
    store[key] = undefined;
  }
}

export type MPromise<T = unknown> = Promise<T> & {
  $$typeof?: typeof PROMISE;
  status: 'pending' | 'fulfilled' | 'rejected';
  value: T;
  reason: Error;
  key?: string;
};

export type StoreAtom<T = unknown> = {
  $$typeof: typeof STORE_ATOM;
  key: string;
  default?: T | (() => T);
};

export type StoreSelector<T = unknown> = {
  $$typeof: typeof STORE_SELECTOR;
  key: string;
  default?: T | Promise<T> | MPromise<T>;
  get: (store: Store<Record<string, unknown>>) => T | Promise<T> | MPromise<T>;
};

// 先合在一起，好做就做，不好做再拆分，这样使用起来更方便
// todo: 切换页面时会出现没初始化的状态，需要优化，可能需要提供一个内部使用的注册函数 done
// todo: 依赖项变化时，要重新请求 done
// todo: 需提供手动重新请求的方法 done
// todo: 异步不使用Suspense，需要提供判断的方法 不支持，使用use时必须使用Suspense
// todo: 可传参的异步和同步状态 atomFamily 和 selectorFamily
// todo: 优化类型提示 done

function mPromiseFn<T = unknown>(promise: MPromise<T>): T {
  if (promise.status === 'fulfilled') {
    return promise.value;
  } else if (promise.status === 'rejected') {
    throw promise.reason;
  } else if (promise.status === 'pending') {
    throw promise;
  } else {
    promise.status = 'pending';
    promise.then(
      result => {
        promise.status = 'fulfilled';
        promise.value = result;
      },
      reason => {
        promise.status = 'rejected';
        promise.reason = reason;
      }
    );
    throw promise;
  }
}

type SetterAtomState<T> = (v: T | ((s: T) => T)) => void;

function atomFn<T = unknown>(
  promise: StoreAtom<T>,
  _store: Store<Record<string, unknown>>
): [T, SetterAtomState<T>, Store<Record<string, unknown>>] {
  const { [promise.key]: value } = _store;
  const setState: SetterAtomState<T> = state => {
    if (typeof state === 'function') {
      store?.(promise.key, state);
    } else {
      store?.(promise.key, () => state);
    }
  };
  return [value as T, setState, _store];
}

function selectorFn<T = unknown>(
  promise: StoreSelector<T>,
  _store: Store<Record<string, unknown>>
): T {
  let p: unknown = null;
  // 如果已经发送过请求，就直接返回，否则发送请求
  if (_store[promise.key]) {
    p = _store[promise.key];
  } else {
    const depKeys = new Set<string>();
    const { onStateChange } = _store;
    const newStore = new Proxy(_store, {
      get: (_target, k: string) => {
        depKeys.add(k);
        return _target[k];
      },
    });
    p = promise.get?.(newStore);
    onStateChange(key => {
      if (p instanceof Promise && depKeys.has(key)) {
        refresh(promise.key);
      }
    });

    _store[promise.key] = p;
  }
  if (p instanceof Promise) {
    return mPromiseFn(_store[promise.key] as MPromise<T>);
  } else {
    // 非Promise，直接计算返回，不需要缓存
    _store[promise.key] = promise.get?.(_store);
    return p as T;
  }
}

const UseMap = {
  [PROMISE]: mPromiseFn,
  [STORE_SELECTOR]: selectorFn,
  [STORE_ATOM]: atomFn,
};

function use<T = unknown>(params: MPromise<T>): T;
function use<T = unknown>(
  params: StoreAtom<T>
): [T, SetterAtomState<T>, Store<Record<string, unknown>>];
function use<T = unknown>(params: StoreSelector<T>): T;
function use<T = unknown>(
  params: MPromise<T> | StoreAtom<T> | StoreSelector<T>
): T | [unknown, SetterAtomState<T>, Store<Record<string, unknown>>] {
  const obj: Record<string, unknown> = {};
  atomMap.forEach((value, key) => {
    if (!(key in obj)) {
      obj[key] = value;
    }
  });
  selectorMap.forEach((value, key) => {
    if (!(key in obj)) {
      obj[key] = value;
    }
  });
  if (store === null) {
    store = createStore<Record<string, unknown>>(obj);
  } else {
    // store存在时，某些未注册的状态，需要注册到store中
    const { register } = store;
    register(obj);
  }
  switch (params.$$typeof) {
    case STORE_ATOM:
      return UseMap[STORE_ATOM](params as StoreAtom<T>, store);
    case STORE_SELECTOR:
      return UseMap[STORE_SELECTOR](params as StoreSelector<T>, store);
    default:
      return UseMap[PROMISE](params as MPromise<T>);
  }
}

export default use;
