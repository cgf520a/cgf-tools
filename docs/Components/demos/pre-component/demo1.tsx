import React from 'react';
import { ProForm } from '@ant-design/pro-components';
import { PreComponent } from '@cgf-tools/pro-max-components';

const { ProFormPhoneInput, ProFormEmailInput, ProFormIdCardInput, ProFormPasswordInput } =
  PreComponent;

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  return (
    <ProForm
      onValuesChange={console.log}
      onFinish={async v => {
        console.log(v);
      }}
    >
      <ProFormPhoneInput />
      <ProFormEmailInput />
      <ProFormIdCardInput />
      <ProFormPasswordInput />
      <ProFormPasswordInput strong label="强密码" name="strong_password" />
    </ProForm>
  );
};

export default React.memo(Demo);
