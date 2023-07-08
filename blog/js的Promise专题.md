---
authors: junkui
title: js的Promise专题
categories:
  - js
  - work
tags:
  - js
  - work
  - 前端

date: 2021-02-24 21:21:31
---

# Promise 专题

## 1.Promise 的状态和缺点

### 缺点：

Promise 也有一些缺点。首先，无法取消 Promise，一旦新建它就会立即执行，无法中途取消。其次，如果不设置回调函数，Promise 内部抛出的错误，不会反应到外部。第三，当处于 Pending 状态时，无法得知目前进展到哪一个阶段（刚刚开始还是即将完成）。一般来说，不要在 then 方法里面定义 Reject 状态的回调函数（即 then 的第二个参数），总是使用 catch 方法，理由是更接近同步的写法。 then 的第二个函数参数和 catch 等价

## 2.Promise 的方法 all 和 race

Promise.all 把多个 promise 实例当成一个 promise 实例,当这些实例的状态都发生改变时才会返回一个新的 promise 实例，才会执行 then 方法。 Promise.race 只要该数组中的 Promise 对象的状态发生变化（无论是 resolve 还是 reject）该方法都会返回。

##
