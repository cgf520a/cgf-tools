import React from 'react';
import { ProForm } from '@ant-design/pro-components';
import { ProFormSearchSelect } from '@cgf-tools/pro-max-components';

const request = async () => {
  return new Promise(resolve => {
    setTimeout(() => {
      resolve([
        {
          label: '测试1',
          value: '1',
        },
        {
          label: '测试2',
          value: '2',
        },
      ]);
    }, 2000);
  });
};

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  return (
    <ProForm
      onValuesChange={console.log}
      onFinish={async v => {
        console.log(v);
      }}
    >
      <ProFormSearchSelect
        width="md"
        label="用户"
        name="user"
        placeholder="请输入内容搜索"
        request={request}
      />
    </ProForm>
  );
};

export default React.memo(Demo);
