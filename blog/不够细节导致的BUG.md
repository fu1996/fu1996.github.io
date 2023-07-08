---
authors: junkui
title: 不够细节导致的BUG
categories:
  - js
  - work
tags:
  - js
  - work
  - 前端

date: 2021-04-02 14:06:21
---

# 细节决定 BUG 数量

**此前工作很少总结，都是直接线上调试，遇到问题解决问题**

## 1.引用类型 和 深拷贝 和 纯函数

### 场景描述：

有一个动态渲染的数组，数组里面存储的是对象的形式，例如：

```json
{
  "list": [{ "key": "||" }, { "key": "&&" }],
  "id": "3"
}
```

每次提交给后端数据时需要对数组的最后一项的 key 进行置空。同时该数据会同步存到 redux 中。

### 无深拷贝 不纯的函数

```js
const deleteLastItemType = (list = []) => {
  if (isEmpty(list)) {
    return [];
  }
  // 此处的引用还是 redux 中存储的引用
  const lastItem = list.pop();
  lastItem.key = "";
  return [...list, lastItem];
};

const list = [{ key: "||" }, { key: "&&" }];
console.log(deleteLastItemType(list)); // [ { key: '||' }, { key: '' } ]
console.log(list); // [ { key: '||' } ] 真正的存在redux 中的数据
```

给后端的数据对象中的 list 每次都会经过这个`deleteLastItemType`处理，因为没有做深拷贝，导致用户的每次提交，界面上都会少一个元素。【符合 pop 的作用】

### 有深拷贝 纯函数

```js
const { clone, isEmpty } = require("ramda");
const deleteLastItemDeepClone = (list = []) => {
  if (isEmpty(list)) {
    return [];
  }
  // 此处的引用还是 redux 中存储的引用
  const newLastItem = clone(list);
  const lastItem = newLastItem.pop();
  lastItem.key = "";
  return [...newLastItem, lastItem];
};

const list2 = [{ key: "||" }, { key: "&&" }];
console.log(deleteLastItemDeepClone(list2)); // [ { key: '||' }, { key: '' } ]
console.log(list2); // [ { key: '||' }, { key: '&&' } ]
```

## 2.增加默认值的使用 可以减少 if 判断的条件

```js
const obj = { b: "1" };
const { a = {}, b } = obj;
console.log(a); // {} 不会是 undefined
console.log(b); // 1
```

## 3. lodash 中的 isEmpty 和 ramda 中的 isEmpty 对 undefined 结果不同

### lodash 版本

```js
const { isEmpty } = require("lodash");

console.log(isEmpty(undefined)); // true 【注意】
console.log(isEmpty({})); // true
console.log(!undefined); // true
console.log(![]); // false
console.log(isEmpty([])); // true
```

### ramda 版本

```js
const { isEmpty } = require("ramda");
console.log(isEmpty(undefined)); // false 【注意】
console.log(isEmpty({})); // true
console.log(!undefined); // true
console.log(![]); // false
console.log(isEmpty([])); // true
```

## 4.边界判断条件

读取属性可以使用 `?.`和`??`但是日后调试不是很方便，没有报错不容易发现问题

从数组中取出某一项的并对其进行数据修改的时候

1. 数组是否为空
2. 取出来的项是否存在
3. 该项的某些属性是否存在

进行 if 判断的时候 有 null 和 undefined
