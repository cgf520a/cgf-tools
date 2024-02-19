import React, { useMemo } from 'react';
import { App } from 'antd';
import type { ButtonProps } from 'antd';
import { ProTable } from '@ant-design/pro-components';
import type { ProTableProps } from '@ant-design/pro-components';
import { useMemoizedFn } from 'ahooks';
import ExpandedRow from './ExpandedRow';
import type { ProColumns } from '@ant-design/pro-components';
import useUrlState from '@ahooksjs/use-url-state';
import { useRequest } from 'ahooks';
import { useAntdResizableHeader } from '@minko-fe/use-antd-resizable-header';
import { ResetColumnWidthIcon } from '@cgf-tools/icons';
import HeaderTitle from './HeaderTitle';
import EditForm from './EditForm';
import type { ModalFormProps, DrawerFormProps } from '@ant-design/pro-components';
import { ProMaxContext, useProMaxTableState, useProMaxTableRef } from './hooks';
import type { ProFormItemProps } from '@ant-design/pro-components';
import FormItemTypeMap from './FormItemTypeMap';
import Action from './Action';

import type { ActionProps } from './Action';

const ProMaxTableContainer = React.memo(({ children }: { children?: React.ReactNode }) => {
  const state = useProMaxTableState();
  return <ProMaxContext.Provider value={state}>{children}</ProMaxContext.Provider>;
});

const NoContaner = ({ children }: { children?: React.ReactNode }) => <>{children}</>;

export interface ProMaxTableRef {
  refresh: () => void;
}

export type ProMaxColumns<T> = ProColumns<T> & {
  // 是否在展开行中隐藏
  hideInExpandable?: boolean;
  // 展开行中的渲染函数
  renderExpandableItem?: (text: any, record: T) => React.ReactNode;
  /**
   * 是否在新增表单中展示
   */
  showInAddForm?: boolean;
  /**
   * 是否在编辑表单中展示
   */
  showInEditForm?: boolean;
  /**
   * 编辑表单项类型
   */
  editFormItemType?: keyof typeof FormItemTypeMap;
  /**
   * 编辑表单项属性
   */
  editFormItemProps?: ProFormItemProps & {
    options?: any[];
  };
  /**
   * 编辑表单分组，不配置时不分组
   */
  editFormItemGroup?: string;
  /**
   * 编辑表单排序, 默认按数组顺序
   */
  editFormItemSort?: number;
  /**
   * 编辑表单联动配置,暂时不处理，可使用自定义渲染和ProFormDependency进行处理
   */
  /**
   * 自定义编辑表单项的渲染
   */
  renderEditFormItem?: (record: ProMaxColumns<T>) => React.ReactNode;
};

/**
 * 功能规划：
 * 1. 搜索条件, 分页，url状态管理 done
 * 2. 展开行 done
 * 3. 可调整宽度 done
 * 4. 新增、编辑、删除、导入、导出功能
 * 5. ProMaxFormItem组件，方便快速组装自定义的表单组件，异步的也需要考虑进去
 * 6. 判断开发环境时，显示可编辑按钮，可视化编辑设计功能
 * 7. 实现外层可以用context容器，方便在所有想使用hooks的地方能够使用
 */

export interface ProMaxTableProps<T = any, U = any> extends ProTableProps<T, U> {
  columns: ProMaxColumns<T>[];
  /**
   * 是否关闭默认发送请求
   */
  manual?: boolean;
  /**
   * 是否开启可调整宽度，需要有一列不设置宽度，可设置一个隐藏字段，参考成本一次分摊明细表格
   */
  resizable?: boolean;
  /**
   * 可调整宽度配置项
   */
  resizeableProps?: {
    /**
     * 某一列不能拖动，设置该列的最小展示宽度，默认 120
     */
    defaultWidth?: number;
    /**
     * 拖动最小宽度 默认 60
     */
    minConstraints?: number;
    /**
     * 拖动最大宽度 默认无穷
     */
    maxConstraints?: number;
    /**
     * 是否缓存宽度，避免渲染重置拖拽宽度，默认为true
     */
    cache?: boolean;
    /**
     * 列状态的配置，可以用来操作列拖拽宽度
     */
    columnsState?: any;
    /**
     * 开始拖拽时触发
     */
    onResizeStart?: () => void;
    /**
     * 结束拖拽时触发
     */
    onResizeEnd?: () => void;
  };
  /**
   * 设置宽度保存在localStorage中的key，不设置不保存
   */
  resizablePersistenceKey?: string;
  /**
   * 使用新增功能,配置则开启新增功能
   */
  addButtonProps?: ButtonProps;
  /**
   * 更多按钮自定义
   */
  moreButton?: React.ReactNode[];
  /**
   * 使用导入功能,配置则开启导入功能
   */
  importButtonProps?: ButtonProps;
  /**
   * 使用导出功能,配置则开启导出功能
   */
  exportButtonProps?: ButtonProps;
  /**
   * 编辑表单类型
   */
  editFormType?: 'modal' | 'drawer';
  /**
   * 编辑表单Modal或Drawer Props
   */
  editFormContainerProps?: ModalFormProps | DrawerFormProps;
  useProMaxTableContainer?: boolean;
  /**
   * 编辑表单提交
   */
  onEditFormSubmit?: (formData: any, mode?: 'add' | 'edit') => Promise<boolean | void>;
  /**
   * 编辑表单提交验证失败
   */
  onEditFormSubmitFailed?: (errorInfo: any) => void;
  rowActionsProps?: ActionProps;
}

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
    rowActionsProps,
    ...others
  }: ProMaxTableProps,
  ref
) => {
  const { modal } = App.useApp();
  const proMaxTableRef = useProMaxTableRef();
  const [urlState, setUrlState] = useUrlState<Record<string, any>>({});
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

  React.useEffect(() => {
    const { page, size, ...rest } = urlState;
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
    run(urlState, sort, filter);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [urlState]);

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
    setUrlState(prev => {
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
            importButtonProps={importButtonProps}
            exportButtonProps={exportButtonProps}
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
  );
};

const __Table = React.memo(React.forwardRef(ProMaxTable));

type __TableType = typeof __Table;

type TableType = __TableType & {
  Container: typeof ProMaxTableContainer;
};

const Table = __Table as TableType;

Table.Container = ProMaxTableContainer;

export default Table;
