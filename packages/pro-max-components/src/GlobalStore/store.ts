/**
 * 本store用于存储一些组件全局的数据，无需在组件中传递，不需要像context一样需要提供provider
 */

import createStore from '@cgf-tools/store';
import type { DefaultOptionType } from 'antd/es/select';
import type { RequestOptionsType } from '@ant-design/pro-components';

export type MemoOptionsItem = RequestOptionsType[] | DefaultOptionType[] | undefined;

export type ProMaxComponentGlobalState = {
  /**
   * 用于存储options下拉选项
   */
  memoOptions: {
    [key: string]: MemoOptionsItem;
  };
};

const ProMaxComponentGlobalStore = createStore<ProMaxComponentGlobalState>({
  memoOptions: {},
});

export default ProMaxComponentGlobalStore;
