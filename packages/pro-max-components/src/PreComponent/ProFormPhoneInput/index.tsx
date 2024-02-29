import React from 'react';
import { NumberInput } from '@cgf-tools/pro-max-components/ProFormNumberInput';
import { createField } from '@ant-design/pro-form/es/BaseForm';

import type { NumberInputProps } from '@cgf-tools/pro-max-components/ProFormNumberInput';
import type { ProFormItemProps } from '@ant-design/pro-components';
import type { Rule } from 'antd/es/form';

// 需要提供给valueTypeMap使用，所以需要export
export const PhoneInput = React.memo((props: NumberInputProps) => (
  <NumberInput maxLength={11} minLength={11} {...props} />
));

export interface ProFormPhoneInputProps extends ProFormItemProps<NumberInputProps> {}

const BaseProFormPhoneInput: React.FC<ProFormPhoneInputProps> = ({
  placeholder,
  fieldProps,
}: ProFormPhoneInputProps) => {
  return <PhoneInput placeholder={placeholder as string} {...fieldProps} />;
};

const TempProFormPhoneInput = createField<ProFormPhoneInputProps>(
  BaseProFormPhoneInput
) as typeof BaseProFormPhoneInput;

const ProFormPhoneInput = React.memo((props: ProFormPhoneInputProps) => {
  const rules = React.useMemo(() => {
    const arr: Rule[] = [
      { required: true, message: '请输入手机号' },
      { pattern: /^1[3456789]\d{9}$/, message: '请输入正确的手机号' },
    ];
    if (props.required === false) {
      arr.shift();
    }
    return arr;
  }, [props.required]);

  return (
    <TempProFormPhoneInput
      label="手机号"
      width="sm"
      name="phone"
      placeholder="请输入手机号"
      allowClear
      rules={rules}
      {...props}
    />
  );
});

export default React.memo(ProFormPhoneInput);
