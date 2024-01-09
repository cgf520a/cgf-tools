import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M225.792 387.072a358.4 358.4 0 0 1 25.088-67.584 346.624 346.624 0 0 1 165.888-161.792l-43.52-93.184a452.608 452.608 0 0 0-256 327.68L51.2 395.264l133.12 207.872L297.984 384zM614.4 784.896a413.696 413.696 0 0 1-71.168 12.288 353.792 353.792 0 0 1-223.232-62.464L262.656 819.2a452.096 452.096 0 0 0 409.6 55.808l36.864 57.344 113.664-219.136-246.784 11.264zM814.08 153.6l31.232-60.928-246.784 9.728 133.632 209.408 32.768-64a338.944 338.944 0 0 1 46.08 55.296A347.136 347.136 0 0 1 870.4 527.872l102.4 9.216A453.632 453.632 0 0 0 814.08 153.6z"
      p-id="67681"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
