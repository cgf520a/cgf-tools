import React from 'react';
import type { ButtonProps } from 'antd';
import type { Method } from 'axios';
export interface ExportButtonProps {
    buttonProps?: ButtonProps;
    text?: string;
    /**
     * 导出模式 window为新窗口直接打开下载，blob为二进制下载,outer为弹出事件外部处理
     */
    exportMode?: 'window' | 'blob' | 'outer';
    /**
     * 下载接口
     */
    exportUrl?: string;
    /**
     * 下载参数 为false时不传递参数
     */
    exportParams?: false | Record<string, any>;
    /**
     * 导出回调，为outer时不处理直接回调，其他模式先处理再回调
     */
    onExport?: (params?: Record<string, any>) => void;
    /**
     * 请求方法
     */
    method?: Method;
    fileName?: string;
}
declare const _default: React.NamedExoticComponent<ExportButtonProps>;
export default _default;
