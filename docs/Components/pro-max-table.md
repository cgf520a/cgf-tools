---
title: ProMaxTable
nav: ProMax组件
group:
  title: 展示组件
  order: 2
order: 2
---

## 基本使用

<code src="./demos/pro-max-table/demo1.tsx"></code>

## API

在原来ProTable的基础上，新增的API

| 参数                    | 说明                                                                                                         | 类型                                                                 | 默认值 | 版本 |
| ----------------------- | ------------------------------------------------------------------------------------------------------------ | -------------------------------------------------------------------- | ------ | ---- |
| columns                 | 列描述                                                                                                       | ProMaxColumns[]                                                      | -      |
| manual                  | 是否关闭默认发送请求                                                                                         | boolean                                                              | -      |
| resizable               | 是否开启可调整宽度                                                                                           | boolean                                                              | -      |
| resizeableProps         | 可调整宽度配置项                                                                                             | ResizeableProps                                                      | -      |
| resizablePersistenceKey | 设置宽度保存在localStorage中的key，不设置不保存                                                              | string                                                               | -      |
| addButtonProps          | 使用新增功能,配置则开启新增功能                                                                              | ButtonProps                                                          | -      |
| moreButton              | 更多按钮自定义                                                                                               | React.ReactNode[]                                                    | -      |
| importButtonProps       | 使用导入功能,配置则开启导入功能                                                                              | ImportButtonProps                                                    | -      |
| exportButtonProps       | 使用导出功能,配置则开启导出功能                                                                              | ImportButtonProps                                                    | -      |
| editFormType            | 编辑表单类型                                                                                                 | 'modal' \| 'drawer'                                                  | -      |
| editFormContainerProps  | 编辑表单类型属性                                                                                             | ModalFormProps \| DrawerFormProps                                    | -      |
| useProMaxTableContainer | 是否使用ProMaxTableContainer，外层使用ProMaxTableContainer时，可以在使用ProMaxTable的组件中，使用下面的hooks | boolean                                                              | -      |
| onEditFormSubmit        | 编辑表单提交                                                                                                 | \(formData: any,mode?: 'add' \| 'edit'\) => Promise<boolean \| void> | -      |
| onEditFormSubmitFailed  | 编辑表单提交验证失败                                                                                         | \(errorInfo: any\) => void                                           | -      |
| rowActionsProps         | 操作行的属性配置                                                                                             | ActionProps                                                          | -      |
| closeUrlState           | 关闭urlState, 默认开启                                                                                       | boolean                                                              | -      |

## hooks

只要是放到表格或表格容器中去的组件，这些hooks都可以用

| Hook               | 说明                                   | 类型                                                 | 默认值    | 版本 |
| ------------------ | -------------------------------------- | ---------------------------------------------------- | --------- | ---- |
| useEditFormRef     | 获取编辑表单的Form对象                 | React.MutableRefObject<ProFormInstance \| undefined> | undefined |
| useSearchFormRef   | 获取查询表单的Form对象                 | React.MutableRefObject<ProFormInstance \| undefined> | undefined |
| useProMaxTableRef  | 获取ProMaxTaber的ref                   | React.MutableRefObject<ProMaxTableRef \| undefined>  | undefined |
| useMode            | 获取表单模式，setMode可设置            | {mode:'add' \| 'edit' , setMode}                     | -         |
| useOptionsStoreRef | 用来保存整个编辑表单下拉选项和设置方法 | [key:string]: {options,setOptions}                   | -         |
| useOpen            | 获取控制编辑表单打开关闭的钩子         | {open,setOpen}                                       | -         |
| useEditRecord      | 获取控制编辑记录的钩子                 | {editRecord,setEditRecord}                           | -         |

### todo

全部从valueType注入，所有地方可用，ProMaxProvider，可扩展自定义valueType（一般是业务的，通用的全部在库里面封装）

1. EditType改为valueType，用pro-components内置的自定义
2. tag
3. 前端低代码生成
4. 表关系图代码生成
5. cli前端低代码生成
6. Action Button
7. 直接网页画原型的工具
8. 搜索下拉组件，有值但没下拉时，可以自动搜索一下
9. useOptionsStoreRef要思考查询表单和编辑表单同name的情况,使用useId解决
10. useFormOptions是将所有表单下拉加载过的选项保存下来，看看有没有必要
