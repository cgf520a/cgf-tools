import React, { Suspense } from 'react';
import { Select, Skeleton } from 'antd';
import { selector, use } from '@cgf-tools/store';
import axios from 'axios';

const envQuery = selector({
  key: 'envPromise',
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
  const promise = use(envQuery);

  console.log(promise);

  if (promise?.status === 'fulfilled') {
    return <Select placeholder="请选择环境" css={{ width: 200 }} options={promise.value} />;
  } else {
    return 'loading...';
  }
};

const Demo = () => {
  return <EnvSelect />;
};

export default Demo;
