---
authors: junkui
title: 01-ts基础类型
categories:
  - ts
tags:
  - ts

date: 2020-12-29 11:35:21
---

# 基础类型

## 1.js 中的 6 大基础类型 和 2 个复杂类型

简单类型：一句话记住：`nnusb --s` 纳尼 usb

```javascript
null number undefined string boolean --ES6新增 symbol
```

复杂类型：对象和数组

## 2. ts 中支持和 js 一样的数据类型，并且还新增了枚举等

### 1.boolean 布尔类型

```js
let isDone: boolean = false;
```

### 2.number 数字类型

```tsx
let decLiteral: number = 6;
let hexLiteral: number = 0xf00d;
let binaryLiteral: number = 0b1010;
let octalLiteral: number = 0o744;
```

- ts 中的所有数字都是浮点数，浮点数的类型都是 number
- 支持二进制 十进制 、八进制字面量和十六进制字面量

### 3.string 字符串类型

```ts
let name: string = `Gene`;
let age: number = 37;
let sentence: string = `Hello, my name is ${name}.

I'll be ${age + 1} years old next month.`;
```

### 4.数组的两种方法

**第一种：**元素类型后面接上 `[]`，表示由此类型元素组成的一个数组：

```tsx
let list: number[] = [1, 2, 3];
```

**第二种：**数组泛型，`Array<元素类型>`：

```typescript
let list: Array<number> = [1, 2, 3];
```

### 5.元组类型 Tuple 【类比 python】

**元组：**允许表示一个`已知数量和类型`的数组，各元素的类型不必相同，类比上面数组。

```typescript
// Declare a tuple type
let x: [string, number];
// Initialize it
x = ["hello", 10]; // OK
// Initialize it incorrectly
x = [10, "hello"]; // Error
```

当使用可访问的元素时，会得到正确的类型，以及可以使用该类型对应的方法

```typescript
console.log(x[0].substr(1)); // OK
console.log(x[1].substr(1)); // Error, 'number' does not have 'substr'
```

当访问越界元素时候，会使用`联合类型`来判断

```typescript
x[3] = "world"; // OK, 字符串可以赋值给(string | number)类型

console.log(x[5].toString()); // OK, 'string' 和 'number' 都有 toString

x[6] = true; // Error, 布尔不是(string | number)类型
```

### 6.enum 枚举类型 【ts 新增】

默认从 0 开始对枚举成员进行编号

```typescript
enum Color {
  Red,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

自定义编号的起始数值

```typescript
enum Color {
  Red = 1,
  Green,
  Blue,
}
let c: Color = Color.Green;
```

全部自定义数值

```typescript
enum Color {
  Red = 1,
  Green = 2,
  Blue = 4,
}
let c: Color = Color.Green;
```

枚举类型的键值映射

```typescript
enum Color {
  Red = 1,
  Green,
  Blue,
}
let colorName: string = Color[2];

console.log(colorName); // 显示'Green'因为上面代码里它的值是2
```

### 7.Any 任意类型 不限制

```typescript
let notSure: any = 4;
notSure = "maybe a string instead";
notSure = false; // okay, definitely a boolean
```

在对现有代码进行改写的时候，`any`类型是十分有用的，它允许你在编译时可选择地包含或移除类型检查。 你可能认为 `Object`有相似的作用，就像它在其它语言中那样。 但是 `Object`类型的变量只是允许你给它赋任意值 - 但是却不能够在它上面调用任意的方法，即便它真的有这些方法：

```typescript
let notSure: any = 4;
notSure.ifItExists(); // okay, ifItExists might exist at runtime
notSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)

let prettySure: Object = 4;
prettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.
```

### 8.Void 无任何类型

当函数没有返回值时候，通常返回值类型就是 void

```typescript
function warnUser(): void {
  console.log("This is my warning message");
}
```

声明一个`void`类型的变量，只能为它赋予`undefined`和`null`

```typescript
let unusable: void = undefined;
```

### 9.null 和 undefined

TypeScript 里，`undefined`和`null`两者各自有自己的类型分别叫做`undefined`和`null`。 和 `void`相似，它们的本身的类型用处不是很大

```typescript
// Not much else we can assign to these variables!
let u: undefined = undefined;
let n: null = null;
```

**注意：**默认情况下，null 和 undefined 是所有类型的子类型，比如：`null`和`undefined`赋值给`number`类型的变量。

然而，当你指定了`--strictNullChecks`标记，`null`和`undefined`只能赋值给`void`和它们各自。 这能避免 *很多*常见的问题。 也许在某处你想传入一个 `string`或`null`或`undefined`，你可以使用联合类型`string | null | undefined`。 再次说明，稍后我们会介绍联合类型。

> 注意：我们鼓励尽可能地使用`--strictNullChecks`

### 10.never 类型

`never`类型表示的是那些永不存在的值的类型

1. 总是抛出异常
2. 根本就不会有返回值的函数表达式或箭头函数表达式的返回值类型
3. 当变量被永不为真的类型保护所约束时，也可能为`never`类型

```typescript
// 返回never的函数必须存在无法达到的终点
function error(message: string): never {
  throw new Error(message);
}

// 推断的返回值类型为never
function fail() {
  return error("Something failed");
}

// 返回never的函数必须存在无法达到的终点
function infiniteLoop(): never {
  while (true) {}
}
```

`never`类型是任何类型的子类型，也可以赋值给任何类型；然而，*没有*类型是`never`的子类型或可以赋值给`never`类型（除了`never`本身之外）。 即使 `any`也不可以赋值给`never`。

### 11.Object 对象类型

`object`表示非原始类型，也就是除`number`，`string`，`boolean`，`symbol`，`null`或`undefined`之外的类型。

使用`object`类型，就可以更好的表示像`Object.create`这样的 API。

```typescript
declare function create(o: object | null): void;

create({ prop: 0 }); // OK
create(null); // OK

create(42); // Error
create("string"); // Error
create(false); // Error
create(undefined); // Error
```

### 12.类型断言 你知道自己在干啥

某些时候你比 TypeScript 更了解某个值的类型详细信息。你可以通过`类型断言`告诉编译器，你知道自己在干啥，不需要 typescript 帮忙进行检查类型。

#### 1.尖括号 语法断言

```typescript
let someValue: any = "this is a string";

let strLength: number = (<string>someValue).length;
```

#### 2.`as` 语法

```typescript
let someValue: any = "this is a string";

let strLength: number = (someValue as string).length;
```

两种方法等价，然而，当你在 TypeScript 里使用 JSX 时，只有 `as`语法断言是被允许的。
