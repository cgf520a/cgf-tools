import atomMap from '../hooks/atomMap';
import selectorMap from '../hooks/selectorMap';
import { STORE_SELECTOR } from '../share';
import type { Store } from '../index';
import type { StoreState, MPromise } from '../hooks/use';

function selector<T>(options: {
  key: string;
  get: (store: Store<unknown>) => T | MPromise<T>;
}): StoreState<T> {
  if (atomMap.has(options.key)) {
    throw new Error(`atom ${options.key} already exists`);
  }
  if (selectorMap.has(options.key)) {
    throw new Error(`selector ${options.key} already exists`);
  }

  selectorMap.set(options.key, undefined);

  return {
    $$typeof: STORE_SELECTOR,
    key: options.key,
    default: undefined,
    get: options.get,
  };
}

export default selector;
