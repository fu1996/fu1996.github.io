---
authors: junkui
title: css预处理器
categories:
  - css
tags:
  - css
sidebar_position: 4
date: 2021-01-17 14:23:52
---

# CSS 预处理器

## 1.css 预处理器

- 基于 css 的另一种语言
- 通过工具编译为 css
- 添加了很多 css 不具备的特性
- 能提升 css 文件的组织

## 2.预处理器提供的能力【重点】

- 嵌套 反映层级关系 和约束
- 变量和计算 减少重复的代码
- Extend 和 Mixin 相当于 css 版本的代码片段
- 循环 适用于复杂又规律的样式
- import css 文件模块化 【模块化，便于维护】

## 3.css 预处理的框架

- Sass - Compass
- Less - Lesshat /EST
- 提供现成的 Mixin 【类似于已经封装好的 CSS 函数】、
- 类似 js 类库 封装常用的功能

## 4.层级嵌套 基本书写

#### less:

```css
body {
  padding: 0;
  margin: 0;
}

.wrapper {
  background: white;

  .nav {
    font-size: 12px;
  }
  .content {
    font-size: 14px;
    &:hover {
      background: red;
    }
  }
}
```

#### sass:

```css
body {
  padding: 0;
  margin: 0;
}

.wrapper {
  background: white;

  .nav {
    font-size: 12px;
  }
  .content {
    font-size: 14px;
    &:hover {
      background: red;
    }
  }
}
```

## 5.变量的使用

#### less:

```css
@fontSize: 12px;
@bgColor: red;

body {
  padding: 0;
  margin: 0;
}

.wrapper {
  // 使用函数 颜色变浅 lighten
  background: lighten(@bgColor, 40%);

  .nav {
    font-size: @fontSize;
  }
  .content {
    font-size: @fontSize + 2px;
    &:hover {
      background: @bgColor;
    }
  }
}
```

#### sass:

```css
$fontSize: 12px;
$bgColor: red;

body {
  padding: 0;
  margin: 0;
}

.wrapper {
  background: lighten($bgColor, 40%);

  .nav {
    font-size: $fontSize;
  }
  .content {
    font-size: $fontSize + 2px;
    &:hover {
      background: red;
    }
  }
}
```

## 6.mixin 函数

### less:

```css
@fontSize: 12px;
@bgColor: red;

// 定义一个mixin 相当于是函数
.box {
  color: green;
}

.box1 {
  // 使用 样式 box 函数
  .box();
  line-height: 2em;
}
.box2 {
  .box();
  line-height: 3em;
}

// 定义一个mixin 变量
.block(@fontSize) {
  font-size: @fontSize;
  border: 1px solid #ccc;
  border-radius: 4px;
}

body {
  padding: 0;
  margin: 0;
}

.wrapper {
  background: lighten(@bgColor, 40%);

  .nav {
    .block(@fontSize);
  }
  .content {
    .block(@fontSize + 2px);
    &:hover {
      background: red;
    }
  }
}
```

### sass:

```css
$fontSize: 12px;
$bgColor: red;
// scss 必须 使用@mixin 才能变成一个函数
@mixin block($fontSize) {
  font-size: $fontSize;
  border: 1px solid #ccc;
  border-radius: 4px;
}

body {
  padding: 0;
  margin: 0;
}

.wrapper {
  background: lighten($bgColor, 40%);

  .nav {
    //  调用mixin 函数必须增加 @include 语法
    @include block($fontSize);
  }
  .content {
    @include block($fontSize + 2px);
    &:hover {
      background: red;
    }
  }
}
```

## 7.继承扩展现有 css `extends`

### less:

```css
@fontSize: 12px;
@bgColor: red;

.block {
  font-size: @fontSize;
  border: 1px solid #ccc;
  border-radius: 4px;
}

body {
  padding: 0;
  margin: 0;
}

.wrapper {
  background: lighten(@bgColor, 40%);
  // 继承属性 直接 继承 .block的样式 减少编译后的css 代码量
  // 选择器提取出来 减少重复代码
  .nav:extend(.block) {
    color: #333;
  }
  .content {
    &:extend(.block);
    &:hover {
      background: red;
    }
  }
}
```

### sass:

```css
$fontSize: 12px;
$bgColor: red;

.block {
  font-size: $fontSize;
  border: 1px solid #ccc;
  border-radius: 4px;
}

body {
  padding: 0;
  margin: 0;
}

.wrapper {
  background: lighten($bgColor, 40%);

  .nav {
    // 继承方法
    @extend .block;
    color: #333;
  }
  .content {
    @extend .block;
    &:hover {
      background: red;
    }
  }
}
```

## 8.循环和递归

### less:

```less
// 递归函数 循环生成代码
.gen-col(@n) when (@n > 0){
    .gen-col(@n - 1);
    .col-@{n}{
        width: 1000px/12*@n;
    }
}

.gen-col(12);

```

### sass:

```scss
// 使用递归
// @mixin gen-col($n){
//     @if $n > 0 {
//         @include gen-col($n - 1);
//         .col-#{$n}{
//             width: 1000px/12*$n;
//         }
//     }
// }

// @include gen-col(12);

// scss 支持循环的
@for $i from 1 through 12 {
  .col-#{$i} {
    width: 1000px/12 * $i;
  }
}
```

## 9.模块化处理

### less:

```
@import "./6-import-variable";
@import "./6-import-module1";
@import "./6-import-module2";
```

**6-import-variable.less**

```
@themeColor: blue;
@fontSize: 14px;
```

**6-import-module1**

```less
.module1 {
  .box {
    font-size: @fontSize + 2px;
    color: @themeColor;
  }
  .tips {
    font-size: @fontSize;
    color: lighten(@themeColor, 40%);
  }
}
```

**6-import-module2**

```less
.module2 {
  .box {
    font-size: @fontSize + 4px;
    color: @themeColor;
  }
  .tips {
    font-size: @fontSize + 2px;
    color: lighten(@themeColor, 20%);
  }
}
```

编译结果：

```css
.module1 .box {
  font-size: 16px;
  color: blue;
}
.module1 .tips {
  font-size: 14px;
  color: #ccccff;
}
.module2 .box {
  font-size: 18px;
  color: blue;
}
.module2 .tips {
  font-size: 16px;
  color: #6666ff;
}
```

### sass:

```scss
@import "./6-import-variable";
@import "./6-import-module1";
@import "./6-import-module2";
```

**6-import-variable**

```scss
$themeColor: blue;
$fontSize: 14px;
```

**6-import-module1**

```scss
.module1 {
  .box {
    font-size: $fontSize + 2px;
    color: $themeColor;
  }
  .tips {
    font-size: $fontSize;
    color: lighten($themeColor, 40%);
  }
}
```

**6-import-module2**

```scss
.module2 {
  .box {
    font-size: $fontSize + 4px;
    color: $themeColor;
  }
  .tips {
    font-size: $fontSize + 2px;
    color: lighten($themeColor, 20%);
  }
}
```

编译结果：

```css
.module1 .box {
  font-size: 16px;
  color: blue;
}

.module1 .tips {
  font-size: 14px;
  color: #ccccff;
}

.module2 .box {
  font-size: 18px;
  color: blue;
}

.module2 .tips {
  font-size: 16px;
  color: #6666ff;
}
```

## 10.EST 的使用

http://ecomfe.github.io/est/

## CSS 预处理器真题

### 常见的预处理器

- Less（Node.js)
- Sass (Ruby 有 Node 版本)

### 预处理器的作用

- 帮助更好的组织 CSS 代码
- 提高代码的复用率
- 提升可维护性 【减少代码改动量】

### 预处理器优缺点

**优点：**提高代码的复用率和可维护性

**缺点：**需要引入编译过程，有一定的学习成本
