import atomMap from '../hooks/atomMap';
import selectorMap from '../hooks/selectorMap';
import { STORE_STATE } from '../share';
import type { StoreState } from '../hooks/use';

// 将状态注册到全局，在use的时候创建
function atom<T>(options: { key: string; default: T | (() => T) }): StoreState<T> {
  if (atomMap.has(options.key)) {
    throw new Error(`atom ${options.key} already exists`);
  }
  if (selectorMap.has(options.key)) {
    throw new Error(`selector ${options.key} already exists`);
  }
  const defaultState =
    typeof options.default === 'function' ? (options.default as () => T)() : options.default;
  atomMap.set(options.key, defaultState);

  return {
    $$typeof: STORE_STATE,
    key: options.key,
    default: defaultState,
  };
}

export default atom;
