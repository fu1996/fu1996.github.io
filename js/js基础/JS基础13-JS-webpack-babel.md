---
authors: junkui
title: JS基础13-JS-webpack-babel
categories:
  - js
tags:
  - js

date: 2021-02-06 20:18:17
---

# webpack 和 babel

## 1.webpack 相关包

```js
  "devDependencies": {
    "html-webpack-plugin": "^3.2.0",
    "json-server": "^0.16.3",
    "webpack": "^4.41.0",
    "webpack-cli": "^3.3.9",
    "webpack-dev-server": "^3.8.2"
  }
```

## 2.webpack 的配置

```js
const path = require("path");
const HTMLWebpackPlugin = require("html-webpack-plugin"); // 自动把打包的js 挂在到 html 文件上
const srcPath = path.join(__dirname, "03-webpack-demo", "src", "index.js");
console.log("打包路径", srcPath);
module.exports = {
  mode: "development",
  entry: srcPath,
  output: {
    filename: "bundle.js",
    path: path.join(__dirname, "dist"),
  },
  plugins: [
    new HTMLWebpackPlugin({
      template: path.join(__dirname, "03-webpack-demo", "src", "index.html"),
      filename: "index.html",
    }),
  ],
  devServer: {
    port: 3001,
    contentBase: path.join(__dirname, "dist"),
  },
};
```

## 稍后搞个详解
