import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M298.39 469.33c8.38 0 170.67-0.42 170.67-0.42V298.67c0-94.26-76.41-170.67-170.67-170.67s-170.67 76.41-170.67 170.67 76.41 170.66 170.67 170.66z m0-256c47.05 0 85.33 38.28 85.33 85.33v85.13c-40.62 0.1-81.33 0.2-85.33 0.2-47.05 0-85.33-38.28-85.33-85.33-0.01-47.05 38.27-85.33 85.33-85.33zM895.89 298.67c0-94.26-76.41-170.67-170.67-170.67s-170.67 76.41-170.67 170.67v170.24s162.29 0.42 170.67 0.42c94.26 0 170.67-76.41 170.67-170.66z m-256 0c0-47.05 38.28-85.33 85.33-85.33s85.33 38.28 85.33 85.33S772.27 384 725.22 384c-4.01 0-44.71-0.1-85.33-0.2v-85.13zM128.11 725.39c0 94.23 76.38 170.61 170.61 170.61s170.61-76.38 170.61-170.61V555.2s-162.24-0.42-170.61-0.42c-94.22 0-170.61 76.39-170.61 170.61z m255.89 0c0 47.02-38.25 85.28-85.28 85.28s-85.28-38.25-85.28-85.28 38.25-85.28 85.28-85.28c4.01 0 44.68 0.1 85.28 0.2v85.08zM725.61 554.67c-8.37 0-170.67 0.42-170.67 0.42v170.24c0 94.26 76.41 170.67 170.67 170.67 94.26 0 170.67-76.41 170.67-170.67 0-94.25-76.41-170.66-170.67-170.66z m0 256c-47.05 0-85.33-38.28-85.33-85.33V640.2c40.62-0.1 81.33-0.2 85.33-0.2 47.05 0 85.33 38.28 85.33 85.33 0.01 47.06-38.27 85.34-85.33 85.34z"
      fill="currentColor"
      p-id="87342"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
