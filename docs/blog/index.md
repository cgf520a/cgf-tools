---
title: 博客
nav:
  title: 博客
  order: 3
---

- useDeferredValue是利用React并发特性来延迟渲染，它跟防抖不是一个概念，它的值会实时变化，并不能用来请求防抖
- Suspense的实现原理是捕获异常，判断这个异常是不是Promise，等待这个Promise返回数据。这里特别重要的是，我们需要保证这个Promise是同一个，不然就会出现重复的请求，直到这个请求完成才会停止。
- use使用最佳实践，与store结合，使用异步与同步数据一样，异步只需要加Suspense。
- 使用store缓存Promise，deps变化触发更新，手动更新等。后面的问题无非就是怎么使用，怎么缓存等最佳实践。
