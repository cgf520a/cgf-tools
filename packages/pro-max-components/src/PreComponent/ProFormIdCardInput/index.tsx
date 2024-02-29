import React from 'react';
import { Input } from 'antd';
import { createField } from '@ant-design/pro-form/es/BaseForm';

import type { Rule } from 'antd/es/form';
import type { InputProps } from 'antd';
import type { ProFormItemProps } from '@ant-design/pro-components';

export const IdCardInput = React.memo((props: InputProps) => <Input {...props} />);

export interface ProFormIdCardInputProps extends ProFormItemProps<InputProps> {}

const BaseProFormIdCardInput: React.FC<ProFormIdCardInputProps> = ({
  placeholder,
  fieldProps,
}: ProFormIdCardInputProps) => {
  return <IdCardInput placeholder={placeholder as string} {...fieldProps} />;
};

const TempProFormIdCardInput = createField<ProFormIdCardInputProps>(
  BaseProFormIdCardInput
) as typeof BaseProFormIdCardInput;

const ProFormIdCardInput = React.memo((props: ProFormIdCardInputProps) => {
  const rules = React.useMemo(() => {
    const arr: Rule[] = [
      { required: true, message: '请输入身份证号' },
      { pattern: /(^\d{15}$)|(^\d{18}$)|(^\d{17}(\d|X|x)$)/, message: '请输入正确的身份证号' },
    ];
    if (props.required === false) {
      arr.shift();
    }
    return arr;
  }, [props.required]);

  return (
    <TempProFormIdCardInput
      label="身份证号"
      width="sm"
      name="idCard"
      placeholder="请输入身份证号"
      allowClear
      rules={rules}
      {...props}
    />
  );
});

export default React.memo(ProFormIdCardInput);
