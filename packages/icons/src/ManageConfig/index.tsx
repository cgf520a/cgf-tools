import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M371.646 682.714h463.361v58.711h-463.361v-58.711z"
      fill="currentColor"
      p-id="7233"
    ></path>
    <path
      d="M371.646 574.67h463.361v58.713h-463.361v-58.713z"
      fill="currentColor"
      p-id="7234"
    ></path>
    <path
      d="M940.342 144.753h-856.524c-6.697 0-12.098 5.462-12.098 12.33v717.745c0 6.812 5.398 12.329 12.098 12.329h856.524c6.694 0 12.098-5.457 12.098-12.329v-717.745c-0.001-6.81-5.406-12.33-12.098-12.33zM893.725 828.448h-763.284v-507.855l763.284 1.363v506.492z"
      fill="currentColor"
      p-id="7235"
    ></path>
    <path
      d="M373.009 453.001h461.998v58.716h-461.998v-58.716z"
      fill="currentColor"
      p-id="7236"
    ></path>
    <path
      d="M186.197 453.905h92.289v58.082h-92.289v-58.082z"
      fill="currentColor"
      p-id="7237"
    ></path>
    <path
      d="M186.197 576.003h92.289v58.082h-92.289v-58.082z"
      fill="currentColor"
      p-id="7238"
    ></path>
    <path
      d="M186.197 682.671h92.289v58.082h-92.289v-58.082z"
      fill="currentColor"
      p-id="7239"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
