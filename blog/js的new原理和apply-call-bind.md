---
authors: junkui
title: js的new原理和apply-call-bind
categories:
  - js
  - work
tags:
  - js
  - work
  - 前端

date: 2021-02-26 17:19:33
---

# js 的 new 原理和 apply-call-bind

## 1.new 原理

### 使用`new`构造函数创建对象

```js
function Person() {
  this.name = "Jack";
}
var p = new Person();
console.log(p.name); // Jack
```

1. 创建了一个新的对象【p】
2. 这个对象的属性和方法【作用域】 要从构造函数中获取【this 要指向新的对象】
3. 执行一下构造函数的代码【为新对象`p`添加属性】
4. 返回这个新对象`p`

### 不使用`new`直接创建

```js
function Person() {
  this.name = "Jack";
}
var p = Person(); // 这就变成了一个函数的执行了
console.log(p); // undefined
console.log(name); // Jack
console.log(p.name); // 'name' of undefined
```

不使用 new 的话，就变成了一个函数的执行了，默认的 this 指向了 `window`

### 既然 new 是创建了一个对象 我们手动返回一个对象

```js
function Person() {
  this.name = "Jack";
  return { age: 18 };
}
var p = new Person();
console.log(p); // {age: 18}
console.log(p.name); // undefined
console.log(p.age); // 18
```

当返回的是一个对象的时候，new 直接返回了这个对象，而不是通过 new 执行生成的这个对象。【new 比较懒，先判断有现成的没，没有的话再自己创造】

### 使用 new 不返回一个对象

```js
function Person() {
  this.name = "Jack";
  return "tom";
}
var p = new Person();
console.log(p); // {name: 'Jack'}
console.log(p.name); // Jack
```

哈哈，真的是懒，因为我们返回的不是一个对象了，new 没办法了，只能执行自己的功能了，创建一个新的对象。

### 总结：

**new 关键词 执行之后总是会返回一个对象，要么是实例对象，要么是 return 返回的对象**

## 2. apply call bind 的用法

```js
func.call(thisArg, param1, param2, ...)
func.apply(thisArg, [param1,param2,...])
func.bind(thisArg, param1, param2, ...)
```

改变函数 func 中的 this 的指向，如果 func 中没有 this 的话，没啥用了。

原理：**执行的还是 func 的代码，但是里面的 this 指向的是 thisArg**

```js
function func(text){
    console.log(text) // '111'
    return '123' // 控制台打印undefined 因为这个函数没有返回值
}
func.call({},'111'
```

### 相同点

- 都可以改变 this 的指向

### 异同点

1. 传参不同，apply 的是数组，call 和 bind 的正常传参
2. 调用结果不同，apply 和 call 会立即执行，bind 会返回一个新的函数

### 目的

目的就是为了节省内存空间，节约重复定义。不想再定一个功能相同的函数了，只是使用这个方法的对象改变了而已。

**PS:**生活中我不经常做饭，家里没有锅，周末突然想给自己做个饭尝尝。但是家里没有锅，而我又不想出去买，所以就问隔壁邻居借了一个锅来用，这样做了饭，又节省了开销，一举两得。

```js
const cooker = {
  name: "厨师",
  cook: function (food) {
    return `${this.name} make ${food}`;
  },
};

console.log(cooker.cook("pizza")); // 厨师 make pizza

const me = {
  name: "fjk",
};
console.log(cooker.cook.call(me, "banana")); // fjk make banana
```

## 3.改变 this 指向的应用场景

### 判断数据类型

Object.prototype.toString 来判断类型是最合适的，借用它我们几乎可以判断所有类型的数据类型

```js
function getType(obj) {
  let type = typeof obj;
  if (type !== "object") {
    return type;
  }
  return Object.prototype.toString.call(obj).replace(/^$/, "$1");
}
```

### 类数组借用方法

```js
var arrayLike = {
  0: "java",
  1: "script",
  length: 2,
};
Array.prototype.push.call(arrayLike, "jack", "lily");
console.log(typeof arrayLike); // 'object'
console.log(arrayLike);
// {0: "java", 1: "script", 2: "jack", 3: "lily", length: 4}
```

### 获取数组的最大最小值

```js
let arr = [13, 6, 10, 11, 16];
const max = Math.max.apply(Math, arr);
const min = Math.min.apply(Math, arr);

console.log(max); // 16
console.log(min); // 6
```

### 继承

## 4.手写方法

### new 的实现

```js
function myNew(fn, ...args) {
  if (typeof fn !== "function") {
    throw new Error("必须是一个函数类型的");
  }
  //   创建一个新对象
  const newObj = {};
  //   是新对象的属性可以访问 构造函数的属性
  newObj.__proto__ = Object.create(fn.prototype);
  //   对新对象 执行构造函数 对 newObj 进行一些属性赋值操作
  const result = fn.call(newObj, ...args);
  // 判断返回的结果是不是对象 并且不会为 null
  const isObj = typeof result === "object" && result !== null;
  const isFunc = typeof result === "function";
  return isObj || isFunc ? result : newObj;
}

function Father(name) {
  this.name = name;
}

const p = myNew(Father, "haha");
console.log(p.name);
```

### call 的实现 原理 和背景

```js
function Car(name) {
  this.name = name;
  this.run = function (speed) {
    return this.name + "is running " + speed;
  };
}
const car = new Car("奥迪");
console.log(car.run("slow")); // 此时的 this 就会指向 car 这个实例

// call 和 apply的实现原理 是因为 实例对象调用方法时候，
// this 的指向会成为实例调用者 类似于 car.run() run 的this 会指向car
Function.prototype.myCall = function (context, ...args) {
  //创建一个调用者的上下文 默认肯定是传进来的 context
  const caller = context || window;
  //   把 原来的调用者 抽离出来 比如 cook.call(obj)
  //   此时的this 就相当于 cook 这个函数
  //   相当于把原来的函数 绑定到了 现在的 调用者上了 改变了 调用者
  caller.fn = this;
  console.log(this);
  //   返回调用者调用函数的调用结果
  const result = eval("caller.fn(...args)");
  delete caller.fn;
  return result;
};

const cooker = {
  name: "cooker",
  cook: function (food) {
    return this.name + "is making" + food;
  },
};

const res = cooker.cook.myCall({ name: "fjk" }, "banana");
console.log(res);
```

### apply 的实现和 call 差不多 只不过参数是数组

```js
Function.prototype.myApply = function (context, args) {
  let context = context || window;
  context.fn = this;
  let result = eval("context.fn(...args)");
  delete context.fn;
  return result;
};
```

### bind 的原理 是返回一个新的函数

```js
Function.prototype.myBind = function (context, ...args) {
  // 首先 bind 的 调用者 需要必须是一个函数
  if (typeof this !== "function") {
    throw new Error("必须是一个函数");
  }
  //   此处的this 是原函数 xxx.bind() 中的 xxx
  const self = this; // cook
  const newBind = function () {
    // console.log(arguments);
    // const arg = args.concat(Array.prototype.slice.call(arguments));
    // console.log(arg);
    return self.apply(
      this instanceof self ? this : context,
      args.concat(Array.prototype.slice.call(arguments))
    );
  };
  //   原有函数的原型链的属性 挂在 要返回的函数下
  if (this.prototype) {
    newBind.prototype = Object.create(this.prototype);
  }
  return newBind;
};

const cooker = {
  name: "cooker",
  cook: function (food, ...args) {
    console.log(args);
    return this.name + "  is making   " + food + args.join("-");
  },
};

const aNewFunc = cooker.cook.myBind({ name: "fjk" }, "banana", "apple");
console.log(aNewFunc(11));
```
