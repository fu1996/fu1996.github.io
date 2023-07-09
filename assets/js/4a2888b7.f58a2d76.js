"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8246],{3905:(e,n,t)=>{t.d(n,{Zo:()=>c,kt:()=>d});var a=t(67294);function r(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function s(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);n&&(a=a.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,a)}return t}function o(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?s(Object(t),!0).forEach((function(n){r(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):s(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function i(e,n){if(null==e)return{};var t,a,r=function(e,n){if(null==e)return{};var t,a,r={},s=Object.keys(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||(r[t]=e[t]);return r}(e,n);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(a=0;a<s.length;a++)t=s[a],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(r[t]=e[t])}return r}var m=a.createContext({}),l=function(e){var n=a.useContext(m),t=n;return e&&(t="function"==typeof e?e(n):o(o({},n),e)),t},c=function(e){var n=l(e.components);return a.createElement(m.Provider,{value:n},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var n=e.children;return a.createElement(a.Fragment,{},n)}},y=a.forwardRef((function(e,n){var t=e.components,r=e.mdxType,s=e.originalType,m=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=l(t),y=r,d=u["".concat(m,".").concat(y)]||u[y]||p[y]||s;return t?a.createElement(d,o(o({ref:n},c),{},{components:t})):a.createElement(d,o({ref:n},c))}));function d(e,n){var t=arguments,r=n&&n.mdxType;if("string"==typeof e||r){var s=t.length,o=new Array(s);o[0]=y;var i={};for(var m in n)hasOwnProperty.call(n,m)&&(i[m]=n[m]);i.originalType=e,i[u]="string"==typeof e?e:r,o[1]=i;for(var l=2;l<s;l++)o[l]=t[l];return a.createElement.apply(null,o)}return a.createElement.apply(null,t)}y.displayName="MDXCreateElement"},69545:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>m,contentTitle:()=>o,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>l});var a=t(87462),r=(t(67294),t(3905));const s={authors:"junkui",title:"normalizr\u683c\u5f0f\u5316\u6570\u636e\u5229\u5668",categories:["js","work"],tags:["js","work","normalizr"],date:new Date("2021-03-17T09:50:42.000Z")},o="normalizr \u4f7f\u7528\u8bf4\u660e",i={permalink:"/blog/normalizr\u683c\u5f0f\u5316\u6570\u636e\u5229\u5668",source:"@site/blog/normalizr\u683c\u5f0f\u5316\u6570\u636e\u5229\u5668.md",title:"normalizr\u683c\u5f0f\u5316\u6570\u636e\u5229\u5668",description:"1.\u57fa\u7840\u4f7f\u7528",date:"2021-03-17T09:50:42.000Z",formattedDate:"2021\u5e743\u670817\u65e5",tags:[{label:"js",permalink:"/blog/tags/js"},{label:"work",permalink:"/blog/tags/work"},{label:"normalizr",permalink:"/blog/tags/normalizr"}],readingTime:3.37,hasTruncateMarker:!1,authors:[{name:"\u4ed8\u4fca\u594e",title:"\u4e00\u540d\u5728\u5927\u5b66\u4ece\u52a8\u7269\u79d1\u5b66\u4e13\u4e1a\u8f6c\u7801\u519c\u7684\u81ea\u5b66\u8005",url:"https://github.com/fu1996",imageURL:"https://avatars.githubusercontent.com/u/42232973",key:"junkui"}],frontMatter:{authors:"junkui",title:"normalizr\u683c\u5f0f\u5316\u6570\u636e\u5229\u5668",categories:["js","work"],tags:["js","work","normalizr"],date:"2021-03-17T09:50:42.000Z"},prevItem:{title:"normalizr\u7684\u5b98\u65b9API",permalink:"/blog/normalizr\u7684\u5b98\u65b9API"},nextItem:{title:"\u6df1\u5165\u6570\u7ec4\u7684\u5404\u4e2aAPI",permalink:"/blog/\u6df1\u5165\u6570\u7ec4\u7684\u5404\u4e2aAPI"}},m={authorsImageUrls:[void 0]},l=[{value:"1.\u57fa\u7840\u4f7f\u7528",id:"1\u57fa\u7840\u4f7f\u7528",level:2},{value:"\u67e5\u627e\u89c4\u5219",id:"\u67e5\u627e\u89c4\u5219",level:3},{value:"\u5bf9\u6bd4\u6765\u7406\u89e3",id:"\u5bf9\u6bd4\u6765\u7406\u89e3",level:3},{value:"2.\u6570\u7ec4\u9879\u7684\u4f7f\u7528",id:"2\u6570\u7ec4\u9879\u7684\u4f7f\u7528",level:2},{value:"3.\u5bf9\u8c61\u7684\u4f7f\u7528",id:"3\u5bf9\u8c61\u7684\u4f7f\u7528",level:2}],c={toc:l},u="wrapper";function p(e){let{components:n,...t}=e;return(0,r.kt)(u,(0,a.Z)({},c,t,{components:n,mdxType:"MDXLayout"}),(0,r.kt)("h2",{id:"1\u57fa\u7840\u4f7f\u7528"},"1.\u57fa\u7840\u4f7f\u7528"),(0,r.kt)("h3",{id:"\u67e5\u627e\u89c4\u5219"},"\u67e5\u627e\u89c4\u5219"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { normalize, schema } = require(\"normalizr\");\n\nconst myData = {\n  userss: [\n    {\n      id: 1,\n      name: \"fjk\",\n    },\n    {\n      id: 2,\n    },\n  ],\n};\n// myUser \u662f\u5c06\u6765\u751f\u6210\u7684\u5bf9\u8c61\u7684\u952e\nconst user = new schema.Entity(\"myUser\");\n// \u5b9a\u4e49\u67e5\u627e\u89c4\u5219\nconst mySchema3 = { users: [user], userss: [user] };\n\n// \u56e0\u4e3a \u952e users \u5728 myData \u4e2d\u5339\u914d\u4e0d\u5230 \u6240\u4ee5\u4e3a\u7a7a\n// \u952e userss \u53ef\u4ee5\u5728 myData \u4e2d\u5339\u914d\u5230 \u6240\u4ee5\u53ef\u4ee5\u67e5\u627e\u5230\nconst normalizedData3 = normalize(myData, mySchema3);\n// \u6253\u5370\u7ed3\u679c\nconsole.log(normalizedData3.entities); // { myUser: { '1': { id: 1, name: 'fjk' }, '2': { id: 2 } } }\n")),(0,r.kt)("h3",{id:"\u5bf9\u6bd4\u6765\u7406\u89e3"},"\u5bf9\u6bd4\u6765\u7406\u89e3"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { normalize, schema } = require(\"normalizr\");\n\nconst myData = {\n  userss: [\n    {\n      id: 1,\n      name: \"fjk\",\n    },\n    {\n      id: 2,\n    },\n  ],\n};\n\nconst user = new schema.Entity(\"myUser\");\nconst mySchema = { users: [user] };\nconst mySchema2 = { userss: [user] };\nconst mySchema3 = { users: [user], userss: [user] };\n\nconst normalizedData = normalize(myData, mySchema);\nconst normalizedData2 = normalize(myData, mySchema2);\nconst normalizedData3 = normalize(myData, mySchema3);\nconsole.log(normalizedData.entities); // {} \u56e0\u4e3a \u952e users \u5728 myData \u4e2d\u5339\u914d\u4e0d\u5230 \u6240\u4ee5\u4e3a\u7a7a\n// \u952e userss \u53ef\u4ee5\u5728 myData \u4e2d\u5339\u914d\u5230 \u6240\u4ee5\u53ef\u4ee5\u67e5\u627e\u5230\nconsole.log(normalizedData2.entities); // { myUser: { '1': { id: 1, name: 'fjk' }, '2': { id: 2 } } }\nconsole.log(normalizedData3.entities); // { myUser: { '1': { id: 1, name: 'fjk' }, '2': { id: 2 } } }\n")),(0,r.kt)("h2",{id:"2\u6570\u7ec4\u9879\u7684\u4f7f\u7528"},"2.\u6570\u7ec4\u9879\u7684\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { normalize, schema } = require(\"normalizr\");\n\nconst data = [\n  { id: \"123\", name: \"Jim\" },\n  { id: \"456\", name: \"Jane\" },\n];\n\nconst userSchema = new schema.Entity(\"userArray\");\n\nconst userListScheme = new schema.Array(userSchema);\n// \u5feb\u6377\u5199\u6cd5\n// const userListScheme = [userSchema]\n\n// \u628a\u6570\u7ec4\u7684\u9879 \u5f53\u4f5c\u4e00\u4e2a\u6570\u636e \u6765\u63d0\u53d6\u51fa\u6765\u6210\u4e3a\u4e00\u4e2a\u5bf9\u8c61 \u9ed8\u8ba4\u5176 id \u4e3a\u952e\uff0c\u503c\u4e3a\u6570\u7ec4\u9879\nconst norData = normalize(data, userListScheme);\nconsole.log(norData.entities);\n// {\n//   userArray: {\n//     '123': { id: '123', name: 'Jim' },\n//     '456': { id: '456', name: 'Jane' }\n//   }\n// }\n")),(0,r.kt)("h2",{id:"3\u5bf9\u8c61\u7684\u4f7f\u7528"},"3.\u5bf9\u8c61\u7684\u4f7f\u7528"),(0,r.kt)("p",null,"\u6839\u636e\u5df2\u63d0\u4f9b\u6570\u636e\u7684\u67d0\u4e00\u9879\u7684\u503c\u4f5c\u4e3a\u952e\u6765\u4f7f\u7528"),(0,r.kt)("p",null,"\u4e3e\u4f8b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'const data = [\n  { id: 1, type: "admin", name: "fjk" },\n  { id: 2, type: "user" },\n];\n')),(0,r.kt)("p",null,"\u60f3\u6839\u636e data \u6570\u636e\u4e2d\u7684 type \u9879\u5bf9\u5e94\u7684\u503c\u6765\u5f53\u4f5c\u952e\u6765\u4f7f\u7528"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},"const { normalize, schema } = require(\"normalizr\");\n\nconst data = [\n  { id: 1, type: \"admin\", name: \"fjk\" },\n  { id: 2, type: \"user\", name: \"f\" },\n];\n\nconst userSchema = new schema.Entity(\"users\");\n\nconst admineSchema = new schema.Entity(\"myAdmin\");\n\nconst myArray = new schema.Array(\n  {\n    admins: admineSchema,\n    users: userSchema,\n  },\n  // \u4e0b\u9762\u90a3\u4e2a\u51fd\u6570\u7684\u5339\u914d\u89c4\u5219 \u5bf9\u5e94\u4e0a\u9762\u5bf9\u8c61\u4e2d\u7684\u952e\n  (input, parent, key) => `${input.type}s`\n);\nconst myArray2 = new schema.Array(\n  {\n    admins: admineSchema,\n    users: userSchema,\n    fjk: new schema.Entity(\"fjks\"),\n    ff: new schema.Entity(\"f\"),\n  },\n  // \u6b64\u5904\u8fd4\u56de\u7684 input name \u7684\u53d6\u503c \u4e3a fjk \u548c f \u5176\u4e2d\u53ea\u6709 fjk \u53ef\u4ee5\u5bf9\u5e94\u4e0a\u5bf9\u8c61\u4e2d\u7684\u952e\n  // \u5e94\u7528 fjk:new schema.Entity('fjks') \u7684\u5339\u914d\u89c4\u5219 \u751f\u6210\u6570\u636e\u952e\u540d\u4e3a fjks \u7684\u6570\u636e\n  (input, parent, key) => `${input.name}`\n);\nconst norData = normalize(data, myArray);\nconsole.log(norData.entities);\n// {\n//   myAdmin: { '1': { id: 1, type: 'admin', name: 'fjk' } },\n//   users: { '2': { id: 2, type: 'user',name:'f' } }\n// }\nconst norData2 = normalize(data, myArray2);\nconsole.log(norData2.entities);\n//  fjks: { '1': { id: 1, type: 'admin', name: 'fjk' } } }\n")))}p.isMDXComponent=!0}}]);