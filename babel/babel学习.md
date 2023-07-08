---
authors: junkui
title: babel学习
categories:
  - js
  - babel
tags:
  - js
  - babel
date: 2021-08-21 22:17:14
---

# babel 是什么？

一个 JavaScript 的编译器

babel 推荐的小编译项目

https://github.com/thejameskyle/the-super-tiny-compiler

code 直接转换为 AST 网站

https://astexplorer.net/

# 编译器的组成部分 解析 -> 转换 -> 代码生成

1. 解析：将原始代码 转换为 更抽象的代码 【AST】
2. 转换: 根据抽象的代码来执行该代码希望执行的任何操作
3. 代码生成：采用代码的转换规则 来生成新的代码

```js
// Babel 输入： ES2015 箭头函数
[1, 2, 3].map((n) => n + 1);

// Babel 输出： ES5 语法实现的同等功能
[1, 2, 3].map(function (n) {
  return n + 1;
});
```

Babel 其实做的就是一个编译器的工作，是一个工具链，主要用于将采用 ECMAScript 2015+ 语法编写的代码转换为向后兼容的 JavaScript 语法，以便能够运行在当前和旧版本的浏览器或其他环境中

# Babel 官网使用方法

## 插件和预设的概念

单个属性的支持是 插件，例如箭头函数的支持插件是：`@babel/plugin-transform-arrow-functions`

多个插件的合集叫 预设：内置了 一些插件功能的支持

## 演示

1. 配置 babel 运行环境

```shell
npm install --save-dev @babel/core @babel/cli @babel/preset-env
```

2. babel 配置文件

版本 7.8.0 以上使用 `babel.config.json`

```json
{
  "presets": [
    [
      "@babel/env",
      {
        "targets": {
          "edge": "17",
          "firefox": "60",
          "chrome": "67",
          "safari": "11.1"
        },
        "useBuiltIns": "usage",
        "corejs": "3.6.5"
      }
    ]
  ]
}
```

7.8.0 以下使用 `babel.config.js`

```js
const presets = [
  [
    "@babel/env",
    {
      targets: {
        edge: "17",
        firefox: "60",
        chrome: "67",
        safari: "11.1",
      },
      useBuiltIns: "usage",
      corejs: "3.6.4",
    },
  ],
];

module.exports = { presets };
```

3. src 文件下的示例代码

```js
const add = (a, b) => a + b;

Promise.resolve().finally();

const a = "a";

const b = `${a}`;
```

4. 安装箭头函数转换插件

```shell
npm install --save-dev @babel/plugin-transform-arrow-functions
```

5. 运行 babel 对 src 文件夹 进行编译 到 lib 目录

```shell
npx babel src --out-dir lib --plugins=@babel/plugin-transform-arrow-functions
```

lib 目录结果：

```js
// 转换前 const add = (a, b) => a + b;
const add = function add(a, b) {
  return a + b;
};
```

使用大量新特性的话 需要一个一个添加插件吗？ 当然是 NO

使用插件的预设集合

编译命令

```shell
npx babel src --out-dir lib --presets=@babel/env
```

结果：

```js
"use strict";

var add = function add(a, b) {
  return a + b;
};

Promise.resolve()["finally"]();
var a = "a";
var b = "".concat(a);
```
