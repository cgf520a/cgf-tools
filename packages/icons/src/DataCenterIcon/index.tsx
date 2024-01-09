import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M847.5136 85.4016H176.4864A131.7376 131.7376 0 0 0 44.6464 217.1904V696.32a131.7888 131.7888 0 0 0 131.84 131.84H378.88l-10.5472 14.3872a61.44 61.44 0 0 0-11.9808 35.84 59.9552 59.9552 0 0 0 59.9552 59.904h191.6928a61.1328 61.1328 0 0 0 35.84-11.9808 60.2112 60.2112 0 0 0 11.9808-83.8656l-10.7008-14.08h202.24A131.7888 131.7888 0 0 0 979.3536 696.32V217.1904a131.7376 131.7376 0 0 0-131.84-131.7888zM763.648 504.832V624.64a35.84 35.84 0 0 1-71.68 0V504.832a35.84 35.84 0 1 1 71.68 0zM476.16 624.64V289.1264a35.84 35.84 0 0 1 71.68 0V624.64a35.84 35.84 0 0 1-71.68 0zM332.2368 384.9728V624.64a35.84 35.84 0 0 1-71.68 0V384.9728a35.84 35.84 0 0 1 71.68 0z"
      fill="currentColor"
      p-id="4240"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
