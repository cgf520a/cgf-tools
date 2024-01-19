import React, { useMemo } from 'react';
import { ProField, ProProvider } from '@ant-design/pro-components';
import { ProMaxProviderContext } from '@cgf-tools/pro-max-components/ProMaxProvider';
import { valueTypeMap as builtInValueTypeMap } from '@cgf-tools/pro-max-components/share';
import type { ProMaxProviderProps } from '@cgf-tools/pro-max-components';
import type {
  ProFieldValueType,
  ProFieldValueObjectType,
  ProFieldFCRenderProps,
} from '@ant-design/pro-components';
import { useMemoizedFn } from 'ahooks';

export interface ProMaxFieldProps<T> extends Omit<ProFieldFCRenderProps, 'text' | 'placeholder'> {
  valueType?: T | keyof typeof builtInValueTypeMap | ProFieldValueType | ProFieldValueObjectType;
}

function ProMaxField<T>(props: ProMaxFieldProps<T>) {
  const { valueType, ...rest } = props;
  const { valueTypeMap } =
    React.useContext<ProMaxProviderProps | undefined>(ProMaxProviderContext) || {};
  const values = React.useContext(ProProvider);

  const innerValueTypeMap = useMemo(
    () => ({
      ...builtInValueTypeMap,
      ...valueTypeMap,
    }),
    [valueTypeMap]
  );

  const value = useMemo(
    () => ({
      ...values,
      valueTypeMap: innerValueTypeMap,
    }),
    [innerValueTypeMap, values]
  );

  const innerValueType = useMemo(() => {
    const keys = Object.keys(innerValueTypeMap);
    // 当自定义的 valueTypeMap 中包含 valueType 时，不使用内置的 valueType
    if (typeof valueType === 'string' && keys.includes(valueType)) {
      return undefined;
    }
    return valueType;
  }, [innerValueTypeMap, valueType]);

  const render = useMemoizedFn((text, props, dom) => {
    const fn = innerValueTypeMap[valueType as keyof typeof builtInValueTypeMap]?.render;
    if (fn) {
      return fn(text, { ...props, ...rest }, dom);
    }
    return <>-</>;
  });

  const renderFormItem = useMemoizedFn((text, props, dom) => {
    const fn = innerValueTypeMap[valueType as keyof typeof builtInValueTypeMap]?.renderFormItem;
    if (fn) {
      return fn(text, { ...props, ...rest }, dom);
    }
    return <>-</>;
  });

  return (
    <ProProvider.Provider value={value}>
      {innerValueType ? (
        <ProField
          {...rest}
          valueType={innerValueType as ProFieldValueType | ProFieldValueObjectType | undefined}
        />
      ) : (
        <ProField {...rest} render={render} renderFormItem={renderFormItem} />
      )}
    </ProProvider.Provider>
  );
}

export default React.memo(ProMaxField);
