import React from 'react';
import { Button } from 'antd';
import createStore from '@cgf-tools/store';
import type { Middleware } from '@cgf-tools/store';

type State = {
  count: number;
};

const logger: Middleware = ({ getState }) => {
  return next =>
    ({ key, val }) => {
      console.log('will change', getState());
      const returnValue = next({
        key,
        val,
      });
      console.log('state after change', getState());
      return returnValue;
    };
};

const logger1: Middleware = () => {
  return next =>
    ({ key, val }) => {
      console.log('will change', key, val, 2);
      next({ key, val });
      console.log('state after change', key, val, 2);
      return {
        key: key,
        val: 255,
      };
    };
};

createStore.applyMiddlewares([logger, logger1]);

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
