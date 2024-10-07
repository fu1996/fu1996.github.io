"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[1529],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function s(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?s(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):s(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},s=Object.keys(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(r=0;r<s.length;r++)n=s[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var o=r.createContext({}),p=function(e){var t=r.useContext(o),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=p(e.components);return r.createElement(o.Provider,{value:t},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,s=e.originalType,o=e.parentName,u=i(e,["components","mdxType","originalType","parentName"]),c=p(n),d=a,g=c["".concat(o,".").concat(d)]||c[d]||m[d]||s;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var s=n.length,l=new Array(s);l[0]=d;var i={};for(var o in t)hasOwnProperty.call(t,o)&&(i[o]=t[o]);i.originalType=e,i[c]="string"==typeof e?e:a,l[1]=i;for(var p=2;p<s;p++)l[p]=n[p];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},35707:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>i,toc:()=>p});var r=n(87462),a=(n(67294),n(3905));const s={authors:"junkui",title:"ts\u5b98\u65b9\u5165\u95e8",categories:["ts"],tags:["ts"],slug:"/",sidebar_position:0,date:new Date("2020-12-29T10:52:39.000Z")},l=void 0,i={unversionedId:"ts\u5b98\u65b9\u5165\u95e8",id:"ts\u5b98\u65b9\u5165\u95e8",title:"ts\u5b98\u65b9\u5165\u95e8",description:"https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html",source:"@site/ts/ts\u5b98\u65b9\u5165\u95e8.md",sourceDirName:".",slug:"/",permalink:"/ts/",draft:!1,editUrl:"https://github.com/fu1996/fu1996.github.io/tree/main/ts/ts\u5b98\u65b9\u5165\u95e8.md",tags:[{label:"ts",permalink:"/ts/tags/ts"}],version:"current",lastUpdatedBy:"\u4ed8\u4fca\u594e",lastUpdatedAt:1711900781,formattedLastUpdatedAt:"2024\u5e743\u670831\u65e5",sidebarPosition:0,frontMatter:{authors:"junkui",title:"ts\u5b98\u65b9\u5165\u95e8",categories:["ts"],tags:["ts"],slug:"/",sidebar_position:0,date:"2020-12-29T10:52:39.000Z"},sidebar:"tutorialSidebar",next:{title:"01-ts\u57fa\u7840\u7c7b\u578b",permalink:"/ts/ts\u57fa\u7840\u7c7b\u578b"}},o={},p=[{value:"\u73af\u5883\u642d\u5efa",id:"\u73af\u5883\u642d\u5efa",level:3},{value:"\u6d4b\u8bd5\u73af\u5883\u662f\u5426\u6210\u529f",id:"\u6d4b\u8bd5\u73af\u5883\u662f\u5426\u6210\u529f",level:3},{value:"1.\u6dfb\u52a0\u7c7b\u578b\u6ce8\u89e3 \u3010\u548c java \u4e00\u6837\u3011",id:"1\u6dfb\u52a0\u7c7b\u578b\u6ce8\u89e3-\u548c-java-\u4e00\u6837",level:3},{value:"2.\u4f7f\u7528\u63a5\u53e3",id:"2\u4f7f\u7528\u63a5\u53e3",level:3},{value:"3.\u63a5\u53e3\u63cf\u8ff0\u7c7b",id:"3\u63a5\u53e3\u63cf\u8ff0\u7c7b",level:3}],u={toc:p},c="wrapper";function m(e){let{components:t,...s}=e;return(0,a.kt)(c,(0,r.Z)({},u,s,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html"},"https://www.tslang.cn/docs/handbook/typescript-in-5-minutes.html")),(0,a.kt)("h3",{id:"\u73af\u5883\u642d\u5efa"},"\u73af\u5883\u642d\u5efa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"npm install -g typescript\n")),(0,a.kt)("h3",{id:"\u6d4b\u8bd5\u73af\u5883\u662f\u5426\u6210\u529f"},"\u6d4b\u8bd5\u73af\u5883\u662f\u5426\u6210\u529f"),(0,a.kt)("p",null,"\u65b0\u5efa greeter.ts"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'function greeter(person) {\n  return "Hello, " + person;\n}\n\nlet user = "Jane User";\n\ndocument.body.innerHTML = greeter(user);\n')),(0,a.kt)("p",null,"\u7f16\u8bd1\u4e00\u4e0b \u4f1a\u751f\u6210\u540c\u540d\u7684\u4f46\u662f\u7ed3\u5c3e\u662f js \u7684\u6587\u4ef6"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-bash"},"tsc greeter.ts\n")),(0,a.kt)("h3",{id:"1\u6dfb\u52a0\u7c7b\u578b\u6ce8\u89e3-\u548c-java-\u4e00\u6837"},"1.\u6dfb\u52a0\u7c7b\u578b\u6ce8\u89e3 \u3010\u548c java \u4e00\u6837\u3011"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'function greeter(person: string) {\n  return "Hello, " + person;\n}\n\nlet user = "Jane User";\n\ndocument.body.innerHTML = greeter(user);\n')),(0,a.kt)("p",null,"\u73b0\u5728\u628a user \u6539\u4e3a\u6570\u7ec4\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let user = [1, 2, 3];\n")),(0,a.kt)("p",null,"\u518d\u6b21\u7f16\u8bd1\u5c31\u62a5\u9519\u4e86\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20201229110041111",src:n(96072).Z,width:"1442",height:"266"})),(0,a.kt)("p",null,"\u867d\u7136\u7f16\u8bd1\u62a5\u9519\u4e86\uff0c\u4f46\u662f js \u6587\u4ef6\u8fd8\u662f\u751f\u6210\u4e86\u3002"),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"TypeScript\u63d0\u4f9b\u4e86\u9759\u6001\u7684\u4ee3\u7801\u5206\u6790\uff0c\u5b83\u53ef\u4ee5\u5206\u6790\u4ee3\u7801\u7ed3\u6784\u548c\u63d0\u4f9b\u7684\u7c7b\u578b\u6ce8\u89e3\u3002")),(0,a.kt)("h3",{id:"2\u4f7f\u7528\u63a5\u53e3"},"2.\u4f7f\u7528\u63a5\u53e3"),(0,a.kt)("p",null,"\u63a5\u53e3\u63cf\u8ff0\u5bf9\u8c61\uff0c\u6307\u660e\u5bf9\u8c61\u91cc\u9762\u6709\u54ea\u4e9b\u952e"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'interface Person {\n  firstName: string;\n  lastName: string;\n}\n\nfunction greeter(person: Person) {\n  return "Hello, " + person.firstName + " " + person.lastName;\n}\n\nlet user = { firstName: "Jane", lastName: "User" };\n\ndocument.body.innerHTML = greeter(user);\n')),(0,a.kt)("h3",{id:"3\u63a5\u53e3\u63cf\u8ff0\u7c7b"},"3.\u63a5\u53e3\u63cf\u8ff0\u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'class Student {\n  fullName: string;\n  constructor(public firstName, public middleInitial, public lastName) {\n    this.fullName = firstName + " " + middleInitial + " " + lastName;\n  }\n}\n\ninterface Person {\n  firstName: string;\n  lastName: string;\n}\n\nfunction greeter(person: Person) {\n  return "Hello, " + person.firstName + " " + person.lastName;\n}\n\nlet user = new Student("Jane", "M.", "User");\n\ndocument.body.innerHTML = greeter(user);\n')))}m.isMDXComponent=!0},96072:(e,t,n)=>{n.d(t,{Z:()=>r});const r=n.p+"assets/images/image-20201229110041111-fe5102e5d629f8023617de3354a2e168.png"}}]);