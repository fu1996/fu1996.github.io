"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[8502],{3905:(e,n,t)=>{t.d(n,{Zo:()=>p,kt:()=>d});var r=t(67294);function a(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function l(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?l(Object(t),!0).forEach((function(n){a(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):l(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function o(e,n){if(null==e)return{};var t,r,a=function(e,n){if(null==e)return{};var t,r,a={},l=Object.keys(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||(a[t]=e[t]);return a}(e,n);if(Object.getOwnPropertySymbols){var l=Object.getOwnPropertySymbols(e);for(r=0;r<l.length;r++)t=l[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(a[t]=e[t])}return a}var s=r.createContext({}),u=function(e){var n=r.useContext(s),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},p=function(e){var n=u(e.components);return r.createElement(s.Provider,{value:n},e.children)},c="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},g=r.forwardRef((function(e,n){var t=e.components,a=e.mdxType,l=e.originalType,s=e.parentName,p=o(e,["components","mdxType","originalType","parentName"]),c=u(t),g=a,d=c["".concat(s,".").concat(g)]||c[g]||m[g]||l;return t?r.createElement(d,i(i({ref:n},p),{},{components:t})):r.createElement(d,i({ref:n},p))}));function d(e,n){var t=arguments,a=n&&n.mdxType;if("string"==typeof e||a){var l=t.length,i=new Array(l);i[0]=g;var o={};for(var s in n)hasOwnProperty.call(n,s)&&(o[s]=n[s]);o.originalType=e,o[c]="string"==typeof e?e:a,i[1]=o;for(var u=2;u<l;u++)i[u]=t[u];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}g.displayName="MDXCreateElement"},44136:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>m,frontMatter:()=>l,metadata:()=>o,toc:()=>u});var r=t(87462),a=(t(67294),t(3905));const l={authors:"junkui",title:"05-ts\u4e2d\u7684\u6cdb\u578b",categories:["ts"],tags:["ts","\u7591\u95ee"],date:new Date("2020-12-31T09:57:23.000Z")},i="\u6cdb\u578b",o={unversionedId:"ts\u4e2d\u7684\u6cdb\u578b",id:"ts\u4e2d\u7684\u6cdb\u578b",title:"05-ts\u4e2d\u7684\u6cdb\u578b",description:"\u4e00\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u6570\u636e\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u81ea\u5df1\u7684\u6570\u636e\u7c7b\u578b\u6765\u4f7f\u7528\u7ec4\u4ef6",source:"@site/ts/05-ts\u4e2d\u7684\u6cdb\u578b.md",sourceDirName:".",slug:"/ts\u4e2d\u7684\u6cdb\u578b",permalink:"/ts/ts\u4e2d\u7684\u6cdb\u578b",draft:!1,editUrl:"https://github.com/fu1996/fu1996.github.io/tree/main/ts/05-ts\u4e2d\u7684\u6cdb\u578b.md",tags:[{label:"ts",permalink:"/ts/tags/ts"},{label:"\u7591\u95ee",permalink:"/ts/tags/\u7591\u95ee"}],version:"current",lastUpdatedBy:"fjk",lastUpdatedAt:1689401787,formattedLastUpdatedAt:"2023\u5e747\u670815\u65e5",sidebarPosition:5,frontMatter:{authors:"junkui",title:"05-ts\u4e2d\u7684\u6cdb\u578b",categories:["ts"],tags:["ts","\u7591\u95ee"],date:"2020-12-31T09:57:23.000Z"},sidebar:"tutorialSidebar",previous:{title:"ts\u4e2d\u7684\u7c7b\u548c\u7ee7\u627f\u7684\u5c0fdemo",permalink:"/ts/ts\u4e2d\u7684\u7c7b\u548c\u7ee7\u627f\u5c0fdemo"},next:{title:"06-ts\u4e2d\u7684\u51fd\u6570",permalink:"/ts/ts\u4e2d\u7684\u51fd\u6570"}},s={},u=[{value:"1.\u6cdb\u578b\u7248 Hello World",id:"1\u6cdb\u578b\u7248-hello-world",level:2},{value:"2.\u4f7f\u7528\u6cdb\u578b\u51fd\u6570",id:"2\u4f7f\u7528\u6cdb\u578b\u51fd\u6570",level:2},{value:"<strong>\u4f20\u5165\u6240\u6709\u7684\u53c2\u6570\uff0c\u5305\u542b\u7c7b\u578b\u53c2\u6570\uff1a</strong>",id:"\u4f20\u5165\u6240\u6709\u7684\u53c2\u6570\u5305\u542b\u7c7b\u578b\u53c2\u6570",level:3},{value:"\u5229\u7528 ts \u7684\u7c7b\u578b\u63a8\u65ad\u2014\u2014\u81ea\u52a8\u6839\u636e\u7c7b\u578b\u8fdb\u884c\u63a8\u65ad",id:"\u5229\u7528-ts-\u7684\u7c7b\u578b\u63a8\u65ad\u81ea\u52a8\u6839\u636e\u7c7b\u578b\u8fdb\u884c\u63a8\u65ad",level:3},{value:"3.\u6cdb\u578b\u53d8\u91cf\u7684\u4f7f\u7528",id:"3\u6cdb\u578b\u53d8\u91cf\u7684\u4f7f\u7528",level:2},{value:"4.\u6cdb\u578b\u51fd\u6570\u548c\u6cdb\u578b\u63a5\u53e3",id:"4\u6cdb\u578b\u51fd\u6570\u548c\u6cdb\u578b\u63a5\u53e3",level:2},{value:"\u6cdb\u578b\u51fd\u6570",id:"\u6cdb\u578b\u51fd\u6570",level:3},{value:"\u4f7f\u7528\u5bf9\u8c61\u63cf\u8ff0\u6cdb\u578b\u51fd\u6570",id:"\u4f7f\u7528\u5bf9\u8c61\u63cf\u8ff0\u6cdb\u578b\u51fd\u6570",level:3},{value:"\u628a\u6cdb\u578b\u52a0\u5165 class \u4e2d\u2014\u2014\u548c\u6cdb\u578b\u51fd\u6570\u5dee\u4e0d\u591a",id:"\u628a\u6cdb\u578b\u52a0\u5165-class-\u4e2d\u548c\u6cdb\u578b\u51fd\u6570\u5dee\u4e0d\u591a",level:3},{value:"5.\u6cdb\u578b\u7ea6\u675f",id:"5\u6cdb\u578b\u7ea6\u675f",level:2},{value:"\u5728\u6cdb\u578b\u7ea6\u675f\u4e2d\u4f7f\u7528\u7c7b\u578b\u53c2\u6570 \u3010\u5931\u8d25\uff0c\u4e0d\u7406\u89e3\u3011",id:"\u5728\u6cdb\u578b\u7ea6\u675f\u4e2d\u4f7f\u7528\u7c7b\u578b\u53c2\u6570-\u5931\u8d25\u4e0d\u7406\u89e3",level:3},{value:"6.\u5229\u7528\u6cdb\u578b\u7ea6\u675f\u521b\u5efa\u6cdb\u578b\u5de5\u5382\u51fd\u6570",id:"6\u5229\u7528\u6cdb\u578b\u7ea6\u675f\u521b\u5efa\u6cdb\u578b\u5de5\u5382\u51fd\u6570",level:2}],p={toc:u},c="wrapper";function m(e){let{components:n,...t}=e;return(0,a.kt)(c,(0,r.Z)({},p,t,{components:n,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"\u6cdb\u578b"},"\u6cdb\u578b"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u4e00\u4e2a\u7ec4\u4ef6\u53ef\u4ee5\u652f\u6301\u591a\u79cd\u7c7b\u578b\u7684\u6570\u636e\uff0c\u7528\u6237\u53ef\u4ee5\u4f7f\u7528\u81ea\u5df1\u7684\u6570\u636e\u7c7b\u578b\u6765\u4f7f\u7528\u7ec4\u4ef6")),(0,a.kt)("h2",{id:"1\u6cdb\u578b\u7248-hello-world"},"1.\u6cdb\u578b\u7248 Hello World"),(0,a.kt)("p",null,"\u590d\u8bfb\u673a\u7684\u529f\u80fd"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function identity(arg: number): number {\n  return arg;\n}\n// \u6216\u8005\u5c06number \u7c7b\u578b\u6539\u4e3a any\u7c7b\u578b \u8fd9\u90fd\u6ca1\u6709\u7c7b\u578b\u6821\u9a8c\u4e86 \u4e0d\u80fd\u7b97\u662fTS\u4e86\nfunction identityAny(arg: any): any {\n  return arg;\n}\n\n// \u7c7b\u578b\u53d8\u91cf\uff1a\u8bb0\u5f55\u4f20\u5165\u7684\u53c2\u6570\u7c7b\u578b \u628a\u8fd9\u4e2a\u53c2\u6570\u7c7b\u578b\u5f53\u6210\u4e00\u4e2a\u53d8\u91cf\u4f7f\u7528\nfunction identityTs<T>(arg: T): T {\n  return arg;\n}\n")),(0,a.kt)("p",null,"identity \u6dfb\u52a0\u4e86\u7c7b\u578b\u53d8\u91cf",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"\u6765\u6355\u6349\u7528\u6237\u8f93\u5165\u7684\u7c7b\u578b\u3010\u6bd4\u5982\uff1anumber\u3011\uff0c\u4e4b\u540e\u5c31\u53ef\u4ee5\u4f7f\u7528\u8fd9\u4e2a\u7c7b\u578b\uff0c",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"\u5c31\u5b58\u50a8\u4e86\u8fd9\u4e2a ",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\u7c7b\u578b\uff0c\u4e4b\u540e\u518d\u6b21\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"T"),"\u5f53\u4f5c\u8fd4\u56de\u503c\u7c7b\u578b\u7684\u65f6\u5019\uff0c\u5c31\u53ef\u4ee5\u77e5\u9053\u53c2\u6570\u7c7b\u578b\u548c\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u662f\u76f8\u540c\u7684\u3002"),(0,a.kt)("p",null,"\u6cdb\u578b\u4e0d\u540c\u4e8e",(0,a.kt)("inlineCode",{parentName:"p"},"any"),"\uff0c\u4e0d\u4f1a\u4e22\u5931\u4fe1\u606f\uff0c\u53ef\u4ee5\u4fdd\u6301\u51c6\u786e\u6027\uff0c\u4f20\u5165\u6570\u503c\u7c7b\u578b\u5e76\u8fd4\u56de\u7c7b\u578b\u3002"),(0,a.kt)("h2",{id:"2\u4f7f\u7528\u6cdb\u578b\u51fd\u6570"},"2.\u4f7f\u7528\u6cdb\u578b\u51fd\u6570"),(0,a.kt)("h3",{id:"\u4f20\u5165\u6240\u6709\u7684\u53c2\u6570\u5305\u542b\u7c7b\u578b\u53c2\u6570"},(0,a.kt)("strong",{parentName:"h3"},"\u4f20\u5165\u6240\u6709\u7684\u53c2\u6570\uff0c\u5305\u542b\u7c7b\u578b\u53c2\u6570\uff1a")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u660e\u786e\u7684\u6307\u5b9a\u4e86T\u662fstring\u7c7b\u578b\uff0c\u5e76\u505a\u4e3a\u4e00\u4e2a\u53c2\u6570\u4f20\u7ed9\u51fd\u6570\uff0c\u4f7f\u7528\u4e86<>\u62ec\u8d77\u6765\u800c\u4e0d\u662f()\nlet output = identity<string>(\"myString\"); // type of output will be 'string'\n")),(0,a.kt)("h3",{id:"\u5229\u7528-ts-\u7684\u7c7b\u578b\u63a8\u65ad\u81ea\u52a8\u6839\u636e\u7c7b\u578b\u8fdb\u884c\u63a8\u65ad"},"\u5229\u7528 ts \u7684\u7c7b\u578b\u63a8\u65ad\u2014\u2014\u81ea\u52a8\u6839\u636e\u7c7b\u578b\u8fdb\u884c\u63a8\u65ad"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"let output = identity(\"myString\"); // type of output will be 'string'\n")),(0,a.kt)("h2",{id:"3\u6cdb\u578b\u53d8\u91cf\u7684\u4f7f\u7528"},"3.\u6cdb\u578b\u53d8\u91cf\u7684\u4f7f\u7528"),(0,a.kt)("p",null,"\u6cdb\u578b\u53d8\u91cf\u53ef\u4ee5\u8bb0\u5f55\u4f20\u5165\u53c2\u6570\u7684\u7c7b\u578b\uff0c\u4f46\u662f\u7c7b\u578b\u548c\u7c7b\u578b\u4e4b\u95f4\u7684\u5c5e\u6027\u6709\u6240\u4e0d\u540c\uff0c\u6bd4\u5982",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\u548c\u6570\u7ec4\uff0cnumber \u7c7b\u578b\u662f\u6ca1\u6709",(0,a.kt)("inlineCode",{parentName:"p"},"length"),"\u7684\u5c5e\u6027\u7684\uff0c\u800c\u6570\u7ec4\u662f\u6709\u6ef4\u3002\u53d8\u91cf\u7c7b\u578b\u662f\u8bb0\u5f55\u4e86\u4f20\u5165\u51fd\u6570\u7684\u7c7b\u578b\uff0c\u4f46\u662f\u4f20\u5165\u7684\u7c7b\u578b\u7684\u5c5e\u6027\u662f\u5426\u5b58\u5728\u4e5f\u662f\u9700\u8981\u5224\u65ad\u7684\uff0c\u8fd9\u6837\u624d\u662f TS \u7c7b\u578b\u6821\u9a8c\u7684\u5389\u5bb3\u4e4b\u5904\u3002"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u628a\u8f93\u5165\u7684\u6570\u636e\u7684\u7c7b\u578b\u5f53\u4f5c\u53d8\u91cf\u6765\u7528"),(0,a.kt)("li",{parentName:"ul"},"\u6839\u636e\u4e0d\u540c\u7684\u53d8\u91cf\u7c7b\u578b\u6765\u6821\u9a8c\u4e0d\u540c\u7684\u5c5e\u6027")),(0,a.kt)("p",null,"\u5982\u679c\u4f20\u5165\u7684\u53d8\u91cf\u7c7b\u578b\u662f",(0,a.kt)("inlineCode",{parentName:"p"},"number")," \u6821\u9a8c number \u662f\u6ca1\u6709 length \u5c5e\u6027\u7684\u3002\u5c31\u4f1a\u63d0\u793a\u51fa\u9519\u8bef"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function loggingIdentity<T>(arg: T): T {\n  console.log(arg.length); // Error: T doesn't have .length\n  return arg;\n}\n")),(0,a.kt)("p",null,"\u5c06\u4f20\u5165\u7684",(0,a.kt)("strong",{parentName:"p"},"\u53d8\u91cf\u7c7b\u578b"),"T>\u7684",(0,a.kt)("strong",{parentName:"p"},"\u53c2\u6570\u7c7b\u578b\u5bf9\u5e94\u7684\u662f","[arg]"),"\u6539\u4e3a\u6570\u7ec4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function loggingIdentity<T>(arg: T[]): T[] {\n  console.log(arg.length); // Array has a .length, so no more error\n  return arg;\n}\n")),(0,a.kt)("p",null,"\u6216\u8005\u662f\u4f7f\u7528\u6570\u7ec4\u5173\u952e\u5b57\u6765\u5b9a\u4e49\u6570\u7ec4"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function loggingIdentity<T>(arg: Array<T>): Array<T> {\n  console.log(arg.length); // Array has a .length, so no more error\n  return arg;\n}\n")),(0,a.kt)("h2",{id:"4\u6cdb\u578b\u51fd\u6570\u548c\u6cdb\u578b\u63a5\u53e3"},"4.\u6cdb\u578b\u51fd\u6570\u548c\u6cdb\u578b\u63a5\u53e3"),(0,a.kt)("h3",{id:"\u6cdb\u578b\u51fd\u6570"},"\u6cdb\u578b\u51fd\u6570"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"\u6cdb\u578b\u51fd\u6570\u7684\u7c7b\u578b\u76f8\u5bf9\u4e8e\u975e\u6cdb\u578b\u51fd\u6570\u6765\u8bf4\uff0c\u5c31\u662f\u591a\u4e86\u4e00\u4e2a\u53d8\u91cf\u7c7b\u578b\u5728\u6700\u524d\u9762")),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function identity<T>(arg: T): T {\n  return arg;\n}\n// \u4ece\u5192\u53f7 \u5f00\u59cb \u5230\u7b49\u53f7\u4e4b\u524d\u7ed3\u675f\u90fd\u662f\u7c7b\u578b \u5b9a\u4e49\nlet myIdentity: <T>(arg: T) => T = identity; // var myIdentity = identity;\n")),(0,a.kt)("p",null,"\u53d8\u91cf\u7c7b\u578b\u7684\u6839\u672c\u542b\u4e49\uff0c\u5c31\u662f\u628a\u8fd9\u4e2a\u7c7b\u578b\u8d4b\u503c\u4e3a\u4e00\u4e2a\u53d8\u91cf\u3002\u6240\u4ee5\uff0c\u53ea\u8981\u4e0a\u4e0b\u95ee\u7684\u53d8\u91cf\u503c\u4e00\u6837\u5c31\u884c\uff0c\u5c31\u53ef\u4ee5\u4fdd\u8bc1\u7c7b\u578b\u7684\u7edf\u4e00\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function identity<T>(arg: T): T {\n  return arg;\n}\n\nlet myIdentity: <U>(arg: U) => U = identity;\n")),(0,a.kt)("h3",{id:"\u4f7f\u7528\u5bf9\u8c61\u63cf\u8ff0\u6cdb\u578b\u51fd\u6570"},"\u4f7f\u7528\u5bf9\u8c61\u63cf\u8ff0\u6cdb\u578b\u51fd\u6570"),(0,a.kt)("p",null,"\u5bf9\u8c61\u7684\u5192\u53f7\u540e\u9762\u8868\u793a\u7684\u8fd4\u56de\u503c\u7684\u7c7b\u578b\uff0c\u54c8\u54c8\uff0c\u5f53\u7136\u53ef\u4ee5\u63cf\u8ff0\u51fd\u6570\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u5462\u3002"),(0,a.kt)("p",null,"\u6bd4\u5982\uff1a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"function Demo<T>(args: T): T[] {\n  return [args, args];\n}\n// \u8fd9\u5e94\u8be5\u5f88\u6e05\u695a\u7684\u7c7b\u578b\u5b9a\u4e49\u4e86\nlet newDemo: { <T>(arg: T): T[] } = Demo;\n")),(0,a.kt)("p",null,"\u5bf9\u8c61\u548c\u63a5\u53e3\u53c8\u662f\u5f88\u76f8\u4f3c\u7684\uff0cSo\uff1a\u3010\u63a8\u8350\u624b\u6572\u4e00\u4e0b\uff0c\u4e0b\u9762\u4ee3\u7801\u7531\u6d45\u5165\u6df1\u7684\u62d3\u5c55\u3011"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// \u4ffa\u5728\u5f04\u4e00\u4e2a\u63a5\u53e3\ninterface Demo2 {\n  <U>(a: U): U[];\n}\n\nlet newDemo2: Demo2 = Demo;\n\n// \u5728\u6269\u5c55\u4e00\u4e0b \u5bf9\u63a5\u53e3\u662f\u7528 \u53d8\u91cf\u7c7b\u578b \uff1a\u5c06\u53d8\u91cf\u5f53\u4f5c\u7c7b\u578b\u4f20\u7ed9\u63a5\u53e3 \u7f8e\u6ecb\u6ecb\ninterface Demo3<Y> {\n  (b: Y): Y[];\n}\n\n// \u6b64\u5904\u4f20\u5165\u7684 \u53d8\u91cf\u7c7b\u578b\u662f number \u5219\u8bf4\u660e\u6539\u51fd\u6570 \u63a5\u53d7\u7684\u53d8\u91cf\u53ea\u80fd\u662fnumber\nlet newDemo3: Demo3<number> = (arg: number): number[] => {\n  return [arg];\n};\n// \u5c06\u53d8\u91cf\u7c7b\u578b\u524d\u540e\u6539\u4e0d\u7edf\u4e00\nlet newDemo4: Demo3<string> = (arg: number): number[] => {\n  return [arg];\n};\nlet newDemo5: Demo3<number> = (arg: string): string[] => {\n  return [arg];\n};\n\n// \u5b9a\u4e49\u524d\u540e\u4e0d\u7edf\u4e00\u7c7b\u578b\u7684\u63a5\u53e3 \u4f20\u5165\u4efb\u4f55\u7c7b\u578b \u90fd\u8fd4\u56de string\ninterface Demo4<T> {\n  (arg: T): string;\n}\n// \u4e3a\u5565 null \u548c number \u7c7b\u578b\u517c\u5bb9\u5462\uff1f\nconst newDemo6: Demo4<null> = (list: number) => {\n  return "string";\n};\n// string \u548c number \u4e0d\u517c\u5bb9\nconst newDemo7: Demo4<string> = (list: number) => {\n  return "string";\n};\n')),(0,a.kt)("h3",{id:"\u628a\u6cdb\u578b\u52a0\u5165-class-\u4e2d\u548c\u6cdb\u578b\u51fd\u6570\u5dee\u4e0d\u591a"},"\u628a\u6cdb\u578b\u52a0\u5165 class \u4e2d\u2014\u2014\u548c\u6cdb\u578b\u51fd\u6570\u5dee\u4e0d\u591a"),(0,a.kt)("p",null,"\u6cdb\u578b\u7c7b\u770b\u4e0a\u53bb\u4e0e\u6cdb\u578b\u63a5\u53e3\u5dee\u4e0d\u591a\u3002 \u6cdb\u578b\u7c7b\u4f7f\u7528\uff08 ",(0,a.kt)("inlineCode",{parentName:"p"},"<>"),"\uff09\u62ec\u8d77\u6cdb\u578b\u7c7b\u578b\uff0c\u8ddf\u5728\u7c7b\u540d\u540e\u9762\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},"class GenericNumber<T> {\n  zeroValue: T;\n  add: (x: T, y: T) => T;\n}\n\nlet myGenericNumber = new GenericNumber<number>();\nmyGenericNumber.zeroValue = 0;\nmyGenericNumber.add = function (x, y) {\n  return x + y;\n};\n")),(0,a.kt)("p",null,(0,a.kt)("inlineCode",{parentName:"p"},"GenericNumber"),"\u7c7b\u7684\u4f7f\u7528\u662f\u5341\u5206\u76f4\u89c2\u7684\uff0c\u5e76\u4e14\u4f60\u53ef\u80fd\u5df2\u7ecf\u6ce8\u610f\u5230\u4e86\uff0c\u6ca1\u6709\u4ec0\u4e48\u53bb\u9650\u5236\u5b83\u53ea\u80fd\u4f7f\u7528",(0,a.kt)("inlineCode",{parentName:"p"},"number"),"\u7c7b\u578b\u3002 \u4e5f\u53ef\u4ee5\u4f7f\u7528\u5b57\u7b26\u4e32\u6216\u5176\u5b83\u66f4\u590d\u6742\u7684\u7c7b\u578b\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'let stringNumeric = new GenericNumber<string>();\nstringNumeric.zeroValue = "";\nstringNumeric.add = function (x, y) {\n  return x + y;\n};\n\nconsole.log(stringNumeric.add(stringNumeric.zeroValue, "test"));\n')),(0,a.kt)("p",null,"\u4e0e\u63a5\u53e3\u4e00\u6837\uff0c\u76f4\u63a5\u628a\u6cdb\u578b\u7c7b\u578b\u653e\u5728\u7c7b\u540e\u9762\uff0c\u53ef\u4ee5\u5e2e\u52a9\u6211\u4eec\u786e\u8ba4\u7c7b\u7684\u6240\u6709\u5c5e\u6027\u90fd\u5728\u4f7f\u7528\u76f8\u540c\u7684\u7c7b\u578b\u3002"),(0,a.kt)("p",null,"\u6211\u4eec\u5728",(0,a.kt)("a",{parentName:"p",href:"https://www.tslang.cn/docs/handbook/classes.html"},"\u7c7b"),"\u90a3\u8282\u8bf4\u8fc7\uff0c\u7c7b\u6709\u4e24\u90e8\u5206\uff1a\u9759\u6001\u90e8\u5206\u548c\u5b9e\u4f8b\u90e8\u5206\u3002 ",(0,a.kt)("inlineCode",{parentName:"p"},"\u6cdb\u578b\u7c7b\u6307\u7684\u662f\u5b9e\u4f8b\u90e8\u5206\u7684\u7c7b\u578b"),"\uff0c\u6240\u4ee5",(0,a.kt)("inlineCode",{parentName:"p"},"\u7c7b\u7684\u9759\u6001\u5c5e\u6027\u4e0d\u80fd\u4f7f\u7528\u8fd9\u4e2a\u6cdb\u578b\u7c7b\u578b"),"\u3002"),(0,a.kt)("h2",{id:"5\u6cdb\u578b\u7ea6\u675f"},"5.\u6cdb\u578b\u7ea6\u675f"),(0,a.kt)("p",null,"\u56e0\u4e3a\u6cdb\u578b\u662f\u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u800c\u7c7b\u578b\u7684\u5c5e\u6027\u53c8\u591a\u79cd\u591a\u6837\uff0c\u6709\u7b80\u5355\u7c7b\u578b\u554a\uff0cstring number null \u7b49\uff0c\u6709\u590d\u6742\u7c7b\u578b\u6570\u7ec4\uff0c\u5bf9\u8c61\u3002"),(0,a.kt)("p",null,"\u56e0\u4e3a\u7c7b\u578b\u76f8\u5dee\u592a\u5927\uff0c\u5c5e\u6027\u5f88\u96be\u8fbe\u5230\u7edf\u4e00\uff0c\u8981\u4e48\u5c31\u662f\u50cf\u4e0a\u9762\u7684\u6848\u4f8b\u4e00\u6837\uff0c\u76f4\u63a5\u6307\u660e\u6cdb\u578b\u7684\u7c7b\u578b\u662f\u6570\u7ec4\u3010\u592a\u5355\u8c03\u4e86\u4e9b\u3011\uff0c\u8fd9\u4e2a\u6269\u5c55\u6027\u4e5f\u592a\u5dee\u4e86\u3002\u6240\u4ee5\u5462\uff0c\u5c31\u8981\u5bf9\u8981\u4f7f\u7528\u7684\u6cdb\u578b\u589e\u52a0\u4e00\u4e9b\u7ea6\u675f\u3002\u8fd9\u4e5f\u662f\u81ea\u5b9a\u4e49\u6570\u636e\u7c7b\u578b\u7684\u57fa\u7840\u5427\uff1f\uff1f"),(0,a.kt)("p",null,"\u5b9e\u73b0\u4e00\u4e2a\u9650\u5236\u6cdb\u578b\uff1a\u7535\u8111\u7ea6\u675f"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-typescript"},'// \u5b9a\u4e49\u6cdb\u578b\u7ea6\u675f\uff1a\u63a7\u5236\u6cdb\u578b\u4e2d\u5e94\u8be5 \u6709\u54ea\u4e9b\u5c5e\u6027\ninterface Computer {\n  usb: number;\n  categories: string;\n  price?: number;\n}\n// \u4f7f\u7528 extends \u5c06\u8be5\u7ea6\u675f \u5e94\u7528\u5230\u6cdb\u578b \u4e0a\nfunction Apple<T extends Computer>(instance: T): string {\n  return `\u521b\u5efa\u4e00\u4e2a${instance.categories}\u82f9\u679c\u7535\u8111\u5b9e\u4f8b\uff0c${\n    instance.price ? `\u4ef7\u683c\u4e3a:${instance.price}\u5143` : "\u65e0\u62a5\u4ef7"\n  },\u5e26\u6709${instance.usb}\u4e2ausb\u63a5\u53e3\u7684\u5c5e\u6027`;\n}\n\nconst Air = {\n  usb: 4,\n  categories: "Air",\n};\nconst myAir = Apple(Air);\nconsole.log(myAir); // \u521b\u5efa\u4e00\u4e2aAir\u82f9\u679c\u7535\u8111\u5b9e\u4f8b\uff0c\u65e0\u62a5\u4ef7,\u5e26\u67094\u4e2ausb\u63a5\u53e3\u7684\u5c5e\u6027\n\nconst Pro = {\n  usb: 5,\n  categories: "Pro",\n  price: 12999,\n};\nconst myPro = Apple(Pro);\nconsole.log(myPro); // \u521b\u5efa\u4e00\u4e2aPro\u82f9\u679c\u7535\u8111\u5b9e\u4f8b\uff0c\u4ef7\u683c\u4e3a:12999\u5143,\u5e26\u67095\u4e2ausb\u63a5\u53e3\u7684\u5c5e\u6027\n')),(0,a.kt)("h3",{id:"\u5728\u6cdb\u578b\u7ea6\u675f\u4e2d\u4f7f\u7528\u7c7b\u578b\u53c2\u6570-\u5931\u8d25\u4e0d\u7406\u89e3"},"\u5728\u6cdb\u578b\u7ea6\u675f\u4e2d\u4f7f\u7528\u7c7b\u578b\u53c2\u6570 \u3010\u5931\u8d25\uff0c\u4e0d\u7406\u89e3\u3011"),(0,a.kt)("p",null,"\u58f0\u660e\u4e00\u4e2a\u7c7b\u578b\u53c2\u6570\uff0c\u88ab\u53e6\u5916\u4e00\u4e2a\u7c7b\u578b\u53c2\u6570\u6240\u7ea6\u675f\u3002"),(0,a.kt)("p",null,"\u4f60\u53ef\u4ee5\u58f0\u660e\u4e00\u4e2a\u7c7b\u578b\u53c2\u6570\uff0c\u4e14\u5b83\u88ab\u53e6\u4e00\u4e2a\u7c7b\u578b\u53c2\u6570\u6240\u7ea6\u675f\u3002 \u6bd4\u5982\uff0c\u73b0\u5728\u6211\u4eec\u60f3\u8981\u7528\u5c5e\u6027\u540d\u4ece\u5bf9\u8c61\u91cc\u83b7\u53d6\u8fd9\u4e2a\u5c5e\u6027\u3002 \u5e76\u4e14\u6211\u4eec\u60f3\u8981\u786e\u4fdd\u8fd9\u4e2a\u5c5e\u6027\u5b58\u5728\u4e8e\u5bf9\u8c61 ",(0,a.kt)("inlineCode",{parentName:"p"},"obj"),"\u4e0a\uff0c\u56e0\u6b64\u6211\u4eec\u9700\u8981\u5728\u8fd9\u4e24\u4e2a\u7c7b\u578b\u4e4b\u95f4\u4f7f\u7528\u7ea6\u675f\u3002"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function getProperty(obj: T, key: K) {\n  return obj[key];\n}\n\nlet x = { a: 1, b: 2, c: 3, d: 4 };\n\ngetProperty(x, \"a\"); // okay\ngetProperty(x, \"m\"); // error: Argument of type 'm' isn't assignable to 'a' | 'b' | 'c' | 'd'.\n")),(0,a.kt)("h2",{id:"6\u5229\u7528\u6cdb\u578b\u7ea6\u675f\u521b\u5efa\u6cdb\u578b\u5de5\u5382\u51fd\u6570"},"6.\u5229\u7528\u6cdb\u578b\u7ea6\u675f\u521b\u5efa\u6cdb\u578b\u5de5\u5382\u51fd\u6570"),(0,a.kt)("p",null,"\u4f7f\u7528\u6cdb\u578b\u6765\u521b\u5efa\u5de5\u5382\u51fd\u6570\uff0c\u9700\u8981\u4f7f\u7528\u6784\u9020\u51fd\u6570\u7684 class \u7c7b\u578b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function create<T>(c: { new (): T }): T {\n  return new c();\n}\n\nclass Beekeeper {\n  hasMask: boolean;\n}\n\nclass Zookeeper {\n  nametag: string;\n}\nclass Animal {\n  numLegs: number;\n}\n\nclass Bee extends Animal {\n  keeper: Beekeeper;\n}\n\nclass Lion extends Animal {\n  keeper: Zookeeper;\n}\nclass UFO {\n  keeper: Zookeeper;\n}\nclass UFO2 {\n  keeper: Zookeeper;\n  numLegs: number;\n}\n// \u6cdb\u578b\u7ea6\u675f \u662f Animal \u6709numlegs\u5c5e\u6027\u624d\u884c\nfunction createInstance<A extends Animal>(c: new () => A): A {\n  return new c();\n}\n\ncreateInstance(Lion).keeper.nametag;\ncreateInstance(Bee).keeper.hasMask;\ncreateInstance(UFO); // \u4e3b\u8981\u539f\u56e0\u662f \u4e0d \u6ee1\u8db3\u6cdb\u578b\u7ea6\u675f \u6ca1\u6709 numLegs \u5c5e\u6027\n// \u60f3\u8981\u8be5\u5c5e\u6027\u7684\u65b9\u6cd5\uff1a1.\u7ee7\u627f\u81ea Animal 2 .\u81ea\u8eab\u589e\u52a0\u8be5\u5c5e\u6027\ncreateInstance(UFO2); // \u6ee1\u8db3\u6cdb\u578b\u7ea6\u675f \u6709 numLegs \u5c5e\u6027\n")),(0,a.kt)("p",null,"\u5728 TypeScript \u4f7f\u7528\u6cdb\u578b\u521b\u5efa\u5de5\u5382\u51fd\u6570\u65f6\uff0c\u9700\u8981\u5f15\u7528\u6784\u9020\u51fd\u6570\u7684\u7c7b\u7c7b\u578b\u3002\u6bd4\u5982\uff0c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-ts"},"function create<T>(c: { new (): T }): T {\n  return new c();\n}\n")))}m.isMDXComponent=!0}}]);