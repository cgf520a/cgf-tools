import React from 'react';
import { Input } from 'antd';
import { NumberInput } from '../ProFormNumberInput';

import type { ProRenderFieldPropsType } from '@ant-design/pro-components';

const valueTypeMap: Record<string, ProRenderFieldPropsType> = {
  numberInput: {
    render: text => text,
    renderFormItem: (text, props) => {
      return <NumberInput placeholder={props?.placeholder} {...props?.fieldProps} />;
    },
  },
  link: {
    render: (text, props) => {
      const { href, target } = props as React.AnchorHTMLAttributes<HTMLAnchorElement>;
      return (
        <a href={href} target={target}>
          {text}
        </a>
      );
    },
    renderFormItem: (text, props) => <Input placeholder="请输入链接" {...props?.fieldProps} />,
  },
};

export default valueTypeMap;
