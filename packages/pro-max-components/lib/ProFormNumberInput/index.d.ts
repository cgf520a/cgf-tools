import React from 'react';
import type { InputProps } from 'antd';
import type { ProFormItemProps } from '@ant-design/pro-components';
export type NumberInputProps = InputProps & {
    onChange?: (value?: string) => void;
    placeholder?: string | string[];
};
export declare const NumberInput: React.MemoExoticComponent<({ onChange, value, ...others }: NumberInputProps) => import("@emotion/react/types/jsx-namespace").EmotionJSX.Element>;
export interface ProFormNumberInputProps extends ProFormItemProps<NumberInputProps> {
}
declare const _default: React.NamedExoticComponent<ProFormNumberInputProps>;
export default _default;
