import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M128 213.333333h768v512H128V213.333333z"
      fill="currentColor"
      p-id="10604"
    ></path>
    <path
      d="M85.333333 213.333333a42.666667 42.666667 0 0 1 42.666667-42.666666h768a42.666667 42.666667 0 0 1 42.666667 42.666666v512a42.666667 42.666667 0 0 1-42.666667 42.666667H128a42.666667 42.666667 0 0 1-42.666667-42.666667V213.333333z m85.333334 42.666667v426.666667h682.666666V256H170.666667zM298.666667 832h426.666666v85.333333H298.666667v-85.333333z"
      fill="currentColor"
      p-id="10605"
    ></path>
    <path
      d="M417.834667 375.168a42.666667 42.666667 0 0 1 60.330666 0L576 473.002667l85.333333-85.333334L721.664 448l-115.498667 115.498667a42.666667 42.666667 0 0 1-60.330666 0L448 465.664l-85.333333 85.333333L302.336 490.666667l115.498667-115.498667z"
      fill="#FFFFFF"
      p-id="10606"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
