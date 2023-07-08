---
authors: junkui
title: normalizr格式化数据利器
categories:
  - js
  - work
tags:
  - js
  - work
  - normalizr

date: 2021-03-17 09:50:42
---

# normalizr 使用说明

## 1.基础使用

### 查找规则

```js
const { normalize, schema } = require("normalizr");

const myData = {
  userss: [
    {
      id: 1,
      name: "fjk",
    },
    {
      id: 2,
    },
  ],
};
// myUser 是将来生成的对象的键
const user = new schema.Entity("myUser");
// 定义查找规则
const mySchema3 = { users: [user], userss: [user] };

// 因为 键 users 在 myData 中匹配不到 所以为空
// 键 userss 可以在 myData 中匹配到 所以可以查找到
const normalizedData3 = normalize(myData, mySchema3);
// 打印结果
console.log(normalizedData3.entities); // { myUser: { '1': { id: 1, name: 'fjk' }, '2': { id: 2 } } }
```

### 对比来理解

```js
const { normalize, schema } = require("normalizr");

const myData = {
  userss: [
    {
      id: 1,
      name: "fjk",
    },
    {
      id: 2,
    },
  ],
};

const user = new schema.Entity("myUser");
const mySchema = { users: [user] };
const mySchema2 = { userss: [user] };
const mySchema3 = { users: [user], userss: [user] };

const normalizedData = normalize(myData, mySchema);
const normalizedData2 = normalize(myData, mySchema2);
const normalizedData3 = normalize(myData, mySchema3);
console.log(normalizedData.entities); // {} 因为 键 users 在 myData 中匹配不到 所以为空
// 键 userss 可以在 myData 中匹配到 所以可以查找到
console.log(normalizedData2.entities); // { myUser: { '1': { id: 1, name: 'fjk' }, '2': { id: 2 } } }
console.log(normalizedData3.entities); // { myUser: { '1': { id: 1, name: 'fjk' }, '2': { id: 2 } } }
```

## 2.数组项的使用

```js
const { normalize, schema } = require("normalizr");

const data = [
  { id: "123", name: "Jim" },
  { id: "456", name: "Jane" },
];

const userSchema = new schema.Entity("userArray");

const userListScheme = new schema.Array(userSchema);
// 快捷写法
// const userListScheme = [userSchema]

// 把数组的项 当作一个数据 来提取出来成为一个对象 默认其 id 为键，值为数组项
const norData = normalize(data, userListScheme);
console.log(norData.entities);
// {
//   userArray: {
//     '123': { id: '123', name: 'Jim' },
//     '456': { id: '456', name: 'Jane' }
//   }
// }
```

## 3.对象的使用

根据已提供数据的某一项的值作为键来使用

举例

```js
const data = [
  { id: 1, type: "admin", name: "fjk" },
  { id: 2, type: "user" },
];
```

想根据 data 数据中的 type 项对应的值来当作键来使用

```js
const { normalize, schema } = require("normalizr");

const data = [
  { id: 1, type: "admin", name: "fjk" },
  { id: 2, type: "user", name: "f" },
];

const userSchema = new schema.Entity("users");

const admineSchema = new schema.Entity("myAdmin");

const myArray = new schema.Array(
  {
    admins: admineSchema,
    users: userSchema,
  },
  // 下面那个函数的匹配规则 对应上面对象中的键
  (input, parent, key) => `${input.type}s`
);
const myArray2 = new schema.Array(
  {
    admins: admineSchema,
    users: userSchema,
    fjk: new schema.Entity("fjks"),
    ff: new schema.Entity("f"),
  },
  // 此处返回的 input name 的取值 为 fjk 和 f 其中只有 fjk 可以对应上对象中的键
  // 应用 fjk:new schema.Entity('fjks') 的匹配规则 生成数据键名为 fjks 的数据
  (input, parent, key) => `${input.name}`
);
const norData = normalize(data, myArray);
console.log(norData.entities);
// {
//   myAdmin: { '1': { id: 1, type: 'admin', name: 'fjk' } },
//   users: { '2': { id: 2, type: 'user',name:'f' } }
// }
const norData2 = normalize(data, myArray2);
console.log(norData2.entities);
//  fjks: { '1': { id: 1, type: 'admin', name: 'fjk' } } }
```
