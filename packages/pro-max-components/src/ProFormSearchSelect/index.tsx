import React from 'react';
import { Spin } from 'antd';
import { useMemoizedFn, useRequest } from 'ahooks';
import { selectAndSearchComponentMap } from '@cgf-tools/pro-max-components/share';
import type {
  ProFormSelectProps,
  ProFormTreeSelectProps,
  ProFormCascaderProps,
} from '@cgf-tools/pro-max-components/share';

export type ProFormSearchSelectProps = {
  type?: keyof typeof selectAndSearchComponentMap;
  /**
   * @description: 防抖时间 默认300ms
   */
  debounceWait?: number;
} & ProFormSelectProps &
  ProFormTreeSelectProps &
  ProFormCascaderProps;

const ProFormSearchSelect: React.FC<ProFormSearchSelectProps> = (
  props: ProFormSearchSelectProps
) => {
  const { type = 'select', request, debounceWait = 300, ...others } = props;
  const fn = useMemoizedFn(async () => Promise.resolve([]));
  const { data, loading, run } = useRequest(request || fn, {
    manual: true,
    debounceWait,
  });
  const [searchValue, setSearchValue] = React.useState('');

  const handleSearch = useMemoizedFn(v => {
    setSearchValue(v.trim());
  });

  React.useEffect(() => {
    searchValue && run(searchValue, props);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [searchValue]);

  return React.cloneElement(selectAndSearchComponentMap[type], {
    options: data,
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

export default React.memo(ProFormSearchSelect);
