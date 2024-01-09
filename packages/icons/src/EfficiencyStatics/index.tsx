import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M518.217143 432.64V73.142857A73.142857 73.142857 0 0 1 603.428571 1.097143 512 512 0 0 1 1022.902857 420.571429 73.142857 73.142857 0 0 1 950.857143 505.782857H591.36a73.142857 73.142857 0 0 1-73.142857-73.142857z"
      fill="currentColor"
      p-id="39067"
    ></path>
    <path
      d="M493.714286 566.857143h340.297143a73.142857 73.142857 0 0 1 73.142857 85.577143A457.142857 457.142857 0 1 1 371.565714 117.76a73.142857 73.142857 0 0 1 85.577143 73.142857V530.285714a36.571429 36.571429 0 0 0 36.571429 36.571429z"
      fill="currentColor"
      p-id="39068"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
