import React from 'react';
import { ImportButton } from '@cgf-tools/pro-max-components';

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  return <ImportButton importTemplateUrl="/" />;
};

export default React.memo(Demo);
