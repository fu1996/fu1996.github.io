---
authors: junkui
title: js的跨域专题
categories:
  - js
  - work
tags:
  - js
  - work
  - 前端

date: 2021-02-24 21:29:01
---

# 跨域的几种解决方法

## iframe 有那些缺点？

1. iframe 会阻塞主页面的 Onload 事件；
2. 搜索引擎的检索程序无法解读这种页面，不利于 SEO;
3. iframe 和主页面共享连接池，而浏览器对相同域的连接有限制，所以会影响页面的并行加载。
4. 使用 iframe 之前需要考虑这两个缺点。如果需要使用 iframe，最好是通过 javascript
5. 动态给 iframe 添加 src 属性值，这样可以绕开以上两个问题。
