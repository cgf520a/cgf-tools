import React from 'react';
import { Button, Space } from 'antd';
import { atom, use } from '@cgf-tools/store';

const countAtom = atom({
  key: 'count',
  default: 0,
});

const Demo = () => {
  const [count, setCount] = use(countAtom);

  return (
    <>
      <Space>
        <Button type="primary" onClick={() => setCount(count + 1)}>
          加1
        </Button>
        <Button type="primary" onClick={() => setCount(c => c + 2)}>
          回调加2
        </Button>
        <Button type="primary" danger onClick={() => setCount(count - 1)}>
          减1
        </Button>
      </Space>
      <p>{count}</p>
    </>
  );
};

export default Demo;
