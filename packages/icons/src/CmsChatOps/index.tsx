import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M805.6832 258.17088h-284.09856V136.56064c28.71296-4.5056 50.70848-29.4912 50.70848-59.71968 0-33.3824-26.78784-60.45696-59.92448-60.45696-33.09568 0-59.88352 27.0336-59.88352 60.45696 0 30.26944 21.99552 55.296 50.66752 59.71968v121.6512H217.9072a27.77088 27.77088 0 0 0-27.648 27.89376v420.37248c0 15.44192 12.36992 27.93472 27.648 27.93472h175.67744v57.58976H333.6192a27.77088 27.77088 0 0 0-27.648 27.93472v151.552c0 15.44192 12.41088 27.93472 27.648 27.93472h355.61472a27.77088 27.77088 0 0 0 27.648-27.93472v-151.67488a27.77088 27.77088 0 0 0-27.648-27.93472h-59.92448v-57.67168h176.25088a27.77088 27.77088 0 0 0 27.648-27.93472V286.02368a27.60704 27.60704 0 0 0-27.52512-27.8528zM365.9776 556.72832c-33.09568 0-59.88352-27.07456-59.88352-60.49792 0-33.3824 26.78784-60.45696 59.88352-60.45696 33.13664 0 59.92448 27.0336 59.92448 60.45696a60.29312 60.29312 0 0 1-59.92448 60.49792z m292.864 0c-33.09568 0-59.88352-27.07456-59.88352-60.49792 0-33.3824 26.78784-60.45696 59.92448-60.45696s59.88352 27.0336 59.88352 60.45696-26.74688 60.49792-59.88352 60.49792zM20.48 496.2304c0 64.22528 51.56864 116.24448 115.17952 116.24448V379.98592C72.0896 379.98592 20.48 432.00512 20.48 496.2304z m867.86048-116.24448v232.48896c63.61088 0 115.17952-52.0192 115.17952-116.24448s-51.56864-116.24448-115.22048-116.24448z"
      fill="currentColor"
      p-id="80040"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
