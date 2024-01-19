import React from 'react';
import { Space, Button } from 'antd';
import {
  PlusOutlined,
  ExportOutlined,
  ImportOutlined,
} from '@ant-design/icons';
import type { ButtonProps } from 'antd';
import { useMemoizedFn } from 'ahooks';
import { useOpen } from './hooks';

export interface HeaderTitleProps {
  addButtonProps?: ButtonProps;
  importButtonProps?: ButtonProps;
  exportButtonProps?: ButtonProps;
  headerTitle?: React.ReactNode;
  editFormType?: 'modal' | 'drawer';
  moreButton?: React.ReactNode[];
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  headerTitle,
  addButtonProps,
  exportButtonProps,
  importButtonProps,
  moreButton,
}: HeaderTitleProps) => {
  const { setOpen } = useOpen();

  const handleAdd = useMemoizedFn(() => {
    setOpen(true, 'add');
  });

  return (
    <Space>
      {headerTitle}
      {addButtonProps && (
        <Button
          type="primary"
          icon={<PlusOutlined />}
          onClick={handleAdd}
          {...addButtonProps}
        >
          {addButtonProps.children || '新增'}
        </Button>
      )}
      {importButtonProps && (
        <Button icon={<ImportOutlined />} {...importButtonProps}>
          {importButtonProps.children || '导入'}
        </Button>
      )}
      {exportButtonProps && (
        <Button icon={<ExportOutlined />} {...importButtonProps}>
          {exportButtonProps.children || '导出'}
        </Button>
      )}
      {moreButton}
    </Space>
  );
};

export default React.memo(HeaderTitle);
