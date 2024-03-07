import type { ProMaxColumns } from '@cgf-tools/pro-max-components';

export interface InputItem {
  id: number;
}

export const columns: ProMaxColumns<InputItem>[] = [
  {
    dataIndex: 'id',
    title: 'ID',
    ellipsis: true,
    fixed: 'left',
    hideInSearch: true,
    hideInTable: true,
  },
  {
    dataIndex: 'money',
    title: '钱',
    valueType: 'money',
    showInAddForm: true,
    editFormItemType: 'ProFormMoney',
  },
  {
    dataIndex: 'numberInput',
    title: '数字输入框',
    valueType: 'numberInput',
    showInAddForm: true,
  },
  {
    dataIndex: 'link',
    title: '链接',
    valueType: 'link',
    fieldProps: {
      aProps: {
        href: 'https://www.baidu.com',
        target: '_blank',
      },
    },
  },
  {
    dataIndex: 'phone',
    title: '电话',
    valueType: 'phone',
    fieldProps: {
      iconProps: {
        style: {
          color: 'red',
        },
      },
    },
  },
  {
    dataIndex: 'tags',
    title: '标签',
    valueType: 'tags',
    fieldProps: {
      tagProps: {
        color: 'red',
        keyField: 'a',
        labelField: 'b',
      },
    },
  },
];

export const request = async (params: any) => {
  console.log(params);
  return {
    data: [
      {
        id: 1,
        money: 100,
        numberInput: 1,
        link: '百度',
        phone: '18845678901',
        tags: [
          {
            a: 1,
            b: 1,
          },
          {
            a: 2,
            b: 2,
          },
        ],
      },
    ],
    success: true,
    total: 10,
  };
};
