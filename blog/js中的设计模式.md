---
authors: junkui
title: js中的设计模式
categories:
  - js
  - work
tags:
  - js
  - work
  - 前端

date: 2021-04-07 19:37:22
---

# 常用设计模式

作者：holyZheng

[原文链接](https://github.com/HolyZheng/holyZheng-blog/issues/8)

## 1.设计模式的分类

### 1.创建型设计模式：专注于处理对象的创建

- Constructor 构造器模式
- Factory 工厂模式
- Singleton 单例模式
- builder 生成器模式

### 2.结构型设计模式：对象间组合，建立对象之间的关系

- Decorator 装饰者模式
- Facade 外观模式
- Flyweight 享元模式
- Adapter 适配器模式
- Proxy 代理模式

### 3.行为设计模式：简化和改善对象间的通信

- Mediator 中介者模式
- Observer 观察者模式

## 2.常用的设计模式

### 1.观察者模式

一个目标对象维持着一系列依赖于它的对象，将有关状态的任何变更自动通知观察者们，在观察者模式中，观察者需要直接订阅目标对象，观察者与目标对象之间有一定的依赖关系。

- 目标对象（被观察者）：维护一组观察患者，提供管理观察者的方法
- 观察者：提供一个更新接口，用于收到通知时，进行更新
- 具体目标对象：代表具体的目标对象
- 具体观察者：代表具体的观察者

```js
// 目标对象
class Subject {
  constructor() {
    // 观察者的列表
    this.observers = [];
  }
  addObserver(observer) {
    this.observers.push(observer);
  }
  removeObserver() {
    this.observers.pop();
  }
  notify() {
    this.observers.forEach((observer) => {
      observer.update();
    });
  }
}

// 观察者
class Observer {
  constructor() {
    console.log("Observer");
  }
  // 使用时会被具体update 方法覆盖
  update() {
    console.log("Observer-- update");
  }
}

// 具体目标对象 -自身状态更新通知其 观察者
class currentSubject extends Subject {
  constructor() {
    super();
  }
  // 其他自定义方法
  doSomeThing() {
    console.log("currentSubject change");
    this.notify(); // 通知其 观察者
  }
}

// 具体观察者 ——用来监控目标对象
class currentObserver extends Observer {
  constructor() {
    super();
  }

  update() {
    console.log("change");
  }
}

// 实体
let curSubject = new currentSubject();
// 监控者
let curObserver = new currentObserver();
// 实体添加监控者
curSubject.addObserver(curObserver);

// 手动 触发
curObserver.update();
// 由实体 变更触发
curSubject.doSomeThing();
```

### 2.发布订阅模式

发布订阅模式（vue 中的 eventBus，window 对象的 addEventListener）是对观察者模式的一种变体，一种实现。它使用一个主题/事件通道，介于发布者和订阅者之间，避免了发布者和订阅者之间的依赖关系。

```js
// 简单版的
class EventBus {
  constructor() {
    this.topics = {};
  }

  on(type, fn) {
    if (!this.topics[type]) {
      this.topics[type] = [];
    }
    this.topics[type].push(fn);
  }
  emit(type) {
    this.topics[type].forEach((fn) => fn());
  }
}

const easyBus = new EventBus();
easyBus.on("click", () => console.log("click"));
easyBus.emit("click");

// 复杂版的
class PubSub {
  constructor() {
    // 对象 记录 事件类型和对应的方法
    this.topics = {};
  }
  // 发布通知
  publish(topic, args) {
    if (!this.topics[topic]) {
      return;
    }
    let subscribers = this.topics[topic];
    subscribers.forEach((subscriber) => subscriber.update(args));
  }
  // 订阅
  subscribe(topic, subscriber) {
    if (!this.topics[topic]) {
      this.topics[topic] = [];
    }
    this.topics[topic].push(subscriber);
  }
  // 取消订阅
  unsubscribe(topic) {
    if (this.topics[topic] && this.topics[topic].length) {
      this.topics[topic].length = 0;
    }
  }
  // 一次性的订阅
  one(topic, args) {
    if (this.topics[topic] && this.topics[topic].length) {
      this.publish(topic, args);
      this.unsubscribe(topic);
    }
  }
}

class Sub {
  constructor() {
    this.update = function (data) {
      console.log("update", data);
    };
  }
}

let pubsub = new PubSub();

let subscribe = new Sub();

pubsub.subscribe("one", subscribe);

pubsub.publish("one", "some args");
pubsub.one("one", "some args");
```

### 3.工厂模式

工厂函数提供一个通用的接口来创建对象，我们可以指定我们希望创建的对象类型，通过工厂函数需要什么类型的对象并提供对应的数据，返回对应的实例。

```js
class Car {
  constructor(options) {
    this.doors = options.doors || 4;
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
  }
}

class Truck {
  constructor(options) {
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
  }
}

function vehicleFactory(options) {
  if (options.type === "car") {
    return new Car(options);
  } else {
    return new Truck(options);
  }
}
```

**何时使用工厂模式**

- 当我们的对象比较复杂的时候
- 当我们需要根据不同情况创建不同对象实例的时候
- 当我们需要创建许多相似对象的时候

**缺点**

- 使用不当会增加程序的复杂度

### 4.抽象工厂模式

抽象工厂模式，将对象的实现细节抽离出来，适用于需要和多种对象一起工作的场景

```js
class Truck {
  constructor(options) {
    this.state = options.state || "used";
    this.wheelSize = options.wheelSize || "large";
    this.color = options.color || "blue";
  }
}

class Car {
  constructor(options) {
    this.doors = options.doors || "4";
    this.state = options.state || "brand new";
    this.color = options.color || "silver";
  }
}

class AbstractFactory {
  constructor() {
    this.types = {};
  }
  // 把 工厂对象 和类型进行关联
  registerFactory(type, factory) {
    this.types[type] = factory;
  }
  getInstance(type, args) {
    let factory = this.types[type];
    if (factory) {
      return new factory(args);
    }
  }
}

let abstractFactory = new AbstractFactory();

abstractFactory.registerFactory("car", Car);
abstractFactory.registerFactory("truck", Truck);

// 创建汽车实例
const myCar = abstractFactory.getInstance("car", {
  doors: 5,
  state: "car",
  color: "blue",
});

console.log(myCar);
```

### 5.单例模式

单例模式限制一个类 只有一个实例化对象

```js
class Obj {
  constructor(data) {
    console.log(data);
    this.data = data;
  }
}

// 利用闭包的性质实现单例模式  此处 直接改为一个立即执行函数了
function singleton(data) {
  let instance;
  return (function () {
    if (!instance) {
      instance = new Obj(data);
    }
    return instance;
  })();
}

const one = singleton("aa");
// console.log(one())
```

### 6.中介者模式

中介者模式就是提供一个中心点给系统不同组件之间进行通信，降低系统组件之间的耦合程度。

实现模式与发布订阅模式类似

观察者模式和发布订阅模式专注于维护目标对象和观察值之间的关系，当主题对象发生变化时候，通知所有对该主题感兴趣的观察者，而中介者模式的话，专注于限制对象的通信必须通过中介者来通信，两者都提倡松耦合。

### 7.装饰者模式【类比装饰器】

装饰者模式，通过一个装饰类对现有动态添加行为，以及对原有行为进行装饰

```js
const david = {
  name: "david",
  eat: function () {
    return this.name + "  eating";
  },
};

const M2O = function (o) {
  const str = "20多岁时候";
  this.eat = function () {
    return str + o.eat() + "肥的很";
  };
};
console.log(david.eat()); // david  eating
console.log(new M2O(david).eat()); // 20多岁时候david  eating肥的很
```

### 8.适配器模式

使用一个新的接口对现有接口进行包装，处理数据和接口的不匹配

```js
function api(x1, x2, x3) {
  console.log(x1 + x2 + x3);
}

const data = {
  a: "a",
  b: "b",
  c: "c",
};

function adapterApi(o) {
  // 通过适配器函数来调用目前的api
  api(o.a, o.b, o.c);
}
console.log(data);

adapterApi(data);
```
