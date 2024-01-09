import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M595.1 347h-4V64H147v896h730V347H595.1zM242.7 213.3h299.2v119.5H242.7V213.3z m0 179.2h119.7v358.4H242.7V392.5z m538.6 480H242.7v-64h538.5v64z m0-179.2h-359v-64h359v64z m0-179.2h-359v-64h359v64zM664 64h-8.8v219H877v-6.4L664 64z"
      fill="currentColor"
      p-id="12348"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
