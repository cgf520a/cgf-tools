import React from 'react';
import createStore from '@cgf-tools/store';
import type { Store } from '@cgf-tools/store';

type State = {
  count: number;
};

function logger(store: any) {
  return next => state => {};
}

createStore.applyMiddlewares([logger]);

createStore<State>({
  count: 0,
});

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  return <div>Demo</div>;
};

export default React.memo(Demo);
