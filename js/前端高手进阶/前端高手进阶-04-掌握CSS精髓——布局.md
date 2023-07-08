---
authors: junkui
title: 前端高手进阶-04-掌握CSS精髓——布局
categories:
  - js
  - js前端高手进阶
tags:
  - js
  - js前端高手进阶

date: 2021-02-16 15:20:10
---

# 掌握 CSS 精髓——布局

## 1.布局的共同点：

1. 大多数用于 PC 端，因为 PC 端屏幕像素宽度够大，可布局的空间也大；

2. 布局是有限空间内的元素排列方式，因为页面设计`横向不滚动，纵向无限延伸`，所以大多数时候讨论的布局都是对`水平方向`进行分割。

   布局按照分列数目，可以大致分为 3 类，即单列布局、2 列布局、3 列布局。

## 2.布局实现

### 单列布局：

- 通过将设置布局容器（最大）宽度以及左右边距为 auto 即可实现

### 2 列布局：

2 列布局使用频率也非常的高，实现效果就是将页面分割成左右宽度不等的两列，宽度较小的列设置为固定宽度，剩余宽度由另一列撑满。为了描述方便，我们暂且称宽度较小的列父元素为`次要布局容器`，宽度较大的列父元素为`主要布局容器`。

实现 2 列或者 3 列布局的步骤：

1. 把主要容器写在次要布局容器以前，保证了主要布局容器的优先级
2. 将布局容器水平排列
3. 设置宽度，次要容器宽度固定，主要容器撑满
4. 消除布局方式的副作用，如浮动造成的高度塌陷
5. 使用媒体查询 优化窄屏下的正常显示

### flex 实现 2 列布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
    <style>
      main,
      aside {
        height: 100px;
      }
      main {
        background-color: #f09e5a;
      }
      aside {
        background-color: #c295cf;
      }
      .wrap {
        display: flex;
        flex-direction: row-reverse;
        flex-wrap: wrap;
      }
      .main {
        flex: 1;
      }
      .aside {
        /* flex: 1; */
        width: 200px;
      }
      @media only screen and (max-width: 1000px) {
        .wrap {
          flex-direction: row;
        }
        .main {
          flex: 100%;
        }
      }
    </style>
  </head>
  <body>
    <div class="wrap">
      <main class="main">主要布局容器</main>
      <aside class="aside">次要布局容器</aside>
    </div>
  </body>
</html>
```

### float 实现的 3 列布局

```html
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta http-equiv="X-UA-Compatible" content="IE=edge" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>Document</title>
  </head>
  <style>
    .main,
    .left,
    .right {
      height: 100px;
      float: left;
    }
    .wrap {
      padding: 0 200px 0 300px;
    }
    /* 解决float 的父级元素高度塌陷 */
    .wrap::after {
      content: "";
      clear: both;
      display: block;
    }
    .main {
      background-color: red;
      width: 100%;
    }
    .left {
      background-color: green;
      width: 300px;
      position: relative;
      left: -300px;
      /* 这个 100% 是父级宽度的百分百 */
      margin-left: -100%;
    }
    .right {
      background-color: blue;
      position: relative;
      width: 200px;
      right: -200px;
      margin-left: -200px;
    }
    @media only screen and (max-width: 1000px) {
      .wrap {
        padding: 0;
      }
      .left {
        left: 0;
        margin-left: 0;
      }
      .right {
        margin-left: 0;
        right: 0;
      }
    }
  </style>
  <body>
    <div class="wrap">
      <main class="main">main</main>
      <aside class="left">left</aside>
      <aside class="right">right</aside>
    </div>
    <div style="height: 110px; background-color: pink">哈哈哈哈</div>
  </body>
</html>
```
