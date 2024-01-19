import React, { useContext } from 'react';
import { Input } from 'antd';
import { ProTable, ProProvider } from '@ant-design/pro-components';
import { ProMaxProvider, ProMaxProviderContext } from '@cgf-tools/pro-max-components';
import type { ProColumns } from '@ant-design/pro-components';
import type { ProMaxProviderProps } from '@cgf-tools/pro-max-components';

const columns: ProColumns<any, 'numberInput' | 'link'>[] = [
  {
    title: '数字文本',
    dataIndex: 'input',
    valueType: 'numberInput',
  },
  {
    title: '链接',
    dataIndex: 'link',
    valueType: 'link',
  },
  {
    title: '操作',
    valueType: 'option',
    key: 'option',
    render: (text, record, _, action) => [
      <a
        key="editable"
        onClick={() => {
          action?.startEditable?.(record.id);
        }}
      >
        编辑
      </a>,
      <a href={record.url} target="_blank" rel="noopener noreferrer" key="view">
        查看
      </a>,
    ],
  },
];

const Table = () => {
  const values = useContext<ProMaxProviderProps>(ProMaxProviderContext);
  const v = useContext(ProProvider);

  return (
    <ProProvider.Provider
      value={{
        ...v,
        ...values,
      }}
    >
      <ProTable
        columns={columns}
        rowKey="id"
        dataSource={[
          {
            id: 1,
            link: '百度',
            input: '18888888888',
          },
        ]}
        pagination={false}
        search={false}
        options={false}
      />
    </ProProvider.Provider>
  );
};

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  return (
    <ProMaxProvider
      valueTypeMap={{
        link: {
          render: text => <a>{text}</a>,
          renderFormItem: (text, props) => (
            <Input placeholder="请输入链接" {...props?.fieldProps} />
          ),
        },
      }}
    >
      <Table />
    </ProMaxProvider>
  );
};

export default React.memo(Demo);
