"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[6998],{3905:(e,n,t)=>{t.d(n,{Zo:()=>s,kt:()=>m});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function o(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function c(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?o(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):o(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function l(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},o=Object.keys(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)t=o[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var u=a.createContext({}),d=function(e){var n=a.useContext(u),t=n;return e&&(t="function"==typeof e?e(n):c(c({},n),e)),t},s=function(e){var n=d(e.components);return a.createElement(u.Provider,{value:n},e.children)},p="mdxType",i={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},_=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,o=e.originalType,u=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),p=d(t),_=r,m=p["".concat(u,".").concat(_)]||p[_]||i[_]||o;return t?a.createElement(m,c(c({ref:n},s),{},{components:t})):a.createElement(m,c({ref:n},s))}));function m(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var o=t.length,c=new Array(o);c[0]=_;var l={};for(var u in n)hasOwnProperty.call(n,u)&&(l[u]=n[u]);l.originalType=e,l[p]="string"==typeof e?e:r,c[1]=l;for(var d=2;d<o;d++)c[d]=t[d];return a.createElement.apply(null,c)}return a.createElement.apply(null,t)}_.displayName="MDXCreateElement"},7592:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>c,default:()=>i,frontMatter:()=>o,metadata:()=>l,toc:()=>d});var a=t(87462),r=(t(67294),t(3905));const o={authors:"junkui",title:"01-webpack \u6253\u5305\u539f\u7406",categories:["js","webpack"],tags:["js","webpack"],slug:"/",date:new Date("2021-08-26T22:50:00.000Z"),sidebar_position:2},c=void 0,l={unversionedId:"webpack5\u6e90\u7801\u89e3\u6790/webpack \u6253\u5305\u539f\u7406",id:"webpack5\u6e90\u7801\u89e3\u6790/webpack \u6253\u5305\u539f\u7406",title:"01-webpack \u6253\u5305\u539f\u7406",description:"Webpack \u6253\u5305\u539f\u7406",source:"@site/webpack/webpack5\u6e90\u7801\u89e3\u6790/01-webpack \u6253\u5305\u539f\u7406.md",sourceDirName:"webpack5\u6e90\u7801\u89e3\u6790",slug:"/",permalink:"/webpack/",draft:!1,editUrl:"https://github.com/fu1996/fu1996.github.io/tree/main/webpack/webpack5\u6e90\u7801\u89e3\u6790/01-webpack \u6253\u5305\u539f\u7406.md",tags:[{label:"js",permalink:"/webpack/tags/js"},{label:"webpack",permalink:"/webpack/tags/webpack"}],version:"current",lastUpdatedBy:"fjk",lastUpdatedAt:1692539593,formattedLastUpdatedAt:"2023\u5e748\u670820\u65e5",sidebarPosition:2,frontMatter:{authors:"junkui",title:"01-webpack \u6253\u5305\u539f\u7406",categories:["js","webpack"],tags:["js","webpack"],slug:"/",date:"2021-08-26T22:50:00.000Z",sidebar_position:2},sidebar:"tutorialSidebar",next:{title:"02-3000\u5b57\u56fe\u6587\u5e76\u8302\u7684\u89e3\u6790 webpack \u6838\u5fc3\u5e93 enhanced-resolve \u5de5\u4f5c\u6d41\u7a0b\u548c\u63d2\u62d4\u5f0f\u63d2\u4ef6\u673a\u5236",permalink:"/webpack/webpack5\u6e90\u7801\u89e3\u6790/02-3000\u5b57\u56fe\u6587\u5e76\u8302\u7684\u89e3\u6790 webpack \u6838\u5fc3\u5e93 enhanced-resolve \u5de5\u4f5c\u6d41\u7a0b\u548c\u63d2\u62d4\u5f0f\u63d2\u4ef6\u673a\u5236"}},u={},d=[{value:"Webpack \u6253\u5305\u539f\u7406",id:"webpack-\u6253\u5305\u539f\u7406",level:2},{value:"1. \u793a\u4f8b\u4ee3\u7801\u7684\u9879\u76ee\u7ed3\u6784",id:"1-\u793a\u4f8b\u4ee3\u7801\u7684\u9879\u76ee\u7ed3\u6784",level:3},{value:"2.\u6253\u5305\u7ed3\u679c\u5728 dist \u76ee\u5f55",id:"2\u6253\u5305\u7ed3\u679c\u5728-dist-\u76ee\u5f55",level:3},{value:"a.\u6574\u4f53\u5206\u6790 \u533f\u540d\u51fd\u6570\u81ea\u6267\u884c",id:"a\u6574\u4f53\u5206\u6790-\u533f\u540d\u51fd\u6570\u81ea\u6267\u884c",level:4},{value:"b.\u51fd\u6570\u4ee3\u7801\u5165\u53e3\u5904\u5728\u6700\u4e0b\u65b9",id:"b\u51fd\u6570\u4ee3\u7801\u5165\u53e3\u5904\u5728\u6700\u4e0b\u65b9",level:4},{value:"c.\u2019webpack_require \u5206\u6790",id:"cwebpack_require-\u5206\u6790",level:4},{value:"d.\u53d8\u91cf webpack_modules\uff1a<strong>\u5b58\u50a8\u6587\u4ef6\u548c\u4ee3\u7801\u7684\u4fe1\u606f</strong>",id:"d\u53d8\u91cf-webpack_modules\u5b58\u50a8\u6587\u4ef6\u548c\u4ee3\u7801\u7684\u4fe1\u606f",level:4},{value:"e:\u6700\u540e\u53ef\u4ee5\u901a\u8fc7 node js \u7684\u8c03\u8bd5\u529f\u80fd \u6765\u65ad\u70b9\u67e5\u770b webpack \u7684\u8fd0\u884c\u539f\u7406",id:"e\u6700\u540e\u53ef\u4ee5\u901a\u8fc7-node-js-\u7684\u8c03\u8bd5\u529f\u80fd-\u6765\u65ad\u70b9\u67e5\u770b-webpack-\u7684\u8fd0\u884c\u539f\u7406",level:4},{value:"3.\u5173\u952e\u8bcd",id:"3\u5173\u952e\u8bcd",level:3}],s={toc:d},p="wrapper";function i(e){let{components:n,...o}=e;return(0,r.kt)(p,(0,a.Z)({},s,o,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"webpack-\u6253\u5305\u539f\u7406"},"Webpack \u6253\u5305\u539f\u7406"),(0,r.kt)("p",null,"\u672c\u6587\u9002\u5408\u4e8e\u6709\u4e00\u70b9\u70b9\u7684 webpack \u7684\u57fa\u7840\uff0c\u548c js \u6a21\u5757\u7684\u57fa\u7840\u7684\u4eba\u7fa4"),(0,r.kt)("h3",{id:"1-\u793a\u4f8b\u4ee3\u7801\u7684\u9879\u76ee\u7ed3\u6784"},"1. \u793a\u4f8b\u4ee3\u7801\u7684\u9879\u76ee\u7ed3\u6784"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},"// \u521b\u5efa\u76ee\u5f55 \u5b89\u88c5\u4f9d\u8d56\nmkdir 01-base\nnpm init -y\nnpm i webpack webpack-cli\nmkdir src\n")),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"Src"),"\u65b0\u5efa\u6587\u4ef6\u7ed3\u6784\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// src/index.js\n\nconst str = require("./a");\nconsole.log("hello" + str);\n\n// src/a.js\nmodule.exports = "aaa";\n\n// webpack.config.js [webpack \u9ed8\u8ba4\u8bfb\u53d6\u7684\u914d\u7f6e]\nmodule.exports = {\n  entry: "./src/index.js",\n  mode: "development",\n};\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210826225544655",src:t(69403).Z,width:"716",height:"376"})),(0,r.kt)("h3",{id:"2\u6253\u5305\u7ed3\u679c\u5728-dist-\u76ee\u5f55"},"2.\u6253\u5305\u7ed3\u679c\u5728 dist \u76ee\u5f55"),(0,r.kt)("p",null,"main.js \u7ecf\u8fc7\u5220\u9664\u6ce8\u91ca\u4ee5\u540e\u7684\u4ee3\u7801\u5982\u4e0b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'/*\n *\u6ce8\u610f\uff1a\u5df2\u7ecf\u4f7f\u7528\u4e86\u201ceval\u201ddevtool\uff08\u9ed8\u8ba4\u60c5\u51b5\u4e0b\u53ef\u80fd\u662f\u5728\u201c\u5f00\u53d1\u201d\u6a21\u5f0f\u4e0b\uff09\u3002\n *\u6b64devtool\u65e2\u4e0d\u7528\u4e8e\u751f\u4ea7\uff0c\u4e5f\u4e0d\u7528\u4e8e\u53ef\u8bfb\u7684\u8f93\u51fa\u6587\u4ef6\u3002\n *\u5b83\u4f7f\u7528\u201ceval\uff08\uff09\u201d\u8c03\u7528\u5728\u6d4f\u89c8\u5668devtools\u4e2d\u521b\u5efa\u5355\u72ec\u7684\u6e90\u6587\u4ef6\u3002\n *\u5982\u679c\u8bd5\u56fe\u8bfb\u53d6\u8f93\u51fa\u6587\u4ef6\uff0c\u8bf7\u9009\u62e9\u5176\u4ed6devtool(https://webpack.js.org/configuration/devtool/)\n *\u6216\u8005\u4f7f\u7528\u201cdevtool:false\u201d\u7981\u7528\u9ed8\u8ba4devtool\u3002\n *\u5982\u679c\u8981\u67e5\u627e\u751f\u4ea7\u5c31\u7eea\u8f93\u51fa\u6587\u4ef6\uff0c\u8bf7\u53c2\u9605\u6a21\u5f0f\uff1a\u201c\u751f\u4ea7\u201d(https://webpack.js.org/configuration/mode/).\n */\n(() => {\n  // webpackBootstrap\n  var __webpack_modules__ = {\n    "./src/a.js": (module) => {\n      eval(\n        "module.exports = \'aaa\'\\n\\n//## sourceURL=webpack://01-base/./src/a.js?"\n      );\n    },\n\n    "./src/index.js": (\n      __unused_webpack_module,\n      __unused_webpack_exports,\n      __webpack_require__\n    ) => {\n      eval(\n        "const str = __webpack_require__(/*! ./a */ \\"./src/a.js\\")\\nconsole.log(\'hello\' + str);\\n\\n//## sourceURL=webpack://01-base/./src/index.js?"\n      );\n    },\n  };\n  // The module cache\n  var __webpack_module_cache__ = {};\n\n  // The require function\n  function __webpack_require__(moduleId) {\n    // Check if module is in cache\n    var cachedModule = __webpack_module_cache__[moduleId];\n    if (cachedModule !== undefined) {\n      return cachedModule.exports;\n    }\n    // Create a new module (and put it into the cache)\n    var module = (__webpack_module_cache__[moduleId] = {\n      // no module.id needed\n      // no module.loaded needed\n      exports: {},\n    });\n\n    // Execute the module function\n    __webpack_modules__[moduleId](module, module.exports, __webpack_require__);\n\n    // Return the exports of the module\n    return module.exports;\n  }\n\n  // startup\n  // Load entry module and return exports\n  // This entry module can\'t be inlined because the eval devtool is used.\n  var __webpack_exports__ = __webpack_require__("./src/index.js");\n})();\n')),(0,r.kt)("h4",{id:"a\u6574\u4f53\u5206\u6790-\u533f\u540d\u51fd\u6570\u81ea\u6267\u884c"},"a.\u6574\u4f53\u5206\u6790 \u533f\u540d\u51fd\u6570\u81ea\u6267\u884c"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"\u907f\u514d\u4e86\u53d8\u91cf\u7684\u6c61\u67d3\u8be6\u89c1\u6587\u7ae0\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://www.cnblogs.com/CurryLi/p/11652540.html"},"https://www.cnblogs.com/CurryLi/p/11652540.html"))),(0,r.kt)("h4",{id:"b\u51fd\u6570\u4ee3\u7801\u5165\u53e3\u5904\u5728\u6700\u4e0b\u65b9"},"b.\u51fd\u6570\u4ee3\u7801\u5165\u53e3\u5904\u5728\u6700\u4e0b\u65b9"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'// startup\n// Load entry module and return exports\n// This entry module can\'t be inlined because the eval devtool is used.\nvar __webpack_exports__ = __webpack_require__("./src/index.js");\n')),(0,r.kt)("h4",{id:"cwebpack_require-\u5206\u6790"},"c.\u2019webpack_require \u5206\u6790"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"// The module cache\nvar __webpack_module_cache__ = {};\n\n// The require function \u89c1\u540d\u77e5\u610f \u6a21\u62df\u7684 require \u51fd\u6570\nfunction __webpack_require__(moduleId) {\n  // moduleId \u53d6\u503c\u4e3a ./src/index.js\n  // Check if module is in cache \u7406\u8bba\u662f Memoization \u7a7a\u95f4\u6362\u65f6\u95f4\n  var cachedModule = __webpack_module_cache__[moduleId];\n  if (cachedModule !== undefined) {\n    // \u627e\u5230\u6a21\u5757\u7684\u7f13\u5b58 \u8fd4\u56de\u8be5\u6a21\u5757 \u7f13\u5b58\u7684 exports \u5c5e\u6027\n    return cachedModule.exports;\n  }\n  // \u4e4b\u524d\u6ca1\u6709\u52a0\u8f7d\u8fc7 \u8be5\u6a21\u5757\n  // Create a new module (and put it into the cache)\n  var module = (__webpack_module_cache__[moduleId] = {\n    // no module.id needed\n    // no module.loaded needed\n    exports: {},\n  });\n\n  // Execute the module function \u8bfb\u53d6\u53d8\u91cf __webpack_modules__ \u91cc\u7684 ./src/index  \u3010\u89c1\u4e0b\u4e00\u4e2a\u5206\u6790 d \u4f4d\u7f6e \u3011\n  __webpack_modules__[moduleId](module, module.exports, __webpack_require__);\n  // \u89e3\u6790__webpack_modules__[moduleId] \u7684\u503c\u662f\u4e00\u4e2a\u51fd\u6570  (module, module.exports, __webpack_require__) \u662f\u51fd\u6570\u7684\u53c2\u6570\n  // Return the exports of the module\n  return module.exports;\n}\n")),(0,r.kt)("h4",{id:"d\u53d8\u91cf-webpack_modules\u5b58\u50a8\u6587\u4ef6\u548c\u4ee3\u7801\u7684\u4fe1\u606f"},"d.\u53d8\u91cf webpack_modules\uff1a",(0,r.kt)("strong",{parentName:"h4"},"\u5b58\u50a8\u6587\u4ef6\u548c\u4ee3\u7801\u7684\u4fe1\u606f")),(0,r.kt)("p",null,"\u5c06\u4f9d\u8d56 \u8fdb\u884c",(0,r.kt)("strong",{parentName:"p"},"\u6570\u636e\u5316\u5bf9\u8c61\u5b58\u50a8")," \u65b9\u4fbf\u8bfb\u53d6 \u5404\u6a21\u5757\u7684\u4ee3\u7801\u4fe1\u606f"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var __webpack_modules__ = {\n  "./src/a.js": (module) => {\n    eval("module.exports = \'aaa\'");\n  },\n\n  "./src/index.js": (\n    __unused_webpack_module,\n    __unused_webpack_exports,\n    __webpack_require__\n  ) => {\n    eval(\n      "const str = __webpack_require__(\\"./src/a.js\\")\\nconsole.log(\'hello\' + str);"\n    );\n  },\n};\n')),(0,r.kt)("h4",{id:"e\u6700\u540e\u53ef\u4ee5\u901a\u8fc7-node-js-\u7684\u8c03\u8bd5\u529f\u80fd-\u6765\u65ad\u70b9\u67e5\u770b-webpack-\u7684\u8fd0\u884c\u539f\u7406"},"e:\u6700\u540e\u53ef\u4ee5\u901a\u8fc7 node js \u7684\u8c03\u8bd5\u529f\u80fd \u6765\u65ad\u70b9\u67e5\u770b webpack \u7684\u8fd0\u884c\u539f\u7406"),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210826232750947",src:t(55993).Z,width:"2880",height:"1800"})),(0,r.kt)("h3",{id:"3\u5173\u952e\u8bcd"},"3.\u5173\u952e\u8bcd"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"webpack"),(0,r.kt)("li",{parentName:"ul"},"eval \u51fd\u6570"),(0,r.kt)("li",{parentName:"ul"},"\u6a21\u5757\u548c\u4ee3\u7801\u7684\u5b58\u50a8\u5173\u7cfb"),(0,r.kt)("li",{parentName:"ul"},"\u4f7f\u7528\u7f13\u5b58 Memoization"),(0,r.kt)("li",{parentName:"ul"},"\u9012\u5f52\u8c03\u7528")))}i.isMDXComponent=!0},69403:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-20210826225544655-5a7b1c3eb99dfa4073630c9ac7789959.png"},55993:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/image-20210826232750947-6a046a1962dda34c5f0ec04f4ab96b50.png"}}]);