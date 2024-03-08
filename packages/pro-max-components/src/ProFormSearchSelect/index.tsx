import React, { useImperativeHandle } from 'react';
import { Spin } from 'antd';
import { useMemoizedFn, useRequest } from 'ahooks';
import { ProForm } from '@ant-design/pro-components';
import { SelectAndSearchComponentMap } from '@cgf-tools/pro-max-components/share';
import { useOptionsStoreRef } from '@cgf-tools/pro-max-components/ProMaxTable/hooks';

import type {
  ProFormSelectProps,
  ProFormTreeSelectProps,
  ProFormCascaderProps,
} from '@cgf-tools/pro-max-components/share';
import type { RequestOptionsType } from '@ant-design/pro-components';

export type ProFormSearchSelectRef = {
  setOptions: React.Dispatch<React.SetStateAction<RequestOptionsType[] | undefined>>;
};

export type ProFormSearchSelectProps = {
  type?: keyof typeof SelectAndSearchComponentMap;
  /**
   * @description: 防抖时间 默认300ms
   */
  debounceWait?: number;
  /**
   * 有value 但没下拉选项时如何处理？
   * 将值发送给后端获取选项，但具体如何发送由用户自己决定
   */
  onNoOptionsButHasValue?: (value: any) => Promise<RequestOptionsType[] | undefined>;
} & ProFormSelectProps &
  ProFormTreeSelectProps &
  ProFormCascaderProps;

const ProFormSearchSelect: React.ForwardRefRenderFunction<
  ProFormSearchSelectRef,
  ProFormSearchSelectProps
> = ({ onNoOptionsButHasValue, ...props }: ProFormSearchSelectProps, ref) => {
  const form = ProForm.useFormInstance();
  const { type = 'select', request, debounceWait = 300, ...others } = props;
  const optionsStoreRef = useOptionsStoreRef();
  const cid = React.useId();
  const fn = useMemoizedFn(async () => Promise.resolve([]));
  const { data, loading, run } = useRequest(request || fn, {
    manual: true,
    debounceWait,
  });
  const [searchValue, setSearchValue] = React.useState('');
  const [options, setOptions] = React.useState<RequestOptionsType[] | undefined>(undefined);

  const handleSearch = useMemoizedFn(v => {
    setSearchValue(v.trim());
  });

  React.useEffect(() => {
    searchValue && run(searchValue, props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  React.useEffect(() => {
    setOptions(data);
  }, [data]);

  useImperativeHandle(
    ref,
    () => ({
      setOptions,
    }),
    []
  );

  React.useEffect(() => {
    if (optionsStoreRef?.current) {
      optionsStoreRef.current[cid] = {
        options: options || [],
        setOptions,
      };
    }
  }, [cid, options, optionsStoreRef]);

  const getOptions = useMemoizedFn(async v => {
    // 将值发送给后端获取选项，但具体如何发送由用户自己决定
    const newOptions = await onNoOptionsButHasValue?.(v);
    if (newOptions) {
      setOptions(newOptions);
    }
  });

  // 有value 但没下拉选项时如何处理？
  React.useEffect(() => {
    if (!options || options?.length === 0) {
      const v = form.getFieldValue(others.name);
      if (v !== undefined) {
        getOptions(v);
      }
    }
  }, [form, options, others.name, onNoOptionsButHasValue, getOptions]);

  return React.cloneElement(SelectAndSearchComponentMap[type], {
    options,
    ...others,
    fieldProps: {
      ...others?.fieldProps,
      showSearch: true,
      onSearch: handleSearch,
      // notFoundContent: loading ? <Spin /> : null,
      dropdownRender: (originNode: React.ReactNode) => (loading ? <Spin /> : originNode),
      filterOption: false,
      loading,
    },
  });
};

export default React.memo(React.forwardRef(ProFormSearchSelect));
