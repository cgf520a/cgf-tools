import React from 'react';
import type { DividerProps } from 'antd';
export interface DividerGroupProps extends DividerProps {
    /**
     * 分组标题
     * @description 分组标题
     * @default -
     */
    title?: React.ReactNode;
    /**
     * 分组内容
     */
    children?: React.ReactNode;
    dashed?: boolean;
}
declare const _default: React.NamedExoticComponent<DividerGroupProps>;
export default _default;
