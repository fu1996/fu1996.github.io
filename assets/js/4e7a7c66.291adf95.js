"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7151],{3905:(r,e,a)=>{a.d(e,{Zo:()=>y,kt:()=>f});var n=a(67294);function t(r,e,a){return e in r?Object.defineProperty(r,e,{value:a,enumerable:!0,configurable:!0,writable:!0}):r[e]=a,r}function o(r,e){var a=Object.keys(r);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(r);e&&(n=n.filter((function(e){return Object.getOwnPropertyDescriptor(r,e).enumerable}))),a.push.apply(a,n)}return a}function l(r){for(var e=1;e<arguments.length;e++){var a=null!=arguments[e]?arguments[e]:{};e%2?o(Object(a),!0).forEach((function(e){t(r,e,a[e])})):Object.getOwnPropertyDescriptors?Object.defineProperties(r,Object.getOwnPropertyDescriptors(a)):o(Object(a)).forEach((function(e){Object.defineProperty(r,e,Object.getOwnPropertyDescriptor(a,e))}))}return r}function i(r,e){if(null==r)return{};var a,n,t=function(r,e){if(null==r)return{};var a,n,t={},o=Object.keys(r);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||(t[a]=r[a]);return t}(r,e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(r);for(n=0;n<o.length;n++)a=o[n],e.indexOf(a)>=0||Object.prototype.propertyIsEnumerable.call(r,a)&&(t[a]=r[a])}return t}var s=n.createContext({}),c=function(r){var e=n.useContext(s),a=e;return r&&(a="function"==typeof r?r(e):l(l({},e),r)),a},y=function(r){var e=c(r.components);return n.createElement(s.Provider,{value:e},r.children)},u="mdxType",p={inlineCode:"code",wrapper:function(r){var e=r.children;return n.createElement(n.Fragment,{},e)}},g=n.forwardRef((function(r,e){var a=r.components,t=r.mdxType,o=r.originalType,s=r.parentName,y=i(r,["components","mdxType","originalType","parentName"]),u=c(a),g=t,f=u["".concat(s,".").concat(g)]||u[g]||p[g]||o;return a?n.createElement(f,l(l({ref:e},y),{},{components:a})):n.createElement(f,l({ref:e},y))}));function f(r,e){var a=arguments,t=e&&e.mdxType;if("string"==typeof r||t){var o=a.length,l=new Array(o);l[0]=g;var i={};for(var s in e)hasOwnProperty.call(e,s)&&(i[s]=e[s]);i.originalType=r,i[u]="string"==typeof r?r:t,l[1]=i;for(var c=2;c<o;c++)l[c]=a[c];return n.createElement.apply(null,l)}return n.createElement.apply(null,a)}g.displayName="MDXCreateElement"},44061:(r,e,a)=>{a.r(e),a.d(e,{assets:()=>s,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>i,toc:()=>c});var n=a(87462),t=(a(67294),a(3905));const o={authors:"junkui",title:"\u6df1\u5165\u6570\u7ec4\u7684\u5404\u4e2aAPI",categories:["js","work"],tags:["js","work","\u524d\u7aef"],date:new Date("2021-02-27T15:32:48.000Z")},l="\u6df1\u5165\u6570\u7ec4\u7684\u5404\u4e2a API",i={permalink:"/blog/\u6df1\u5165\u6570\u7ec4\u7684\u5404\u4e2aAPI",source:"@site/blog/\u6df1\u5165\u6570\u7ec4\u7684\u5404\u4e2aAPI.md",title:"\u6df1\u5165\u6570\u7ec4\u7684\u5404\u4e2aAPI",description:"1.\u5e26\u7740\u95ee\u9898\u53bb\u5b66\u4e60",date:"2021-02-27T15:32:48.000Z",formattedDate:"2021\u5e742\u670827\u65e5",tags:[{label:"js",permalink:"/blog/tags/js"},{label:"work",permalink:"/blog/tags/work"},{label:"\u524d\u7aef",permalink:"/blog/tags/\u524d\u7aef"}],readingTime:9.1,hasTruncateMarker:!1,authors:[{name:"\u4ed8\u4fca\u594e",title:"\u4e00\u540d\u5728\u5927\u5b66\u4ece\u52a8\u7269\u79d1\u5b66\u4e13\u4e1a\u8f6c\u7801\u519c\u7684\u81ea\u5b66\u8005",url:"https://github.com/fu1996",imageURL:"https://avatars.githubusercontent.com/u/42232973",key:"junkui"}],frontMatter:{authors:"junkui",title:"\u6df1\u5165\u6570\u7ec4\u7684\u5404\u4e2aAPI",categories:["js","work"],tags:["js","work","\u524d\u7aef"],date:"2021-02-27T15:32:48.000Z"},prevItem:{title:"normalizr\u683c\u5f0f\u5316\u6570\u636e\u5229\u5668",permalink:"/blog/normalizr\u683c\u5f0f\u5316\u6570\u636e\u5229\u5668"},nextItem:{title:"\u524d\u7aef\u8981\u7528\u7684\u7f13\u5b58",permalink:"/blog/\u524d\u7aef\u8981\u7528\u7684\u7f13\u5b58"}},s={authorsImageUrls:[void 0]},c=[{value:"1.\u5e26\u7740\u95ee\u9898\u53bb\u5b66\u4e60",id:"1\u5e26\u7740\u95ee\u9898\u53bb\u5b66\u4e60",level:2},{value:"2.\u6570\u7ec4\u7684\u6784\u9020\u5668",id:"2\u6570\u7ec4\u7684\u6784\u9020\u5668",level:2},{value:"\u4f7f\u7528\u6784\u9020\u5668 Array \u548c\u5b57\u9762\u91cf []",id:"\u4f7f\u7528\u6784\u9020\u5668-array-\u548c\u5b57\u9762\u91cf-",level:3},{value:"\u4f7f\u7528 ES6 \u65b0\u589e\u7684\u6784\u9020\u65b9\u6cd5\uff1aArray.of \u548c Array.from",id:"\u4f7f\u7528-es6-\u65b0\u589e\u7684\u6784\u9020\u65b9\u6cd5arrayof-\u548c-arrayfrom",level:3},{value:"Array \u7684\u5224\u65ad",id:"array-\u7684\u5224\u65ad",level:3},{value:"3.\u6539\u53d8\u81ea\u8eab\u7684\u65b9\u6cd5",id:"3\u6539\u53d8\u81ea\u8eab\u7684\u65b9\u6cd5",level:2},{value:"4.\u4e0d\u6539\u53d8\u81ea\u8eab\u7684\u65b9\u6cd5",id:"4\u4e0d\u6539\u53d8\u81ea\u8eab\u7684\u65b9\u6cd5",level:2},{value:"5.\u6570\u7ec4\u904d\u5386\u7684\u65b9\u6cd5",id:"5\u6570\u7ec4\u904d\u5386\u7684\u65b9\u6cd5",level:2}],y={toc:c},u="wrapper";function p(r){let{components:e,...o}=r;return(0,t.kt)(u,(0,n.Z)({},y,o,{components:e,mdxType:"MDXLayout"}),(0,t.kt)("h2",{id:"1\u5e26\u7740\u95ee\u9898\u53bb\u5b66\u4e60"},"1.\u5e26\u7740\u95ee\u9898\u53bb\u5b66\u4e60"),(0,t.kt)("ul",null,(0,t.kt)("li",{parentName:"ul"},"\u6570\u7ec4\u7684\u6784\u9020\u5668\u6709\u54ea\u51e0\u79cd\uff1f"),(0,t.kt)("li",{parentName:"ul"},"\u54ea\u4e9b\u662f\u6539\u53d8\u81ea\u8eab\u7684\u65b9\u6cd5\uff1f"),(0,t.kt)("li",{parentName:"ul"},"\u54ea\u4e9b\u4e0d\u662f\u6539\u53d8\u81ea\u8eab\u7684\u65b9\u6cd5\uff1f"),(0,t.kt)("li",{parentName:"ul"},"\u904d\u5386\u7684\u65b9\u6cd5\u6709\u54ea\u4e9b\uff1f")),(0,t.kt)("h2",{id:"2\u6570\u7ec4\u7684\u6784\u9020\u5668"},"2.\u6570\u7ec4\u7684\u6784\u9020\u5668"),(0,t.kt)("h3",{id:"\u4f7f\u7528\u6784\u9020\u5668-array-\u548c\u5b57\u9762\u91cf-"},"\u4f7f\u7528\u6784\u9020\u5668 Array \u548c\u5b57\u9762\u91cf []"),(0,t.kt)("p",null,"\u4e3a\u4e86\u521b\u5efa\u4e00\u4e2a\u957f\u5ea6\u4e0d\u4e3a 0\uff0c\u4f46\u662f\u53c8\u6ca1\u6709\u4efb\u4f55\u5143\u7d20\u7684\u6570\u7ec4\uff0c\u53ef\u9009\u4ee5\u4e0b\u4efb\u4f55\u4e00\u79cd\u65b9\u5f0f\uff1a"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"var arr = new Array(arrayLength); // \u65b9\u6cd5\u4e00\n\nvar arr = Array(arrayLength); // \u65b9\u6cd5\u4e8c\n\n// \u8fd9\u6837\u6709\u540c\u6837\u7684\u6548\u679c \u65b9\u6cd5\u4e09\nvar arr = [];\narr.length = arrayLength;\n\n// demo\nvar arr = [42]; // \u521b\u5efa\u4e00\u4e2a\u53ea\u6709\u552f\u4e00\u5143\u7d20\u7684\u6570\u7ec4:\n// the number 42.\nvar arr = Array(42); // \u521b\u5efa\u4e00\u4e2a\u6ca1\u6709\u5143\u7d20\u7684\u6570\u7ec4,\n// \u4f46\u662f\u6570\u7ec4\u7684\u957f\u5ea6\u88ab\u8bbe\u7f6e\u621042.\n\n// \u4e0a\u9762\u7684\u4ee3\u7801\u4e0e\u4e0b\u9762\u7684\u4ee3\u7801\u7b49\u4ef7\nvar arr = [];\narr.length = 42;\n")),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"\u6ce8\u610f:")," \u4ee5\u4e0a\u4ee3\u7801\uff0c\u6570\u7ec4\u957f\u5ea6\uff08arrayLength\uff09\u5fc5\u987b\u4e3a\u4e00\u4e2a\u6570\u5b57\uff08Number\uff09\u3002\u5426\u5219\uff0c\u5c06\u4f1a\u521b\u5efa\u4e00\u4e2a\u53ea\u6709\u5355\u4e2a\uff08\u6240\u8f93\u5165\u7684\uff09\u5143\u7d20\u7684\u6570\u7ec4\u3002 \u8c03\u7528 ",(0,t.kt)("inlineCode",{parentName:"p"},"arr.length")," \u4f1a\u8fd4\u56de\u6570\u7ec4\u957f\u5ea6\uff0c\u4f46\u662f\u6570\u7ec4\u5b9e\u9645\u4e0a\u5305\u542b\u4e86\u7a7a\u7684\uff08",(0,t.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff09\u5143\u7d20\u3002 \u56e0\u6b64\u5728\u6570\u7ec4\u4e0a\u4f7f\u7528 ",(0,t.kt)("inlineCode",{parentName:"p"},"for...in")," \u5faa\u73af\uff0c\u5c06\u4e0d\u4f1a\u8fd4\u56de\u4efb\u4f55\u7684\u503c \u3002"),(0,t.kt)("h3",{id:"\u4f7f\u7528-es6-\u65b0\u589e\u7684\u6784\u9020\u65b9\u6cd5arrayof-\u548c-arrayfrom"},"\u4f7f\u7528 ES6 \u65b0\u589e\u7684\u6784\u9020\u65b9\u6cd5\uff1aArray.of \u548c Array.from"),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Array.of")),(0,t.kt)("p",null,"Array.of \u51e0\u4e4e\u548c Array \u7684\u6784\u9020\u5668\u529f\u80fd\u4e00\u76f4\uff0c\u552f\u4e00\u533a\u522b\u5728\u5355\u4e2a\u6570\u5b57\u53c2\u6570\u7684\u5904\u7406\u4e0a"),(0,t.kt)("p",null,"\u5f53\u53c2\u6570\u4e3a 1 \u4e2a\u65f6\u5019\uff0cArray.of \u662f\u628a\u53c2\u6570\u53d8\u4e3a\u6570\u7ec4\u7684\u4e00\u9879\uff0c\u800c Array \u662f\u751f\u6210\u957f\u5ea6\u548c\u53c2\u6570\u76f8\u540c\u7684\u6570\u7ec4"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'Array.of(8.0); // [8]\nArray(8.0); // [empty \xd7 8]\nArray.of(8.0, 5); // [8, 5]\nArray(8.0, 5); // [8, 5]\nArray.of("8"); // ["8"]\nArray("8"); // ["8"]\n')),(0,t.kt)("p",null,(0,t.kt)("strong",{parentName:"p"},"Array.from")),(0,t.kt)("p",null,"\u770b\u540d\u5b57\u5c31\u53ef\u4ee5\u77e5\u9053\uff0c\u76ee\u7684\u662f\u4e3a\u4e86\u57fa\u4e8e\u5176\u4ed6\u5bf9\u8c61\u6765\u521b\u5efa\u4e00\u4e2a\u65b0\u6570\u7ec4\u3002\u3010\u662f\u8fd4\u56de\u65b0\u7684\u6570\u7ec4\uff0c\u4e0d\u6539\u53d8\u539f\u5bf9\u8c61\u3011\uff0c\u53ea\u8981\u4e00\u4e2a\u5bf9\u8c61\u6709\u8fed\u4ee3\u5668\uff0cArray.from \u5c31\u4f1a\u628a\u5b83\u53d8\u4e3a\u4e00\u4e2a\u6570\u7ec4\u3002"),(0,t.kt)("p",null,"\u6b64\u51fd\u6570\u63a5\u53d7 3 \u4e2a\u53c2\u6570"),(0,t.kt)("ol",null,(0,t.kt)("li",{parentName:"ol"},"\u7c7b\u4f3c\u6570\u7ec4\u7684\u5bf9\u8c61\uff0c\u5fc5\u9009"),(0,t.kt)("li",{parentName:"ol"},"\u52a0\u5de5\u51fd\u6570\uff0c\u65b0\u751f\u6210\u7684\u6570\u7ec4\u4f1a\u7ecf\u8fc7\u8be5\u51fd\u6570\u7684\u52a0\u5de5\u518d\u8fd4\u56de"),(0,t.kt)("li",{parentName:"ol"},"this \u4f5c\u7528\u57df\uff0c\u8868\u793a\u52a0\u5de5\u51fd\u6570\u6267\u884c\u65f6 this \u7684\u503c")),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'var obj = { 0: "a", 1: "b", 2: "c", length: 3 };\nArray.from(\n  obj,\n  function (value, index) {\n    console.log(value, index, this, arguments.length);\n    return value.repeat(3); //\u5fc5\u987b\u6307\u5b9a\u8fd4\u56de\u503c\uff0c\u5426\u5219\u8fd4\u56de undefined\n  },\n  obj\n);\n')),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"image-20210227155045570",src:a(7952).Z,width:"934",height:"314"})),(0,t.kt)("p",null,"\u62e5\u6709\u8fed\u4ee3\u5668\u7684\u5bf9\u8c61\u8fd8\u5305\u62ec String\u3001Set\u3001Map \u7b49\uff0cArray.from \u7edf\u7edf\u53ef\u4ee5\u5904\u7406"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'// String\nArray.from("abc"); // ["a", "b", "c"]\n// Set\nArray.from(new Set(["abc", "def"])); // ["abc", "def"]\n// Map\nArray.from(\n  new Map([\n    [1, "ab"],\n    [2, "de"],\n  ])\n);\n// [[1, \'ab\'], [2, \'de\']]\n')),(0,t.kt)("h3",{id:"array-\u7684\u5224\u65ad"},"Array \u7684\u5224\u65ad"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre"},"var a = [];\n// 1.\u57fa\u4e8einstanceof\na instanceof Array;\n// 2.\u57fa\u4e8econstructor\na.constructor === Array;\n// 3.\u57fa\u4e8eObject.prototype.isPrototypeOf\nArray.prototype.isPrototypeOf(a);\n// 4.\u57fa\u4e8egetPrototypeOf\nObject.getPrototypeOf(a) === Array.prototype;\n// 5.\u57fa\u4e8eObject.prototype.toString\nObject.prototype.toString.apply(a) === '[object Array]';\n")),(0,t.kt)("p",null,"ES6 \u4e4b\u540e\u65b0\u589e\u4e86\u4e00\u4e2a Array.isArray \u65b9\u6cd5\uff0c\u80fd\u76f4\u63a5\u5224\u65ad\u6570\u636e\u7c7b\u578b\u662f\u5426\u4e3a\u6570\u7ec4\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'if (!Array.isArray) {\n  Array.isArray = function (arg) {\n    return Object.prototype.toString.call(arg) === "[object Array]";\n  };\n}\n')),(0,t.kt)("h2",{id:"3\u6539\u53d8\u81ea\u8eab\u7684\u65b9\u6cd5"},"3.\u6539\u53d8\u81ea\u8eab\u7684\u65b9\u6cd5"),(0,t.kt)("p",null,"\u57fa\u4e8e ES6\uff0c\u4f1a\u6539\u53d8\u81ea\u8eab\u503c\u7684\u65b9\u6cd5\u4e00\u5171\u6709 9 \u4e2a\uff0c\u5206\u522b\u4e3a pop\u3001push\u3001reverse\u3001shift\u3001sort\u3001splice\u3001unshift\uff0c\u4ee5\u53ca\u4e24\u4e2a ES6 \u65b0\u589e\u7684\u65b9\u6cd5 copyWithin \u548c fill\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'// pop\u65b9\u6cd5\nvar array = ["cat", "dog", "cow", "chicken", "mouse"];\nvar item = array.pop();\nconsole.log(array); // ["cat", "dog", "cow", "chicken"]\nconsole.log(item); // mouse\n// push\u65b9\u6cd5\nvar array = ["football", "basketball", "badminton"];\nvar i = array.push("golfball");\nconsole.log(array);\n// ["football", "basketball", "badminton", "golfball"]\nconsole.log(i); // 4\n// reverse\u65b9\u6cd5\nvar array = [1, 2, 3, 4, 5];\nvar array2 = array.reverse();\nconsole.log(array); // [5,4,3,2,1]\nconsole.log(array2 === array); // true\n// shift\u65b9\u6cd5\nvar array = [1, 2, 3, 4, 5];\nvar item = array.shift();\nconsole.log(array); // [2,3,4,5]\nconsole.log(item); // 1\n// unshift\u65b9\u6cd5\nvar array = ["red", "green", "blue"];\nvar length = array.unshift("yellow");\nconsole.log(array); // ["yellow", "red", "green", "blue"]\nconsole.log(length); // 4\n// sort\u65b9\u6cd5\nvar array = ["apple", "Boy", "Cat", "dog"];\nvar array2 = array.sort();\nconsole.log(array); // ["Boy", "Cat", "apple", "dog"]\nconsole.log(array2 == array); // true\n// splice\u65b9\u6cd5\nvar array = ["apple", "boy"];\nvar splices = array.splice(1, 1);\nconsole.log(array); // ["apple"]\nconsole.log(splices); // ["boy"]\n// copyWithin\u65b9\u6cd5\nvar array = [1, 2, 3, 4, 5];\nvar array2 = array.copyWithin(1, 3);\nconsole.log(array === array2, array2); // true [4, 5, 3, 4, 5]\n// fill\u65b9\u6cd5\nvar array = [1, 2, 3, 4, 5];\nvar array2 = array.fill(10, 0, 3);\nconsole.log(array === array2, array2);\n// true [10, 10, 10, 4, 5], \u53ef\u89c1\u6570\u7ec4\u533a\u95f4[0,3]\u7684\u5143\u7d20\u5168\u90e8\u66ff\u6362\u4e3a10\n')),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},"arr.copyWithin(target[, start[, end]])\n\nvar array = [1,2,3,4,5];\nvar array2 = array.copyWithin(1,3); // \u4ece\u7d22\u5f15\u4e3a3\u7684\u5f00\u59cb\u590d\u5236\uff0c\u76f4\u5230\u6700\u540e\uff0c\u628a\u8d4b\u503c\u7684\u503c\u653e\u5728\u7b2c1\u4e2a\u4f4d\u7f6e\u4e0a\n// [1, 4, 5, 4, 5]\n\n")),(0,t.kt)("h2",{id:"4\u4e0d\u6539\u53d8\u81ea\u8eab\u7684\u65b9\u6cd5"},"4.\u4e0d\u6539\u53d8\u81ea\u8eab\u7684\u65b9\u6cd5"),(0,t.kt)("p",null,"\u57fa\u4e8e ES7\uff0c\u4e0d\u4f1a\u6539\u53d8\u81ea\u8eab\u7684\u65b9\u6cd5\u4e5f\u6709 9 \u4e2a\uff0c\u5206\u522b\u4e3a concat\u3001join\u3001slice\u3001toString\u3001toLocaleString\u3001indexOf\u3001lastIndexOf\u3001\u672a\u5f62\u6210\u6807\u51c6\u7684 toSource\uff0c\u4ee5\u53ca ES7 \u65b0\u589e\u7684\u65b9\u6cd5 includes\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'// concat\u65b9\u6cd5\nvar array = [1, 2, 3];\nvar array2 = array.concat(4, [5, 6], [7, 8, 9]);\nconsole.log(array2); // [1, 2, 3, 4, 5, 6, 7, 8, 9]\nconsole.log(array); // [1, 2, 3], \u53ef\u89c1\u539f\u6570\u7ec4\u5e76\u672a\u88ab\u4fee\u6539\n// join\u65b9\u6cd5\nvar array = ["We", "are", "Chinese"];\nconsole.log(array.join()); // "We,are,Chinese"\nconsole.log(array.join("+")); // "We+are+Chinese"\n// slice\u65b9\u6cd5\nvar array = ["one", "two", "three", "four", "five"];\nconsole.log(array.slice()); // ["one", "two", "three","four", "five"]\nconsole.log(array.slice(2, 3)); // ["three"]\n// toString\u65b9\u6cd5\nvar array = ["Jan", "Feb", "Mar", "Apr"];\nvar str = array.toString();\nconsole.log(str); // Jan,Feb,Mar,Apr\n// tolocalString\u65b9\u6cd5\nvar array = [{ name: "zz" }, 123, "abc", new Date()];\nvar str = array.toLocaleString();\nconsole.log(str); // [object Object],123,abc,2016/1/5 \u4e0b\u53481:06:23\n// indexOf\u65b9\u6cd5\nvar array = ["abc", "def", "ghi", "123"];\nconsole.log(array.indexOf("def")); // 1\n// includes\u65b9\u6cd5\nvar array = [-0, 1, 2];\nconsole.log(array.includes(+0)); // true\nconsole.log(array.includes(1)); // true\nvar array = [NaN];\nconsole.log(array.includes(NaN)); // true\n')),(0,t.kt)("h2",{id:"5\u6570\u7ec4\u904d\u5386\u7684\u65b9\u6cd5"},"5.\u6570\u7ec4\u904d\u5386\u7684\u65b9\u6cd5"),(0,t.kt)("p",null,"\u57fa\u4e8e ES6\uff0c\u4e0d\u4f1a\u6539\u53d8\u81ea\u8eab\u7684\u904d\u5386\u65b9\u6cd5\u4e00\u5171\u6709 12 \u4e2a\uff0c\u5206\u522b\u4e3a forEach\u3001every\u3001some\u3001filter\u3001map\u3001reduce\u3001reduceRight\uff0c\u4ee5\u53ca ES6 \u65b0\u589e\u7684\u65b9\u6cd5 entries\u3001find\u3001findIndex\u3001keys\u3001values\u3002"),(0,t.kt)("pre",null,(0,t.kt)("code",{parentName:"pre",className:"language-js"},'// forEach\u65b9\u6cd5\nvar array = [1, 3, 5];\nvar obj = { name: "cc" };\nvar sReturn = array.forEach(function (value, index, array) {\n  array[index] = value;\n  console.log(this.name); // cc\u88ab\u6253\u5370\u4e86\u4e09\u6b21, this\u6307\u5411obj\n}, obj);\nconsole.log(array); // [1, 3, 5]\nconsole.log(sReturn); // undefined, \u53ef\u89c1\u8fd4\u56de\u503c\u4e3aundefined\n// every\u65b9\u6cd5\nvar o = { 0: 10, 1: 8, 2: 25, length: 3 };\nvar bool = Array.prototype.every.call(\n  o,\n  function (value, index, obj) {\n    return value >= 8;\n  },\n  o\n);\nconsole.log(bool); // true\n// some\u65b9\u6cd5\nvar array = [18, 9, 10, 35, 80];\nvar isExist = array.some(function (value, index, array) {\n  return value > 20;\n});\nconsole.log(isExist); // true\n// map \u65b9\u6cd5\nvar array = [18, 9, 10, 35, 80];\narray.map((item) => item + 1);\nconsole.log(array); // [19, 10, 11, 36, 81]\n// filter \u65b9\u6cd5\nvar array = [18, 9, 10, 35, 80];\nvar array2 = array.filter(function (value, index, array) {\n  return value > 20;\n});\nconsole.log(array2); // [35, 80]\n// reduce\u65b9\u6cd5\nvar array = [1, 2, 3, 4];\nvar s = array.reduce(function (previousValue, value, index, array) {\n  return previousValue * value;\n}, 1);\nconsole.log(s); // 24\n// ES6\u5199\u6cd5\u66f4\u52a0\u7b80\u6d01\narray.reduce((p, v) => p * v); // 24\n// reduceRight\u65b9\u6cd5 (\u548creduce\u7684\u533a\u522b\u5c31\u662f\u4ece\u540e\u5f80\u524d\u7d2f\u8ba1)\nvar array = [1, 2, 3, 4];\narray.reduceRight((p, v) => p * v); // 24\n// entries\u65b9\u6cd5\nvar array = ["a", "b", "c"];\nvar iterator = array.entries();\nconsole.log(iterator.next().value); // [0, "a"]\nconsole.log(iterator.next().value); // [1, "b"]\nconsole.log(iterator.next().value); // [2, "c"]\nconsole.log(iterator.next().value); // undefined, \u8fed\u4ee3\u5668\u5904\u4e8e\u6570\u7ec4\u672b\u5c3e\u65f6, \u518d\u8fed\u4ee3\u5c31\u4f1a\u8fd4\u56deundefined\n// find & findIndex\u65b9\u6cd5\nvar array = [1, 3, 5, 7, 8, 9, 10];\nfunction f(value, index, array) {\n  return value % 2 == 0; // \u8fd4\u56de\u5076\u6570\n}\nfunction f2(value, index, array) {\n  return value > 20; // \u8fd4\u56de\u5927\u4e8e20\u7684\u6570\n}\nconsole.log(array.find(f)); // 8\nconsole.log(array.find(f2)); // undefined\nconsole.log(array.findIndex(f)); // 4\nconsole.log(array.findIndex(f2)); // -1\n// keys\u65b9\u6cd5\n[...Array(10).keys()]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n[...new Array(10).keys()]; // [0, 1, 2, 3, 4, 5, 6, 7, 8, 9]\n// values\u65b9\u6cd5\nvar array = ["abc", "xyz"];\nvar iterator = array.values();\nconsole.log(iterator.next().value); //abc\nconsole.log(iterator.next().value); //xyz\n')),(0,t.kt)("p",null,(0,t.kt)("img",{alt:"img",src:a(37432).Z,width:"1752",height:"638"})),(0,t.kt)("p",null,"\u4ee5\u4e0a\uff0c\u6570\u7ec4\u7684\u5404\u65b9\u6cd5\u57fa\u672c\u8bb2\u89e3\u5b8c\u6bd5\uff0c\u8fd9\u4e9b\u65b9\u6cd5\u4e4b\u95f4\u5b58\u5728\u5f88\u591a\u5171\u6027\uff0c\u5982\u4e0b\uff1a"),(0,t.kt)("p",null,"\u6240\u6709\u63d2\u5165\u5143\u7d20\u7684\u65b9\u6cd5\uff0c\u6bd4\u5982 push\u3001unshift \u4e00\u5f8b\u8fd4\u56de\u6570\u7ec4\u65b0\u7684\u957f\u5ea6\uff1b"),(0,t.kt)("p",null,"\u6240\u6709\u5220\u9664\u5143\u7d20\u7684\u65b9\u6cd5\uff0c\u6bd4\u5982 pop\u3001shift\u3001splice \u4e00\u5f8b\u8fd4\u56de\u5220\u9664\u7684\u5143\u7d20\uff0c\u6216\u8005\u8fd4\u56de\u5220\u9664\u7684\u591a\u4e2a\u5143\u7d20\u7ec4\u6210\u7684\u6570\u7ec4\uff1b"),(0,t.kt)("p",null,"\u90e8\u5206\u904d\u5386\u65b9\u6cd5\uff0c\u6bd4\u5982 forEach\u3001every\u3001some\u3001filter\u3001map\u3001find\u3001findIndex\uff0c\u5b83\u4eec\u90fd\u5305\u542b function(value,index,array){} \u548c thisArg \u8fd9\u6837\u4e24\u4e2a\u5f62\u53c2\u3002"))}p.isMDXComponent=!0},37432:(r,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/Cip5yGAP1k2ACVqpAAE5zFVPD7o375-fbb7829efada0f57da389d9abc076e94.png"},7952:(r,e,a)=>{a.d(e,{Z:()=>n});const n=a.p+"assets/images/image-20210227155045570-a84345a06a4305fcd1976be7f1dc335c.png"}}]);