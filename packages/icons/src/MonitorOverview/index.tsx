import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M618.667 768a21.333 21.333 0 1 1 0 42.667H405.333a21.333 21.333 0 1 1 0-42.667h213.334z m128-85.333a21.333 21.333 0 1 1 0 42.666H277.333a21.333 21.333 0 1 1 0-42.666h469.334z m64-469.334A42.667 42.667 0 0 1 853.333 256v341.333A42.667 42.667 0 0 1 810.667 640H213.333a42.667 42.667 0 0 1-42.666-42.667V256a42.667 42.667 0 0 1 42.666-42.667h597.334z m-448 87.083l-7.467 1.493a128.043 128.043 0 1 0 153.557 153.6l1.494-7.509H362.667V300.416z m320 126.25h-128v42.667h128v-42.666zM405.333 300.46V405.29h104.875a128.128 128.128 0 0 0-96.896-103.254l-7.936-1.578zM768 341.333H554.667V384H768v-42.667z"
      p-id="59717"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
