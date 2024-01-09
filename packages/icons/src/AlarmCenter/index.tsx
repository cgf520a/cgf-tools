import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M683.4 836.9c0 65.7-74.5 118.9-166.5 118.9s-166.5-53.2-166.5-118.9h333zM509.9 138.4h4.6c170.5 0 308.8 125.4 308.8 280.1v344H201.1V418.3c0-154.6 138.2-280.1 308.8-280.1v0.2z m253.7 348c-0.2-149.5-110.7-270.7-247.1-270.7h-4.2c-14.8 0.2-26.6 13.2-26.4 29 0 15.9 11.9 29 26.4 29h4.3c107.3 0 194.1 95.4 194.3 212.8 0 10.3 5.1 19.8 13.2 25 8.2 5.2 18.3 5.2 26.5 0 8-5.3 13.1-14.8 13-25.1zM163.7 778.8h690.7c3.9 0 7.5 1.7 10.2 4.7l15.4 17.6c3.4 3.8 4.3 9.5 2.3 14.3-1.9 4.8-6.4 8-11.3 8H156.9c-5.6 0-10.6-3.6-12.8-9.1-2.2-5.5-1.2-11.8 2.6-16.2l17-19.3z m454.1-603.7v0.4c0.1 6-221.5 5.8-221.4-0.4 4-62.5 52.4-111.1 110.7-111.1 58.4 0 106.8 48.6 110.7 111.1z m0 0"
      p-id="4062"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
