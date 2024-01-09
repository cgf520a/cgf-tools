import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M920.2 703.7h-56.6V577.4c0-34.9-29.8-63.3-66.3-63.3h-255V383.8H633c22 0 40-18 40-40v-240c0-22-18-40-40-40H393c-22 0-40 18-40 40v240c0 22 18 40 40 40h87.3v130.3H226.8c-36.6 0-66.3 28.4-66.3 63.3v126.3H103c-22 0-40 18-40 40v176c0 22 18 40 40 40h176c22 0 40-18 40-40v-176c0-22-18-40-40-40h-56.6V577.8c0.4-0.6 1.9-1.7 4.3-1.7h253.5v127.6h-56.3c-22 0-40 18-40 40v176c0 22 18 40 40 40h176c22 0 40-18 40-40v-176c0-22-18-40-40-40h-57.8V576.1H797c2.4 0 3.9 1.1 4.3 1.7v125.9h-57.5c-22 0-40 18-40 40v176c0 22 18 40 40 40h176c22 0 40-18 40-40v-176c0.4-22-17.6-40-39.6-40z"
      fill="currentColor"
      p-id="88715"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
