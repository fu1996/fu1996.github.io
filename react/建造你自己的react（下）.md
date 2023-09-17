---
authors: junkui
title: 建造你自己的React（下）
categories:
  - 大前端
  - react
tags:
  - react
  - 转载
sidebar_position: 0
slug: /build-your-react-02
date: 2023-09-27 18:50:21
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

在[上篇文章](https://fu1996.github.io/react/build-your-react-01)中，我们已经迭代到了 V2 版本。但是在v2版本中，在我们每次处理DOM元素时，都会向 DOM 添加一个新节点。那么在我们完成整个树的渲染之前，浏览器可能会中断我们的工作。

![image-20230917190011517](%E5%BB%BA%E9%80%A0%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84react%EF%BC%88%E4%B8%8B%EF%BC%89/image-20230917190011517.png)

在以上这种情况下，用户将看到不完整的 UI。接下来我们将会迭代出 V3 版本去尝试解决此问题。

V2版本的相关代码库如下：

Gitee: https://gitee.com/fujunkui1996/didact/tree/v2.0/

Github: https://github.com/fu1996/didact/tree/v2.0



## 2. 实现个 V3.0 版本

### 2.1 实现 任务调度（Render）和渲染节点（Commit）进行分离（不是git commit）

解决问题的常用方法论，分析现状（很重要）——> 找到替代方案——>开始实施。

我们现在要先思考一下V2版本的现状是什么？简单的画了个流程图

![image-20230917215744934](%E5%BB%BA%E9%80%A0%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84react%EF%BC%88%E4%B8%8B%EF%BC%89/image-20230917215744934.png)

现在的【渲染fiber节点为真实DOM】是在每次进行 workLoop 事件循环的时候，一点一点将fiber 的 DOM 节点挂载到其父级 DOM节点上的。

![image-20230917190011517](%E5%BB%BA%E9%80%A0%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84react%EF%BC%88%E4%B8%8B%EF%BC%89/image-20230917190011517.png)

相当于是`整棵的 fiber 节点树` 利用浏览器的空闲时间在做两件事情：

- 将整棵树通过 `任务调度 分成小的 fiber 任务`，并且根据`fiber查找规则`找到下次的 fiber 任务，
- 查找的过程中直接进行fiber节点变为真实DOM节点的渲染过程。

为了实现 任务调度 和节点渲染的分离，我们首先要做的就是干掉`将 fiber 节点到真实DOM 代码`，但是也不能去丢失`整棵 fiber 节点树`的 相关信息（注意是整棵），那我们就需要保存一下当前渲染的fiber树。

首先干掉 fiber 节点 在 任务调度 过程中变为 真实DOM的代码【红色背景的代码干掉】

![image-20230917221446656](%E5%BB%BA%E9%80%A0%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84react%EF%BC%88%E4%B8%8B%EF%BC%89/image-20230917221446656.png)

其次 我们要把现有的 fiber 节点树 保存一份，命名为 wipRoot 变量，意为：`work in progress root`。

修改 render 方法为：

```js
function render(element, container) {
  console.log("事件循环的起点", element, container);
  // 即将开始工作的 基础单元
  wipRoot = {
    dom: container,
    props: {
      children: Array.isArray(element) ? [...element] : [element],
    },
  };
  nextUnitOfWork = wipRoot;
}
```

那么接下来我们要确定的是 虚拟 fiber 树 转换为 真实 DOM树的节点是何时？

这个时机必须是所有的当前的 fiber 节点树遍历完成，那么也就是 workLoop 方法 不存在 nextUnitOfWork (下一个工作单元)的时候，我们再一次性将所有的节点 渲染到真实DOM上。

修改 workLoop 方法（为了更友好的看到变更，直接放上diff截图）

![image-20230917222108115](%E5%BB%BA%E9%80%A0%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84react%EF%BC%88%E4%B8%8B%EF%BC%89/image-20230917222108115.png)

接下来我们要在 commitRoot 方法中实现 fiber 节点树 转为真实DOM树的过程

```js
// 下一个工作单元
let nextUnitOfWork = null;
// 循环更新的节点 work in progress root
let wipRoot = null;

/**
 * 一次性将当前fiber节点的变更，更新为 真实的 DOM
 */
function commitRoot() {
  commitWork(wipRoot.child);
  wipRoot = null;
  console.log("渲染结束", wipRoot);
}

/**
 * 递归调用 将 fiber 节点更新到DOM上
 * @param {*} fiber
 */
function commitWork(fiber) {
  if (!fiber) return;
  const domParent = fiber.parent.dom;
  domParent.appendChild(fiber.dom);
  commitWork(fiber.child);
  commitWork(fiber.sibling);
}

```

V3版本的相关代码库如下：

Gitee: https://gitee.com/fujunkui1996/didact/tree/v3.0/

Github: https://github.com/fu1996/didact/tree/v3.0

到目前为止，我们仅仅实现了向DOM节点增加一些内容，接下来 我们通过 调和 （Reconciliation）去实现 更新或删除节点。

## 3. 实现 V4.0 版本

### 3.1 通过调和（reconcileChildren） 对 fiber 节点进行diff 对比，进而实现更新和删除

先思考一下，如果是我们要基于现有代码去实现这个需求应该如何实现呢？

最简单的方案就是：现有fiber节点树不做变更，直接通过变更完整的绘制出一棵新的fiber节点树，绘制完毕以后，再进行旧fiber节点树的替换。

上述方案的优势简单来说就是实现起来比较简单，缺点就是 太消耗性能，特别是在大型应用中。通过 diff 对比只更新发生变化的部分，可以有效减少不必要的计算和渲染操作，提高性能。

来看看[React官网关于调和阶段的文档吧](https://legacy.reactjs.org/docs/reconciliation.html)。接下来我们也要去实现一个简单的 diff 对比算法，来实现 fiber 节点的 更新和删除。

首先在我们 真正的将 fiber节点 渲染为 DOM 之后，我们要去暂存一下 当前的 完整的fiber节点树。参数命名为 `currentRoot`

另外 为了 实现 diff 的对比，我们将会为 每个 fiber 节点 增加 `alternate` 属性，以便于我们查找当前  fiber 节点 在上一个commit 阶段中对应的节点的数据。

![image-20230917230924630](%E5%BB%BA%E9%80%A0%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84react%EF%BC%88%E4%B8%8B%EF%BC%89/image-20230917230924630.png)



根fiber节点的 `alternate` 还是比较方便处理的，可以直接取 提交前的fiber 节点树的引用即可。

接下来我们要去改造 `performUnitOfWork` 方法，使得每个小的 fiber 节点，都可以正确的通过 `alternate` 找到自己的上一世（上一次 commit 阶段的数据）。

现有的 `performUnitOfWork` 方法太长了，我们将其对 `fiber` 节点处理的部分进行抽离，抽出一个 `reconcileChildren` 方法。

![image-20230917232003335](%E5%BB%BA%E9%80%A0%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84react%EF%BC%88%E4%B8%8B%EF%BC%89/image-20230917232003335.png)

### 3.2 实现 reconcileChildren 方法

reconcileChildren 方法的入参 为 当前的 fiber 节点（wipFiber）， 和 其子节点（elements）。

```js
function reconcileChildren(wipFiber, elements) {

}
```

既然是对比 我们首先要找到当前 fiber节点对应的旧的 fiber 节点，然后通过 sameType 变量去记录新旧节点是否是相同的fiber 类型。

```js
let oldFiber = wipFiber.alternate && wipFiber.alternate.child;

const sameType = oldFiber && element && element.type == oldFiber.type;
```



我们简单的实现一下`对比规则`：

1. 如果新旧 fiber 节点的元素类型 相同，那么我们去更新 它们的props 属性。
   - 我们创建一个新的 Fiber，并且保留旧 Fiber 中的 DOM 节点和元素中的 props，使用 alternate 执行了 旧 fiber节点，使用 `effectTag: UPDATE`，标识此fiber节点需要进行更新，以方便我们在 commit 阶段 根据此属性进行更新。
2. 如果 新旧 fiber 节点的类型不同，并且有新的fiber节点，那么我们就要去创建一个新的 DOM节点。
   - 同样的，对于fiber 节点需要生成新 DOM 节点的情况，使用 `effectTag: PLACEMENT`进行标识。
3. 如果 新旧 fiber 节点的类型不同，并且有 旧的 fiber 节点，那么我们需要对 旧fiber 节点进行删除。
   - 对于删除的 fiber 节点一样使用  `effectTag: DELETION`进行标识，为了方便操作，我们还可以将其存入记录要删除DOM节点的数组中，这样我们在 commit 阶段 即可遍历此数组进行 DOM节点的删除。

PS：React 中 通过 key 值进行了优化。

完整的 `reconcileChildren`方法如下：

```js
function reconcileChildren(wipFiber, elements) {
  let index = 0;
  let oldFiber = wipFiber.alternate && wipFiber.alternate.child;
  let prevSibling = null;
  // 处理子节点
  while (index < elements.length || oldFiber != null) {
    const element = elements[index];
    let newFiber = null;
    // 老 fiber 节点和当前节点是否是同一类型
    const sameType = oldFiber && element && element.type == oldFiber.type;
    // 如果旧节点和新节点的类型相同
    if (sameType) {
      newFiber = {
        type: oldFiber.type,
        props: element.props,
        dom: oldFiber.dom,
        parent: wipFiber,
        alternate: oldFiber,
        effectTag: "UPDATE",
      };
    }
    // 当前节点存在，但是和老fiber节点的类型不同 做替换
    if (element && !sameType) {
      newFiber = {
        type: element.type,
        props: element.props,
        dom: null,
        parent: wipFiber,
        alternate: null,
        effectTag: "PLACEMENT",
      };
    }
    // 旧 fiber节点存在 但是不和当前节点类型相同 做删除
    if (oldFiber && !sameType) {
      oldFiber.effectTag = "DELETION";
      deletions.push(oldFiber);
    }
    // 旧 fiber节点的 相邻节点存在，将其赋值给 旧 fiber节点，实现下次遍历 从 旧fiber节点开始
    if (oldFiber) {
      oldFiber = oldFiber.sibling;
    }

    // 当前是第一个节点，child 绑定到自身
    if (index === 0) {
      wipFiber.child = newFiber;
    } else if (element) {
      prevSibling.sibling = newFiber;
    }
    prevSibling = newFiber;
    index++;
  }
}
```

忽然想起来这种`标记删除`的方式，是不是浏览器中常用的伎俩？

### 3.3 既然fiber有了标记，那就统一在 commit 阶段，处理了吧。

删除 commitWork 方法中的根据fiber节点新增DOM节点的代码，毕竟我们现在不仅仅有了新增，还有fiber节点的更新和删除了。

如果effectTag标签为 PLACEMENT，那就实现替换。如果是 DELETION 那就删除它。

```js
	const domParent = fiber.parent.dom 
	if (
    fiber.effectTag === "PLACEMENT" &&
    fiber.dom != null
  ) {
    domParent.appendChild(fiber.dom)
  } else if (fiber.effectTag === "DELETION") {
    domParent.removeChild(fiber.dom)
  }
```

如果是 UPDATE标识 ，因为其业务代码有些复杂，抽离出一个 `updateDom` 方法去实现它。

```js
if (fiber.effectTag === "UPDATE" && fiber.dom != null) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props);
  }
```

commitWork 完整代码如下：

```js
/**
 * 递归调用 将 fiber 节点更新到DOM上
 * @param {*} fiber
 */
function commitWork(fiber) {
  if (!fiber) return;
  const domParent = fiber.parent.dom;
  if (fiber.effectTag === "PLACEMENT" && fiber.dom != null) {
    domParent.appendChild(fiber.dom);
  } else if (fiber.effectTag === "UPDATE" && fiber.dom != null) {
    updateDom(fiber.dom, fiber.alternate.props, fiber.props);
  } else if (fiber.effectTag === "DELETION") {
    domParent.removeChild(fiber.dom);
  }
  commitWork(fiber.child);
  commitWork(fiber.sibling);
}
```

**然后再梳理一下两个fiber节点的关于`props属性`更新的逻辑：**

props属性分为两种，一种是 `on` 开头的是事件监听器，另外一种就是单纯的 props 属性。

先写几个辅助方法，方便判断props 是否是 事件类型，以及新旧与否

```js
// 只把当前虚拟DOM的prop筛选出来
const isEvent = (key) => key.startsWith("on");
const isProperty = (key) => key !== "children" && !isEvent(key);
const isNew = (prev, next) => (key) => prev[key] !== next[key];
const isGone = (prev, next) => (key) => !(key in next);

```

#### 3.3.1 处理 `on` 开头的是事件监听器

如果在fiber节点上绑定的 on 事件发生更改，我们会将其从节点中删除。

```js
  Object.keys(prevProps)
    .filter(isEvent)
    .filter((key) => !(key in nextProps) || isNew(prevProps, nextProps)(key))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.removeEventListener(eventType, prevProps[name]);
    });
```

然后我们在添加新的 事件监听器

```js
// Add event listeners
  Object.keys(nextProps)
    .filter(isEvent)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      const eventType = name.toLowerCase().substring(2);
      dom.addEventListener(eventType, nextProps[name]);
    });
```

#### 3.3.2 处理 props 属性

移除旧的，添加新的 就完事了。

```js
// Remove old properties
  Object.keys(prevProps)
    .filter(isProperty)
    .filter(isGone(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = "";
    });

  // Set new or changed properties
  Object.keys(nextProps)
    .filter(isProperty)
    .filter(isNew(prevProps, nextProps))
    .forEach((name) => {
      dom[name] = nextProps[name];
    });
```

简单的调整一下我们当前的 测试 case：

![image-20230918000242355](%E5%BB%BA%E9%80%A0%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84react%EF%BC%88%E4%B8%8B%EF%BC%89/image-20230918000242355.png)



```jsx

const updateValue = (e) => {
  rerender(e.target.value);
};

const rerender = (value) => {
  const element = (
    <div style={{ background: "pink" }}>
      <input onInput={updateValue} value={value} />
      <h2>Hello {value}</h2>
    </div>
  );
  Didact.render(element, container);
};

rerender("World");
```

效果图如下：

![20230918000337_rec_](%E5%BB%BA%E9%80%A0%E4%BD%A0%E8%87%AA%E5%B7%B1%E7%9A%84react%EF%BC%88%E4%B8%8B%EF%BC%89/20230918000337_rec_.gif)



V4版本的相关代码库如下：

Gitee: https://gitee.com/fujunkui1996/didact/tree/v4.0/

Github: https://github.com/fu1996/didact/tree/v4.0





## 4. 总结回顾

我们当前的2个版本已经初步实现了，将 jsx 元素转为 虚拟 DOM，再通过 fiber节点和 requestIdleCallback 解决大数据量情况下的虚拟 DOM 转为真实 DOM 渲染时候的卡顿的问题。

但是在最后的版本中 任务调度工作节点和节点渲染是在同一阶段的，可能存在渲染不完全的情况，我们将在接下来的文章中去解决此问题。

感谢您阅读我的文章！如果你发现这篇文章对你有所帮助，我会非常感激你给我的 GitHub/Gitee 项目点个赞（Star）。你可以在我的 GitHub/Gitee 页面（附带地址）找到更多相关的项目和资源。你的支持将是我持续分享有价值内容的动力。谢谢！

Gitee: https://gitee.com/fujunkui1996/didact

Github: https://github.com/fu1996/didact

博客地址：https://fu1996.github.io/react/build-your-react-01
