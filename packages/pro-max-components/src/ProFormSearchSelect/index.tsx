import React, { useImperativeHandle } from 'react';
import { Spin } from 'antd';
import { useMemoizedFn, useRequest } from 'ahooks';
import { SelectAndSearchComponentMap } from '@cgf-tools/pro-max-components/share';
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
} & ProFormSelectProps &
  ProFormTreeSelectProps &
  ProFormCascaderProps;

const ProFormSearchSelect: React.ForwardRefRenderFunction<
  ProFormSearchSelectRef,
  ProFormSearchSelectProps
> = (props: ProFormSearchSelectProps, ref) => {
  const { type = 'select', request, debounceWait = 300, ...others } = props;
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

  return React.cloneElement(SelectAndSearchComponentMap[type], {
    options,
    ...others,
    fieldProps: {
      ...others?.fieldProps,
      showSearch: true,
      onSearch: handleSearch,
      notFoundContent: loading ? <Spin /> : null,
      filterOption: false,
    },
  });
};

export default React.memo(React.forwardRef(ProFormSearchSelect));
