import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M651.264 798.72c0-10.752-7.68-19.456-17.408-19.456H391.68c-9.728 0-17.408 8.704-17.408 19.456v77.824H201.216v58.368H824.32v-58.368H651.264V798.72zM902.144 89.6h-778.24c-32.256 0-58.368 26.112-58.368 58.368v544.768c0 32.256 26.112 58.368 58.368 58.368h778.24c32.256 0 58.368-26.112 58.368-58.368V147.968c0-32.256-26.112-58.368-58.368-58.368z m0 583.68c0 10.752-8.704 19.456-19.456 19.456H143.36c-10.752 0-19.456-8.704-19.456-19.456V167.424c0-10.752 8.704-19.456 19.456-19.456h739.328c10.752 0 19.456 8.704 19.456 19.456V673.28z m-199.68-37.376h105.472V329.728H702.464v306.176z m-167.936 0H640V235.52H534.528v400.384z m-315.904 0h105.472v-117.76H218.624v117.76z m147.456 0h104.96V423.936H366.08v211.968z"
      p-id="59560"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
