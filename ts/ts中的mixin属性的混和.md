---
authors: junkui
title: 09-ts中的mixin属性的混和
categories:
  - ts
tags:
  - ts

date: 2021-01-10 18:46:49
---

# 属性的混合操作

## 01-ts 版本

```typescript
function applyMixins(derivedCtor: any, baseCtors: any) {
  // 遍历基础属性
  baseCtors.forEach((baseCtor) => {
    // 进行赋值操作
    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}

class Disposable {
  isDisposed: boolean;
  dispose() {
    this.isDisposed = true;
  }
}

class Activatable {
  isActive: boolean;
  activate() {
    this.isActive = true;
  }
  deactivate() {
    this.isActive = false;
  }
}
// 没使用extends而是使用implements。 把类当成了接口，
// 仅使用Disposable和Activatable的类型而非其实现。
class SmartObject implements Disposable, Activatable {
  // Disposable 的占位属性 将来会通过 mixin 把真正的函数和方法 赋值 给这两个占位属性
  isDisposed: boolean = false;
  dispose: () => void;

  // Activatable
  isActive: boolean = false;
  activate: () => void;
  deactivate: () => void;

  constructor() {
    setInterval(() => console.log(this.isActive + ":" + this.isDisposed), 500);
  }
  interact() {
    this.activate();
  }
}

applyMixins(SmartObject, [Disposable, Activatable]);
// 编译为 js 以后也太容易看懂了把
let smartObj = new SmartObject();
setTimeout(() => smartObj.interact(), 1000);
```

## 02-编译后的 ts

```javascript
function applyMixins(derivedCtor, baseCtors) {
  // 遍历基础属性
  baseCtors.forEach(function (baseCtor) {
    // 进行赋值操作
    Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {
      derivedCtor.prototype[name] = baseCtor.prototype[name];
    });
  });
}
var Disposable = /** @class */ (function () {
  function Disposable() {}
  Disposable.prototype.dispose = function () {
    this.isDisposed = true;
  };
  return Disposable;
})();
var Activatable = /** @class */ (function () {
  function Activatable() {}
  Activatable.prototype.activate = function () {
    this.isActive = true;
  };
  Activatable.prototype.deactivate = function () {
    this.isActive = false;
  };
  return Activatable;
})();
// 没使用extends而是使用implements。 把类当成了接口，
// 仅使用Disposable和Activatable的类型而非其实现。
var SmartObject = /** @class */ (function () {
  function SmartObject() {
    var _this = this;
    // Disposable 的占位属性 将来会通过 mixin 把真正的函数和方法 赋值 给这两个占位属性
    this.isDisposed = false;
    // Activatable
    this.isActive = false;
    setInterval(function () {
      return console.log(_this.isActive + ":" + _this.isDisposed);
    }, 500);
  }
  SmartObject.prototype.interact = function () {
    this.activate();
  };
  return SmartObject;
})();
applyMixins(SmartObject, [Disposable, Activatable]);
var smartObj = new SmartObject();
setTimeout(function () {
  return smartObj.interact();
}, 1000);
```

## 03-总结

总的来说就是，把其他对象或者接口的属性，先在基础对象上挖坑，然后写一个工厂函数进行组装，将其他对象或者接口实际实现的功能函数 遍历赋值到基础对象上，组装出来一个完整的对象。
