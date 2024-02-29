import React from 'react';
import { Input } from 'antd';
import { NumberInput } from '../ProFormNumberInput';
import { PhoneIcon } from '@cgf-tools/icons';

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
  phone: {
    render: (text, props) => {
      const { iconProps } = props as any;
      return (
        <span css={{ display: 'flex', alignItems: 'center' }}>
          <PhoneIcon {...iconProps} />
          {text}
        </span>
      );
    },
    renderFormItem: (text, props) => (
      <NumberInput
        placeholder={props?.placeholder}
        {...props?.fieldProps}
        maxLength={11}
        minLength={11}
      />
    ),
  },
};

export default valueTypeMap;
