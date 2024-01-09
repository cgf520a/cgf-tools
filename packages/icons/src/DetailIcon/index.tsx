import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M298.666667 341.333333h384v42.666667H298.666667v-42.666667z m0 128h298.666666v42.666667H298.666667v-42.666667z m0 128h298.666666v42.666667H298.666667v-42.666667zM170.666667 128h682.666666v554.666667h42.666667V106.517333c0-11.52-9.557333-21.184-21.333333-21.184H149.333333c-11.626667 0-21.333333 9.557333-21.333333 21.376v810.581334C128 929.066667 137.557333 938.666667 149.333333 938.666667h490.666667v-42.666667H170.666667V128z m469.333333 576.042667c0-11.797333 9.728-21.376 21.376-21.376H896L640 938.666667V704.042667z m153.002667 21.290666H682.666667v110.336L793.002667 725.333333z"
      fill="currentColor"
      p-id="10488"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
