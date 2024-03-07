import React from 'react';
import type { ProFormInstance } from '@ant-design/pro-components';
import { useMemoizedFn } from 'ahooks';
import createStore from '@cgf-tools/store';

import type { ProMaxTableRef } from './type.d';
import type { Store } from '@cgf-tools/store';

export interface OptioinStoreRef {
  [key: string]: {
    options: any[];
    setOptions: (options: any[]) => void;
  };
}

export interface ProMaxTableState {
  [key: string]: unknown;
  mode?: 'add' | 'edit';
  open?: boolean;
  /**
   * 用于实时记录所有表单的options,自定义的需要自行设置进去,后面还要完善下，每个自定义表单最好加个onOptionsChange 如batch参数弹出options = [{key1: [], key2:[]}] key传用这个key，不值会用dataIndex
   */
  formOptions: {
    [key: string]: any[];
  };
  /**
   * 编辑的时候，传入的record
   */
  editRecord?: any;
  editFormRef?: React.MutableRefObject<ProFormInstance | undefined>;
  proMaxTableRef?: React.MutableRefObject<ProMaxTableRef | undefined>;
  optionsStoreRef?: React.MutableRefObject<OptioinStoreRef>;
}

export const ProMaxContext = React.createContext<Store<ProMaxTableState> | undefined>(undefined);

export const useProMaxTableState = () => {
  const editFormRef = React.useRef<ProFormInstance>();
  const proMaxTableRef = React.useRef<ProMaxTableRef | undefined>();
  // 用于保存和设置表单的下拉选项
  const optionsStoreRef = React.useRef<OptioinStoreRef>({});

  return createStore<ProMaxTableState>({
    mode: 'add',
    open: false,
    formOptions: {},
    editFormRef,
    proMaxTableRef,
    optionsStoreRef,
    editRecord: undefined,
  });
};

/**
 * 只要是放到表格或表格容器中去的组件，这些hooks都可以用
 */

export const useEditFormRef = () => {
  const store = React.useContext(ProMaxContext);
  const { editFormRef } = store || {};

  return editFormRef;
};

export const useProMaxTableRef = () => {
  const store = React.useContext(ProMaxContext);
  const { proMaxTableRef } = store || {};
  return proMaxTableRef;
};

export const useOptionsStoreRef = () => {
  const { optionsStoreRef } = React.useContext(ProMaxContext) || {};

  return optionsStoreRef;
};

export const useMode = () => {
  const store = React.useContext(ProMaxContext);
  const { mode } = store || {};

  const setMode = useMemoizedFn((mode: 'add' | 'edit') => {
    if (store) {
      store.mode = mode;
    }
  });

  return {
    mode,
    setMode,
  };
};

export const useOpen = () => {
  const store = React.useContext(ProMaxContext);
  const { open } = store || {};

  const setOpen = useMemoizedFn((bool: boolean, mode?: 'add' | 'edit') => {
    if (store) {
      store.open = bool;
      if (mode) {
        store.mode = mode;
      }
    }
  });

  return {
    open,
    setOpen,
  };
};

export const useFormOptions = () => {
  const store = React.useContext(ProMaxContext);

  const { formOptions } = store || {};

  const setFormOptions = useMemoizedFn((key: string, options: any[]) => {
    const arr = (formOptions?.[key] || []).concat(options || []);
    // 数组去重，值是对象的时候
    const o = Array.from(new Set(arr.map(_ => JSON.stringify(_)))).map(_ => JSON.parse(_));
    if (store) {
      store('formOptions', prev => ({
        ...prev,
        [key]: o,
      }));
    }
  });

  return {
    formOptions,
    setFormOptions,
  };
};

export const useEditRecord = () => {
  const store = React.useContext(ProMaxContext);

  const { editRecord } = store || {};

  const setEditRecord = useMemoizedFn((record: any) => {
    if (store) {
      store.editRecord = record;
    }
  });

  return {
    editRecord,
    setEditRecord,
  };
};
