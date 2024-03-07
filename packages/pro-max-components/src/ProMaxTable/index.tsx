import React, { useMemo, useContext } from 'react';
import { App } from 'antd';
import { ProTable, ProProvider } from '@ant-design/pro-components';
import { useMemoizedFn } from 'ahooks';
import ExpandedRow from './ExpandedRow';
import useUrlState from '@ahooksjs/use-url-state';
import { useRequest } from 'ahooks';
import { useAntdResizableHeader } from '@minko-fe/use-antd-resizable-header';
import { ResetColumnWidthIcon } from '@cgf-tools/icons';
import HeaderTitle from './HeaderTitle';
import EditForm from './EditForm';
import { ProMaxProviderContext } from '../ProMaxProvider';
import {
  ProMaxContext,
  useProMaxTableState,
  useProMaxTableRef,
  useEditFormRef,
  useOptionsStoreRef,
  useMode,
  useOpen,
  useEditRecord,
} from './hooks';
// import FormItemTypeMap from './FormItemTypeMap';
import ImportButton from './ImportButton';
import ExportButton from './ExportButton';
import Action from './Action';
import { valueTypeMap as builtInValueTypeMap } from '@cgf-tools/pro-max-components/share';

import type { ProMaxTableRef, ProMaxTableProps } from './type.d';
import type { ProMaxProviderProps } from '../ProMaxProvider';

const ProMaxTableContainer = React.memo(({ children }: { children?: React.ReactNode }) => {
  const state = useProMaxTableState();
  return <ProMaxContext.Provider value={state}>{children}</ProMaxContext.Provider>;
});

const NoContaner = ({ children }: { children?: React.ReactNode }) => <>{children}</>;

const ProMaxTable: React.ForwardRefRenderFunction<ProMaxTableRef | undefined, ProMaxTableProps> = (
  {
    request = () => Promise.resolve({ data: [], total: 0, success: true }),
    pagination,
    expandable,
    formRef,
    manual = false,
    resizable = false,
    resizeableProps,
    columns,
    resizablePersistenceKey,
    headerTitle,
    addButtonProps,
    importButtonProps,
    exportButtonProps,
    editFormType,
    editFormContainerProps,
    useProMaxTableContainer = false,
    onEditFormSubmit,
    onEditFormSubmitFailed,
    moreButton,
    closeUrlState = false,
    rowActionsProps,
    ...others
  },
  ref
) => {
  const v = useContext(ProProvider);
  const values = useContext<ProMaxProviderProps | undefined>(ProMaxProviderContext);
  const { modal } = App.useApp();
  const proMaxTableRef = useProMaxTableRef();
  const [urlState, setUrlState] = useUrlState<Record<string, any>>({});
  const [state, setState] = React.useState<Record<string, any>>({});
  // 数据流以urlState为准, 不存在时使用默认值
  const [page, setPage] = React.useState(pagination ? pagination.current || 1 : 1);
  const [size, setSize] = React.useState(pagination ? pagination.pageSize || 10 : 10);
  const [params, setParams] = React.useState({});
  // 排序和过滤, 也应该存到urlState中，但目前暂不实现，后面根据需求实现
  const [sort, setSort] = React.useState({});
  const [filter, setFilter] = React.useState({});

  const innerFormRef = React.useRef<any>();

  const { data, loading, run, refresh } = useRequest(request, {
    manual: true,
  });

  const innerColumns = React.useMemo(
    () =>
      rowActionsProps
        ? columns?.concat([
            {
              title: '操作',
              valueType: 'option',
              key: '__option',
              hideInExpandable: true,
              width: rowActionsProps?.width || 180,
              fixed: 'right',
              render: (_, record) => <Action {...rowActionsProps} record={record} />,
            },
          ])
        : columns,
    [rowActionsProps, columns]
  );

  const query = React.useCallback(
    (paramState: any) => {
      const { page, size, ...rest } = paramState;
      if (page) {
        setPage(parseInt(page));
      } else {
        setPage(pagination ? pagination.current || 1 : 1);
      }
      if (size) {
        setSize(parseInt(size));
      } else {
        setSize(pagination ? pagination.pageSize || 10 : 10);
      }
      if (formRef?.current) {
        // 这里还要绑定个内部的，否则会出现表单值和urlState不一致的情况
        formRef.current.setFieldsValue(rest);
      } else if (innerFormRef.current) {
        innerFormRef.current.setFieldsValue(rest);
      }
      setParams(rest);
      run(paramState, sort, filter);
    },
    [filter, formRef, pagination, run, sort]
  );

  React.useEffect(() => {
    if (!closeUrlState) {
      query(urlState);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlState]);

  React.useEffect(() => {
    if (closeUrlState) {
      query(state);
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [state]);

  const innerExpandable = React.useMemo(() => {
    return {
      fixed: true,
      expandedRowRender: (record: any) => <ExpandedRow record={record} columns={innerColumns} />,
      ...expandable,
    };
  }, [expandable, innerColumns]);

  const changeUrlState = useMemoizedFn(params => {
    const p = Object.keys(params).reduce((prev, _) => {
      if (prev[_] === '') {
        prev[_] = undefined;
      }
      return prev;
    }, params);
    const set = closeUrlState ? setState : setUrlState;
    set(prev => {
      const prevKeys = Object.keys(prev);
      const keys = Object.keys(p);
      const clearKeys = prevKeys.filter(_ => !keys.includes(_));
      const obj = p;
      clearKeys.forEach(_ => {
        obj[_] = undefined;
      });
      return obj;
    });
  });

  React.useEffect(() => {
    // 当不开启手动模式时，默认发送请求，查询表单的默认值可以通过initvalue设置，在外层可以使用form.submit来触发查询
    if (!manual && Object.keys(urlState).length === 0) {
      const ref = formRef || innerFormRef;
      ref.current?.submit();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const handleChange = useMemoizedFn((pagination, filters, sorter) => {
    changeUrlState({
      ...params,
      page: pagination.current,
      size: pagination.pageSize,
    });
    setSort(sorter);
    setFilter(filters);
  });

  const handleSubmit = useMemoizedFn(params => {
    changeUrlState({
      page: 1, //查询时重置页码
      size,
      ...params,
    });
  });

  const handleReset = useMemoizedFn(() => {
    handleSubmit({});
  });

  // 文档: https://www.npmjs.com/package/@minko-fe/use-antd-resizable-header
  const { components, resizableColumns, resetColumns } = useAntdResizableHeader<any>({
    columns: useMemo(() => innerColumns || [], [innerColumns]),
    // 保存拖拽宽度至本地localStorage
    columnsState: resizablePersistenceKey
      ? {
          persistenceKey: resizablePersistenceKey,
          persistenceType: 'localStorage',
        }
      : undefined,
    ...resizeableProps,
  });

  const innerOptions = React.useMemo(
    () => ({
      ...others.options,
      reload: () => {
        refresh();
      },
    }),
    [others.options, refresh]
  );

  React.useImperativeHandle(
    ref,
    () => {
      const instance = { refresh };
      if (proMaxTableRef) {
        proMaxTableRef.current = instance;
      }
      return instance;
    },
    [proMaxTableRef, refresh]
  );

  const handleResetColumnWidth = useMemoizedFn(() => {
    modal.confirm({
      title: '请选择重置列宽的方式',
      content: '重置到上次保存的状态，或者重置到初始状态，初始状态为默认宽度',
      onOk: () => {
        resetColumns();
      },
      onCancel: () => {
        if (resizablePersistenceKey) {
          localStorage.removeItem(resizablePersistenceKey);
          window.location.reload();
        }
      },
      okText: '重置到上次保存的状态',
      cancelText: '重置到初始状态',
    });
  });

  const Container = React.useMemo(
    () => (useProMaxTableContainer ? NoContaner : ProMaxTableContainer),
    [useProMaxTableContainer]
  );

  return (
    <ProProvider.Provider
      value={{
        ...v,
        ...values,
        valueTypeMap: {
          ...values?.valueTypeMap,
          ...v?.valueTypeMap,
          ...builtInValueTypeMap,
        },
      }}
    >
      <Container>
        <ProTable
          loading={loading}
          dataSource={data?.data || []}
          expandable={innerExpandable}
          onChange={handleChange}
          onSubmit={handleSubmit}
          onReset={handleReset}
          formRef={formRef || innerFormRef}
          columns={resizable ? resizableColumns : innerColumns}
          components={components}
          options={innerOptions}
          optionsRender={(props, defaultDom) =>
            [
              importButtonProps && <ImportButton {...importButtonProps} key="import" />,
              exportButtonProps && (
                <ExportButton
                  {...exportButtonProps}
                  key="export"
                  exportParams={
                    exportButtonProps?.exportParams === false
                      ? false
                      : {
                          ...(closeUrlState ? state : urlState),
                          ...exportButtonProps?.exportParams,
                        }
                  }
                />
              ),
              resizable && (
                <ResetColumnWidthIcon key="reset-width" onClick={handleResetColumnWidth} />
              ),
              ...defaultDom,
            ].filter(_ => !!_)
          }
          pagination={{
            ...pagination,
            current: page,
            pageSize: size,
            total: data?.total || 0,
          }}
          headerTitle={
            <HeaderTitle
              headerTitle={headerTitle}
              addButtonProps={addButtonProps}
              moreButton={moreButton}
            />
          }
          {...others}
        />
        <EditForm
          editFormType={editFormType}
          columns={columns}
          onEditFormSubmit={onEditFormSubmit}
          onEditFormSubmitFailed={onEditFormSubmitFailed}
          transformRecord={rowActionsProps?.transformRecord}
          onEditClick={rowActionsProps?.onEditClick}
          {...editFormContainerProps}
        />
      </Container>
    </ProProvider.Provider>
  );
};

const __Table = React.memo(React.forwardRef(ProMaxTable));

type __TableType = typeof __Table;

type TableType = __TableType & {
  Container: typeof ProMaxTableContainer;
  hooks: {
    useEditFormRef: typeof useEditFormRef;
    useProMaxTableRef: typeof useProMaxTableRef;
    useOptionsStoreRef: typeof useOptionsStoreRef;
    useMode: typeof useMode;
    useOpen: typeof useOpen;
    useEditRecord: typeof useEditRecord;
  };
};

const Table = __Table as TableType;

Table.Container = ProMaxTableContainer;
Table.hooks = {
  useEditFormRef,
  useProMaxTableRef,
  useOptionsStoreRef,
  useMode,
  useOpen,
  useEditRecord,
};

export default Table;
