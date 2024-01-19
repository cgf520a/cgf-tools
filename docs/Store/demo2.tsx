import React from 'react';
import { Button } from 'antd';
import logger from 'redux-logger';
import createStore from '@cgf-tools/store';

type State = {
  count: number;
};

createStore.applyMiddlewares([logger as any]);

const store = createStore<State>({
  count: 0,
});

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  const { count } = store;

  return (
    <Button type="primary" onClick={() => store.count++}>
      点击 {count}
    </Button>
  );
};

export default React.memo(Demo);
