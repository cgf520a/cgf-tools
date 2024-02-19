import React, { Suspense } from 'react';
import { Select, Skeleton, Button } from 'antd';
import { selector, use, refresh } from '@cgf-tools/store';
import axios from 'axios';

const envQuery = selector({
  key: 'envRefresh',
  get: async () => {
    const options = await axios.get('/api/env.json').then(res => res.data);
    await new Promise(resolve => {
      setTimeout(() => {
        resolve('ok');
      }, 5000);
    });
    return options;
  },
});

const EnvSelect = () => {
  const options = use(envQuery);
  return <Select placeholder="请选择环境" css={{ width: 200 }} options={options} />;
};

const Demo = () => {
  return (
    <>
      <Button type="primary" onClick={() => refresh('envRefresh')}>
        重新请求
      </Button>
      <Suspense fallback={<Skeleton.Input active css={{ width: 200 }} />}>
        <EnvSelect />
      </Suspense>
    </>
  );
};

export default Demo;
