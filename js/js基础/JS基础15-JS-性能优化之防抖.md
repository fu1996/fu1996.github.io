---
authors: junkui
title: JS基础15-JS-性能优化之防抖
categories:
  - js
tags:
  - js

date: 2021-02-08 17:45:40
---

# 防抖 debounce

## 1.目的和场景

- 监听一个用户框的频繁输入，如校验手机号啊，文字变化后会触发 change 事件
- 直接用 keyup 事件，则会频繁触发 change 事件
- 防抖：用户输入结束或者暂停时候，才会触发 change 事件，减少网络请求

## 2.代码演示：

```js
<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="UTF-8" />
    <meta name="viewport" content="width=device-width, initial-scale=1.0" />
    <title>防抖</title>
  </head>
  <body>
    <input type="text" id="input1" />
    <script src="./debounce.js"></script>
  </body>
</html>

```

```js
const input1 = document.getElementById("input1");
// let timer = null;
// input1.addEventListener("input", (e) => {
//   console.log("timer", timer);
//   if (timer) {
//     clearTimeout(timer);
//   }
//   //   下一次的输入 会把上一次的没有执行的timer 清除掉
//   timer = setTimeout(() => {
//     console.log("调用接口", e.target.value);
//     timer = null;
//   }, 300);
// });

function debounce(fn, delay = 500) {
  let timer = null;
  return () => {
    if (timer) {
      clearTimeout(timer);
    }
    timer = setTimeout(() => {
      //   fn();
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

input1.addEventListener(
  "input",
  debounce(() => {
    console.log("接口调用", input1.value);
  }, 500)
);
```

# 节流 throttle

## 1.目的和场景

- 拖拽一个元素时，要随时获取到该元素被拖拽的位置
- 直接用 drag 事件，则会频繁触发，很容易造成卡顿
- 节流：无论拖拽速度多快，都会每隔 100ms 触发一次

## 2.代码演示：

```html
    <style>
      #div1 {
        border: 2px solid #ccc;
        width: 200px;
        height: 100px;
        background-color: blue;
      }
    </style>
  </head>
  <body>
    <div id="div1" draggable="true">可拖拽</div>
    <script src="./throttle.js"></script>
  </body>
```

```js
const div1 = document.getElementById("div1");
// let timer = null;
// div1.addEventListener("drag", function (e) {
//   if (timer) {
//     return;
//   }
//   timer = setTimeout(() => {
//     console.log(e.offsetX, e.offsetY);
//     timer = null;
//   }, 100);
// });

//  正常写法下 会接受 event 参数
// div1.addEventListener("drag", function (event) {});

// 封装节流函数
function throttle(fn, delay = 500) {
  let timer = null;
  return function () {
    if (timer) {
      return;
    }
    timer = setTimeout(() => {
      // 这个 this 时 返回的这个函数的作用域
      fn.apply(this, arguments);
      timer = null;
    }, delay);
  };
}

div1.addEventListener(
  "drag",
  throttle(function (e) {
    console.log(e.offsetX, e.offsetY);
  }, 100)
);
```

- 注意：`fn.apply(this.arguments)`
