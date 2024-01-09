import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M832.5 69.7H191.4c-22.1 0-44.2 22.2-44.2 44.5v800.7c0 22.2 22.1 44.5 44.2 44.5h641.1c22.1 0 44.2-22.2 44.2-44.5V114.2c0-22.3-22.1-44.5-44.2-44.5zM624.7 817.1H293.1c-22.1 0-44.2-22.2-44.2-44.5 0-22.2 22.1-44.5 44.2-44.5h331.6c22.1 0 44.2 22.2 44.2 44.5 0 22.2-17.7 44.5-44.2 44.5z m101.7-164.6H293.1c-22.1 0-44.2-22.2-44.2-44.5 0-22.2 22.1-44.5 44.2-44.5h437.7c22.1 0 44.2 22.2 44.2 44.5 0 22.2-22.1 44.5-48.6 44.5z m53-284.7c0 8.9-13.3 17.8-22.1 8.9l-48.6-48.9-172.4 146.7c-8.8 8.9-22.1 8.9-35.4 0l-75.2-80.1c-8.8-8.9-26.5-8.9-35.4 0l-79.6 80.1c-17.7 13.3-39.8 13.3-53.1 0-13.3-13.3-13.3-40 0-53.4l132.6-133.5c8.8-8.9 26.5-8.9 35.4 0l79.6 80.1c8.8 13.3 22.1 13.3 31 4.4l115-97.9-39.8-40c-8.8-8.9-4.4-22.2 8.8-22.2h145.9c8.8 0 13.3 4.5 13.3 13.3v142.5z"
      p-id="9394"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
