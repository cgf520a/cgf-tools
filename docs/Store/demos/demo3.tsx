import React from 'react';
import { Button, Space } from 'antd';
import createStore from '@cgf-tools/store';
import type { Middleware, Store } from '@cgf-tools/store';

type State = {
  count: number;
};

const reducer = (store: Store<State>, action: { type: string; payload: any }) => {
  switch (action.type) {
    case 'INCREMENT':
      store.count++;
      break;
    case 'DECREMENT':
      store.count - 1;
      break;
  }
};

const logger: Middleware = ({ getState }) => {
  return next => action => {
    console.log('will change', getState(), action);
    const returnValue = next(action);
    console.log('state after change', getState(), action);
    return returnValue;
  };
};

createStore.applyMiddlewares<State>([logger], reducer);

const store = createStore<State>({
  count: 0,
});

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  const { count } = store;

  return (
    <Space>
      <Button type="primary" onClick={() => store.count++}>
        点击 {count}
      </Button>
    </Space>
  );
};

export default React.memo(Demo);
