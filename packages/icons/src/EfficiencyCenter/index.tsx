import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M328 512l81.6 108.8a32 32 0 0 1-51.2 38.4l-96-128a32 32 0 0 1 0-38.4l96-128a32 32 0 1 1 51.2 38.4L328 512zM710.4 620.8a32 32 0 0 0 51.2 38.4l96-128a32 32 0 0 0 0-38.4l-96-128a32 32 0 1 0-51.2 38.4l81.6 108.8-81.6 108.8zM559.232 646.944a32 32 0 0 1-62.464-13.888l64-288a32 32 0 0 1 62.464 13.888l-64 288z"
      fill="currentColor"
      p-id="30497"
    ></path>
    <path
      d="M874.56 739.904a32 32 0 1 1 41.984 48.32l-220.48 195.936a32 32 0 0 1-20.96 7.84H195.04C140.16 992 96 946.624 96 891.072V132.928C96 77.376 140.16 32 195.04 32h633.92C883.84 32 928 77.376 928 132.928v134.976a32 32 0 0 1-64 0V132.928C864 112.32 848.096 96 828.96 96H195.04C175.904 96 160 112.32 160 132.928v758.144C160 911.68 175.904 928 195.04 928h468.096l211.456-188.096z"
      fill="currentColor"
      p-id="30498"
    ></path>
    <path
      d="M928 763.2a32 32 0 0 1-64 0V672a32 32 0 0 1 64 0v91.2z"
      fill="currentColor"
      p-id="30499"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
