import React from 'react';
import { ExportButton } from '@cgf-tools/pro-max-components';

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  return <ExportButton />;
};

export default React.memo(Demo);
