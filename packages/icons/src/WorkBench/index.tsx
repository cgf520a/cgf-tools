import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M849.237 136.533c48.26 0 87.382 39.193 87.382 87.54v456.85c0 48.346-39.122 87.54-87.382 87.54l-307.2-0.002v61.553h247.126v60.183H234.837v-60.183h247.126V768.46l-307.2 0.001c-48.26 0-87.382-39.193-87.382-87.54V224.073c0-48.347 39.122-87.54 87.382-87.54h674.474z m0 60.184H174.763c-15.081 0-27.307 12.248-27.307 27.356v456.85c0 15.108 12.226 27.355 27.307 27.355h674.474c15.081 0 27.307-12.247 27.307-27.356V224.073c0-15.108-12.226-27.356-27.307-27.356zM716.8 349.525l42.48 42.557L645.875 505.69c-37.324 37.392-97.837 37.392-135.16 0l-52.727-52.821c-13.863-13.889-36.34-13.889-50.203 0l-103.163 103.35-42.479-42.556 103.163-103.35c37.324-37.392 97.837-37.392 135.161 0l52.726 52.821c13.863 13.888 36.34 13.888 50.203 0L716.8 349.525z"
      fill="currentColor"
      p-id="4884"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
