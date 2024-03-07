import React from 'react';
import { Button, Popconfirm } from 'antd';
import { useOpen, useMode, useEditRecord } from './hooks';
import { useMemoizedFn } from 'ahooks';

import type { ButtonProps } from 'antd';

export interface ActionProps {
  record?: any;
  width?: number | string;
  /**
   * 点击修改时转换record的值,返回值用于设置表单，不设置直接使用record
   */
  transformRecord?: (record: any, formOptions: any) => any;
  /**
   * 配置则开启编辑功能
   */
  editButtonProps?: ButtonProps;
  /**
   * 配置则开启删除功能
   */
  deleteButtonProps?: ButtonProps;
  /**
   * 更多操作
   */
  moreActions?: React.ReactNode[] | ((record: any) => React.ReactNode[]);
  /**
   * 默认开启修改和删除功能，配置关闭
   */
  hideEdit?: boolean;
  hideDelete?: boolean;
  /**
   * 内置的不想要，使用renderActions覆盖，也可以直接在columns里面设置，不配置rowActionsProps不显示操作栏
   */
  renderActions?: (record: any) => React.ReactNode;
  /**
   * 编辑按钮被点击，在transformRecord满足不了需求时使用，用来设置不是数据驱动的逻辑
   */
  onEditClick?: (record: any) => void;
}

const Action: React.FC<ActionProps> = ({
  record,
  editButtonProps,
  deleteButtonProps,
  moreActions,
  hideEdit,
  hideDelete,
  renderActions,
}: ActionProps) => {
  const { setOpen } = useOpen();
  const { setMode } = useMode();
  const { setEditRecord } = useEditRecord();

  const handleEdit = useMemoizedFn(() => {
    setMode('edit');
    setEditRecord(record);
    setOpen(true);
  });

  return renderActions ? (
    <>{renderActions(record)}</>
  ) : (
    <>
      {!hideEdit && (
        <Button
          size="small"
          type="link"
          css={{ color: '#00b96b' }}
          onClick={handleEdit}
          {...editButtonProps}
        >
          修改
        </Button>
      )}
      {!hideDelete && (
        <Popconfirm
          title="删除当前行"
          description="你确认要删除当前行吗?"
          okText="确认"
          cancelText="取消"
          // onConfirm={handleDelete}
        >
          <Button size="small" type="link" danger {...deleteButtonProps}>
            删除
          </Button>
        </Popconfirm>
      )}
      {typeof moreActions === 'function' ? moreActions(record) : moreActions}
    </>
  );
};

export default React.memo(Action);
