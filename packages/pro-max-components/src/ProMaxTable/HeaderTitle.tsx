import React from 'react';
import { Space, Button } from 'antd';
import { PlusOutlined } from '@ant-design/icons';
import type { ButtonProps } from 'antd';
import { useMemoizedFn } from 'ahooks';
import { useOpen } from './hooks';

export interface HeaderTitleProps {
  addButtonProps?: ButtonProps;
  headerTitle?: React.ReactNode;
  editFormType?: 'modal' | 'drawer';
  moreButton?: React.ReactNode[];
}

const HeaderTitle: React.FC<HeaderTitleProps> = ({
  headerTitle,
  addButtonProps,
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
      {moreButton}
    </Space>
  );
};

export default React.memo(HeaderTitle);
