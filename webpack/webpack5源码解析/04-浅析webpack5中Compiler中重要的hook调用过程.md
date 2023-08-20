---
authors: junkui
title: 04-浅析webpack5中Compiler中重要的hook调用过程
categories:
  - js
  - webpack
tags:
  - js
  - webpack
date: 2021-08-26 22:50:00
sidebar_position: 4
---

今天的内容只有一个：浅析 webpack5 中 Compiler 中重要的 hook 调用。

![img](04-浅析webpack5中Compiler中重要的hook调用过程/00Ij856KwySf46KdwTb6xuwyGLSJPRXI.gif)

## 1. 浅析`Compiler` 中的第一个核心 hook 是 `compile`

此 hook 的入参是 `params`

![img](04-浅析webpack5中Compiler中重要的hook调用过程/9d7c9ea1-8bf2-4e76-bacb-183709c6a810.png)

### 1.1 查看绑定 `compile` 的插件的数据

进入此 hook，发现只有一个监听的插件：`ExternalModuleFactoryPlugin`。 ![img](04-浅析webpack5中Compiler中重要的hook调用过程/bf3fa7cb-2fdf-4f92-94fc-f0721c8da533.png)

进入 `ExternalModuleFactoryPlugin`的插件中，代码如下：

```
class ExternalsPlugin {
 /**
  * @param {string | undefined} type default external type
  * @param {Externals} externals externals config
  */
 constructor(type, externals) {
  this.type = type;
  this.externals = externals;
 }

 /**
  * Apply the plugin
  * @param {Compiler} compiler the compiler instance
  * @returns {void}
  */
 apply(compiler) {
  compiler.hooks.compile.tap("ExternalsPlugin", ({ normalModuleFactory }) => {
   new ExternalModuleFactoryPlugin(this.type, this.externals).apply(
    normalModuleFactory
   );
  });
 }
}
```

发现此插件 又实例化了 一个 `ExternalModuleFactoryPlugin` 的对象，但是 `apply` 方法上 传入的是 `normalModuleFactory` 数据。聪明的小伙伴可以想一下此处是为了啥？ 进入 `ExternalModuleFactoryPlugin` 内部，看一下其内部实现是什么？代码如下：

![img](04-浅析webpack5中Compiler中重要的hook调用过程/a35e4722-0df3-40e5-82ed-7b9112c83315.png)

会发现这个插件实际上也就是监听了一下 `normalModuleFactory.hooks.factorize` 的事件。

### 1.2 总结

总体来说：`Compiler` 里的 `hooks.compile` 的主要作用就是通过 `ExternalModuleFactoryPlugin` 监听了 `normalModuleFactory.hooks.factorize` 的事件。

## 2. 继续调试 `Compiler` 的 `compile` hook

### 2.1 创建 `compilation` 天选打工人

截图奉上 下一步的逻辑

![img](04-浅析webpack5中Compiler中重要的hook调用过程/cb2c8088-b159-446d-99be-8749eb5fab4f.png)

会发现走到了 `newCompilation` 方法，通过规范的命名就知道，此方法是创建一个此次编译构建用的 `compilation` 一次性对象，注意此处说的是一次性对象，表述上可能存在差异，给兄弟们放上解释。【我感觉可以简单理解为一次完整编译构建过程中的数据载体】。

![img](04-浅析webpack5中Compiler中重要的hook调用过程/8e8763f8-b9dc-448c-8992-6345e12fb54e.png)

具体`newCompilation`代码如下：

```
newCompilation(params) {
  const compilation = this.createCompilation(params); // 下方
  compilation.name = this.name;
  compilation.records = this.records;
  // 调用 thisCompilation hook
  this.hooks.thisCompilation.call(compilation, params);
  // 调用 compilation hook
  this.hooks.compilation.call(compilation, params);
  return compilation;
}


createCompilation(params) {
  this._cleanupLastCompilation();
  return (this._lastCompilation = new Compilation(this, params));
}
```

核心也就是在这里了，通过 `createCompilation` 传递 `compiler 和 params`参数，创建 `Compilation` 的实例对象。

创建完毕以后，开始 传入 `compilation 和 params` 调用 `hooks.thisCompilation`的 hook 了。

下一步就是开始调试 `thisCompilation` 的 hook。

## 3. Compiler 创建了 compilation，开始调用 `thisCompilation` 的 hook

### 3.1 查看绑定 `compilation` 的插件的数据

继续 调试进入此 hook

![img](04-浅析webpack5中Compiler中重要的hook调用过程/0354e21e-6936-4760-9419-c2af8c24938b.png)

这个 hook 竟然有 10 个 插件监听它，先进入第一个插件 `ArrayPushCallbackChunkFormatPlugin`

![img](04-浅析webpack5中Compiler中重要的hook调用过程/d5f1f04d-ea23-4fbb-94fb-2b3d66f98158.png)

发现这个插件都是在给 `compilation` 绑定一下 监听事件，并没有做什么实际的操作，继续下一个插件`JsonpChunkLoadingPlugin`。

![img](04-浅析webpack5中Compiler中重要的hook调用过程/4a2abf9b-d7bd-4989-9316-e59693b1ae07.png)

进入以后，发现也是在进行给 `compilation` 绑定监听事件。直接进入 最后一个插件`ResolverCachePlugin`

![img](04-浅析webpack5中Compiler中重要的hook调用过程/e6b97470-3204-45ea-88cf-cafb625dbf1a.png)

发现也是在给 `compilation` 绑定一堆的监听事件。

好家伙，这是要把 `compilation` 给累死呀，

### 3.2 `thisCompilation` 的 总结

总结：`Compiler` 中的 `thisCompilation` 的 hook，就是在疯狂的给 `compilation` 通过各种插件 挂各种的 监听事件，弹药准备完毕，等待一触即发。

（`compilation`内心想法：我可真是太难了。。。）

![img](04-浅析webpack5中Compiler中重要的hook调用过程/rXvzbOjOrl1EiAuwtQpl2TmuwrVUJHJo.png)

## 4. Compiler 继续 触发 `compilation` 的 hook

### 4.1 查看绑定`compilation`的插件的数据

继续进行下一步 调试。

![img](04-浅析webpack5中Compiler中重要的hook调用过程/bc7d86e5-72c3-41ab-9b22-e0e85fe5145c.png)

我直接疯了啊，这`Compiler` 的 `compilation` 的 hook 竟然绑定了 `54` 个监听的插件。

![img](04-浅析webpack5中Compiler中重要的hook调用过程/rJgfWqM4KUXJx528NqbBSLgy6lT283HY.jpeg)

我 giao 哥 直接疯掉。而我和大家作为优秀的 程序员，那不就是多点 54 次调试吗？ 进入第一个插件 `ChunkPrefetchPreloadPlugin`

### 4.2 进入 `ChunkPrefetchPreloadPlugin` 插件

![img](04-浅析webpack5中Compiler中重要的hook调用过程/f7793158-a1dd-4dad-8691-65bdd2245157.png)

这又是给 `compilation` 对象 【注意不是 hook 名称】，绑定了一身的 监听事件。

![img](04-浅析webpack5中Compiler中重要的hook调用过程/SKGzVD53WQQXDcUyru84UmkPkNkXKOqc.gif)

继续看下一个插件的，下一个插件是 `JavascriptModulesPlugin`

### 4.3 进入 `JavascriptModulesPlugin` 插件

`JavascriptModulesPlugin` 的代码如下： ![img](04-浅析webpack5中Compiler中重要的hook调用过程/56ee42c6-11b6-437f-9831-825eb2a77bd4.png)

看到了上面的一部分，`compilation` 对象终于开心了，终于不仅仅是给我绑定监听事件了，这次轮到了 `normalModuleFactory`，心里美滋滋。

继续看下面一部分代码，

![img](04-浅析webpack5中Compiler中重要的hook调用过程/6d1a2d84-70a0-498a-9361-8a2c041aaa81.png)

去求吧，`compilation` 对象还是逃不过被绑定监听事件的命运，【注意此处的 hook 名称是不同的】。

继续进入下一个插件

### 4.4 进入 `JsonModulesPlugin` 插件

给 `normalModuleFactory` 绑定 监听事件 ![img](04-浅析webpack5中Compiler中重要的hook调用过程/cfd8ccf0-21e2-42c6-a7fc-29d6cd88ccbe.png)

### 4.5 进入 `AssetModulesPlugin` 插件

给 `normalModuleFactory`和`compilation` 绑定 监听事件 ![img](04-浅析webpack5中Compiler中重要的hook调用过程/e684ce21-4400-4e24-a04a-e221d99a4bf7.png)

### 4.6 进入 `EntryPlugin` 插件

这个插件 终于不绑定事件了，仅仅是 向 `compilation.dependencyFactories` 中塞入了一对数据。

![img](04-浅析webpack5中Compiler中重要的hook调用过程/865311bf-a72d-48ff-a9a7-6b3ee856255d.png)

### 4.7 进入 `RuntimePlugin` 插件 【核心】

这个插件的代码量是真的多，看名字分析这个插件应该是处理运行时的数据 ![img](04-浅析webpack5中Compiler中重要的hook调用过程/a60e5021-fc9a-4d17-92da-c9383bf6ebe3.png)

简单看下里面的部分内容：

![img](04-浅析webpack5中Compiler中重要的hook调用过程/f9dbf898-d53e-4aab-aeb3-00f8bfad88da.png)

![img](04-浅析webpack5中Compiler中重要的hook调用过程/39ab49cf-df7c-4e3f-b1bd-819946aa622c.png)

### 4.7 进入 `InferAsyncModulesPlugin` 插件

给 `compilation` 绑定 监听事件 ![img](04-浅析webpack5中Compiler中重要的hook调用过程/92ae1364-cbe2-41c4-b2d2-870c1e4ae175.png)

### 4.8 直接干到最后一个 `WarnCaseSensitiveModulesPlugin` 插件

![img](04-浅析webpack5中Compiler中重要的hook调用过程/1a54db9e-9875-41b5-85f5-bce46d92ff3f.png)

也是在给 辛苦的 `compilation` 的身上 挂载监听事件。

### 4.9 总结

总的来说， Compiler 触发 `compilation` 的 hook 本质上是给我们辛勤的打工人 `compilation`对象 的 不同的数据处理阶段 绑定不同的插件。

![img](04-浅析webpack5中Compiler中重要的hook调用过程/CeOJzsla4jCASmTI8zY1mSjE96QDuVLx.gif)

## 5 继续 `Compiler` 的下一个 hook `make`

走完 `this.newCompilation(params);` 的调用流程后，下一步就是调用 `Compiler` 的 `make` 的 hook 了。

![img](04-浅析webpack5中Compiler中重要的hook调用过程/5a7543d1-cbbc-4273-ac8d-49b3150b5265.png)

### 5.1 查看绑定`make`的插件的数据

nice 的很，这个 hook 仅仅 有一个叫 `EntryPlugin` 的插件进行绑定。 ![img](04-浅析webpack5中Compiler中重要的hook调用过程/e7acf69c-73dd-4e19-ae01-6e2acf442237.png)

### 5.2 进入 `EntryPlugin` 插件 【 compilation 对象解析的开始】

核心代码截图如下：

![img](04-浅析webpack5中Compiler中重要的hook调用过程/14715427-ba7b-4203-9e4c-4271efa87c17.png)

你会发现这个插件就是调用了 `compilation.addEntry` 的方法，没有做其他逻辑。那就开始分析此函数的入参，`context, dep, options`。 查看一下入参的数据，如下图 ![img](04-浅析webpack5中Compiler中重要的hook调用过程/bcd22ed0-1b7e-40e8-b1c6-7411319348e9.png)

你就会显而易见的发现 `dep` 这个是主角了，那 `dep` 又是由 `const dep = EntryPlugin.createDependency(entry, options);` 创建的，查看 `createDependency` 静态方法：

```
static createDependency(entry, options) {
  // 创建了 EntryDependency 继承自 ModuleDependency 继承自 Dependency （抽象类）
  const dep = new EntryDependency(entry);
  // TODO webpack 6 remove string option
  dep.loc = { name: typeof options === "object" ? options.name : options };
  return dep;
 }
```

直接看 这个 dep 对象的数据 都有啥：

![img](04-浅析webpack5中Compiler中重要的hook调用过程/98ef1dd8-f75f-453d-b050-bbcc43274b42.png) webpack.config.js 配置如下： ![img](04-浅析webpack5中Compiler中重要的hook调用过程/1613e7ff-e877-44dc-9a2e-7604d0812c63.png)

是不是看到了，熟悉的 webpack 中的 `entry 的路径` 和 此 dep 对象的 `request` 属性是一致的呢？

### 5.3 进入 compilation 中 查看，`addEntry` 方法

上代码

```
addEntry(context, entry, optionsOrName, callback) {
  console.log("add entry");
  // TODO webpack 6 remove
  const options =
   typeof optionsOrName === "object"
    ? optionsOrName
    : { name: optionsOrName };

  this._addEntryItem(context, entry, "dependencies", options, callback);
 }
```

此函数仅仅是做了数据处理，真正干活的还在 `this._addEntryItem` 函数中，进入 `this._addEntryItem`函数

![img](04-浅析webpack5中Compiler中重要的hook调用过程/2709907b-4ba3-447e-afb7-c8116f5ead51.png)

你会发现此函数 调用了 `this.hooks.addEntry`【注意此时的 this 指的的是 `compilation` 对象】，进入此 hook

![img](04-浅析webpack5中Compiler中重要的hook调用过程/e6174cd8-4776-4d18-9c59-ef8c0882d425.png)

并没有插件 监听它，直接进入下一行代码：调用`this.addModuleTree` 方法。

### 5.4 进入 `this.addModuleTree` 的方法

![img](04-浅析webpack5中Compiler中重要的hook调用过程/f0adfbaf-ce49-4927-9332-c4d9cf083ae9.png)

处理完数据以后，又进入一个 `this.handleModuleCreation` 的方法。

### 5.5 进入`this.handleModuleCreation` 的方法

![img](04-浅析webpack5中Compiler中重要的hook调用过程/08888965-c64c-4ee0-993d-fe1de8ca158f.png)

又进入 `this.factorizeModule` 的方法

### 5.6 进入 `this.factorizeModule` 的方法

```
// Workaround for typescript as it doesn't support function overloading in jsdoc within a class
Compilation.prototype.factorizeModule = /** @type {{
 (options: FactorizeModuleOptions & { factoryResult?: false }, callback: ModuleCallback): void;
 (options: FactorizeModuleOptions & { factoryResult: true }, callback: ModuleFactoryResultCallback): void;
}} */ (
 function (options, callback) {
  console.log("add entry to factorize Queue, real job start");
  this.factorizeQueue.add(options, callback);
 }
);
```

你会发现它是在 Compilation 的原型上绑定的一个方法,其主要的作用就是 向 `factorizeQueue` 中添加了一个数据。然后就么有然后了？？？？

![img](04-浅析webpack5中Compiler中重要的hook调用过程/o6nMBYRQV56H8lykZdw9VCrEh68zosR2.gif)

## 老规矩：总结

1. `Compiler` 里的 `hooks.compile` 的主要作用就是通过 `ExternalModuleFactoryPlugin` 监听了 `normalModuleFactory.hooks.factorize` 的事件。
2. `Compiler` 的 `compile` hook 传递 `compiler 和 params`参数 给 `createCompilation` 方法，创建 `Compilation` 的实例对象 `compilation`
3. `Compiler` 中的 `thisCompilation` 的 hook，就是在疯狂的给 `compilation`对象 通过各种插件 挂各种的 监听事件，弹药准备完毕，等待一触即发
4. `Compiler` 中的 `compilation` 的 hook 本质上也是给我们辛勤的打工人 `compilation`对象的`不同的数据处理`阶段，绑定不同的插件。
5. `Compiler`中的 `make` 的 hook，主要是 通过 `EntryPlugin` 插件，解析我们传入的 entry 属性，并调用 `compilation.addEntry` 的方法，进而通过一系列的数据处理，最后将数据塞入到 `compilation` 的 `factorizeQueue` 中。

在一个类似 队列的数据中添加了，就没有然后了吗？到底怎么开始启动的呢？怎么没有见到 `compilation` 调用之前的 hook 呢？

其实上面的疑问都会在下一篇的 `webpack5 中的 任务调度`中，进行讲解，敬请期待。

![img](04-浅析webpack5中Compiler中重要的hook调用过程/F3So7peHp4zwn04LNywPB9gHmhPWTwvv.gif)

如果有忍不住的小伙伴们，也可以自己去调试一下 webpack5 相关的源码，欢迎一起学习交流。兄弟们下篇文章再见。
