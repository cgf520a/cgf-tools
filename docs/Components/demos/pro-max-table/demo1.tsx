import React from 'react';
import { ProMaxTable } from '@cgf-tools/pro-max-components';

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  return <ProMaxTable />;
};

export default React.memo(Demo);
