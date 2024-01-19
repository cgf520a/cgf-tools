import React from 'react';
import { ProFormText, ProForm } from '@ant-design/pro-components';
import { ProFormNumberInput } from '@cgf-tools/pro-max-components';

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  return (
    <ProForm
      onValuesChange={console.log}
      onFinish={async v => {
        console.log(v);
      }}
    >
      <ProFormText name="name" label="姓名" width="sm" />
      <ProFormNumberInput
        width="sm"
        label="手机号"
        placeholder="请输入手机号"
        name="phone"
        fieldProps={{
          maxLength: 11,
        }}
        allowClear
      />
    </ProForm>
  );
};

export default React.memo(Demo);
