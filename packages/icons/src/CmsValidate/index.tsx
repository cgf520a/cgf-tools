import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M192 704m21.333333 0l341.333334 0q21.333333 0 21.333333 21.333333l0 85.333334q0 21.333333-21.333333 21.333333l-341.333334 0q-21.333333 0-21.333333-21.333333l0-85.333334q0-21.333333 21.333333-21.333333Z"
      fill="currentColor"
      p-id="85189"
    ></path>
    <path
      d="M192 192m21.333333 0l469.333334 0q21.333333 0 21.333333 21.333333l0 85.333334q0 21.333333-21.333333 21.333333l-469.333334 0q-21.333333 0-21.333333-21.333333l0-85.333334q0-21.333333 21.333333-21.333333Z"
      fill="currentColor"
      p-id="85190"
    ></path>
    <path
      d="M868.266667 384H219.733333a28.053333 28.053333 0 0 0-27.733333 28.48v199.04A28.053333 28.053333 0 0 0 219.733333 640h648.533334a28.053333 28.053333 0 0 0 27.733333-28.48V412.48A28.053333 28.053333 0 0 0 868.266667 384z m-13.866667 179.2L821.333333 597.333333l-50.133333-51.2-49.92 51.2-33.28-34.133333 49.92-51.2-49.92-51.2 33.28-34.133333 49.92 51.2L821.333333 426.666667l33.28 34.133333-50.133333 51.2z"
      fill="currentColor"
      p-id="85191"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
