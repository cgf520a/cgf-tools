import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M837.312 128l-128 0L709.312 96c0-17.664-14.336-32-32-32s-32 14.336-32 32L645.312 128l-192 0L453.312 96c0-17.664-14.336-32-32-32s-32 14.336-32 32L389.312 128l-128 0c-70.656 0-128 57.344-128 128l0 576c0 70.656 57.344 128 128 128l576 0c70.656 0 128-57.344 128-128L965.312 256C965.312 185.344 908.032 128 837.312 128zM741.312 768l-384 0c-17.664 0-32-14.336-32-32s14.336-32 32-32l384 0c17.664 0 32 14.336 32 32S759.04 768 741.312 768zM741.312 576l-384 0c-17.664 0-32-14.336-32-32S339.648 512 357.312 512l384 0c17.664 0 32 14.336 32 32S759.04 576 741.312 576zM741.312 384l-384 0c-17.664 0-32-14.336-32-32S339.648 320 357.312 320l384 0c17.664 0 32 14.336 32 32S759.04 384 741.312 384z"
      p-id="8358"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
