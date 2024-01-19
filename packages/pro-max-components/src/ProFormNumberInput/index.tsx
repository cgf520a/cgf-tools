import React from 'react';
import { Input } from 'antd';
import type { InputProps } from 'antd';
import type { ProFormItemProps } from '@ant-design/pro-components';
import { createField } from '@ant-design/pro-form/es/BaseForm';

export type NumberInputProps = InputProps & {
  onChange?: (value?: string) => void;
  placeholder?: string | string[];
};

export const NumberInput = React.memo(({ onChange, value, ...others }: NumberInputProps) => {
  const handleChange: React.ChangeEventHandler<HTMLInputElement> = e => {
    const v = e.target.value;
    const _v = v ? v?.replace(/[^\d]/g, '') : undefined;
    if (_v !== value) {
      onChange?.(_v);
    }
  };

  return (
    <Input
      {...others}
      placeholder={others.placeholder || '请输入'}
      onChange={handleChange}
      value={value}
    />
  );
});

export interface ProFormNumberInputProps extends ProFormItemProps<NumberInputProps> {}

const BaseProFormNumberInput: React.FC<ProFormNumberInputProps> = ({
  placeholder,
  fieldProps,
}: ProFormNumberInputProps) => {
  return <NumberInput placeholder={placeholder as string} {...fieldProps} />;
};

const ProFormNumberInput = createField<ProFormNumberInputProps>(
  BaseProFormNumberInput
) as typeof BaseProFormNumberInput;

export default React.memo(ProFormNumberInput);
