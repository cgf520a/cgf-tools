import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M430.182912 452.352L24.576512 691.2A496.0256 496.0256 0 0 1 0.000512 536.3712C0.000512 283.5456 188.621312 75.6736 430.182912 51.2v401.152z m27.136 96.6144L870.400512 814.848C784.026112 941.2608 640.512512 1024 477.952512 1024c-176.7424 0-331.1104-97.8944-413.7984-243.456l393.1648-231.5776zM507.238912 237.4656l265.7792-153.8048 50.944 88.4736-265.7792 153.8048zM493.414912 83.712L581.939712 32.4608l51.0464 88.6272-88.5248 51.2512zM800.614912 646.912l88.5248-51.2512 51.0464 88.6272-88.5248 51.2512zM514.150912 416.768l354.4064-205.1072 50.8928 88.3712-354.4064 205.1072zM660.838912 544.6656l265.7792-153.8048 50.944 88.4736-265.7792 153.8048z"
      fill="currentColor"
      p-id="44898"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
