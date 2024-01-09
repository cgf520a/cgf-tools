import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M563.2 883.2l288-166.4c12.8-6.4 19.2-19.2 19.2-32V352L582.4 518.4c-6.4 6.4-12.8 6.4-19.2 6.4v358.4z m326.4-633.6c32 19.2 51.2 51.2 51.2 83.2v352c0 38.4-19.2 70.4-51.2 83.2l-307.2 172.8c-32 19.2-70.4 19.2-96 0L179.2 768c-32-19.2-51.2-51.2-51.2-83.2V332.8c0-38.4 19.2-70.4 51.2-83.2l307.2-172.8c32-19.2 70.4-19.2 96 0l307.2 172.8z"
      fill="currentColor"
      p-id="4032"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
