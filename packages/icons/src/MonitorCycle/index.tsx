import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M429.76 291.52c21.76-6.08 44.8-9.6 68.48-9.6 72 0 136.32 30.72 182.08 79.36l-58.24 18.56 234.56 100.48 134.08-217.28-90.88 28.8c-81.6-136.64-230.72-228.16-401.28-228.16-40.32 0-79.68 5.76-117.12 15.36l117.12 90.24-68.8 122.24z"
      fill="currentColor"
      p-id="65818"
    ></path>
    <path
      d="M862.08 513.92l-124.8-53.44c6.72 22.4 10.24 46.4 10.24 71.04 0 71.36-30.08 135.36-78.08 180.8l-41.28-64.32-33.92 238.72 231.04 68.8-36.8-57.28c108.16-85.76 177.6-217.92 177.6-366.4 0-51.52-8.64-100.8-24-147.2l-80 129.28zM137.92 587.52l124.16 23.68c-8.32-24.96-13.12-51.84-13.12-79.68 0-75.2 33.6-142.72 86.4-188.48l10.88 53.12 122.56-219.52L269.76 23.04 288 113.92C135.36 190.72 30.4 348.8 30.4 531.52c0 77.44 19.2 150.08 52.16 214.4l55.36-158.4z"
      fill="currentColor"
      p-id="65819"
    ></path>
    <path
      d="M580.16 767.04c-25.6 8.96-53.12 14.08-81.92 14.08-70.72 0-134.08-29.44-179.52-76.48l75.84-43.84-238.72-45.44-80 229.44 50.88-29.44c85.44 111.68 219.84 184 371.52 184 74.88 0 145.28-17.92 208-49.28l-145.92-43.52 19.84-139.52z"
      fill="currentColor"
      p-id="65820"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
