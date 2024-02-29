import React from 'react';
import { Input } from 'antd';
import { createField } from '@ant-design/pro-form/es/BaseForm';

import type { Rule } from 'antd/es/form';
import type { ProFormItemProps } from '@ant-design/pro-components';
import type { PasswordProps } from 'antd/es/input/Password';

const PasswordInput = React.memo((props: PasswordProps) => <Input.Password {...props} />);

export interface ProFormPasswordInputProps extends ProFormItemProps<PasswordProps> {
  // 是否强密码校验 8-20位，密码必须包含大写字母、小写字母、数字和特殊字符 默认为false
  strong?: boolean;
}

const BaseProFormPasswordInput: React.FC<ProFormPasswordInputProps> = ({
  placeholder,
  fieldProps,
}: ProFormPasswordInputProps) => {
  return <PasswordInput maxLength={20} placeholder={placeholder as string} {...fieldProps} />;
};

const TempProFormPasswordInput = createField<ProFormPasswordInputProps>(
  BaseProFormPasswordInput
) as typeof BaseProFormPasswordInput;

const ProFormPasswordInput = React.memo((props: ProFormPasswordInputProps) => {
  const rules = React.useMemo(() => {
    let arr: Rule[] = [
      { required: true, message: '请输入密码' },
      { min: 6, message: '密码长度不能小于6位' },
      { max: 20, message: '密码长度不能大于20位' },
      {
        pattern: /^(?![0-9]+$)(?![a-zA-Z]+$)[0-9A-Za-z]{6,20}$/,
        message: '密码必须包含字母和数字',
      },
    ];
    if (props.strong) {
      arr = [
        { required: true, message: '请输入密码' },
        { min: 8, message: '密码长度不能小于8位' },
        { max: 20, message: '密码长度不能大于20位' },
        {
          pattern: /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[$@,_.!%*#?&])[\da-zA-Z$@,_.!%*#?&]{8,20}$/,
          message: '密码必须包含大写字母、小写字母、数字和特殊字符',
        },
      ];
    }
    if (props.required === false) {
      arr.shift();
    }
    return arr;
  }, [props.required, props.strong]);

  return (
    <TempProFormPasswordInput
      label="密码"
      width="sm"
      name="password"
      placeholder="请输入密码"
      allowClear
      rules={rules}
      {...props}
    />
  );
});

export default React.memo(ProFormPasswordInput);
