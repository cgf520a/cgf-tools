import React from 'react';
import { DividerGroup } from '@cgf-tools/pro-max-components';

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  return (
    <DividerGroup title="基础使用">
      <div css={{ color: 'red' }}>abc</div>
    </DividerGroup>
  );
};

export default React.memo(Demo);
