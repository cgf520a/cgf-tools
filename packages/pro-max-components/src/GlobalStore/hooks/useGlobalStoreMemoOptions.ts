import { useMemoizedFn } from 'ahooks';
import store from '../store';
import type { MemoOptionsItem } from '../store';

const useGlobalStoreMemoOptions = (memoKey?: string) => {
  const { memoOptions } = store;

  const getMemoOptions = useMemoizedFn((key?: string) => {
    if (memoKey) {
      return memoOptions[memoKey];
    }
    if (key) {
      return memoOptions[key];
    }
    return undefined;
  });

  const setMemoOptions = useMemoizedFn((options?: MemoOptionsItem, key?: string) => {
    const k = memoKey || key;
    if (k) {
      store('memoOptions', prev => {
        return {
          ...prev,
          [k]: options,
        };
      });
    }
  });

  return {
    memoOptions,
    getMemoOptions,
    setMemoOptions,
  };
};

export default useGlobalStoreMemoOptions;
