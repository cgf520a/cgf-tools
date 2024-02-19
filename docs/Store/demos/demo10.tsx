import React, { Suspense } from 'react';
import { Select, Skeleton, Button } from 'antd';
import { use, selectorFamily } from '@cgf-tools/store';
import axios from 'axios';

const envQuery = selectorFamily({
  key: 'envSelectorFamily',
  get: id => async () => {
    const options = await axios.get(`/api/env.json?id=${id}`).then(res => res.data);
    await new Promise(resolve => {
      setTimeout(() => {
        resolve('ok');
      }, 5000);
    });
    return options;
  },
});

const EnvSelect = ({ id }: any) => {
  const uid = React.useMemo(() => id * 2, [id]);
  const options = use(envQuery(uid));
  return <Select placeholder="请选择环境" css={{ width: 200 }} options={options} />;
};

const Demo = () => {
  const [id, setId] = React.useState(0);

  return (
    <>
      <Button type="primary" onClick={() => setId(i => i + 1)}>
        加{id}
      </Button>
      <Suspense fallback={<Skeleton.Input active css={{ width: 200 }} />}>
        <EnvSelect id={id} />
      </Suspense>
    </>
  );
};

export default Demo;
