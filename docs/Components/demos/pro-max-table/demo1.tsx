import React from 'react';

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  return <div>Demo</div>;
};

export default React.memo(Demo);
