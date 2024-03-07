import React from 'react';
import { message } from 'antd';
import { ProMaxTable } from '@cgf-tools/pro-max-components';
import { columns, request } from './columns';
import { useMemoizedFn } from 'ahooks';
// import services from '@/services/devops';

import type { ProMaxTableRef } from '@cgf-tools/pro-max-components';

const { useEditRecord, useOptionsStoreRef } = ProMaxTable.hooks;

// const { addClue, updateClue } = services.SemController;

const Table = React.memo(() => {
  const ref = React.useRef<ProMaxTableRef>(null);
  const { editRecord } = useEditRecord();
  const optionsStoreRef = useOptionsStoreRef();

  const handleSubmit = useMemoizedFn(async (values: any, mode) => {
    // 将head_id转换为数字
    values.head_id = values?.head_id ? parseInt(values?.head_id as string) : undefined;
    // 将platform_id转换为数字
    values.platform_id = parseInt(values?.platform_id as string);
    // 将org_id转换为数字
    values.org_id = parseInt(values?.org_id as string);
    if (mode === 'edit') {
      // await updateClue({
      //   ...values,
      //   id: editRecord?.id,
      // });
    } else {
      // await addClue(values);
    }
    message.success(mode === 'edit' ? '修改成功' : '新增成功！');
    ref.current?.refresh();
    return true;
  });

  const rowActionsProps = React.useMemo(
    () => ({
      width: 100,
      hideDelete: true,
      onEditClick: (record: any) => {
        // optionsStoreRef?.current?.['head_id']([
        //   {
        //     label: record.head.nickname,
        //     value: record.head.id,
        //   },
        // ]);
      },
      transformRecord: (record: any) => ({
        ...record,
        platform_id: record?.platform_id?.toString(),
        org_id: record?.org_id?.toString(),
      }),
    }),
    [optionsStoreRef]
  );

  return (
    <ProMaxTable
      ref={ref}
      useProMaxTableContainer
      columns={columns}
      rowKey="id"
      request={request}
      pagination={{
        pageSize: 20,
        showSizeChanger: true,
        showPrevNextJumpers: true,
        showQuickJumper: true,
      }}
      scroll={{ x: 1300 }}
      search={{
        showHiddenNum: true,
      }}
      addButtonProps={{
        children: '新增线索',
      }}
      onEditFormSubmit={handleSubmit}
      editFormContainerProps={{
        width: '680px',
      }}
      rowActionsProps={rowActionsProps}
    />
  );
});

export interface DemoProps {}

const Demo: React.FC<DemoProps> = () => {
  return (
    <ProMaxTable.Container>
      <Table />
    </ProMaxTable.Container>
  );
};

export default React.memo(Demo);
