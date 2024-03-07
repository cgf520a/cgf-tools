import React from 'react';
import { Input, Tag, Select } from 'antd';
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
      const { aProps } = props?.fieldProps || {};
      return <a {...aProps}>{text}</a>;
    },
    renderFormItem: (text, props) => <Input placeholder="请输入链接" {...props?.fieldProps} />,
  },
  phone: {
    render: (text, props) => {
      const { iconProps } = props.fieldProps as any;
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
  tags: {
    render: (text, props) => {
      const { tagProps } = props.fieldProps;
      const { keyField = 'value', labelField = 'label', ...others } = tagProps || {};

      return (
        <>
          {[text].flat(1).map(item => (
            <Tag key={typeof item === 'object' ? item[keyField] : item} {...others}>
              {typeof item === 'object' ? item[labelField] : item}
            </Tag>
          ))}
        </>
      );
    },
    renderFormItem: (text, props) => <Select mode="tags" {...props?.fieldProps} />,
  },
};

export default valueTypeMap;
