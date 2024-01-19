import React from 'react';
import createStore from '@cgf-tools/store';
import type { Middleware, Store } from '@cgf-tools/store';

export const ProMaxStoreContext = React.createContext<Store<unknown> | undefined>(undefined);

export interface ProMaxStoreProps<T extends Record<string, unknown>> {
  initialState: T;
  middlewares?: Middleware[];
  children?: React.ReactNode;
}

function ProMaxStore<T extends Record<string, unknown>>(props: ProMaxStoreProps<T>) {
  const { middlewares, initialState, children } = props;

  const state = React.useMemo(() => {
    createStore.applyMiddlewares(middlewares || []);

    return createStore<T>(initialState);
  }, [initialState, middlewares]);

  return <ProMaxStoreContext.Provider value={state}>{children}</ProMaxStoreContext.Provider>;
}

export default React.memo(ProMaxStore);
