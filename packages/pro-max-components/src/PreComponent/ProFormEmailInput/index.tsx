import React from 'react';
import { Input } from 'antd';
import { createField } from '@ant-design/pro-form/es/BaseForm';

import type { Rule } from 'antd/es/form';
import type { InputProps } from 'antd';
import type { ProFormItemProps } from '@ant-design/pro-components';

export const EmailInput = React.memo((props: InputProps) => <Input {...props} />);

export interface ProFormEmailInputProps extends ProFormItemProps<InputProps> {}

const BaseProFormEmailInput: React.FC<ProFormEmailInputProps> = ({
  placeholder,
  fieldProps,
}: ProFormEmailInputProps) => {
  return <EmailInput placeholder={placeholder as string} {...fieldProps} />;
};

const TempProFormEmailInput = createField<ProFormEmailInputProps>(
  BaseProFormEmailInput
) as typeof BaseProFormEmailInput;

const ProFormEmailInput = React.memo((props: ProFormEmailInputProps) => {
  const rules = React.useMemo(() => {
    const arr: Rule[] = [
      { required: true, message: '请输入邮箱' },
      { type: 'email', message: '请输入正确的邮箱' },
    ];
    if (props.required === false) {
      arr.shift();
    }
    return arr;
  }, [props.required]);

  return (
    <TempProFormEmailInput
      label="邮箱"
      width="sm"
      name="email"
      placeholder="请输入邮箱"
      allowClear
      rules={rules}
      {...props}
    />
  );
});

export default React.memo(ProFormEmailInput);
