---
title: 状态管理
nav: 状态管理
---

# 状态管理

## 特性

- 简单
- 小巧
- 易用
- 高性能

## 待办

- [x] 中间件
- [x] atom、selector、
- [x] use
- [x] selectorFamily
- [ ] 调试工具
- [ ] 不过度设计，功能的添加应该从使用角度出发，如有必要再加
- [ ] 补测试用例
- [ ] 把要实现的功能都实现，然后再写单元测试与集成测试优化
  <!-- - [ ] atomFamily -->
  <!-- - [ ] 不使用Suspense的直接返回，不throw Promise -->
  <!-- - [ ] 同步与异步使用方式统一 -->
  <!-- - [ ] hooks -->

## 安装

```bash
pnpm add @cgf-tools/store
```

## 示例

<code src="./demos/demo.tsx"></code>

## 推荐

- 配合useContext使用
