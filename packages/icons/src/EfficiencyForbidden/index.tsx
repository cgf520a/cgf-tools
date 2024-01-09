import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M911.27 723.79l-325.45-573c-13.71-40.63-57.14-62.26-97.15-48.34-22.42 7.81-39.92 25.58-47.61 48.34l-325.35 573c-40.01 69.87-7.69 126.67 72.33 126.67h650.8c80.02 0 112.44-56.71 72.43-126.67z m-442.52-410.4c23.99-25.11 63.54-25.67 88.17-1.22 0.47 0.37 0.84 0.85 1.21 1.22a67.715 67.715 0 0 1 17.69 47.77c0 16.17-24.73 136.83-32.32 224.66h-58.81c-7.04-87.83-33.53-208.49-33.53-224.66-0.46-17.68 5.83-34.8 17.59-47.77z m88.82 418.2c-24.73 23.79-63.54 23.79-88.26 0-24.36-24.73-24.36-64.89 0.09-89.53 24.36-24.73 63.9-24.73 88.17 0.1 24.36 24.64 24.36 64.7 0 89.43z m0 0"
      p-id="43760"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
