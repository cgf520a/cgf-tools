import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M550.202472 498.862764h475.124166c0-267.769508-210.606682-485.749008-475.124166-498.862764z"
      p-id="39685"
    ></path>
    <path
      d="M500.130701 573.882369a25.076976 25.076976 0 0 1-25.006535-25.006535V25.006535C210.606682 38.120291 0 256.064571 0 523.869299c0 276.210681 223.92002 500.130701 500.130701 500.130701 259.328335 0 472.506111-197.399005 497.606567-450.117631z"
      p-id="39686"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
