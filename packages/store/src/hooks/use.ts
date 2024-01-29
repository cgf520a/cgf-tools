import createStore from '../index';
import type { Store } from '../index';
import atomMap from './atomMap';
import selectorMap from './selectorMap';
import { STORE_STATE, PROMISE, STORE_SELECTOR } from '../share';

// 全局仓库
let store: Store<Record<string, unknown>> | null = null;

export type MPromise<T> = Promise<T> & {
  $$typeof?: typeof PROMISE;
  status: 'pending' | 'fulfilled' | 'rejected';
  value: T;
  reason: Error;
};

export type StoreState<T = unknown> = {
  $$typeof: typeof STORE_STATE | typeof STORE_SELECTOR;
  key: string;
  default?: T | MPromise<T>;
  get?: (store: Store<Record<string, unknown>>) => T | MPromise<T>;
};

// 先合在一起，好做就做，不好做再拆分，这样使用起来更方便
// todo: 切换页面时会出现没初始化的状态，需要优化，可能需要提供一个内部使用的注册函数
// todo: 依赖项变化时，要重新请求
// todo: 需提供手动重新请求的方法
// todo: 异步不使用Suspense，需要提供判断的方法
// todo: 可传参的异步和同步状态 atomFamily 和 selectorFamily
// todo: 优化类型提示
function use<T>(promise: MPromise<T> | StoreState): unknown {
  const obj = {} as Record<string, unknown>;
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
  // 当promise.$$typeof 不存在，或者等于PROMISE时
  if (!promise.$$typeof || promise.$$typeof === PROMISE) {
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
  } else {
    if (store) {
      if (promise.$$typeof === STORE_STATE) {
        const { [promise.key]: value } = store;
        const setState = (state: unknown) => {
          if (typeof state === 'function') {
            store?.(promise.key, state);
          } else {
            store?.(promise.key, () => state);
          }
        };
        return [value, setState, store];
      }
      if (promise.$$typeof === STORE_SELECTOR) {
        let p: unknown = null;
        // 如果已经发送过请求，就直接返回，否则发送请求
        if (store[promise.key]) {
          p = store[promise.key];
        } else {
          p = promise.get?.(store);
          store[promise.key] = p;
        }

        if (p instanceof Promise) {
          return use(store[promise.key] as MPromise<T>);
        } else {
          // 非Promise，直接计算返回，不需要缓存
          store[promise.key] = promise.get?.(store);
          return p;
        }
      }
    }
  }
}

export default use;
