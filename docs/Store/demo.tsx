import React from 'react';
import { Button, Space } from 'antd';
import createStore from '@cgf-tools/store';

const store = createStore({
  count: 0,
  addCount: () => (store.count += 1),
  subCount: () => (store.count -= 1),
});

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  const { count, addCount, subCount } = store;

  return (
    <div>
      <p>{count}</p>
      <Space>
        <Button type="primary" onClick={() => addCount()}>
          增加
        </Button>
        <Button onClick={subCount}>减少</Button>
      </Space>
    </div>
  );
};

export default React.memo(Demo);
