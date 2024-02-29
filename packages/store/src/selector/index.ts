import atomMap from '../hooks/atomMap';
import selectorMap from '../hooks/selectorMap';
import { STORE_SELECTOR } from '../share';
import { refresh } from '../hooks/use';
import type { Store } from '../index';
import type { StoreSelector, MPromise } from '../hooks/use';

function selector<T>(options: {
  key: string;
  get: (store: Store<Record<string, unknown>>) => T | Promise<T> | MPromise<T>;
}): StoreSelector<T> {
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

type Parameter = string | number | boolean | Record<string, unknown>;

export function selectorFamily<T>(options: {
  key: string;
  get: (
    params: Parameter | Parameter[]
  ) => (store: Store<Record<string, unknown>>, ...args: any[]) => T | Promise<T> | MPromise<T>;
}): (p: Parameter | Parameter[]) => StoreSelector<T> {
  selectorMap.set(options.key, undefined);

  let cache = '';

  return params => {
    if (cache !== JSON.stringify(params)) {
      if (cache) {
        refresh(options.key);
      }
      cache = JSON.stringify(params);
    }
    return {
      $$typeof: STORE_SELECTOR,
      key: options.key,
      default: undefined,
      get: options.get(params),
    };
  };
}

export default selector;
