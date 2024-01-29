---
title: 中间件
nav: 状态管理
order: 1
---

## 基本使用

<code src="./demos/demo1.tsx"></code>

## Redux-logger

<code src="./demos/demo2.tsx"></code>

## 中间件Reducer 开发中，暂时不要用

<code src="./demos/demo3.tsx"></code>

## 待办

- [ ] 思考加入一些recoil特性
- [ ] reducer
- [ ] dispatch逻辑

## 思考

1. 计算属性有必要加吗？没必要，使用recoil思想，seletor实现
2. watch? 参考recoil思想
3. dispatch 和 reducer 有必要加嘛？没必要了，除非要适配中间件
