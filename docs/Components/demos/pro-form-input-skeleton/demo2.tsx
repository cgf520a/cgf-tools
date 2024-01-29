import React from 'react';
import { ProFormInputSuspense } from '@cgf-tools/pro-max-components';
import { ProFormSelect } from '@ant-design/pro-components';

let promiseStatus = 'pending';
let data: any[] = [];
const promise = new Promise(resolve => {
  setTimeout(() => {
    resolve(true);
    data = [
      {
        label: '测试1',
        value: '1',
      },
      {
        label: '测试2',
        value: '2',
      },
    ];
    promiseStatus = 'resolved';
  }, 2000);
});

const getData = () => {
  if (promiseStatus === 'resolved') {
    return data;
  }
  throw promise;
};

const Select = () => {
  const options = getData();

  return <ProFormSelect label="异步取数据" width="md" options={options} />;
};

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  return (
    <ProFormInputSuspense width="md" label="异步取数据">
      <Select />
    </ProFormInputSuspense>
  );
};

export default React.memo(Demo);
