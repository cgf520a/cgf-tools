import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M204.8 85.333333H140.8c-30.72 0-55.466667 23.04-55.466667 51.2v750.933334c0 28.16 24.746667 51.2 55.466667 51.2h64V85.333333zM883.2 85.333333h-64v238.08L699.733333 204.8l-119.466666 119.466667V85.333333H273.066667v853.333334h610.133333c30.72 0 55.466667-23.04 55.466667-51.2V136.533333c0-28.16-24.746667-51.2-55.466667-51.2z m-64 597.333334H392.533333v-68.266667h426.666667v68.266667z m0-170.666667H392.533333v-68.266667h426.666667v68.266667z"
      fill="currentColor"
      p-id="71670"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
