import React from 'react';
import Icon from '@ant-design/icons';
import { CustomIconComponentProps } from '@ant-design/icons/lib/components/Icon';

const CustomSvg = () => (
  <svg viewBox="0 0 1024 1024" width="1em" height="1em" fill="currentColor">
    <path
      d="M640 320 640 64 64 64l0 960 512 0 64 0 320 0L960 896 960 704l0-64L960 448 960 320 640 320zM576 960 128 960 128 128l448 0 0 192L576 960zM896 832 768 832l0-64 128 0L896 832zM896 576 768 576l0-64 128 0L896 576zM704 448l0 192 192 0 0 64L704 704l0 192 192 0 0 64L640 960 640 384l256 0 0 64L704 448z"
      p-id="28279"
    ></path>
    <path
      d="M192 384l320 0L512 192 192 192 192 384zM256 256l192 0 0 64L256 320 256 256z"
      p-id="28280"
    ></path>
    <path
      d="M192 640l320 0L512 448 192 448 192 640zM256 512l192 0 0 64L256 576 256 512z"
      p-id="28281"
    ></path>
    <path
      d="M192 896l320 0L512 704 192 704 192 896zM256 768l192 0 0 64L256 832 256 768z"
      p-id="28282"
    ></path>
  </svg>
);

const CustomIcon = (props: Partial<CustomIconComponentProps>) => {
  return <Icon component={CustomSvg} {...props} />;
};

export default React.memo(CustomIcon);
