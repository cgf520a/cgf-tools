import React from 'react';
import { valueTypeMap as builtInValueTypeMap } from "../share";
import type { ProFieldValueType, ProFieldValueObjectType, ProFieldFCRenderProps } from '@ant-design/pro-components';
export interface ProMaxFieldProps<T> extends Omit<ProFieldFCRenderProps, 'text' | 'placeholder'> {
    valueType?: T | keyof typeof builtInValueTypeMap | ProFieldValueType | ProFieldValueObjectType;
}
declare function ProMaxField<T>(props: ProMaxFieldProps<T>): import("@emotion/react/types/jsx-namespace").EmotionJSX.Element;
declare const _default: React.MemoExoticComponent<typeof ProMaxField>;
export default _default;
