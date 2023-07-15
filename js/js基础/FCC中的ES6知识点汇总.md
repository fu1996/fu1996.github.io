---
authors: junkui
title: FCC中的ES6知识点汇总
categories:
  - js
tags:
  - js
  - ES6
slug: /
date: 2021-01-06 20:59:22
---

# ES6

## 1.const 和 let

## 2.箭头函数和默认值 以及 args

## 3.扩展运算符

## 4.对象属性冻结

## 5.解构赋值...

### 1.对象的结构赋值

```javascript
// 基础
const HIGH_TEMPERATURES = {
  yesterday: 75,
  today: 77,
  tomorrow: 80,
};

const { today, tomorrow } = HIGH_TEMPERATURES;

// 结构赋值 在提取值时分配新的变量名称  highToday = 77
const { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;

// 多层解构
const LOCAL_FORECAST = {
  yesterday: { low: 61, high: 75 },
  today: { low: 64, high: 77 },
  tomorrow: { low: 68, high: 80 },
};
const {
  today: { low: lowToday, high: highToday },
} = LOCAL_FORECAST;
```

### 2.数组的结构赋值

```javascript
// 基础
const [a, b] = [1, 2, 3, 4, 5, 6];
console.log(a, b); // 1, 2

// 逗号当作索引
const [a, b, , , c] = [1, 2, 3, 4, 5, 6];
console.log(a, b, c); // 1, 2, 5

// 应用 快速交换两个参数数值
let a = 8,
  b = 6;
[b, a] = [a, b];

//结合扩展运算符
const [a, b, ...arr] = [1, 2, 3, 4, 5, 7];
console.log(a, b); // 1, 2
console.log(arr); // [3, 4, 5, 7]

// 变成slice 方法
const source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];
function removeFirstTwo(list) {
  const [, , ...arr] = list;
  console.log(arr, list);
  return arr;
}
const arr = removeFirstTwo(source);
```

### 3.传参时候对参数进行解构

```JavaScript
const stats = {
  max: 56.78,
  standard_deviation: 4.34,
  median: 34.54,
  mode: 23.87,
  min: -0.75,
  average: 35.85
};

const half = ({max,min}) => (max+min) / 2.0;

```

## 6.模板字符串

## 7.对象速写

### 1.对象的键值上

```javascript
const getMousePosition = (x, y) => ({
  x: x,
  y: y,
});

const getMousePosition = (x, y) => ({ x, y });
```

### 2.对象存储的方法上

```javascript
// OLD
const person = {
  name: "Taylor",
  sayHello: function () {
    return `Hello! My name is ${this.name}.`;
  },
};

// NEW
const person = {
  name: "Taylor",
  sayHello() {
    return `Hello! My name is ${this.name}.`;
  },
};
```

## 8.类组件 替换构造函数

### 1.构造函数和类

```javascript
// 构造函数
var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
};
var zeus = new SpaceShuttle("Jupiter");

// 类 和python一样
var SpaceShuttle = function (targetPlanet) {
  this.targetPlanet = targetPlanet;
};
var zeus = new SpaceShuttle("Jupiter");
```

### 2.使用 setter 和 getter 【Java】

```javascript
// Only change code below this line
class Thermostat {
  constructor(temperature) {
    this._temperature = (5 / 9) * (temperature - 32);
  }
  get temperature() {
    return this._temperature;
  }
  set temperature(temperature) {
    this._temperature = temperature;
  }
}
// Only change code above this line

const thermos = new Thermostat(76); // Setting in Fahrenheit scale
let temp = thermos.temperature; // 24.44 in Celsius
thermos.temperature = 26;
temp = thermos.temperature; // 26 in Celsius
console.log(temp);
```

## 9.使用 script 的 type = module 模块化

### 1.export 和 import

```javascript
// 导入全部内容
import * as stringFunctions from "./string_functions.js";
// Only change code above this line

stringFunctions.uppercaseString("hello");
stringFunctions.lowercaseString("WORLD!");
```

### 2.默认导出

```JavaScript
// export default与var，let或const 不能一起使用
// named function
export default function add(x, y) {
  return x + y;
}

// anonymous function
export default function(x, y) {
  return x + y;
}
```

## 10.使用 promise 对象
