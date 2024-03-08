---
title: ProFormSearchSelect
nav: ProMax组件
group:
  title: 表单组件
  order: 2
order: 2
---

# 搜索下拉组件（ProFormSearchSelect）

搜索下拉组件，防抖

## 基本使用

<code src="./demos/pro-form-search-select/demo1.tsx"></code>

| 参数                   | 说明                                     | 类型                                      | 默认值   | 版本 |
| ---------------------- | ---------------------------------------- | ----------------------------------------- | -------- | ---- |
| type                   | 组件类型                                 | 'select' \| 'treeSelect' \| 'cascader'    | 'select' | -    |
| debounceWait           | 防抖时间（ms）                           | number                                    | 300      | -    |
| onNoOptionsButHasValue | 有值但没有下拉选项的回调，用于设置下拉项 | Promise<RequestOptionsType[]\| undefined> | -        | -    |

其他属性跟`ProFormSelect、ProFormTreeSelect、ProFormCascader`是一样的
