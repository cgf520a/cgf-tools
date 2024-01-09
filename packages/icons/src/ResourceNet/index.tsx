import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M0 0m320 0l384 0q320 0 320 320l0 384q0 320-320 320l-384 0q-320 0-320-320l0-384q0-320 320-320Z"
      fill="currentColor"
      p-id="46012"
    ></path>
    <path
      d="M644 360a112 112 0 0 0-222.96-14.48A99.28 99.28 0 0 0 404 344a104 104 0 0 0 0 208h240a96 96 0 0 0 0-192z"
      fill="#FFFFFF"
      p-id="46013"
    ></path>
    <path d="M504 544h32v80h-32z" fill="#FFFFFF" p-id="46014"></path>
    <path d="M312 620h424v24H312z" fill="#FFFFFF" p-id="46015"></path>
    <path
      d="M322.64 674.64H237.36V589.36h85.28z m-64-21.28h42.72v-42.72h-42.72zM818.64 674.64H733.36V589.36h85.28z m-64-21.28h42.72v-42.72h-42.72z"
      fill="#FFFFFF"
      p-id="46016"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
