"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7412],{3905:(t,e,n)=>{n.d(e,{Zo:()=>p,kt:()=>v});var i=n(67294);function r(t,e,n){return e in t?Object.defineProperty(t,e,{value:n,enumerable:!0,configurable:!0,writable:!0}):t[e]=n,t}function a(t,e){var n=Object.keys(t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(t);e&&(i=i.filter((function(e){return Object.getOwnPropertyDescriptor(t,e).enumerable}))),n.push.apply(n,i)}return n}function s(t){for(var e=1;e<arguments.length;e++){var n=null!=arguments[e]?arguments[e]:{};e%2?a(Object(n),!0).forEach((function(e){r(t,e,n[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(t,Object.getOwnPropertyDescriptors(n)):a(Object(n)).forEach((function(e){Object.defineProperty(t,e,Object.getOwnPropertyDescriptor(n,e))}))}return t}function o(t,e){if(null==t)return{};var n,i,r=function(t,e){if(null==t)return{};var n,i,r={},a=Object.keys(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||(r[n]=t[n]);return r}(t,e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(t);for(i=0;i<a.length;i++)n=a[i],e.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(t,n)&&(r[n]=t[n])}return r}var c=i.createContext({}),l=function(t){var e=i.useContext(c),n=e;return t&&(n="function"==typeof t?t(e):s(s({},e),t)),n},p=function(t){var e=l(t.components);return i.createElement(c.Provider,{value:e},t.children)},u="mdxType",b={inlineCode:"code",wrapper:function(t){var e=t.children;return i.createElement(i.Fragment,{},e)}},m=i.forwardRef((function(t,e){var n=t.components,r=t.mdxType,a=t.originalType,c=t.parentName,p=o(t,["components","mdxType","originalType","parentName"]),u=l(n),m=r,v=u["".concat(c,".").concat(m)]||u[m]||b[m]||a;return n?i.createElement(v,s(s({ref:e},p),{},{components:n})):i.createElement(v,s({ref:e},p))}));function v(t,e){var n=arguments,r=e&&e.mdxType;if("string"==typeof t||r){var a=n.length,s=new Array(a);s[0]=m;var o={};for(var c in e)hasOwnProperty.call(e,c)&&(o[c]=e[c]);o.originalType=t,o[u]="string"==typeof t?t:r,s[1]=o;for(var l=2;l<a;l++)s[l]=n[l];return i.createElement.apply(null,s)}return i.createElement.apply(null,n)}m.displayName="MDXCreateElement"},13131:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>c,contentTitle:()=>s,default:()=>b,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=n(87462),r=(n(67294),n(3905));const a={authors:"junkui",title:"09-ts\u4e2d\u7684mixin\u5c5e\u6027\u7684\u6df7\u548c",categories:["ts"],tags:["ts"],date:new Date("2021-01-10T18:46:49.000Z")},s=void 0,o={unversionedId:"ts\u4e2d\u7684mixin\u5c5e\u6027\u7684\u6df7\u548c",id:"ts\u4e2d\u7684mixin\u5c5e\u6027\u7684\u6df7\u548c",title:"09-ts\u4e2d\u7684mixin\u5c5e\u6027\u7684\u6df7\u548c",description:"\u5c5e\u6027\u7684\u6df7\u5408\u64cd\u4f5c",source:"@site/ts/09-ts\u4e2d\u7684mixin\u5c5e\u6027\u7684\u6df7\u548c.md",sourceDirName:".",slug:"/ts\u4e2d\u7684mixin\u5c5e\u6027\u7684\u6df7\u548c",permalink:"/ts/ts\u4e2d\u7684mixin\u5c5e\u6027\u7684\u6df7\u548c",draft:!1,editUrl:"https://github.com/fu1996/fu1996.github.io/tree/main/ts/09-ts\u4e2d\u7684mixin\u5c5e\u6027\u7684\u6df7\u548c.md",tags:[{label:"ts",permalink:"/ts/tags/ts"}],version:"current",lastUpdatedBy:"fjk",lastUpdatedAt:1692539593,formattedLastUpdatedAt:"2023\u5e748\u670820\u65e5",sidebarPosition:9,frontMatter:{authors:"junkui",title:"09-ts\u4e2d\u7684mixin\u5c5e\u6027\u7684\u6df7\u548c",categories:["ts"],tags:["ts"],date:"2021-01-10T18:46:49.000Z"},sidebar:"tutorialSidebar",previous:{title:"08-ts\u4e2d\u7684\u7c7b\u578b\u63a8\u8bba\u548c\u7c7b\u578b\u517c\u5bb9\u6027",permalink:"/ts/ts\u4e2d\u7684\u7c7b\u578b\u63a8\u8bba\u548c\u7c7b\u578b\u517c\u5bb9\u6027"},next:{title:"10- ts\u4e2d\u7684\u9ad8\u7ea7\u7c7b\u578b",permalink:"/ts/ts\u4e2d\u7684\u9ad8\u7ea7\u7c7b\u578b"}},c={},l=[{value:"\u5c5e\u6027\u7684\u6df7\u5408\u64cd\u4f5c",id:"\u5c5e\u6027\u7684\u6df7\u5408\u64cd\u4f5c",level:2},{value:"01-ts \u7248\u672c",id:"01-ts-\u7248\u672c",level:3},{value:"02-\u7f16\u8bd1\u540e\u7684 ts",id:"02-\u7f16\u8bd1\u540e\u7684-ts",level:3},{value:"03-\u603b\u7ed3",id:"03-\u603b\u7ed3",level:3}],p={toc:l},u="wrapper";function b(t){let{components:e,...n}=t;return(0,r.kt)(u,(0,i.Z)({},p,n,{components:e,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"\u5c5e\u6027\u7684\u6df7\u5408\u64cd\u4f5c"},"\u5c5e\u6027\u7684\u6df7\u5408\u64cd\u4f5c"),(0,r.kt)("h3",{id:"01-ts-\u7248\u672c"},"01-ts \u7248\u672c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'function applyMixins(derivedCtor: any, baseCtors: any) {\n  // \u904d\u5386\u57fa\u7840\u5c5e\u6027\n  baseCtors.forEach((baseCtor) => {\n    // \u8fdb\u884c\u8d4b\u503c\u64cd\u4f5c\n    Object.getOwnPropertyNames(baseCtor.prototype).forEach((name) => {\n      derivedCtor.prototype[name] = baseCtor.prototype[name];\n    });\n  });\n}\n\nclass Disposable {\n  isDisposed: boolean;\n  dispose() {\n    this.isDisposed = true;\n  }\n}\n\nclass Activatable {\n  isActive: boolean;\n  activate() {\n    this.isActive = true;\n  }\n  deactivate() {\n    this.isActive = false;\n  }\n}\n// \u6ca1\u4f7f\u7528extends\u800c\u662f\u4f7f\u7528implements\u3002 \u628a\u7c7b\u5f53\u6210\u4e86\u63a5\u53e3\uff0c\n// \u4ec5\u4f7f\u7528Disposable\u548cActivatable\u7684\u7c7b\u578b\u800c\u975e\u5176\u5b9e\u73b0\u3002\nclass SmartObject implements Disposable, Activatable {\n  // Disposable \u7684\u5360\u4f4d\u5c5e\u6027 \u5c06\u6765\u4f1a\u901a\u8fc7 mixin \u628a\u771f\u6b63\u7684\u51fd\u6570\u548c\u65b9\u6cd5 \u8d4b\u503c \u7ed9\u8fd9\u4e24\u4e2a\u5360\u4f4d\u5c5e\u6027\n  isDisposed: boolean = false;\n  dispose: () => void;\n\n  // Activatable\n  isActive: boolean = false;\n  activate: () => void;\n  deactivate: () => void;\n\n  constructor() {\n    setInterval(() => console.log(this.isActive + ":" + this.isDisposed), 500);\n  }\n  interact() {\n    this.activate();\n  }\n}\n\napplyMixins(SmartObject, [Disposable, Activatable]);\n// \u7f16\u8bd1\u4e3a js \u4ee5\u540e\u4e5f\u592a\u5bb9\u6613\u770b\u61c2\u4e86\u628a\nlet smartObj = new SmartObject();\nsetTimeout(() => smartObj.interact(), 1000);\n')),(0,r.kt)("h3",{id:"02-\u7f16\u8bd1\u540e\u7684-ts"},"02-\u7f16\u8bd1\u540e\u7684 ts"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'function applyMixins(derivedCtor, baseCtors) {\n  // \u904d\u5386\u57fa\u7840\u5c5e\u6027\n  baseCtors.forEach(function (baseCtor) {\n    // \u8fdb\u884c\u8d4b\u503c\u64cd\u4f5c\n    Object.getOwnPropertyNames(baseCtor.prototype).forEach(function (name) {\n      derivedCtor.prototype[name] = baseCtor.prototype[name];\n    });\n  });\n}\nvar Disposable = /** @class */ (function () {\n  function Disposable() {}\n  Disposable.prototype.dispose = function () {\n    this.isDisposed = true;\n  };\n  return Disposable;\n})();\nvar Activatable = /** @class */ (function () {\n  function Activatable() {}\n  Activatable.prototype.activate = function () {\n    this.isActive = true;\n  };\n  Activatable.prototype.deactivate = function () {\n    this.isActive = false;\n  };\n  return Activatable;\n})();\n// \u6ca1\u4f7f\u7528extends\u800c\u662f\u4f7f\u7528implements\u3002 \u628a\u7c7b\u5f53\u6210\u4e86\u63a5\u53e3\uff0c\n// \u4ec5\u4f7f\u7528Disposable\u548cActivatable\u7684\u7c7b\u578b\u800c\u975e\u5176\u5b9e\u73b0\u3002\nvar SmartObject = /** @class */ (function () {\n  function SmartObject() {\n    var _this = this;\n    // Disposable \u7684\u5360\u4f4d\u5c5e\u6027 \u5c06\u6765\u4f1a\u901a\u8fc7 mixin \u628a\u771f\u6b63\u7684\u51fd\u6570\u548c\u65b9\u6cd5 \u8d4b\u503c \u7ed9\u8fd9\u4e24\u4e2a\u5360\u4f4d\u5c5e\u6027\n    this.isDisposed = false;\n    // Activatable\n    this.isActive = false;\n    setInterval(function () {\n      return console.log(_this.isActive + ":" + _this.isDisposed);\n    }, 500);\n  }\n  SmartObject.prototype.interact = function () {\n    this.activate();\n  };\n  return SmartObject;\n})();\napplyMixins(SmartObject, [Disposable, Activatable]);\nvar smartObj = new SmartObject();\nsetTimeout(function () {\n  return smartObj.interact();\n}, 1000);\n')),(0,r.kt)("h3",{id:"03-\u603b\u7ed3"},"03-\u603b\u7ed3"),(0,r.kt)("p",null,"\u603b\u7684\u6765\u8bf4\u5c31\u662f\uff0c\u628a\u5176\u4ed6\u5bf9\u8c61\u6216\u8005\u63a5\u53e3\u7684\u5c5e\u6027\uff0c\u5148\u5728\u57fa\u7840\u5bf9\u8c61\u4e0a\u6316\u5751\uff0c\u7136\u540e\u5199\u4e00\u4e2a\u5de5\u5382\u51fd\u6570\u8fdb\u884c\u7ec4\u88c5\uff0c\u5c06\u5176\u4ed6\u5bf9\u8c61\u6216\u8005\u63a5\u53e3\u5b9e\u9645\u5b9e\u73b0\u7684\u529f\u80fd\u51fd\u6570 \u904d\u5386\u8d4b\u503c\u5230\u57fa\u7840\u5bf9\u8c61\u4e0a\uff0c\u7ec4\u88c5\u51fa\u6765\u4e00\u4e2a\u5b8c\u6574\u7684\u5bf9\u8c61\u3002"))}b.isMDXComponent=!0}}]);