import React from 'react';
import { Button, Space, Descriptions } from 'antd';
import { atom, selector, use } from '@cgf-tools/store';

const atomCount = atom({
  key: 'atom_count',
  default: 0,
});

const countSelector = selector({
  key: 'selector_count',
  get: ({ atom_count }) => {
    return atom_count * 2;
  },
});

const Demo = () => {
  const [count, setCount] = use(atomCount);
  const selectorCount = use(countSelector);

  return (
    <>
      <Space>
        <Button type="primary" onClick={() => setCount(count + 1)}>
          加1
        </Button>
        <Button type="primary" danger onClick={() => setCount(count - 1)}>
          减1
        </Button>
      </Space>
      <Descriptions column={1} css={{ marginTop: 10 }}>
        <Descriptions.Item label="atom">{count}</Descriptions.Item>
        <Descriptions.Item label="selector">{selectorCount}</Descriptions.Item>
      </Descriptions>
    </>
  );
};

export default Demo;
