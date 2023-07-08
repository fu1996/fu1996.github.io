---
authors: junkui
title: 05-ts中的泛型
categories:
  - ts
tags:
  - ts
  - 疑问

date: 2020-12-31 09:57:23
---

# 泛型

**一个组件可以支持多种类型的数据，用户可以使用自己的数据类型来使用组件**

## 1.泛型版 Hello World

复读机的功能

```typescript
function identity(arg: number): number {
  return arg;
}
// 或者将number 类型改为 any类型 这都没有类型校验了 不能算是TS了
function identityAny(arg: any): any {
  return arg;
}

// 类型变量：记录传入的参数类型 把这个参数类型当成一个变量使用
function identityTs<T>(arg: T): T {
  return arg;
}
```

identity 添加了类型变量`T`，`T`来捕捉用户输入的类型【比如：number】，之后就可以使用这个类型，`T`就存储了这个 `number`类型，之后再次使用`T`当作返回值类型的时候，就可以知道参数类型和返回值的类型是相同的。

泛型不同于`any`，不会丢失信息，可以保持准确性，传入数值类型并返回类型。

## 2.使用泛型函数

### **传入所有的参数，包含类型参数：**

```typescript
// 明确的指定了T是string类型，并做为一个参数传给函数，使用了<>括起来而不是()
let output = identity<string>("myString"); // type of output will be 'string'
```

### 利用 ts 的类型推断——自动根据类型进行推断

```typescript
let output = identity("myString"); // type of output will be 'string'
```

## 3.泛型变量的使用

泛型变量可以记录传入参数的类型，但是类型和类型之间的属性有所不同，比如`number`和数组，number 类型是没有`length`的属性的，而数组是有滴。变量类型是记录了传入函数的类型，但是传入的类型的属性是否存在也是需要判断的，这样才是 TS 类型校验的厉害之处。

- 把输入的数据的类型当作变量来用
- 根据不同的变量类型来校验不同的属性

如果传入的变量类型是`number` 校验 number 是没有 length 属性的。就会提示出错误

```typescript
function loggingIdentity<T>(arg: T): T {
  console.log(arg.length); // Error: T doesn't have .length
  return arg;
}
```

将传入的**变量类型**T>的**参数类型对应的是[arg]**改为数组

```typescript
function loggingIdentity<T>(arg: T[]): T[] {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
```

或者是使用数组关键字来定义数组

```typescript
function loggingIdentity<T>(arg: Array<T>): Array<T> {
  console.log(arg.length); // Array has a .length, so no more error
  return arg;
}
```

## 4.泛型函数和泛型接口

### 泛型函数

**泛型函数的类型相对于非泛型函数来说，就是多了一个变量类型在最前面**

```typescript
function identity<T>(arg: T): T {
  return arg;
}
// 从冒号 开始 到等号之前结束都是类型 定义
let myIdentity: <T>(arg: T) => T = identity; // var myIdentity = identity;
```

变量类型的根本含义，就是把这个类型赋值为一个变量。所以，只要上下问的变量值一样就行，就可以保证类型的统一。

```typescript
function identity<T>(arg: T): T {
  return arg;
}

let myIdentity: <U>(arg: U) => U = identity;
```

### 使用对象描述泛型函数

对象的冒号后面表示的返回值的类型，哈哈，当然可以描述函数返回值的类型呢。

比如：

```typescript
function Demo<T>(args: T): T[] {
  return [args, args];
}
// 这应该很清楚的类型定义了
let newDemo: { <T>(arg: T): T[] } = Demo;
```

对象和接口又是很相似的，So：【推荐手敲一下，下面代码由浅入深的拓展】

```typescript
// 俺在弄一个接口
interface Demo2 {
  <U>(a: U): U[];
}

let newDemo2: Demo2 = Demo;

// 在扩展一下 对接口是用 变量类型 ：将变量当作类型传给接口 美滋滋
interface Demo3<Y> {
  (b: Y): Y[];
}

// 此处传入的 变量类型是 number 则说明改函数 接受的变量只能是number
let newDemo3: Demo3<number> = (arg: number): number[] => {
  return [arg];
};
// 将变量类型前后改不统一
let newDemo4: Demo3<string> = (arg: number): number[] => {
  return [arg];
};
let newDemo5: Demo3<number> = (arg: string): string[] => {
  return [arg];
};

// 定义前后不统一类型的接口 传入任何类型 都返回 string
interface Demo4<T> {
  (arg: T): string;
}
// 为啥 null 和 number 类型兼容呢？
const newDemo6: Demo4<null> = (list: number) => {
  return "string";
};
// string 和 number 不兼容
const newDemo7: Demo4<string> = (list: number) => {
  return "string";
};
```

### 把泛型加入 class 中——和泛型函数差不多

泛型类看上去与泛型接口差不多。 泛型类使用（ `<>`）括起泛型类型，跟在类名后面。

```typescript
class GenericNumber<T> {
  zeroValue: T;
  add: (x: T, y: T) => T;
}

let myGenericNumber = new GenericNumber<number>();
myGenericNumber.zeroValue = 0;
myGenericNumber.add = function (x, y) {
  return x + y;
};
```

`GenericNumber`类的使用是十分直观的，并且你可能已经注意到了，没有什么去限制它只能使用`number`类型。 也可以使用字符串或其它更复杂的类型。

```typescript
let stringNumeric = new GenericNumber<string>();
stringNumeric.zeroValue = "";
stringNumeric.add = function (x, y) {
  return x + y;
};

console.log(stringNumeric.add(stringNumeric.zeroValue, "test"));
```

与接口一样，直接把泛型类型放在类后面，可以帮助我们确认类的所有属性都在使用相同的类型。

我们在[类](https://www.tslang.cn/docs/handbook/classes.html)那节说过，类有两部分：静态部分和实例部分。 `泛型类指的是实例部分的类型`，所以`类的静态属性不能使用这个泛型类型`。

## 5.泛型约束

因为泛型是类型的变量，而类型的属性又多种多样，有简单类型啊，string number null 等，有复杂类型数组，对象。

因为类型相差太大，属性很难达到统一，要么就是像上面的案例一样，直接指明泛型的类型是数组【太单调了些】，这个扩展性也太差了。所以呢，就要对要使用的泛型增加一些约束。这也是自定义数据类型的基础吧？？

实现一个限制泛型：电脑约束

```typescript
// 定义泛型约束：控制泛型中应该 有哪些属性
interface Computer {
  usb: number;
  categories: string;
  price?: number;
}
// 使用 extends 将该约束 应用到泛型 上
function Apple<T extends Computer>(instance: T): string {
  return `创建一个${instance.categories}苹果电脑实例，${
    instance.price ? `价格为:${instance.price}元` : "无报价"
  },带有${instance.usb}个usb接口的属性`;
}

const Air = {
  usb: 4,
  categories: "Air",
};
const myAir = Apple(Air);
console.log(myAir); // 创建一个Air苹果电脑实例，无报价,带有4个usb接口的属性

const Pro = {
  usb: 5,
  categories: "Pro",
  price: 12999,
};
const myPro = Apple(Pro);
console.log(myPro); // 创建一个Pro苹果电脑实例，价格为:12999元,带有5个usb接口的属性
```

### 在泛型约束中使用类型参数 【失败，不理解】

声明一个类型参数，被另外一个类型参数所约束。

你可以声明一个类型参数，且它被另一个类型参数所约束。 比如，现在我们想要用属性名从对象里获取这个属性。 并且我们想要确保这个属性存在于对象 `obj`上，因此我们需要在这两个类型之间使用约束。

```ts
function getProperty(obj: T, key: K) {
  return obj[key];
}

let x = { a: 1, b: 2, c: 3, d: 4 };

getProperty(x, "a"); // okay
getProperty(x, "m"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.
```

## 6.利用泛型约束创建泛型工厂函数

使用泛型来创建工厂函数，需要使用构造函数的 class 类型

```ts
function create<T>(c: { new (): T }): T {
  return new c();
}

class Beekeeper {
  hasMask: boolean;
}

class Zookeeper {
  nametag: string;
}
class Animal {
  numLegs: number;
}

class Bee extends Animal {
  keeper: Beekeeper;
}

class Lion extends Animal {
  keeper: Zookeeper;
}
class UFO {
  keeper: Zookeeper;
}
class UFO2 {
  keeper: Zookeeper;
  numLegs: number;
}
// 泛型约束 是 Animal 有numlegs属性才行
function createInstance<A extends Animal>(c: new () => A): A {
  return new c();
}

createInstance(Lion).keeper.nametag;
createInstance(Bee).keeper.hasMask;
createInstance(UFO); // 主要原因是 不 满足泛型约束 没有 numLegs 属性
// 想要该属性的方法：1.继承自 Animal 2 .自身增加该属性
createInstance(UFO2); // 满足泛型约束 有 numLegs 属性
```

在 TypeScript 使用泛型创建工厂函数时，需要引用构造函数的类类型。比如，

```ts
function create<T>(c: { new (): T }): T {
  return new c();
}
```
