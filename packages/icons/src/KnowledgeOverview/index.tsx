import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M262.4 825.6h595.2c12.8 0 25.6-12.8 25.6-25.6V140.8c0-57.6-38.4-102.4-96-108.8v204.8c0 19.2-19.2 25.6-32 19.2l-64-38.4c-6.4-6.4-12.8-6.4-19.2 0l-64 38.4c-12.8 6.4-32 0-32-19.2V38.4 25.6H249.6c-57.6 0-108.8 51.2-108.8 108.8v736c0 57.6 51.2 108.8 108.8 108.8h569.6c19.2 0 38.4-6.4 51.2-12.8 25.6-12.8 12.8-51.2-12.8-51.2H256c-32 0-51.2-25.6-51.2-57.6 6.4-19.2 32-32 57.6-32z"
      p-id="69616"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
