import React, { Suspense } from 'react';
import { Select, Skeleton, Button } from 'antd';
import { selector, use, atom } from '@cgf-tools/store';
import axios from 'axios';

const envAtom = atom({
  key: 'envCount',
  default: 0,
});

const envQuery = selector({
  key: 'envQuery',
  get: async store => {
    const { envCount } = store;
    console.log('envCount', envCount);
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
  return <Select placeholder="请选择环境" css={{ width: 200 }} options={options as any[]} />;
};

const Demo = () => {
  const [count, setCount] = use(envAtom);

  return (
    <>
      <Button
        type="primary"
        onClick={() => {
          setCount(c => c + 1);
          // refresh(envQuery.key);
        }}
      >
        增加 {count}
      </Button>
      <Suspense fallback={<Skeleton.Input active css={{ width: 200 }} />}>
        <EnvSelect />
      </Suspense>
    </>
  );
};

export default Demo;
