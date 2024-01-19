import React from 'react';
import type { ButtonProps } from 'antd';
export interface ImportButtonProps {
    buttonProps?: ButtonProps;
    text?: string;
    /**
     * 导入模板下载地址
     */
    importTemplateUrl?: string;
    onImport?: (formData: FormData) => Promise<boolean>;
}
declare const _default: React.NamedExoticComponent<ImportButtonProps>;
export default _default;
