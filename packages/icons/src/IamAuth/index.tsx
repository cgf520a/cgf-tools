import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M928.612599 95.57028a325.17778 325.17778 0 0 0-523.501496 370.143341l-383.852354 383.852354a72.018013 72.018013 0 0 0 0 102.177841L73.352997 1002.741343a72.018013 72.018013 0 0 0 102.177841 0L329.254566 847.920893l19.192618 19.192618a73.114734 73.114734 0 0 0 102.177841 0l51.180314-51.180314a73.114734 73.114734 0 0 0 0-102.177841L482.978295 694.928312l75.490963-75.490963A325.17778 325.17778 0 0 0 928.612599 95.57028zM777.447886 402.469376a109.672101 109.672101 0 1 1-2.741802-155.186023 109.672101 109.672101 0 0 1 2.741802 155.186023z"
      fill="currentColor"
      p-id="92704"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
