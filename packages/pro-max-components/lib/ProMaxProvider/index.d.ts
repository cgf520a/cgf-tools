import React from 'react';
import type { ProRenderFieldPropsType } from '@ant-design/pro-components';
export interface ProMaxProviderProps {
    valueTypeMap?: Record<string, ProRenderFieldPropsType>;
    children?: React.ReactNode;
}
export declare const ProMaxProviderContext: React.Context<ProMaxProviderProps | undefined>;
declare const _default: React.NamedExoticComponent<ProMaxProviderProps>;
export default _default;
