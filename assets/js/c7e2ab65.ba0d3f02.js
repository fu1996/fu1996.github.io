"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[2766],{3905:(e,t,n)=>{n.d(t,{Zo:()=>b,kt:()=>u});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function l(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function o(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?l(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):l(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},l=Object.keys(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(a=0;a<l.length;a++)n=l[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var i=a.createContext({}),p=function(e){var t=a.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):o(o({},t),e)),n},b=function(e){var t=p(e.components);return a.createElement(i.Provider,{value:t},e.children)},m="mdxType",d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},c=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,l=e.originalType,i=e.parentName,b=s(e,["components","mdxType","originalType","parentName"]),m=p(n),c=r,u=m["".concat(i,".").concat(c)]||m[c]||d[c]||l;return n?a.createElement(u,o(o({ref:t},b),{},{components:n})):a.createElement(u,o({ref:t},b))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var l=n.length,o=new Array(l);o[0]=c;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[m]="string"==typeof e?e:r,o[1]=s;for(var p=2;p<l;p++)o[p]=n[p];return a.createElement.apply(null,o)}return a.createElement.apply(null,n)}c.displayName="MDXCreateElement"},40748:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>o,default:()=>d,frontMatter:()=>l,metadata:()=>s,toc:()=>p});var a=n(87462),r=(n(67294),n(3905));const l={authors:"junkui",title:"babel\u63d2\u4ef6\u7684\u7f16\u5199\uff08\u4e0a\uff09",categories:["js","babel"],tags:["js","babel"],date:new Date("2022-07-12T21:15:40.000Z")},o="Babel \u63d2\u4ef6\u7684\u7f16\u5199(\u4e0a)",s={unversionedId:"babel\u63d2\u4ef6\u7684\u7f16\u5199",id:"babel\u63d2\u4ef6\u7684\u7f16\u5199",title:"babel\u63d2\u4ef6\u7684\u7f16\u5199\uff08\u4e0a\uff09",description:"\u5b66\u4e60\u7684\u80cc\u666f",source:"@site/babel/babel\u63d2\u4ef6\u7684\u7f16\u5199.md",sourceDirName:".",slug:"/babel\u63d2\u4ef6\u7684\u7f16\u5199",permalink:"/babel/babel\u63d2\u4ef6\u7684\u7f16\u5199",draft:!1,editUrl:"https://git.7wate.com/zhouzhongping/wiki/src/branch/master/babel/babel\u63d2\u4ef6\u7684\u7f16\u5199.md",tags:[{label:"js",permalink:"/babel/tags/js"},{label:"babel",permalink:"/babel/tags/babel"}],version:"current",lastUpdatedBy:"fjk",lastUpdatedAt:1688832750,formattedLastUpdatedAt:"2023\u5e747\u67088\u65e5",frontMatter:{authors:"junkui",title:"babel\u63d2\u4ef6\u7684\u7f16\u5199\uff08\u4e0a\uff09",categories:["js","babel"],tags:["js","babel"],date:"2022-07-12T21:15:40.000Z"},sidebar:"tutorialSidebar",previous:{title:"babel\u5b66\u4e60",permalink:"/babel/babel\u5b66\u4e60"},next:{title:"babel\u63d2\u4ef6\u7684\u7f16\u5199\uff08\u4e0b\uff09",permalink:"/babel/babel\u63d2\u4ef6\u7684\u7f16\u5199\uff08\u4e0b\uff09"}},i={},p=[{value:"\u5b66\u4e60\u7684\u80cc\u666f",id:"\u5b66\u4e60\u7684\u80cc\u666f",level:2},{value:"1. babel \u5e38\u7528\u5305\u7684\u4ecb\u7ecd \uff08\u5199\u63d2\u4ef6\u5fc5\u5907\u77e5\u8bc6\uff09",id:"1-babel-\u5e38\u7528\u5305\u7684\u4ecb\u7ecd-\u5199\u63d2\u4ef6\u5fc5\u5907\u77e5\u8bc6",level:2},{value:"1. Babylon \u662f Babel \u7684\u89e3\u6790\u5668\uff0c\u4ee3\u7801\u8f6c\u4e3a AST \u8bed\u6cd5\u6811",id:"1-babylon-\u662f-babel-\u7684\u89e3\u6790\u5668\u4ee3\u7801\u8f6c\u4e3a-ast-\u8bed\u6cd5\u6811",level:3},{value:"2. Babel-traverse \u6765\u64cd\u4f5c AST \u8bed\u6cd5\u6811",id:"2-babel-traverse-\u6765\u64cd\u4f5c-ast-\u8bed\u6cd5\u6811",level:3},{value:"3. <code>babel-generator</code>\u6839\u636e\u4fee\u6539\u7684\u8bed\u6cd5\u6811 \u751f\u6210\u4ee3\u7801 \u548c\u6e90\u7801\u6620\u5c04\uff08source map\uff09",id:"3-babel-generator\u6839\u636e\u4fee\u6539\u7684\u8bed\u6cd5\u6811-\u751f\u6210\u4ee3\u7801-\u548c\u6e90\u7801\u6620\u5c04source-map",level:3},{value:"4. \u53d1\u73b0\u5bf9\u8282\u70b9\u7684\u5224\u65ad \u9700\u8981\u5199\u7684\u4ee3\u7801\u5f88\u591a\uff0c\u62bd\u79bb\u51fa\u516c\u5171\u7684\u5305\u6765\u8fdb\u884c\u8282\u70b9\u7684\u5224\u65ad\u3002<code>babel-types</code>\uff08AST \u8282\u70b9\u91cc\u7684 Lodash \u5f0f\u5de5\u5177\u5e93\uff09",id:"4-\u53d1\u73b0\u5bf9\u8282\u70b9\u7684\u5224\u65ad-\u9700\u8981\u5199\u7684\u4ee3\u7801\u5f88\u591a\u62bd\u79bb\u51fa\u516c\u5171\u7684\u5305\u6765\u8fdb\u884c\u8282\u70b9\u7684\u5224\u65adbabel-typesast-\u8282\u70b9\u91cc\u7684-lodash-\u5f0f\u5de5\u5177\u5e93",level:3},{value:"5. \u901a\u8fc7 AST \u6765\u751f\u6210 CODE \u53ef\u8bfb\u6027 \u592a\u5dee\u3002\u4f7f\u7528<code>babel-template</code>\u6765\u5b9e\u73b0\u5360\u4f4d\u7b26\u7684\u6765\u751f\u6210\u4ee3\u7801\u3002",id:"5-\u901a\u8fc7-ast-\u6765\u751f\u6210-code-\u53ef\u8bfb\u6027-\u592a\u5dee\u4f7f\u7528babel-template\u6765\u5b9e\u73b0\u5360\u4f4d\u7b26\u7684\u6765\u751f\u6210\u4ee3\u7801",level:3},{value:"2. \u5f00\u59cb \u64b8 Babel \u7684\u63d2\u4ef6",id:"2-\u5f00\u59cb-\u64b8-babel-\u7684\u63d2\u4ef6",level:2},{value:"1. \u5f00\u59cb\u64b8\u63d2\u4ef6\u4ee3\u7801 \u4e4b\u524d \u5fc5\u987b\u8981\u6709\u4e00\u4e2a \u65b9\u4fbf\u8c03\u8bd5\u7684 babel \u7684\u73af\u5883",id:"1-\u5f00\u59cb\u64b8\u63d2\u4ef6\u4ee3\u7801-\u4e4b\u524d-\u5fc5\u987b\u8981\u6709\u4e00\u4e2a-\u65b9\u4fbf\u8c03\u8bd5\u7684-babel-\u7684\u73af\u5883",level:3},{value:"2. \u4f7f\u7528 nodemon \u5305\u4f18\u5316\u73af\u5883\uff0c\u63d0\u9ad8\u8c03\u8bd5\u7684\u6548\u7387 \uff08nodemon + debug \u63d0\u9ad8\u6548\u7387\uff09",id:"2-\u4f7f\u7528-nodemon-\u5305\u4f18\u5316\u73af\u5883\u63d0\u9ad8\u8c03\u8bd5\u7684\u6548\u7387-nodemon--debug-\u63d0\u9ad8\u6548\u7387",level:3}],b={toc:p},m="wrapper";function d(e){let{components:t,...l}=e;return(0,r.kt)(m,(0,a.Z)({},b,l,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"babel-\u63d2\u4ef6\u7684\u7f16\u5199\u4e0a"},"Babel \u63d2\u4ef6\u7684\u7f16\u5199(\u4e0a)"),(0,r.kt)("h2",{id:"\u5b66\u4e60\u7684\u80cc\u666f"},"\u5b66\u4e60\u7684\u80cc\u666f"),(0,r.kt)("ul",null,(0,r.kt)("li",{parentName:"ul"},"es6 \u662f\u5982\u4f55\u8f6c\u6362\u4e3a es5 \u7684\uff1f"),(0,r.kt)("li",{parentName:"ul"},"\u4e3a\u5565 \u4e4b\u524d jsx \u9700\u8981 \u624b\u52a8\u5bfc\u5165 react \uff0c\u73b0\u5728\u4e0d\u9700\u8981\u4e86\uff1f"),(0,r.kt)("li",{parentName:"ul"},"\u56fd\u9645\u5316\u5185\u5bb9 \u9700\u8981\u5199 t \u51fd\u6570\u7684 \u5730\u65b9\u592a\u591a \uff0c\u61d2\u5f97\u5199\u4e86\u3002\uff08\u4e1a\u52a1\u65b9\u9762\uff09")),(0,r.kt)("h2",{id:"1-babel-\u5e38\u7528\u5305\u7684\u4ecb\u7ecd-\u5199\u63d2\u4ef6\u5fc5\u5907\u77e5\u8bc6"},"1. babel \u5e38\u7528\u5305\u7684\u4ecb\u7ecd \uff08\u5199\u63d2\u4ef6\u5fc5\u5907\u77e5\u8bc6\uff09"),(0,r.kt)("p",null,"\u4ee3\u7801 \u8f6c \u8bed\u6cd5\u6811\u7684 \u5b98\u7f51\uff1a",(0,r.kt)("a",{parentName:"p",href:"https://astexplorer.net/"},"https://astexplorer.net/")),(0,r.kt)("h3",{id:"1-babylon-\u662f-babel-\u7684\u89e3\u6790\u5668\u4ee3\u7801\u8f6c\u4e3a-ast-\u8bed\u6cd5\u6811"},"1. Babylon \u662f Babel \u7684\u89e3\u6790\u5668\uff0c\u4ee3\u7801\u8f6c\u4e3a AST \u8bed\u6cd5\u6811"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"npm init -y"),"\u8fdb\u884c\u9879\u76ee\u7684\u521d\u59cb\u5316 \u642d\u5efa"),(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("strong",{parentName:"li"},"Babylon")," \u662f Babel \u7684\u89e3\u6790\u5668\uff0c\u662f \u5c06 \u4ee3\u7801 \u8f6c\u6362\u4e3a AST \u8bed\u6cd5\u6811\u7684 \u5de5\u5177\uff0c\u73b0\u5728\u6765\u5b89\u88c5\u5b83",(0,r.kt)("inlineCode",{parentName:"li"},"npm install --save babylon")),(0,r.kt)("li",{parentName:"ol"},"\u65b0\u589e ",(0,r.kt)("inlineCode",{parentName:"li"},"babylon-demo.mjs")," \uff08\u6ce8\u610f\u662f mjs \u7ed3\u5c3e\u7684\uff0c\u65b9\u4fbf\u4f7f\u7528 ESmodule \u8bed\u6cd5\uff09\uff0c\u5199\u5165 \u5982\u4e0b\u5185\u5bb9\u3002\u8c03\u7528 ",(0,r.kt)("strong",{parentName:"li"},"babylon.parse"),"\u751f\u6210 ast \u8bed\u6cd5\u6811")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as babylon from "babylon";\n\nconst code = `function square(n) {\n  return n * n;\n}`;\n\nconst ast = babylon.parse(code);\nconsole.log(ast);\n// Node {\n//   type: "File",\n//   start: 0,\n//   end: 38,\n//   loc: SourceLocation {...},\n//   program: Node {...},\n//   comments: [],\n//   tokens: [...]\n// }\n')),(0,r.kt)("h3",{id:"2-babel-traverse-\u6765\u64cd\u4f5c-ast-\u8bed\u6cd5\u6811"},"2. Babel-traverse \u6765\u64cd\u4f5c AST \u8bed\u6cd5\u6811"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("inlineCode",{parentName:"li"},"npm install --save babel-traverse"),"\u5b89\u88c5 \u4f9d\u8d56\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u5229\u7528 \u8bed\u6cd5\u6811 \u5c06 code \u4e2d\u7684 n \u66ff\u6362\u4e3a x\u3002\uff08\u522b\u6025 \u4e0b\u4e00\u6b65 \u5c31\u662f \u6839\u636e\u65b0\u7684 \u8bed\u6cd5\u6811 \u751f\u6210\u4ee3\u7801\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as babylon from "babylon";\nimport traverse from "babel-traverse";\n\nconst code = `function square(n) {\n  return n * n;\n}`;\n\nconst ast = babylon.parse(code);\n// \u5bf9 \u62bd\u8c61\u8bed\u6cd5\u6811 \u4e00\u5c42\u5c42\u7684 \u904d\u5386\ntraverse.default(ast, {\n  // \u6811 \u7684\u8282\u70b9 \u4f1a \u4f5c\u4e3a \u53c2\u6570 \u4f20\u5165 enter \u51fd\u6570\n  enter(path) {\n    // \u5982\u679c\u5f53\u524d\u8282\u70b9 \u662f Identifier \u5e76\u4e14 name \u662f n\u3002\u5c31\u66ff\u6362\u4e3a x\n    if (path.node.type === "Identifier" && path.node.name === "n") {\n      path.node.name = "x";\n    }\n  },\n});\n')),(0,r.kt)("h3",{id:"3-babel-generator\u6839\u636e\u4fee\u6539\u7684\u8bed\u6cd5\u6811-\u751f\u6210\u4ee3\u7801-\u548c\u6e90\u7801\u6620\u5c04source-map"},"3. ",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/babel/babel/tree/master/packages/babel-generator"},(0,r.kt)("inlineCode",{parentName:"a"},"babel-generator")),"\u6839\u636e\u4fee\u6539\u7684\u8bed\u6cd5\u6811 \u751f\u6210\u4ee3\u7801 \u548c\u6e90\u7801\u6620\u5c04\uff08source map\uff09"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5 \u4f9d\u8d56 ",(0,r.kt)("inlineCode",{parentName:"li"},"npm install --save babel-generator")),(0,r.kt)("li",{parentName:"ol"},"\u5c06 AST \u8bed\u6cd5\u6811 \u751f\u6210\u4ee3\u7801")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as babylon from "babylon";\nimport traverse from "babel-traverse";\nimport generate from "babel-generator";\n\n// \u539f\u59cb\u4ee3\u7801\nconst code = `function square(n) {\n  return n * n;\n}`;\n// ast \u662f\u5bf9\u8c61 \u5c5e\u4e8e\u5f15\u7528\u578b\nconst ast = babylon.parse(code);\n\n// \u5bf9 \u62bd\u8c61\u8bed\u6cd5\u6811 \u4e00\u5c42\u5c42\u7684 \u904d\u5386\ntraverse.default(ast, {\n  // \u6811 \u7684\u8282\u70b9 \u4f1a \u4f5c\u4e3a \u53c2\u6570 \u4f20\u5165 enter \u51fd\u6570\n  enter(path) {\n    // \u5982\u679c\u5f53\u524d\u8282\u70b9 \u662f Identifier \u5e76\u4e14 name \u662f n\u3002\u5c31\u66ff\u6362\u4e3a x\n    // \u56e0\u4e3a ast \u662f\u5bf9\u8c61\uff0c\u6240\u4ee5 \u6b64\u5904\u505a\u7684\u53d8\u66f4\u4f1a \u76f4\u63a5\u5f71\u54cd\u5230 ast\n    if (path.node.type === "Identifier" && path.node.name === "n") {\n      path.node.name = "x";\n    }\n  },\n});\n// \u5bf9\u8282\u70b9\u64cd\u4f5c\u8fc7\u4ee5\u540e\u7684\u4ee3\u7801\nconst targetCode = generate.default(ast).code;\n\nconsole.log("targetCode", targetCode);\n// targetCode function square(x) {\n//   return x * x;\n// }\n')),(0,r.kt)("h3",{id:"4-\u53d1\u73b0\u5bf9\u8282\u70b9\u7684\u5224\u65ad-\u9700\u8981\u5199\u7684\u4ee3\u7801\u5f88\u591a\u62bd\u79bb\u51fa\u516c\u5171\u7684\u5305\u6765\u8fdb\u884c\u8282\u70b9\u7684\u5224\u65adbabel-typesast-\u8282\u70b9\u91cc\u7684-lodash-\u5f0f\u5de5\u5177\u5e93"},"4. \u53d1\u73b0\u5bf9\u8282\u70b9\u7684\u5224\u65ad \u9700\u8981\u5199\u7684\u4ee3\u7801\u5f88\u591a\uff0c\u62bd\u79bb\u51fa\u516c\u5171\u7684\u5305\u6765\u8fdb\u884c\u8282\u70b9\u7684\u5224\u65ad\u3002",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/babel/babel/tree/master/packages/babel-types"},(0,r.kt)("inlineCode",{parentName:"a"},"babel-types")),"\uff08AST \u8282\u70b9\u91cc\u7684 Lodash \u5f0f\u5de5\u5177\u5e93\uff09"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"npm install --save babel-types")),(0,r.kt)("li",{parentName:"ol"},"\u4f18\u5316\u4e0a\u9762\u4ee3\u7801\u7684 AST \u8282\u70b9\u7684 if \u5224\u65ad\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as babylon from "babylon";\nimport traverse from "babel-traverse";\nimport generate from "babel-generator";\n// \u6ce8\u610f node_modules \u6a21\u5757\u91cc \u5bfc\u51fa\u7684\u662f default\nimport { default as t } from "babel-types";\n\n// \u539f\u59cb\u4ee3\u7801\nconst code = `function square(n) {\n  return n * n;\n}`;\n// ast \u662f\u5bf9\u8c61 \u5c5e\u4e8e\u5f15\u7528\u578b\nconst ast = babylon.parse(code);\n\n// \u5bf9 \u62bd\u8c61\u8bed\u6cd5\u6811 \u4e00\u5c42\u5c42\u7684 \u904d\u5386\ntraverse.default(ast, {\n  // \u6811 \u7684\u8282\u70b9 \u4f1a \u4f5c\u4e3a \u53c2\u6570 \u4f20\u5165 enter \u51fd\u6570\n  enter(path) {\n    // \u5982\u679c\u5f53\u524d\u8282\u70b9 \u662f Identifier \u5e76\u4e14 name \u662f n\u3002\u5c31\u66ff\u6362\u4e3a x\n    // \u56e0\u4e3a ast \u662f\u5bf9\u8c61\uff0c\u6240\u4ee5 \u6b64\u5904\u505a\u7684\u53d8\u66f4\u4f1a \u76f4\u63a5\u5f71\u54cd\u5230 ast\n    // if (\n    //   path.node.type === "Identifier" &&\n    //   path.node.name === "n"\n    // ) {\n    //   path.node.name = "x";\n    // }\n    if (t.isIdentifier(path.node, { name: "n" })) {\n      path.node.name = "x";\n    }\n  },\n});\n// \u5bf9\u8282\u70b9\u64cd\u4f5c\u8fc7\u4ee5\u540e\u7684\u4ee3\u7801\nconst targetCode = generate.default(ast).code;\n\nconsole.log("targetCode", targetCode);\n// targetCode function square(x) {\n//   return x * x;\n// }\n')),(0,r.kt)("h3",{id:"5-\u901a\u8fc7-ast-\u6765\u751f\u6210-code-\u53ef\u8bfb\u6027-\u592a\u5dee\u4f7f\u7528babel-template\u6765\u5b9e\u73b0\u5360\u4f4d\u7b26\u7684\u6765\u751f\u6210\u4ee3\u7801"},"5. \u901a\u8fc7 AST \u6765\u751f\u6210 CODE \u53ef\u8bfb\u6027 \u592a\u5dee\u3002\u4f7f\u7528",(0,r.kt)("a",{parentName:"h3",href:"https://github.com/babel/babel/tree/master/packages/babel-template"},(0,r.kt)("inlineCode",{parentName:"a"},"babel-template")),"\u6765\u5b9e\u73b0\u5360\u4f4d\u7b26\u7684\u6765\u751f\u6210\u4ee3\u7801\u3002"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u4f9d\u8d56\uff1a",(0,r.kt)("inlineCode",{parentName:"li"},"npm install --save babel-template")),(0,r.kt)("li",{parentName:"ol"},"\u5f53\u524d\u7684\u9700\u6c42\u662f\uff1a\u6211\u4e0d\u60f3\u624b\u52a8\u5bfc\u5165 \u6587\u4ef6 a \u4f9d\u8d56\u3002\u5373\uff1a",(0,r.kt)("strong",{parentName:"li"},'const a = require("a");'),"\u8fd9\u53e5\u8bdd \u6211\u4e0d\u60f3\u5199\u3002"),(0,r.kt)("li",{parentName:"ol"},"\u9996\u5148\u6784\u5efa ast \u7684\u6a21\u677f\uff1a\u5224\u65ad\u54ea\u4e9b\u662f\u53d8\u91cf\uff0c\u54ea\u4e9b\u662f \u8bed\u6cd5\u3002")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u6784\u5efa\u6a21\u677f\nconst buildRequire = template(`\n  const IMPORT_NAME = require(SOURCE);\n`);\n")),(0,r.kt)("ol",{start:4},(0,r.kt)("li",{parentName:"ol"},"\u4f7f\u7528 \u53d8\u91cf \u8fdb\u884c \u586b\u5145")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u521b\u5efaast\nconst astImport = buildRequire({\n  IMPORT_NAME: t.identifier("a"),\n  SOURCE: t.stringLiteral("a"),\n});\n')),(0,r.kt)("ol",{start:5},(0,r.kt)("li",{parentName:"ol"},"\u5206\u6790 \u4f55\u65f6\u585e\u5165 \u8fd9\u6bb5 ast \u3002\u4f7f\u7528 ",(0,r.kt)("a",{parentName:"li",href:"https://astexplorer.net/"},"https://astexplorer.net/")," \u5206\u6790 \u5f97\u77e5\u3002\u4ee3\u7801\u548c \u56fe\u7247\u5982\u4e0b",(0,r.kt)("img",{alt:"image-20220712223142939",src:n(79185).Z,width:"1450",height:"1220"}))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'import * as babylon from "babylon";\nimport traverse from "babel-traverse";\nimport generate from "babel-generator";\nimport { default as template } from "babel-template";\n// \u6ce8\u610f node_modules \u6a21\u5757\u91cc \u5bfc\u51fa\u7684\u662f default\nimport { default as t } from "babel-types";\n\n// \u6784\u5efa\u6a21\u677f\nconst buildRequire = template(`\n  const IMPORT_NAME = require(SOURCE);\n`);\n// \u521b\u5efaast\nconst astImport = buildRequire({\n  IMPORT_NAME: t.identifier("a"),\n  SOURCE: t.stringLiteral("a"),\n});\n\n// \u539f\u59cb\u4ee3\u7801\nconst code = `\nfunction square(n) {\n  return n * n;\n}`;\n// ast \u662f\u5bf9\u8c61 \u5c5e\u4e8e\u5f15\u7528\u578b\nconst ast = babylon.parse(code);\n\n// \u5bf9 \u62bd\u8c61\u8bed\u6cd5\u6811 \u4e00\u5c42\u5c42\u7684 \u904d\u5386\ntraverse.default(ast, {\n  // \u6811 \u7684\u8282\u70b9 \u4f1a \u4f5c\u4e3a \u53c2\u6570 \u4f20\u5165 enter \u51fd\u6570\n  enter(path) {\n    // \u5982\u679c\u5f53\u524d\u8282\u70b9 \u662f Identifier \u5e76\u4e14 name \u662f n\u3002\u5c31\u66ff\u6362\u4e3a x\n    // \u56e0\u4e3a ast \u662f\u5bf9\u8c61\uff0c\u6240\u4ee5 \u6b64\u5904\u505a\u7684\u53d8\u66f4\u4f1a \u76f4\u63a5\u5f71\u54cd\u5230 ast\n    // if (\n    //   path.node.type === "Identifier" &&\n    //   path.node.name === "n"\n    // ) {\n    //   path.node.name = "x";\n    // }\n    if (t.isIdentifier(path.node, { name: "n" })) {\n      path.node.name = "x";\n    }\n    // \u5728\u7a0b\u5e8f\u7684\u5f00\u5934 \u585e\u8fdb\u53bb \u6211\u7684 ast\n    if (t.isProgram(path.node)) {\n      console.log("\u585e\u5165\u6211\u5199\u7684 ast");\n      path.node.body.unshift(astImport);\n    }\n  },\n});\n// \u5bf9\u8282\u70b9\u64cd\u4f5c\u8fc7\u4ee5\u540e\u7684\u4ee3\u7801\nconst targetCode = generate.default(ast).code;\n\nconsole.log("targetCode", targetCode);\n// \u585e\u5165\u6211\u5199\u7684 ast\n// targetCode const a = require("a");\n\n// function square(x) {\n//   return x * x;\n// }\n')),(0,r.kt)("h2",{id:"2-\u5f00\u59cb-\u64b8-babel-\u7684\u63d2\u4ef6"},"2. \u5f00\u59cb \u64b8 Babel \u7684\u63d2\u4ef6"),(0,r.kt)("h3",{id:"1-\u5f00\u59cb\u64b8\u63d2\u4ef6\u4ee3\u7801-\u4e4b\u524d-\u5fc5\u987b\u8981\u6709\u4e00\u4e2a-\u65b9\u4fbf\u8c03\u8bd5\u7684-babel-\u7684\u73af\u5883"},"1. \u5f00\u59cb\u64b8\u63d2\u4ef6\u4ee3\u7801 \u4e4b\u524d \u5fc5\u987b\u8981\u6709\u4e00\u4e2a \u65b9\u4fbf\u8c03\u8bd5\u7684 babel \u7684\u73af\u5883"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5 babel \u6838\u5fc3\u5305 ",(0,r.kt)("a",{parentName:"li",href:"https://www.babeljs.cn/docs/babel-core"},"@babel/core")," \uff08\u6587\u6863\uff1a",(0,r.kt)("a",{parentName:"li",href:"https://www.babeljs.cn/docs/usage#%E6%A0%B8%E5%BF%83%E5%BA%93%EF%BC%89%E3%80%82%60npm"},"https://www.babeljs.cn/docs/usage#%E6%A0%B8%E5%BF%83%E5%BA%93\uff09\u3002`npm")," install --save-dev @babel/core`"),(0,r.kt)("li",{parentName:"ol"},"\u65b0\u5efa demo \u4ee3\u7801 ",(0,r.kt)("inlineCode",{parentName:"li"},"index.js"))),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},"// index.js\nlet bad = true;\nconst square = (n) => n * n;\n")),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},(0,r.kt)("p",{parentName:"li"},"\u65b0\u5efa\u63d2\u4ef6 ",(0,r.kt)("inlineCode",{parentName:"p"},"plugin2.js")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'// plugin.js\nmodule.exports = function ({ types: babelTypes }) {\n  return {\n    name: "deadly-simple-plugin-example",\n    visitor: {\n      Identifier(path, state) {\n        if (path.node.name === "bad") {\n          path.node.name = "good";\n        }\n      },\n    },\n  };\n};\n')),(0,r.kt)("ol",{parentName:"li",start:4},(0,r.kt)("li",{parentName:"ol"},"\u65b0\u5efa ",(0,r.kt)("inlineCode",{parentName:"li"},"core-demo.js"),"\u4f7f\u7528 babel-core \u6765\u7f16\u8bd1 \u4ee3\u7801")),(0,r.kt)("pre",{parentName:"li"},(0,r.kt)("code",{parentName:"pre",className:"language-javascript"},'const babel = require("@babel/core");\nconst path = require("path");\nconst fs = require("fs");\n\n// \u5bfc\u5165 index.js \u7684\u4ee3\u7801 \u5e76\u4f7f\u7528 \u63d2\u4ef6 plugin2 \u8f6c\u6362\nbabel\n  .transformFileAsync("./index.js", {\n    plugins: [path.join(__dirname, "./plugin2.js")],\n  })\n  .then((res) => {\n    console.log(res.code);\n    // \u8f6c\u6362\u540e\u7684\u4ee3\u7801 \u5199\u5165 dist.js \u6587\u4ef6\n    fs.writeFileSync(path.join(__dirname, "./dist.js"), res.code, {\n      encoding: "utf8",\n    });\n  });\n')),(0,r.kt)("ol",{parentName:"li",start:5},(0,r.kt)("li",{parentName:"ol"},"\u6d4b\u8bd5 \u65ad\u70b9\u662f\u5426\u751f\u6548\uff08\u65b9\u4fbf\u540e\u671f\u8c03\u8bd5\uff09")),(0,r.kt)("p",{parentName:"li"},"vscode \u4e2d \u65b0\u5efa debug \u7ec8\u7aef"),(0,r.kt)("p",{parentName:"li"},(0,r.kt)("img",{alt:"image-20220712225943045",src:n(28646).Z,width:"752",height:"626"})))),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220712230053690",src:n(11355).Z,width:"2772",height:"1394"})),(0,r.kt)("h3",{id:"2-\u4f7f\u7528-nodemon-\u5305\u4f18\u5316\u73af\u5883\u63d0\u9ad8\u8c03\u8bd5\u7684\u6548\u7387-nodemon--debug-\u63d0\u9ad8\u6548\u7387"},"2. \u4f7f\u7528 nodemon \u5305\u4f18\u5316\u73af\u5883\uff0c\u63d0\u9ad8\u8c03\u8bd5\u7684\u6548\u7387 \uff08nodemon + debug \u63d0\u9ad8\u6548\u7387\uff09"),(0,r.kt)("ol",null,(0,r.kt)("li",{parentName:"ol"},"\u5b89\u88c5\u4f9d\u8d56: ",(0,r.kt)("inlineCode",{parentName:"li"},"npm i nodemon")),(0,r.kt)("li",{parentName:"ol"},"\u914d\u7f6e package.json \u7684 script \u547d\u4ee4\u4e3a\uff1a\uff08\u76d1\u542c\u6587\u4ef6\u53d8\u66f4\u65f6\u5019\u5ffd\u7565 dist.js \uff0c\u56e0\u4e3a dist \u7684\u53d8\u66f4\u4f1a\u5f15\u8d77 \u811a\u672c\u7684\u91cd\u65b0\u6267\u884c\uff0c\u811a\u672c\u7684\u91cd\u65b0\u6267\u884c\u53c8 \u4ea7\u751f\u65b0\u7684 dist.js\uff09")),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-bash"},' "babylon": "nodemon core-demo.js --ignore dist.js"\n')),(0,r.kt)("ol",{start:3},(0,r.kt)("li",{parentName:"ol"},"\u5f00\u542f debug \u7ec8\u7aef\uff0c\u8fd0\u884c ",(0,r.kt)("inlineCode",{parentName:"li"},"npm run babylon"),"\u5373\u53ef\u770b\u5230\u6587\u4ef6\u53d8\u66f4 \u4f1a\u81ea\u52a8\u8d70\u5230\u65ad\u70b9\u91cc")),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20220713215315714",src:n(41012).Z,width:"2880",height:"1632"})),(0,r.kt)("p",null,"babel \u63d2\u4ef6\u9700\u8981\u5199\u7684\u4e1c\u897f\u592a\u591a\uff0c\u672c\u5c0f\u8282\u53ea\u662f\u5b8c\u6210\u73af\u5883\u7684\u642d\u5efa\u3002\u5177\u4f53\u8bf7\u89c1\u4e0b\u8282\u3002"))}d.isMDXComponent=!0},79185:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20220712223142939-4ff7809e67dd09b2af04e41dc15972db.png"},28646:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20220712225943045-03534c794ce17b8be4cf679a687f4290.png"},11355:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20220712230053690-17a107e35eed5775a4e47da1a6c5ff68.png"},41012:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20220713215315714-9615dac41c9a3ead844098f3e97eb5d6.png"}}]);