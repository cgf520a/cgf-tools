import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M0 51.2a51.2 51.2 0 0 1 51.2-51.2h921.6a51.2 51.2 0 0 1 51.2 51.2v422.4h-307.456l-79.104 128-253.44-384-128 256H0V51.2z m640 780.8l128-256h256V972.8a51.2 51.2 0 0 1-51.2 51.2H51.2a51.2 51.2 0 0 1-51.2-51.2v-396.8h320l64-128 256 384z"
      fill="currentColor"
      p-id="8846"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
