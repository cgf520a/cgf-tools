import React from 'react';
import { Button, Space } from 'antd';
import { ProFormInputSkeleton, ProFormMemoSelect } from '@cgf-tools/pro-max-components';
import axios from 'axios';

const request = async () => {
  return axios.get('/api/env.json').then(res => {
    return new Promise(resolve => {
      setTimeout(() => {
        resolve(res.data);
      }, 1000);
    });
  });
};

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  const [dep1, setDep1] = React.useState(0);
  const [dep2, setDep2] = React.useState(0);

  return (
    <>
      <ProFormInputSkeleton
        width="md"
        fieldProps={{
          active: true,
        }}
      />
      <Space css={{ marginBottom: 10 }}>
        <Button type="primary" onClick={() => setDep1(p => p + 1)}>
          改变依赖1
        </Button>
        <Button type="primary" onClick={() => setDep2(p => p + 1)}>
          改变依赖2
        </Button>
      </Space>
      <ProFormMemoSelect
        width="md"
        label="环境"
        name="env"
        placeholder="请选择环境"
        dependencies={[dep1, dep2]}
        request={request}
      />
    </>
  );
};

export default React.memo(Demo);
