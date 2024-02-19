import React from 'react';
import { Descriptions } from 'antd';
import { ProField } from '@ant-design/pro-components';
import { labelStyle } from './common';

export interface ExpandedRowProps {
  record: any;
  columns?: any[];
}

const ExpandedRow: React.FC<ExpandedRowProps> = ({ record, columns = [] }: ExpandedRowProps) => {
  return (
    <div css={{ paddingLeft: 30 }}>
      <Descriptions column={1} labelStyle={labelStyle}>
        {columns
          .filter(_ => !_.hideInExpandable)
          .map(item => {
            return (
              <Descriptions.Item label={item.title as string} key={item.dataIndex as string}>
                {item?.renderExpandableItem ? (
                  item?.renderExpandableItem(record[item.dataIndex], record)
                ) : item?.render ? (
                  item?.render(record[item.dataIndex], record)
                ) : (
                  <ProField
                    text={record[item.dataIndex]}
                    mode="read"
                    valueType={item?.valueType}
                    valueEnum={item?.valueEnum}
                  />
                )}
              </Descriptions.Item>
            );
          })}
      </Descriptions>
    </div>
  );
};

export default React.memo(ExpandedRow);
