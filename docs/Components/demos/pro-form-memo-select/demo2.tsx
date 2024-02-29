import React from 'react';
import { Button } from 'antd';
import { ProForm } from '@ant-design/pro-components';
import { ProFormMemoSelect } from '@cgf-tools/pro-max-components';
import axios from 'axios';

const request = async () => {
  // 添加一个假的延迟，以便让等待更加明显。
  await new Promise(resolve => {
    setTimeout(resolve, 3000);
  });
  return axios.get('/api/env.json').then(res => res.data);
};

const Demo = () => {
  const [id, setId] = React.useState(0);

  return (
    <>
      <Button type="primary" onClick={() => setId(i => i + 1)} css={{ marginBottom: 10 }}>
        依赖数组变化，重新请求渲染 {id}
      </Button>
      <ProForm onFinish={console.log}>
        <ProFormMemoSelect
          width="md"
          label="环境"
          name="memo_env1"
          memoKey="env"
          placeholder="请选择环境"
          request={request}
        />
        <ProFormMemoSelect
          width="md"
          label="环境2"
          name="memo_env2"
          memoKey="env"
          placeholder="请选择环境"
          request={request}
        />
        <ProFormMemoSelect
          width="md"
          label="依赖环境"
          name="memo_env3"
          placeholder="请选择环境"
          request={request}
          dependencies={[id]}
        />
      </ProForm>
    </>
  );
};

export default Demo;
