"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3961],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>f});var r=n(67294);function i(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){i(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function o(e,t){if(null==e)return{};var n,r,i=function(e,t){if(null==e)return{};var n,r,i={},l=Object.keys(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||(i[n]=e[n]);return i}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)n=l[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(i[n]=e[n])}return i}var u=r.createContext({}),s=function(e){var t=r.useContext(u),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=s(e.components);return r.createElement(u.Provider,{value:t},e.children)},p="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},m=r.forwardRef((function(e,t){var n=e.components,i=e.mdxType,l=e.originalType,u=e.parentName,c=o(e,["components","mdxType","originalType","parentName"]),p=s(n),m=i,f=p["".concat(u,".").concat(m)]||p[m]||d[m]||l;return n?r.createElement(f,a(a({ref:t},c),{},{components:n})):r.createElement(f,a({ref:t},c))}));function f(e,t){var n=arguments,i=t&&t.mdxType;if("string"==typeof e||i){var l=n.length,a=new Array(l);a[0]=m;var o={};for(var u in t)hasOwnProperty.call(t,u)&&(o[u]=t[u]);o.originalType=e,o[p]="string"==typeof e?e:i,a[1]=o;for(var s=2;s<l;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}m.displayName="MDXCreateElement"},95275:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>a,default:()=>d,frontMatter:()=>l,metadata:()=>o,toc:()=>s});var r=n(87462),i=(n(67294),n(3905));const l={authors:"junkui",title:"JS\u57fa\u784015-JS-\u6027\u80fd\u4f18\u5316\u4e4b\u9632\u6296",categories:["js"],tags:["js"],date:new Date("2021-02-08T17:45:40.000Z")},a="\u9632\u6296 debounce",o={unversionedId:"js\u57fa\u7840/JS\u57fa\u784015-JS-\u6027\u80fd\u4f18\u5316\u4e4b\u9632\u6296",id:"js\u57fa\u7840/JS\u57fa\u784015-JS-\u6027\u80fd\u4f18\u5316\u4e4b\u9632\u6296",title:"JS\u57fa\u784015-JS-\u6027\u80fd\u4f18\u5316\u4e4b\u9632\u6296",description:"1.\u76ee\u7684\u548c\u573a\u666f",source:"@site/js/js\u57fa\u7840/JS\u57fa\u784015-JS-\u6027\u80fd\u4f18\u5316\u4e4b\u9632\u6296.md",sourceDirName:"js\u57fa\u7840",slug:"/js\u57fa\u7840/JS\u57fa\u784015-JS-\u6027\u80fd\u4f18\u5316\u4e4b\u9632\u6296",permalink:"/js/js\u57fa\u7840/JS\u57fa\u784015-JS-\u6027\u80fd\u4f18\u5316\u4e4b\u9632\u6296",draft:!1,editUrl:"https://github.com/fu1996/fu1996.github.io/tree/main/js/js\u57fa\u7840/JS\u57fa\u784015-JS-\u6027\u80fd\u4f18\u5316\u4e4b\u9632\u6296.md",tags:[{label:"js",permalink:"/js/tags/js"}],version:"current",lastUpdatedBy:"\u4ed8\u4fca\u594e",lastUpdatedAt:1711900781,formattedLastUpdatedAt:"2024\u5e743\u670831\u65e5",frontMatter:{authors:"junkui",title:"JS\u57fa\u784015-JS-\u6027\u80fd\u4f18\u5316\u4e4b\u9632\u6296",categories:["js"],tags:["js"],date:"2021-02-08T17:45:40.000Z"},sidebar:"tutorialSidebar",previous:{title:"JS\u57fa\u784014-JS-\u8fd0\u884c\u73af\u5883\u548c\u6027\u80fd\u4f18\u5316",permalink:"/js/js\u57fa\u7840/JS\u57fa\u784014-JS-\u8fd0\u884c\u73af\u5883\u548c\u6027\u80fd\u4f18\u5316"},next:{title:"JS\u57fa\u784016-JS-\u5b89\u5168\u95ee\u9898",permalink:"/js/js\u57fa\u7840/JS\u57fa\u784016-JS-\u5b89\u5168\u95ee\u9898"}},u={},s=[{value:"1.\u76ee\u7684\u548c\u573a\u666f",id:"1\u76ee\u7684\u548c\u573a\u666f",level:2},{value:"2.\u4ee3\u7801\u6f14\u793a\uff1a",id:"2\u4ee3\u7801\u6f14\u793a",level:2},{value:"1.\u76ee\u7684\u548c\u573a\u666f",id:"1\u76ee\u7684\u548c\u573a\u666f-1",level:2},{value:"2.\u4ee3\u7801\u6f14\u793a\uff1a",id:"2\u4ee3\u7801\u6f14\u793a-1",level:2}],c={toc:s},p="wrapper";function d(e){let{components:t,...n}=e;return(0,i.kt)(p,(0,r.Z)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,i.kt)("h1",{id:"\u9632\u6296-debounce"},"\u9632\u6296 debounce"),(0,i.kt)("h2",{id:"1\u76ee\u7684\u548c\u573a\u666f"},"1.\u76ee\u7684\u548c\u573a\u666f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u76d1\u542c\u4e00\u4e2a\u7528\u6237\u6846\u7684\u9891\u7e41\u8f93\u5165\uff0c\u5982\u6821\u9a8c\u624b\u673a\u53f7\u554a\uff0c\u6587\u5b57\u53d8\u5316\u540e\u4f1a\u89e6\u53d1 change \u4e8b\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u7528 keyup \u4e8b\u4ef6\uff0c\u5219\u4f1a\u9891\u7e41\u89e6\u53d1 change \u4e8b\u4ef6"),(0,i.kt)("li",{parentName:"ul"},"\u9632\u6296\uff1a\u7528\u6237\u8f93\u5165\u7ed3\u675f\u6216\u8005\u6682\u505c\u65f6\u5019\uff0c\u624d\u4f1a\u89e6\u53d1 change \u4e8b\u4ef6\uff0c\u51cf\u5c11\u7f51\u7edc\u8bf7\u6c42")),(0,i.kt)("h2",{id:"2\u4ee3\u7801\u6f14\u793a"},"2.\u4ee3\u7801\u6f14\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'<!DOCTYPE html>\n<html lang="en">\n  <head>\n    <meta charset="UTF-8" />\n    <meta name="viewport" content="width=device-width, initial-scale=1.0" />\n    <title>\u9632\u6296</title>\n  </head>\n  <body>\n    <input type="text" id="input1" />\n    <script src="./debounce.js"><\/script>\n  </body>\n</html>\n\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const input1 = document.getElementById("input1");\n// let timer = null;\n// input1.addEventListener("input", (e) => {\n//   console.log("timer", timer);\n//   if (timer) {\n//     clearTimeout(timer);\n//   }\n//   //   \u4e0b\u4e00\u6b21\u7684\u8f93\u5165 \u4f1a\u628a\u4e0a\u4e00\u6b21\u7684\u6ca1\u6709\u6267\u884c\u7684timer \u6e05\u9664\u6389\n//   timer = setTimeout(() => {\n//     console.log("\u8c03\u7528\u63a5\u53e3", e.target.value);\n//     timer = null;\n//   }, 300);\n// });\n\nfunction debounce(fn, delay = 500) {\n  let timer = null;\n  return () => {\n    if (timer) {\n      clearTimeout(timer);\n    }\n    timer = setTimeout(() => {\n      //   fn();\n      fn.apply(this, arguments);\n      timer = null;\n    }, delay);\n  };\n}\n\ninput1.addEventListener(\n  "input",\n  debounce(() => {\n    console.log("\u63a5\u53e3\u8c03\u7528", input1.value);\n  }, 500)\n);\n')),(0,i.kt)("h1",{id:"\u8282\u6d41-throttle"},"\u8282\u6d41 throttle"),(0,i.kt)("h2",{id:"1\u76ee\u7684\u548c\u573a\u666f-1"},"1.\u76ee\u7684\u548c\u573a\u666f"),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u62d6\u62fd\u4e00\u4e2a\u5143\u7d20\u65f6\uff0c\u8981\u968f\u65f6\u83b7\u53d6\u5230\u8be5\u5143\u7d20\u88ab\u62d6\u62fd\u7684\u4f4d\u7f6e"),(0,i.kt)("li",{parentName:"ul"},"\u76f4\u63a5\u7528 drag \u4e8b\u4ef6\uff0c\u5219\u4f1a\u9891\u7e41\u89e6\u53d1\uff0c\u5f88\u5bb9\u6613\u9020\u6210\u5361\u987f"),(0,i.kt)("li",{parentName:"ul"},"\u8282\u6d41\uff1a\u65e0\u8bba\u62d6\u62fd\u901f\u5ea6\u591a\u5feb\uff0c\u90fd\u4f1a\u6bcf\u9694 100ms \u89e6\u53d1\u4e00\u6b21")),(0,i.kt)("h2",{id:"2\u4ee3\u7801\u6f14\u793a-1"},"2.\u4ee3\u7801\u6f14\u793a\uff1a"),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-html"},'    <style>\n      #div1 {\n        border: 2px solid #ccc;\n        width: 200px;\n        height: 100px;\n        background-color: blue;\n      }\n    </style>\n  </head>\n  <body>\n    <div id="div1" draggable="true">\u53ef\u62d6\u62fd</div>\n    <script src="./throttle.js"><\/script>\n  </body>\n')),(0,i.kt)("pre",null,(0,i.kt)("code",{parentName:"pre",className:"language-js"},'const div1 = document.getElementById("div1");\n// let timer = null;\n// div1.addEventListener("drag", function (e) {\n//   if (timer) {\n//     return;\n//   }\n//   timer = setTimeout(() => {\n//     console.log(e.offsetX, e.offsetY);\n//     timer = null;\n//   }, 100);\n// });\n\n//  \u6b63\u5e38\u5199\u6cd5\u4e0b \u4f1a\u63a5\u53d7 event \u53c2\u6570\n// div1.addEventListener("drag", function (event) {});\n\n// \u5c01\u88c5\u8282\u6d41\u51fd\u6570\nfunction throttle(fn, delay = 500) {\n  let timer = null;\n  return function () {\n    if (timer) {\n      return;\n    }\n    timer = setTimeout(() => {\n      // \u8fd9\u4e2a this \u65f6 \u8fd4\u56de\u7684\u8fd9\u4e2a\u51fd\u6570\u7684\u4f5c\u7528\u57df\n      fn.apply(this, arguments);\n      timer = null;\n    }, delay);\n  };\n}\n\ndiv1.addEventListener(\n  "drag",\n  throttle(function (e) {\n    console.log(e.offsetX, e.offsetY);\n  }, 100)\n);\n')),(0,i.kt)("ul",null,(0,i.kt)("li",{parentName:"ul"},"\u6ce8\u610f\uff1a",(0,i.kt)("inlineCode",{parentName:"li"},"fn.apply(this.arguments)"))))}d.isMDXComponent=!0}}]);