import React, { Suspense } from 'react';
import { Select, Skeleton } from 'antd';
import { selector, use } from '@cgf-tools/store';
import axios from 'axios';

const envQuery = selector({
  key: 'env',
  get: async () => {
    const options = await axios.get('/api/env.json').then(res => res.data);
    const wait = await new Promise(resolve => {
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
    <Suspense fallback={<Skeleton.Input active css={{ width: 200 }} />}>
      <EnvSelect />
    </Suspense>
  );
};

export default Demo;
