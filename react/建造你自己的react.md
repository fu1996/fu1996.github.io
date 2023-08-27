---
authors: junkui
title: 建造你自己的React（上）
categories:
  - 大前端
  - react
tags:
  - react
  - 转载
sidebar_position: 0
slug: /build-your-react-01
date: 2023-08-27 19:21:21
---


## 声明

转载自[Rodrigo Pombo](https://twitter.com/pomber)的博文[Build your own React](https://pomb.us/build-your-own-react/)，同时学习了翻译过唐鼎大佬的[中文版的文档 ]( https://www.tangdingblog.cn/blog/react/buildyourownreact-2020-09-22/#reconciliation)，有所感悟，所以打算再按照自己的理解，去稍微加工一下，加深一下记忆和理清细节。

> 声明：本文非100%原创，是转载文，且已获得转载授权😊

## 1. 大纲

通过本文我们实现一个自己的react，架构类似于真实的react架构，但是去掉了大部分的优化项以及目前不必要的功能。

我们会在自己的react 中迭代 5个版本 去实现 如下的函数和能力。

1. V1 版本，目标实现 自己的 React，替换掉 真正的React库，缺点是：存在大量节点情况下会一次性更新完。
2. V2 版本，针对 V1 版本中的 缺点进行优化，将一次性更新的节点借用 浏览器的 `requestIdleCallback` 以及 引入 `可中断和恢复的 fiber（虚拟dom结构） 节点` 进行优化，实现 当 js 引擎中存在长时间耗时的任务下，对任务进行中断，在浏览器空闲的情况下去继续执行 React的更新，缺点是：fiber 任务调度节点和节点渲染是在同一阶段的，可能存在dom 渲染不完全的情况。
3. V3 版本，将任务调度（Render）和渲染节点（Commit）进行分离，实现浏览器的多次空闲时间去处理 fiber节点，但是只有一次提交（commit） 到 真实DOM的过程，进而解决了 V2 版本中的渲染不完全的情况。
4. V4 版本，通过上述三个版本的迭代，我们的 React 已经实现了 fiber 节点的暂停和继续，以及任务调度阶段和渲染节点分离的 能力。但是截止目前仅仅实现了 DOM节点的新增，未实现更新和删除，V4 版本要通过调和（reconcileChildren）去实现更新和删除。
5. V5 版本，此版本将会实现 React的 函数组件 以及基础的 useState hook函数。

## 2. 先实现个 v1.0 版本

### 2.1 React中的jsx是如何转变为真实DOM的？我们来亲自把实现一下。

我已经把相关的基础代码上传至 代码库，注意 分支为 `develop`。

Gitee: https://gitee.com/fujunkui1996/didact/tree/develop/

Github: https://github.com/fu1996/didact/tree/develop

基础代码如下：

```jsx
import React from 'react';
import ReactDOM from 'react-dom';

const App = () => {
    return <h1 title="foo">Hello</h1>;
}

ReactDOM.render(<App />, document.getElementById('root'));
```

以上代码会在ID 为 root 的DOM 节点 渲染出一个 文本为 hello 的 h1 节点。 React 会将 jsx 代码通过 Babel 转义为真正的 React.createElement 对象。这一点通过在线Babel工具即可查看。[点我查看示例](https://www.babeljs.cn/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=JYWwDg9gTgLgBAJQKYEMDG8BmUIjgcilQ3wG4AoUSWRYmAEQHkBZObXAo9GAWgBNcZcuTQQAdgGd4AQTBg4AXjgAKAJSKAfHADe5OPrhEYAVyhi4AHgAWARjgxgMADZIFAIkwQIbjQAkkTk4QFgD0thoUAL7CyNxMzAB0RGJ8SFDKFrLyIRoANHACaMYgSGIwCQDmSDAAoi4lZQBCAJ4AknzKhF4w-KqqFORAA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.22.12&externalPlugins=&assumptions=%7B%7D)

![image-20230827162710173](%E5%BB%BA%E9%80%A0%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84react/image-20230827162710173.png)

那么下一步就是要探究一下 React.createElement 做了什么事情呢？我们来输出一下。

```jsx
const App = () => {
  console.log("Hello", <h1 title="foo">Hello</h1>);
  return <h1 title="foo">Hello</h1>;
};
```

查看控制台：

![image-20230827163812820](%E5%BB%BA%E9%80%A0%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84react/image-20230827163812820.png)

React.createElement 通过传入的参数，在简单的验证过后创建了一个js对象并返回，在这个js对象中我们当前关心的重要的属性如下：

- type：当前节点的类型
- props：当前节点的拥有的属性信息

 `type` 对应你想要创建的 `dom` 元素，就像你使用 `document.createElement` 去创建 `HTML` 元素时传递的标签名参数是一样的。

`prop`属性对应的是一个对象，它把 `jsx` 上面的所有定义的属性通过*键值对*的方式保存起来。其中还包含一个特殊的属性，`children`属性。在上面的例子中， `children` 是一个字符串类型的值，但在实际使用中，经常为多个以数组形式保存的 `dom/jsx` 元素，这也是为什么我们的元素集经常以`树`的数据结构保存。

综上，我们可以将这块代码做简化，不需要函数组件App，直接写一个虚拟DOM：

```js
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
}
```

截至目前我们已经实现了 jsx 到 虚拟 DOM 的转换。接下来我们要实现 `ReactDOM.render` 来将虚拟 DOM节点转换为 真实的DOM节点。

这就要考验到各位的js操作DOM的能力了。

```js
// 替换 ReactDOM.render(element, container)
const node = document.createElement(element.type)
node["title"] = element.props.title

const text = document.createTextNode("")
text["nodeValue"] = element.props.children

node.appendChild(text)
container.appendChild(node)
```

完整的代码如下：

```js
const element = {
  type: "h1",
  props: {
    title: "foo",
    children: "Hello",
  },
}

const container = document.getElementById("root")

const node = document.createElement(element.type)
node["title"] = element.props.title

const text = document.createTextNode("")
text["nodeValue"] = element.props.children

node.appendChild(text)
container.appendChild(node)
```

现在我们有了一个去掉所有 react 相关代码的与刚开始功能一致的 demo 应用。

### 2.2 实现一个 createElement 函数

接下来我们将实现一个自己的 createElement 函数，将 jsx 对象 通过我们的方法给转换为虚拟 DOM节点。

上面说到 jsx 是通过Babel插件转换为 React的方法，那么我们首先要去看下相关文档，看是否支持修改默认的 jsx 转换 对象。

https://www.babeljs.cn/docs/babel-plugin-transform-react-jsx#customizing-the-classic-runtime-import

![image-20230827170152101](%E5%BB%BA%E9%80%A0%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84react/image-20230827170152101.png)

这里我们可以看到，通过魔法注释，可以将原来使用`React.createElement` 的 jsx 语法改为使用 `Preact.h` 去处理，同理我们可以改为自己的 React对象。

```jsx
/** @jsx Didact.createElement */
const element = (
  <div style="background: salmon">
    <h1>Hello World</h1>
    <h2 style="text-align:right">from Didact</h2>
  </div>
);
```

输入到Babel中，验证一下正确与否。

![image-20230827170446581](%E5%BB%BA%E9%80%A0%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84react/image-20230827170446581.png)

[点我查看上述代码](https://www.babeljs.cn/repl#?browsers=defaults%2C%20not%20ie%2011%2C%20not%20ie_mob%2011&build=&builtIns=false&corejs=3.21&spec=false&loose=false&code_lz=PQKhAIAECsGcA9wBECWATAhgYwC4DosAnAUwx2IFEAbYgW2IDsdwRgAoLAewdmeJvpNwAXnAAKNuHAAeNCgBu4XgE8awgEQAjbAGsA5oU4BXBmgBcSjFVrd1APklSZACwCMdgBL8qncAHVOQio0aWA3BycXACYlHFViDXJ4HABaKxQ9BjNCDOccewAzQ1pkdGwcUOcoiJlgOXkHAEoAbjYgA&debug=false&forceAllTransforms=false&modules=false&shippedProposals=false&circleciRepo=&evaluate=false&fileSize=false&timeTravel=false&sourceType=module&lineWrap=true&presets=env%2Creact%2Cstage-2&prettier=false&targets=&version=7.22.12&externalPlugins=&assumptions=%7B%7D)

理论可行，接下来我们去实现一个自己的 createElement 方法。

首先我们要确认一下这个createElement函数的入参都会是什么？必不可少的是 一个表示当前节点类型的 type 字段， 以及当前节点 拥有那些属性的 props 字段。其余的字段 都可以作为剩余参数当做children 字段。返回值毫无疑问是一个 可以被render的包含了 type 和 props 属性的虚拟DOM对象。

代码如下：

```js
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children,
    },
  }
}
```

在 children 数组中，还可以包含一些基本类型的值，比如*字符串*或者*数字*。我们用一个特殊的类型 `TEXT_ELEMENT` 来把这些不是对象子节点给包装成对象类型。

createElement 的 完整代码如下：

```js

const SPECIAL_TYPE = {
  TEXT_ELEMENT: "TEXT_ELEMENT",
};

/**
 * 把当前VDom以及VDom的子节点转为VDom
 * @param {*} type
 * @param {*} props
 * @param  {...any} children
 * @returns
 */
function createElement(type, props, ...children) {
  return {
    type,
    props: {
      ...props,
      children: children.map((child) =>
        typeof child === "object" ? child : createTextElement(child)
      ),
    },
  };
}

/**
 * 文本节点要做特殊处理
 * @param {*} text
 * @returns
 */
function createTextElement(text) {
  return {
    type: SPECIAL_TYPE.TEXT_ELEMENT,
    props: {
      nodeValue: text,
      children: [],
    },
  };
}
```

接下来，我们去实现 Render 函数。

### 2.3 实现 render 函数

我们现在先只考虑往 `document` 上面**添加**元素，而不去考虑**更新**或者**删除**元素。

想要实现一个render 函数，首先此函数的入参会有两个，一个是虚拟DOM节点，另外一个是用于挂载虚拟DOM的真实的DOM节点，

考虑到虚拟DOM节点是一个树结构，我们要递归的对其所有的children节点进行添加。

```js
function render(element, container) {
  const dom = document.createElement(element.type)
  element.props.children.forEach(child =>
    render(child, dom)
  )
  container.appendChild(dom)
}
```

在之前我们定义的有需要单独处理的基本类型数据的虚拟节点，如果元素的节点为 `TEXT_ELEMENT`，那么我们要单独创建一个文本节点，优化 dom创建逻辑。

```js
function render(element, container) {
  // 根据虚拟DOM类型创建真实DOM
  const dom =
    element.type == SPECIAL_TYPE.TEXT_ELEMENT
      ? document.createTextNode("")
      : document.createElement(element.type);
  element.props.children.forEach(child =>
    render(child, dom)
  )
  container.appendChild(dom)
}
```

最后我们要把 虚拟DOM 上的 props 属性 给同步到真实的 DOM元素上。

```js
const isProperty = key => key !== "children"
  Object.keys(element.props)
    .filter(isProperty)
    .forEach(name => {
      dom[name] = element.props[name]
    })
```

完整的 render代码如下：

```js
// 只把当前虚拟DOM的prop筛选出来
const isProperty = (key) => key !== "children";

/**
 * 把VDom转为真实DOM
 * @param {*} element
 * @param {*} container
 * @returns
 */
function render(element, container) {
  // 根据虚拟DOM类型创建真实DOM
  const dom =
    element.type == SPECIAL_TYPE.TEXT_ELEMENT
      ? document.createTextNode("")
      : document.createElement(element.type);

  Object.keys(element.props)
    .filter(isProperty)
    .forEach((name) => {
      // 虚拟DOM的 props 绑定到真实 DOM上
      dom[name] = element.props[name];
    });
  // 递归处理 进行绑定
  element.props.children.forEach((child) => render(child, dom));
  container.appendChild(dom);
}
```

截止目前我们实现了一个简单1.0版本，可以从jsx 到 虚拟DOM 再到真实DOM的库，在以下代码库可查看完整代码。

Gitee: https://gitee.com/fujunkui1996/didact/tree/v1.0/

Github: https://github.com/fu1996/didact/tree/v1.0

## 3. 优化1.0 版本的弊端，迭代到2.0 

在我们开始新的重构之前，我们分析一下1.0版本的代码存在的可优化点：

假设我们目前有一个节点数量比较大的 element 树，因为1.0版本中我们需要递归去处理 element  树的 children 属性，不断的将其渲染为真实的DOM，一旦节点数量比较大，这个 将 element 树转为 真实 DOM 的过程就会持续占用主线程，此过程`非常耗时 并且不可中断`。如果此时浏览器需要去做一些高响应级的操作（如响应用户输入或者运行一些动画特效）将会在渲染完成前产生卡顿。

基于如上分析，我们现在要对渲染 任务进行拆分，将其拆分为` 不太耗时且可中断的小任务单元`。我们可以在每个任务单元工作完毕以后 检查一下浏览器是否有更重要的工作，如果有就打断，退出当前的渲染循环。

### 3.1 实现循环的可控制和可中断（workLoop）

在我们这个版本中， 使用 [requestIdleCallback](https://developer.mozilla.org/zh-CN/docs/Web/API/Window/requestIdleCallback) 这个浏览器来实现循环，requestIdleCallback 这个函数将在浏览器空闲时期被调用。这使开发者能够在主事件循环上执行后台和低优先级工作，而不会影响延迟关键事件，如动画和输入响应。

`requestIdleCallback`同时给我们提供了一个`deadline`的参数，我们可以用它来确认在浏览器接管线程前我们到底有多少时间。

```js

// 下一个工作单元
let nextUnitOfWork = null;

function workLoop(deadline) {
  console.log("事件循环");
  // 是否可以继续工作
  let shouldYield = false;
  while (nextUnitOfWork && !shouldYield) {
    //
    nextUnitOfWork = performUnitOfWork(nextUnitOfWork);
    // 剩余时间是否小于1
    const timeRemaining = deadline.timeRemaining();
    console.log("剩余时间", timeRemaining);
    // 如果此处的时间不足，可能导致多个节点时候的 performUnitOfWork 函数
    // 只进行了一半，就被浏览器打断了，导致界面上仅有部分节点。
    shouldYield = timeRemaining < 1;
  }
  // 循环的核心在此处
  requestIdleCallback(workLoop);
}
// 类似于setTimeout，但是触发的时机 是浏览器 空闲时候进行调用一次。
requestIdleCallback(workLoop);

```

react不再使用[requestIdleCallback](https://github.com/facebook/react/issues/11171#issuecomment-417349573)，它在[scheduler package](https://github.com/facebook/react/tree/master/packages/scheduler)中实现了和`requestIdleCallback`一样的功能。

为了实现上面的循环，我们需要完成 `performUnitOfWork` 函数。`performUnitOfWork` 函数除了执行一个小单元的工作外，还需要返回下一个需要被执行的工作单元。

### 3.2 定义工作单元的 数据结构 （fiber）和查找规则

在完成 `performUnitOfWork `函数之前，为了更好的实现任务的控制和节点的查找，我们需要为每一个工作单元定义名为 `fiber` 的数据结构，每一个 element DOM节点，对应一个 fiber 结构，每一个 fiber 结构 对应了一个 工作单元。

假设我们有如下要渲染的 元素树

```jsx
Didact.render(
  <div>
    <h1>
      <p />
      <a />
    </h1>
    <h2 />
  </div>,
  container
)
```

将如上结构映射为 fiber 树 后，如下：

![img](%E5%BB%BA%E9%80%A0%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84react/5f72dabf160a154a6768717d-3131035.png)

每个 fiber 任务节点，都有如下属性：

- Child: 指向了 子级 fiber 节点
- parent：指向了 父级 fiber 节点
- sibling：指向了 同级 的兄弟 fiber节点

每一个fiber节点 都有指向了`第一个子节点、当前相邻节点以及父节点的链接`。fiber 结构如此设计的一个重要的目标是为了容易的找到下一个工作单元。

接下来介绍一下 fiber的查找规则。

1. 当前`fiber` 工作完毕后，如果当前fiber存在children属性，则会把当前 fiber的children 下的第一个子节点当做下一个工作单元，将 child 属性 指向它。

   例：在当前的例子中，如果在第一个 div 节点完成更新任务后，div 的 child 属性 指向下一个工作单元  h1。

2. 当前 fiber 节点没有子节点（不存在child属性），我们使用 `sibling` 属性（兄弟节点）作为下一个工作单元。

   例： p 节点 不存在 child 属性，我们通过 `sibling` 属性找到 相邻节点 `a`作为下一个工作单元

3. 当前 fiber 节点，不存在 child 属性，也不存在  `sibling` 属性（兄弟节点）的时候，就会去找 父节点 的 兄弟节点。

   例：上图中的最下面的`a`节点到`h2`节点。

4. 如果 fiber 节点的父节点的兄弟节点 不存在，那就继续向上找 父节点的 兄弟节点， 直到 找到 根节点。

当我们到根节点的时候，也意味着在这一次`render`我们完成了所有的工作。

接下来我们将用代码实现上述查找逻辑。

### 3.3 实现fiber节点的查找规则

为了完成 整棵 fiber 树的创建，我们 首先需要 创建 `root fiber（根 fiber） `，并且赋值其 `child` 属性 和 `sibling` 属性。

首先将 nextUnitOfWork 的值设为 fiber 根节点。

```js
/**
 *
 * @param {*} element VDom
 * @param {*} container 真实挂载的DOM节点
 */
function render(element, container) {
  console.log("事件循环的起点", element, container);
  // 即将开始工作的 基础单元
  nextUnitOfWork = {
    dom: container,
    props: {
      children: Array.isArray(element) ? [...element] : [element],
    },
  };
}

```

这样在浏览器空闲时候进行第一次循环的时候，会先从 根 fiber 节点 开始工作。

将之前 写的 render 函数的代码 抽离为 `createDom` 函数

```js
// 只把当前虚拟DOM的prop筛选出来
const isProperty = (key) => key !== "children";

function createDom(fiber) {
  // 根据虚拟DOM类型创建真实DOM
  const dom =
    fiber.type == SPECIAL_TYPE.TEXT_ELEMENT
      ? document.createTextNode("")
      : document.createElement(fiber.type);

  Object.keys(fiber.props)
    .filter(isProperty)
    .forEach((name) => {
      // 虚拟DOM的 props 绑定到真实 DOM上
      dom[name] = fiber.props[name];
    });

  return dom;
}
```

接下来 我们去实现 久违的 `performUnitOfWork` 函数了。

1. 首先我们需要判断一下当前的工作节点的 dom 属性 是否存在，如果 不存在 dom 属性，就根据当前节点的类型 创建出对应的 dom 节点。

2. 如果当前fiber节点是有父级节点的，则 当前 节点 应该 挂在 其父级节点下。
3. 然后我们需要循环当前 fiber节点的子节点，给这些子节点 添加上对应的 parent ， sibling 和 child 属性。
4. 实现 fiber 的 查找规则。

```js

/**
 * 在浏览器的一次循环中处理当前的vdom节点渲染到界面上，并返回下一个工作单元
 * @param {*} nextUnitOfWork
 */
function performUnitOfWork(fiber) {
  // 当前fiber节点 不存在真实DOM，生成一个真实的DOM
  if (!fiber.dom) {
    fiber.dom = createDom(fiber);
  }
  // 如果当前节点的父级存在，就将当前虚拟DOM节点挂载在父级上
  if (fiber.parent) {
    // 把内容渲染到界面上。
    console.log("渲染节点", fiber);
    fiber.parent.dom.appendChild(fiber.dom);
  }
  // 遍历子节点，继续执行 children 属性来自于 createElement 函数。
  const elements = fiber.props.children;
  let index = 0;
  // 定义其父级的兄弟节点
  let prevSibling = null;
  // 处理子节点
  while (index < elements.length) {
    const element = elements[index];
    // 创建 element 元素对应的 fiber 工作单元
    const newFiber = {
      type: element.type,
      props: element.props,
      parent: fiber, // 指向其父级 fiber 节点
      dom: null, // 代表还没创建和挂载 DOM 节点
    };
    // 当前是第一个节点，child 绑定到自身，查找规则是 当前工作节点下的第一个节点
    if (index === 0) {
      fiber.child = newFiber;
    } else {
      // 绑定其兄弟节点
      prevSibling.sibling = newFiber;
    }
    // 新的 fiber节点 成为了 上一个兄弟节点
    prevSibling = newFiber;
    // 继续下一个工作
    index++;
  }
  console.log("处理完子节点以后的结果为", fiber);
  // 存在子节点，返回子节点
  if (fiber.child) {
    return fiber.child;
  }
  // 1. 如果没有子节点，就查找兄弟节点
  let nextFiber = fiber;
  while (nextFiber) {
    // 3. 兄弟节点存在就返回
    if (nextFiber.sibling) {
      return nextFiber.sibling;
    }
    // 2. 一层一层向上查找兄弟节点
    nextFiber = nextFiber.parent;
  }
}
```

将jsx进行改造测试性能如何：

```jsx
/** @jsx Didact.createElement */
const element1 = new Array(10000).fill("hello").map((item, index) => (
  <div key={index}>
    <h1>Hello World {index}</h1>
  </div>
));
const container = document.getElementById("root");
Didact.render(element1, container);
```

发现渲染10000个元素，也感受不到明显的卡顿。相关案例代码如下：

Gitee: https://gitee.com/fujunkui1996/didact/tree/v2.0/

Github: https://github.com/fu1996/didact/tree/v2.0

## 4. 总结回顾

我们当前的2个版本已经初步实现了，将 jsx 元素转为 虚拟 DOM，再通过 fiber节点和 requestIdleCallback 解决大数据量情况下的虚拟 DOM 转为真实 DOM 渲染时候的卡顿的问题。

但是在最后的版本中 任务调度工作节点和节点渲染是在同一阶段的，可能存在渲染不完全的情况，我们将在接下来的文章中去解决此问题。

感谢您阅读我的文章！如果你发现这篇文章对你有所帮助，我会非常感激你给我的 GitHub/Gitee 项目点个赞（Star）。你可以在我的 GitHub/Gitee 页面（附带地址）找到更多相关的项目和资源。你的支持将是我持续分享有价值内容的动力。谢谢！

Gitee: https://gitee.com/fujunkui1996/didact

Github: https://github.com/fu1996/didact

博客地址：https://fu1996.github.io/react/build-your-react-01
