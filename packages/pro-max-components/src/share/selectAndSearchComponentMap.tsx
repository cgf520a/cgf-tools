import React from 'react';
import { ProFormSelect, ProFormTreeSelect, ProFormCascader } from '@ant-design/pro-components';

export type ProFormSelectProps = Parameters<typeof ProFormSelect>[0];
export type ProFormTreeSelectProps = Parameters<typeof ProFormTreeSelect>[0];
export type ProFormCascaderProps = Parameters<typeof ProFormCascader>[0];

const SelectAndSearchComponentMap: {
  [key: string]: React.ReactElement;
} = {
  select: <ProFormSelect />,
  treeSelect: <ProFormTreeSelect />,
  cascader: <ProFormCascader />,
};

export default SelectAndSearchComponentMap;
