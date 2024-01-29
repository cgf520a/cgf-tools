---
title: ProFormMemoSelect
nav: ProMax组件
group:
  title: 表单组件
  order: 2
order: 2
---

# 带全局缓存的下拉组件（ProFormMemoSelect）

有些下拉选项全局只需要加载一次，或者只在依赖变化时才更新，这个组件就派上用场

## 基本使用

<code src="./demos/pro-form-memo-select/demo1.tsx"></code>

| 参数         | 说明                               | 类型                                   | 默认值    | 版本 |
| ------------ | ---------------------------------- | -------------------------------------- | --------- | ---- |
| type         | 组件类型                           | 'select' \| 'treeSelect' \| 'cascader' | 'select'  | -    |
| memoKey      | 用于全局缓存的key                  | string \| undefined                    | undefined | -    |
| dependencies | 依赖数组，发生变化时，重新请求数据 | string \| undefined                    | undefined | -    |

其他属性跟`ProFormSelect、ProFormTreeSelect、ProFormCascader`是一样的
