import React, { useMemo } from 'react';
import { selectAndSearchComponentMap } from '@cgf-tools/pro-max-components/share';
import ProFormInputSuspense from '@cgf-tools/pro-max-components/src/ProFormInputSuspense';
import { useGlobalStoreMemoOptions } from '@cgf-tools/pro-max-components/src/GlobalStore';
import type { ProFormInputSkeletonProps } from '@cgf-tools/pro-max-components/src/ProFormInputSkeleton';
import type {
  ProFormSelectProps,
  ProFormTreeSelectProps,
  ProFormCascaderProps,
} from '@cgf-tools/pro-max-components/share';
import useSWR, { mutate } from 'swr';
import { useMemoizedFn } from 'ahooks';
import axios from 'axios';
import { features } from 'process';

export type ProFormMemoSelectProps = {
  type?: keyof typeof selectAndSearchComponentMap;
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
  resource?: any;
} & ProFormSelectProps &
  ProFormTreeSelectProps &
  ProFormCascaderProps;

let status: 'loading' | 'hasValue' | 'hasError' = 'loading';
let contents: any = [];
let started = false;
function useSuspenseValue<T>(promise?: Promise<T>) {
  if (promise) {
    if (status === 'hasError') {
      throw contents;
    } else if (status === 'loading') {
      if (started) {
        throw new Promise(() => {});
      }
      started = true;
      throw promise
        .then(res => {
          console.log(res);
          status = 'hasValue';
          contents = res;
          return res;
        })
        .catch(err => {
          status = 'hasError';
          contents = err;
          throw err;
        });
    } else if (status === 'hasValue') {
      return contents;
    } else {
      throw new Error('unreachable');
    }
  }
}

function wrapPromise(promise: any) {}

function fetchData<T>(request: () => Promise<T>, params?: any) {
  const promise = request();
  return wrapPromise(promise);
}

// const resource = fetchData(() => axios.get('/api/env.json').then(res => res.data));

const BaseProFormMemoSelect: React.FC<ProFormMemoSelectProps> = (props: ProFormMemoSelectProps) => {
  const { type = 'select', options, resource, fetcher, request, params, ...others } = props;
  // const test = useSuspenseValue(request?.(params, props));
  const data = resource.read();
  console.log(data);
  // new Promise(resolve => {
  //   request?.(params, props).then(res => resolve(res));
  // })
  return React.cloneElement(selectAndSearchComponentMap[type], {
    ...others,
    options,
  });
};

const ProFormMemoSelect: React.FC<ProFormMemoSelectProps> = props => {
  const { label, width, memoKey, ...rest } = props;
  const { request, params, ...others } = rest;
  const resource = fetchData(request as any, params);
  // const [resource, setResource] = React.useState(fetchData(() => request?.(params, props) as any));
  // const fn = useMemoizedFn(() => {
  //   console.count('fn');
  //   return request ? fetchData(request?.(params, props)) : undefined;
  // });
  // const resource = useMemo(() => fetchData(axios.get('/api/env.json').then(res => res.data)), []);

  console.log(resource);
  // const k = memoKey || rest.name || 'ProFormMemoSelect';
  // const { getMemoOptions, setMemoOptions } = useGlobalStoreMemoOptions(k);
  // const fn = useMemoizedFn(() => {
  //   return request?.(params, props) || Promise.resolve();
  // });
  // const fetcher = React.useMemo(() => fn(), [fn]);
  // const options = getMemoOptions();
  // const { data, isLoading } = useSWR(k, fetcher, {
  //   revalidateOnMount: false,å
  // });

  // React.useEffect(() => {
  //   setMemoOptions(data);
  //   // eslint-disable-next-line react-hooks/exhaustive-deps
  // }, [data]);

  return (
    <ProFormInputSuspense label={label} width={width} {...(others as ProFormInputSkeletonProps)}>
      <BaseProFormMemoSelect resource={resource} />
    </ProFormInputSuspense>
  );
};

export default React.memo(ProFormMemoSelect);
