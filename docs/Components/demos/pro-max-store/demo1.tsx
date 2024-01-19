import React from 'react';
import { Space, Button } from 'antd';
import { ProMaxStore, ProMaxStoreContext } from '@cgf-tools/pro-max-components';

type State = {
  count: number;
};

const initialState: State = {
  count: 0,
};

const useCount = () => {
  const store = React.useContext<State>(ProMaxStoreContext);
  const { count } = store;

  const increment = React.useCallback(() => {
    store.count += 1;
  }, [store]);

  return {
    count,
    increment,
  };
};

const Test = () => {
  const { count, increment } = useCount();

  return (
    <Space>
      <span>{count}</span>
      <Button type="primary" onClick={increment}>
        +1
      </Button>
    </Space>
  );
};

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  return (
    <ProMaxStore<State> initialState={initialState}>
      <Test />
    </ProMaxStore>
  );
};

export default React.memo(Demo);
