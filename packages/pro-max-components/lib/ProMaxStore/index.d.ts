import React from 'react';
import type { Middleware } from '@cgf-tools/store';
export declare const ProMaxStoreContext: React.Context<import("@cgf-tools/store").Setter<unknown> | undefined>;
export interface ProMaxStoreProps<T extends Record<string, unknown>> {
    initialState: T;
    middlewares?: Middleware[];
    children?: React.ReactNode;
}
declare function ProMaxStore<T extends Record<string, unknown>>(props: ProMaxStoreProps<T>): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
declare const _default: React.MemoExoticComponent<typeof ProMaxStore>;
export default _default;
