import React from 'react';
import { use, selectorFamily } from '@cgf-tools/store';
import ProFormInputSuspense from '@cgf-tools/pro-max-components/ProFormInputSuspense';
import { SelectAndSearchComponentMap } from '@cgf-tools/pro-max-components/share';
import type { ProFormInputSkeletonProps } from '@cgf-tools/pro-max-components/src/ProFormInputSkeleton';
import type { RequestOptionsType } from '@ant-design/pro-components';
import type {
  ProFormSelectProps,
  ProFormTreeSelectProps,
  ProFormCascaderProps,
} from '@cgf-tools/pro-max-components/share';

export type ProFormMemoSelectProps = {
  type?: keyof typeof SelectAndSearchComponentMap;
  /**
   * @name memoKey
   * @description 用于全局缓存的key,同一key的memo组件会共享缓存，不会多次请求
   */
  memoKey?: string;
  /**
   * @name dependencies
   * @description 发生变化时，重新请求数据
   */
  dependencies?: any[];
  query: React.MutableRefObject<ReturnType<typeof selectorFamily>>['current'];
} & ProFormSelectProps &
  ProFormTreeSelectProps &
  ProFormCascaderProps;

const BaseProFormMemoSelect: React.FC<Omit<ProFormMemoSelectProps, 'memoKey'>> = props => {
  const { type = 'select', query, dependencies = [], ...others } = props;

  const options = use(query(dependencies));

  return React.cloneElement(SelectAndSearchComponentMap[type], {
    ...others,
    options,
  });
};

const ProFormMemoSelect: React.FC<Omit<ProFormMemoSelectProps, 'query'>> = props => {
  const { label, width, params, ...others } = props;
  const { memoKey, request, ...rest } = props;

  const queryRef = React.useRef<ReturnType<typeof selectorFamily>>(
    selectorFamily<RequestOptionsType[]>({
      key: memoKey || props.name,
      get: () => async () => {
        const options = await request?.(params, props);
        return options || [];
      },
    })
  );

  return (
    <ProFormInputSuspense label={label} width={width} {...(others as ProFormInputSkeletonProps)}>
      <BaseProFormMemoSelect query={queryRef.current} {...rest} />
    </ProFormInputSuspense>
  );
};

export default React.memo(ProFormMemoSelect);
