---
title: PreComponent
nav: ProMax组件
group:
  title: 表单组件
  order: 2
order: 2
---

# 预制组件（PreComponent）

类似预制菜的预制组件，像一些手机号，邮箱填写等等组件，预先做好，直接使用。目前先内置了一些表单，后期不仅仅是表单，先放在表单内。仍然可以从外层覆盖里面预制的属性！

## 基本使用

<code src="./demos/pre-component/demo1.tsx"></code>

## 内置校验

antd的rule type还内置了这些校验，可以直接使用

```
string: Must be of type string. This is the default type.
number: Must be of type number.
boolean: Must be of type boolean.
method: Must be of type function.
regexp: Must be an instance of RegExp or a string that does not generate an exception when creating a new RegExp.
integer: Must be of type number and an integer.
float: Must be of type number and a floating point number.
array: Must be an array as determined by Array.isArray.
object: Must be of type object and not Array.isArray.
enum: Value must exist in the enum.
date: Value must be valid as determined by Date
url: Must be of type url.
hex: Must be of type hex.
email: Must be of type email.
any: Can be any type.
```
