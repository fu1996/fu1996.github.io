"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5827],{3905:(e,t,n)=>{n.d(t,{Zo:()=>p,kt:()=>m});var a=n(67294);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,a,r=function(e,t){if(null==e)return{};var n,a,r={},i=Object.keys(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(a=0;a<i.length;a++)n=i[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var d=a.createContext({}),o=function(e){var t=a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},p=function(e){var t=o(e.components);return a.createElement(d.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},k=a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,d=e.parentName,p=s(e,["components","mdxType","originalType","parentName"]),c=o(n),k=r,m=c["".concat(d,".").concat(k)]||c[k]||u[k]||i;return n?a.createElement(m,l(l({ref:t},p),{},{components:n})):a.createElement(m,l({ref:t},p))}));function m(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,l=new Array(i);l[0]=k;var s={};for(var d in t)hasOwnProperty.call(t,d)&&(s[d]=t[d]);s.originalType=e,s[c]="string"==typeof e?e:r,l[1]=s;for(var o=2;o<i;o++)l[o]=n[o];return a.createElement.apply(null,l)}return a.createElement.apply(null,n)}k.displayName="MDXCreateElement"},90059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>l,default:()=>u,frontMatter:()=>i,metadata:()=>s,toc:()=>o});var a=n(87462),r=(n(67294),n(3905));const i={authors:"junkui",title:"06-ts\u4e2d\u7684\u51fd\u6570",categories:["ts"],tags:["ts","\u7591\u95ee"],date:new Date("2021-01-01T13:12:53.000Z")},l="\u4e00\u7b49\u516c\u6c11\u2014\u2014\u51fd\u6570",s={unversionedId:"ts\u4e2d\u7684\u51fd\u6570",id:"ts\u4e2d\u7684\u51fd\u6570",title:"06-ts\u4e2d\u7684\u51fd\u6570",description:"\u4e00\u7b49\u516c\u6c11\uff1a\u51fd\u6570\u548c\u5176\u4ed6\u7c7b\u578b\u4e00\u6837\uff0c\u5904\u4e8e\u5e73\u7b49\u5730\u4f4d\uff0c\u53ef\u4ee5\u8d4b\u503c\u7ed9\u5176\u4ed6\u53d8\u91cf\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u53c2\u6570\uff0c\u4f20\u5165\u53e6\u5916\u4e00\u4e2a\u51fd\u6570\uff0c\u6216\u8005\u4f5c\u4e3a\u5176\u4ed6\u51fd\u6570\u7684\u8fd4\u56de\u503c",source:"@site/ts/06-ts\u4e2d\u7684\u51fd\u6570.md",sourceDirName:".",slug:"/ts\u4e2d\u7684\u51fd\u6570",permalink:"/ts/ts\u4e2d\u7684\u51fd\u6570",draft:!1,editUrl:"https://github.com/fu1996/fu1996.github.io/tree/main/ts/06-ts\u4e2d\u7684\u51fd\u6570.md",tags:[{label:"ts",permalink:"/ts/tags/ts"},{label:"\u7591\u95ee",permalink:"/ts/tags/\u7591\u95ee"}],version:"current",lastUpdatedBy:"fjk",lastUpdatedAt:1689401787,formattedLastUpdatedAt:"2023\u5e747\u670815\u65e5",sidebarPosition:6,frontMatter:{authors:"junkui",title:"06-ts\u4e2d\u7684\u51fd\u6570",categories:["ts"],tags:["ts","\u7591\u95ee"],date:"2021-01-01T13:12:53.000Z"},sidebar:"tutorialSidebar",previous:{title:"05-ts\u4e2d\u7684\u6cdb\u578b",permalink:"/ts/ts\u4e2d\u7684\u6cdb\u578b"},next:{title:"07-ts\u4e2d\u7684\u679a\u4e3e\u7c7b\u578b",permalink:"/ts/ts\u4e2d\u7684\u679a\u4e3e\u7c7b\u578b"}},d={},o=[{value:"1.TS \u4e2d\u7684\u51fd\u6570",id:"1ts-\u4e2d\u7684\u51fd\u6570",level:2},{value:"2.\u51fd\u6570\u7c7b\u578b",id:"2\u51fd\u6570\u7c7b\u578b",level:2},{value:"\u51fd\u6570\u7684\u7c7b\u578b\u63a8\u65ad",id:"\u51fd\u6570\u7684\u7c7b\u578b\u63a8\u65ad",level:3},{value:"\u5b8c\u6574\u51fd\u6570\u7c7b\u578b",id:"\u5b8c\u6574\u51fd\u6570\u7c7b\u578b",level:3},{value:"3\uff0c\u53ef\u9009\u53c2\u6570\u548c\u9ed8\u8ba4\u53c2\u6570",id:"3\u53ef\u9009\u53c2\u6570\u548c\u9ed8\u8ba4\u53c2\u6570",level:2},{value:"\u51fd\u6570\u4f20\u53c2\u7684\u89c4\u5219",id:"\u51fd\u6570\u4f20\u53c2\u7684\u89c4\u5219",level:3},{value:"\u53ef\u9009\u53c2\u6570 <code>?</code>",id:"\u53ef\u9009\u53c2\u6570-",level:3},{value:"\u9ed8\u8ba4\u503c",id:"\u9ed8\u8ba4\u503c",level:3},{value:"\u9ed8\u8ba4\u503c\u7684\u53c2\u6570\u7684\u4f4d\u7f6e",id:"\u9ed8\u8ba4\u503c\u7684\u53c2\u6570\u7684\u4f4d\u7f6e",level:3},{value:"4.\u5269\u4f59\u53c2\u6570 <code>...</code>",id:"4\u5269\u4f59\u53c2\u6570-",level:2},{value:"5.<code>this</code>JS \u4e2d\u7684\u6210\u5e74\u793c",id:"5thisjs-\u4e2d\u7684\u6210\u5e74\u793c",level:2},{value:"this \u53c2\u6570",id:"this-\u53c2\u6570",level:3},{value:"<code>this</code>\u53c2\u6570\u5728\u56de\u8c03\u51fd\u6570\u91cc \u3010\u7591\u95ee\u3011",id:"this\u53c2\u6570\u5728\u56de\u8c03\u51fd\u6570\u91cc-\u7591\u95ee",level:3},{value:"6.\u51fd\u6570\u7684\u91cd\u8f7d\u3010Java \u4e2d\u4e5f\u6709\u91cd\u8f7d\u3011",id:"6\u51fd\u6570\u7684\u91cd\u8f7djava-\u4e2d\u4e5f\u6709\u91cd\u8f7d",level:2}],p={toc:o},c="wrapper";function u(e){let{components:t,...i}=e;return(0,r.kt)(c,(0,a.Z)({},p,i,{components:t,mdxType:"MDXLayout"}),(0,r.kt)("h1",{id:"\u4e00\u7b49\u516c\u6c11\u51fd\u6570"},"\u4e00\u7b49\u516c\u6c11\u2014\u2014\u51fd\u6570"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u4e00\u7b49\u516c\u6c11\uff1a"),"\u51fd\u6570\u548c\u5176\u4ed6\u7c7b\u578b\u4e00\u6837\uff0c\u5904\u4e8e\u5e73\u7b49\u5730\u4f4d\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"\u53ef\u4ee5\u8d4b\u503c\u7ed9\u5176\u4ed6\u53d8\u91cf\uff0c\u4e5f\u53ef\u4ee5\u4f5c\u4e3a\u53c2\u6570\uff0c\u4f20\u5165\u53e6\u5916\u4e00\u4e2a\u51fd\u6570\uff0c\u6216\u8005\u4f5c\u4e3a\u5176\u4ed6\u51fd\u6570\u7684\u8fd4\u56de\u503c")),(0,r.kt)("h2",{id:"1ts-\u4e2d\u7684\u51fd\u6570"},"1.TS \u4e2d\u7684\u51fd\u6570"),(0,r.kt)("p",null,"\u4e5f\u662f\u53ef\u4ee5\u521b\u5efa",(0,r.kt)("inlineCode",{parentName:"p"},"\u5177\u540d\u51fd\u6570"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"\u533f\u540d\u51fd\u6570"),"\u4e24\u90e8\u5206\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"// \u6709\u540d\u5b57\u7684\u51fd\u6570\nfunction namedFunc(x: string, y: string) {\n  return x + y;\n}\n\n// \u533f\u540d\u51fd\u6570 \u8d4b\u503c\u7ed9\u5176\u4ed6\u53d8\u91cf\nconst noNameFunc = function (x: string, y: string): string {\n  return x + y;\n};\n// \u7bad\u5934\u51fd\u6570\u7684\nconst arrowFunc = (x: string, y: number) => y + x;\n")),(0,r.kt)("h2",{id:"2\u51fd\u6570\u7c7b\u578b"},"2.\u51fd\u6570\u7c7b\u578b"),(0,r.kt)("h3",{id:"\u51fd\u6570\u7684\u7c7b\u578b\u63a8\u65ad"},"\u51fd\u6570\u7684\u7c7b\u578b\u63a8\u65ad"),(0,r.kt)("p",null,"\u5f53\u4f20\u5165\u7684\u51fd\u6570\u53c2\u6570\u6bcf\u4e2a\u90fd\u5177\u6709\u7c7b\u578b\u7684\u65f6\u5019\uff0c\u67d0\u4e9b\u65f6\u5019\u53ef\u4ee5\u4e0d\u6307\u5b9a\u8fd4\u56de\u503c\u7c7b\u578b\uff0c\u56e0\u4e3a ts \u4f1a\u6839\u636e\u8bed\u53e5\u81ea\u52a8\u63a8\u65ad\u51fa\u8fd4\u56de\u503c\u7684\u7c7b\u578b\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"const arrowFunc = (x: string, y: number) => y + x;\n")),(0,r.kt)("h3",{id:"\u5b8c\u6574\u51fd\u6570\u7c7b\u578b"},"\u5b8c\u6574\u51fd\u6570\u7c7b\u578b"),(0,r.kt)("p",null,"\u5199\u5168\u53c2\u6570\u7c7b\u578b\u548c\u8fd4\u56de\u503c\u7c7b\u578b"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},"//\u5b8c\u6574\u51fd\u6570\u7684\u4e24\u90e8\u5206\uff1a \u53c2\u6570\u7c7b\u578b \u548c\u8fd4\u56de\u503c\u7c7b\u578b\nconst fullFunc: (x: number, y: number) => number = (x, y) => x + y;\n\n// \u53c2\u6570\u7c7b\u578b\u7684 \u540d\u5b57\u53ea\u662f\u4e3a\u4e86\u589e\u52a0\u53ef\u8bfb\u6027\n// \u53ea\u8981\u53c2\u6570\u7c7b\u578b\u662f\u5339\u914d\u7684\uff0c\u90a3\u4e48\u5c31\u8ba4\u4e3a\u5b83\u662f\u6709\u6548\u7684\u51fd\u6570\u7c7b\u578b\uff0c\u800c\u4e0d\u5728\u4e4e\u53c2\u6570\u540d\u662f\u5426\u6b63\u786e\u3002\nconst easyReadFunc: (baseValue: number, increment: number) => number =\n  function (x, y): number {\n    return x + y;\n  };\n")),(0,r.kt)("h2",{id:"3\u53ef\u9009\u53c2\u6570\u548c\u9ed8\u8ba4\u53c2\u6570"},"3\uff0c\u53ef\u9009\u53c2\u6570\u548c\u9ed8\u8ba4\u53c2\u6570"),(0,r.kt)("h3",{id:"\u51fd\u6570\u4f20\u53c2\u7684\u89c4\u5219"},"\u51fd\u6570\u4f20\u53c2\u7684\u89c4\u5219"),(0,r.kt)("p",null,"ts \u4e2d\u7684\u6bcf\u4e2a\u51fd\u6570\u90fd\u662f\u5fc5\u987b\u7684\uff0c\u4e0d\u80fd\u4f20\u9012",(0,r.kt)("inlineCode",{parentName:"p"},"null"),"\u548c",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\u4f5c\u4e3a\u53c2\u6570\uff0c\u7f16\u8bd1\u5668\u4f1a\u68c0\u67e5\u6bcf\u4e2a\u53c2\u6570\u662f\u5426\u90fd\u4f20\u5165\u4e86\u503c\uff0c\u8fd8\u4f1a\u5047\u8bbe\u53ea\u6709\u8fd9\u4e9b\u53c2\u6570\u88ab\u4f20\u9012\u8fdb\u51fd\u6570\uff0c\u603b\u7684\u6765\u8bf4\uff0c\u4f20\u9012\u7ed9\u4e00\u4e2a\u51fd\u6570\u7684\u53c2\u6570\u4e2a\u6570\u5fc5\u987b\u548c\u51fd\u6570\u671f\u671b\u53c2\u6570\u7684\u4e2a\u6570\u4e00\u81f4\u3010",(0,r.kt)("inlineCode",{parentName:"p"},"\u591a\u4e86\u5403\u4e0d\u4e0b\uff0c\u5c11\u4e86\u4e0d\u591f\u5403"),"\u3011"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'function buildName(firstName: string, lastName: string) {\n  return firstName + " " + lastName;\n}\n\nlet result1 = buildName("Bob"); // error, too few parameters\nlet result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters\nlet result3 = buildName("Bob", "Adams"); // ah, just right\n')),(0,r.kt)("h3",{id:"\u53ef\u9009\u53c2\u6570-"},"\u53ef\u9009\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"h3"},"?")),(0,r.kt)("p",null,"\u548c\u4e4b\u524d\u6587\u7ae0\u7684\u89c4\u5219\u4e00\u6837\uff0c\u589e\u52a0",(0,r.kt)("inlineCode",{parentName:"p"},"?"),"\u4ee3\u8868\u8be5\u53c2\u6570\u4e0d\u662f\u5fc5\u4f20\u7684\u3002",(0,r.kt)("inlineCode",{parentName:"p"},"lastName"),"\u53d8\u4e3a\u53ef\u9009\u7684"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'function buildName(firstName: string, lastName?: string) {\n  if (lastName) return firstName + " " + lastName;\n  else return firstName;\n}\n\nlet result1 = buildName("Bob"); // works correctly now\nlet result2 = buildName("Bob", "Adams", "Sr."); // error, too many parameters\nlet result3 = buildName("Bob", "Adams"); // ah, just right\n')),(0,r.kt)("h3",{id:"\u9ed8\u8ba4\u503c"},"\u9ed8\u8ba4\u503c"),(0,r.kt)("p",null,"\u5f53\u7528\u6237\u6ca1\u6709\u4f20\u9012\u8fd9\u4e2a\u53c2\u6570\u6216\u8005\u8fd9\u4e2a\u53c2\u6570\u7684\u503c\u662f undefined \u7684\u65f6\u5019\uff0c\u51fd\u6570\u4f1a\u4f7f\u7528\u8be5\u9ed8\u8ba4\u503c\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'function buildName(firstName: string, lastName = "Smith") {\n  return firstName + " " + lastName;\n}\n\nlet result1 = buildName("Bob"); // works correctly now, returns "Bob Smith"\nlet result2 = buildName("Bob", undefined); // still works, also returns "Bob Smith"\nlet result3 = buildName("Bob", "Adams", "Sr."); // error, too many parameters\nlet result4 = buildName("Bob", "Adams"); // ah, just right\n')),(0,r.kt)("h3",{id:"\u9ed8\u8ba4\u503c\u7684\u53c2\u6570\u7684\u4f4d\u7f6e"},"\u9ed8\u8ba4\u503c\u7684\u53c2\u6570\u7684\u4f4d\u7f6e"),(0,r.kt)("p",null,"\u5e26\u9ed8\u8ba4\u503c\u7684\u53c2\u6570\u4e0d\u9700\u8981\u653e\u5728\u5fc5\u987b\u53c2\u6570\u7684\u540e\u9762\u3002 \u5982\u679c\u5e26\u9ed8\u8ba4\u503c\u7684\u53c2\u6570\u51fa\u73b0\u5728\u5fc5\u987b\u53c2\u6570\u524d\u9762\uff0c\u7528\u6237\u5fc5\u987b\u660e\u786e\u7684\u4f20\u5165 ",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\u503c\u6765\u83b7\u5f97\u9ed8\u8ba4\u503c"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'function buildName(firstName = "Will", lastName: string) {\n  return firstName + " " + lastName;\n}\n\nlet result4 = buildName(undefined, "Adams"); // okay and returns "Will Adams"\n')),(0,r.kt)("h2",{id:"4\u5269\u4f59\u53c2\u6570-"},"4.\u5269\u4f59\u53c2\u6570 ",(0,r.kt)("inlineCode",{parentName:"h2"},"...")),(0,r.kt)("p",null,"\u5728 JS \u4e2d\u53ef\u4ee5\u4f7f\u7528\u5173\u952e\u5b57",(0,r.kt)("inlineCode",{parentName:"p"},"arguments"),"\u6765\u8bbf\u95ee\u6240\u6709\u4f20\u5165\u7684\u53c2\u6570\uff0c\u4e5f\u53ef\u4ee5\u4f7f\u7528\u5269\u4f59\u53c2\u6570\u7b26\uff0c\u6765\u63a5\u53d7\u591a\u4e2a\u53c2\u6570\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'function buildName(firstName: string, ...restOfName: string[]) {\n  console.log("\u5269\u4f59\u53c2\u6570", restOfName);\n  console.log("\u6240\u6709\u7684\u53c2\u6570", arguments);\n  console.log("\u5269\u4f59\u53c2\u6570\u7684\u7c7b\u578b", typeof restOfName);\n  console.log("\u5269\u4f59\u53c2\u6570\u7684\u7c7b\u578b", typeof arguments);\n\n  return firstName + " " + restOfName.join(" ");\n}\n\nlet employeeName = buildName("Joseph", "Samuel", "Lucas", "MacKinzie");\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210101175831817",src:n(79069).Z,width:"1039",height:"972"})),(0,r.kt)("h2",{id:"5thisjs-\u4e2d\u7684\u6210\u5e74\u793c"},"5.",(0,r.kt)("inlineCode",{parentName:"h2"},"this"),"JS \u4e2d\u7684\u6210\u5e74\u793c"),(0,r.kt)("p",null,"JS \u4e2d",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u53ea\u6709\u5728\u51fd\u6570\u88ab\u8c03\u7528\u7684\u65f6\u5019\u624d\u4f1a\u6307\u5b9a\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'var deck = {\n  suits: ["hearts", "spades", "clubs", "diamonds"],\n  cards: Array(52),\n  createCardPicker: function () {\n    return function () {\n      var pickedCard = Math.floor(Math.random() * 52);\n      var pickedSuit = Math.floor(pickedCard / 13);\n      return { this: this };\n    };\n  },\n};\n// \u89e3\u6790\u5f00\u59cb\uff1a deck.createCardPicker \u662f\u4e00\u4e2a\u51fd\u6570 \u8fd4\u56de\u4e86\u4e00\u4e2a\u51fd\u6570 \u6240\u4ee5\u8fd9\u4e2a\u8bdd\u89e3\u6790\u4ee5\u540e\u5c31\u662f\nvar cardPicker = deck.createCardPicker();\n// \u89e3\u6790\u7b2c\u4e00\u6b65  \u73b0\u5728\u7684 cardPicker \u6307\u5411\u4e86\u4e00\u4e2a\u51fd\u6570\n// let cardPicker =function() {\n//             let pickedCard = Math.floor(Math.random() * 52);\n//             let pickedSuit = Math.floor(pickedCard / 13);\n//             return {suit: this.suits[pickedSuit], card: pickedCard % 13};\n// };\n// \u6b64\u5904\u5728\u8c03\u7528\u8fd9\u4e2a\u51fd\u6570\nvar pickedCard = cardPicker();\n// let pickedCard = Math.floor(Math.random() * 52);\n// let pickedSuit = Math.floor(pickedCard / 13);\n// \u628a\u53d8\u91cf\u653e\u8fdb\u53bb\u4ee5\u540e \u5c31\u53d8\u6210 \u4e00\u4e2a\u5bf9\u8c61 \u53d1\u73b0\u5bf9\u8c61\u4e2d\u542b\u6709this \u8fd9\u4e2athis \u662fwindow\u5bf9\u8c61\n// \u56e0\u4e3a\u8fd9\u4e2a\u65b9\u6cd5\u4e0d\u5c5e\u4e8e\u67d0\u4e2a\u5bf9\u8c61\u7684\u8c03\u7528 \u65e0\u5948\u53ea\u80fd\u5728\u975e\u4e25\u683c\u6a21\u5f0f\u4e0b\u6307\u5411window\n// \u4e25\u683c\u6a21\u5f0f\u4e0b\u5c31\u662f undefined\n// let pickedCard = {suit: this.suits[Math.floor( Math.floor(Math.random() * 52) / 13)], card:  Math.floor(Math.random() * 52) % 13};\nconsole.log("\u67e5\u770bthis\u662f\u4ec0\u4e48", pickedCard["this"]);\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210101181911340",src:n(91188).Z,width:"931",height:"446"})),(0,r.kt)("p",null,"\u67e5\u627e this \u7684\u8c03\u7528\u8005 \u9700\u8981\u4e00\u5c42\u4e00\u5c42\u7684\u62e8\u5f00\u8ff7\u96fe\uff0c\u624d\u80fd\u627e\u5230\u771f\u6b63\u7684\u8c03\u7528\u8005\u3002"),(0,r.kt)("p",null,(0,r.kt)("strong",{parentName:"p"},"\u6ce8\u610f"),"\uff1a\u5728\u4e25\u683c\u6a21\u5f0f\u4e0b\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\u800c\u4e0d\u662f",(0,r.kt)("inlineCode",{parentName:"p"},"window"),"\uff09\u3002"),(0,r.kt)("p",null,"\u4e3a\u4e86\u89e3\u51b3\u8fd9\u4e2a\u95ee\u9898\uff0c\u6211\u4eec\u53ef\u4ee5\u5728\u51fd\u6570\u88ab\u8fd4\u56de\u65f6\u5c31\u7ed1\u597d\u6b63\u786e\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u3002 \u8fd9\u6837\u7684\u8bdd\uff0c\u65e0\u8bba\u4e4b\u540e\u600e\u4e48\u4f7f\u7528\u5b83\uff0c\u90fd\u4f1a\u5f15\u7528\u7ed1\u5b9a\u7684\u2018deck\u2019\u5bf9\u8c61\u3002 \u6211\u4eec\u9700\u8981\u6539\u53d8\u51fd\u6570\u8868\u8fbe\u5f0f\u6765\u4f7f\u7528 ECMAScript 6 \u7bad\u5934\u8bed\u6cd5\u3002",(0,r.kt)("inlineCode",{parentName:"p"}," \u7bad\u5934\u51fd\u6570\u80fd\u4fdd\u5b58\u51fd\u6570\u521b\u5efa\u65f6\u7684 this\u503c\uff0c\u800c\u4e0d\u662f\u8c03\u7528\u65f6\u7684\u503c"),"\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-js"},'let deck = {\n  suits: ["hearts", "spades", "clubs", "diamonds"],\n  cards: Array(52),\n  createCardPicker: function () {\n    // NOTE: the line below is now an arrow function, allowing us to capture \'this\' right here\n    return () => {\n      let pickedCard = Math.floor(Math.random() * 52);\n      let pickedSuit = Math.floor(pickedCard / 13);\n\n      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };\n    };\n  },\n};\n\nlet cardPicker = deck.createCardPicker();\nlet pickedCard = cardPicker();\n\nalert("card: " + pickedCard.card + " of " + pickedCard.suit);\n')),(0,r.kt)("p",null,(0,r.kt)("img",{alt:"image-20210101182345055",src:n(37219).Z,width:"1227",height:"1442"})),(0,r.kt)("p",null,"\u6b64\u65f6\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u867d\u7136\u6307\u5411\u4e86 deck\uff0c\u4f46\u662f\u6b64\u65f6\u7684 this \u6ca1\u6709\u4efb\u4f55\u7684\u7c7b\u578b\u6821\u9a8c\uff0c\u8131\u79bb\u4e86 ts \u7684\u7c7b\u578b\u638c\u63a7\u3002\u6240\u4ee5\u4f60\u9700\u8981\u624b\u52a8\u7684\u5bf9",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u53d8\u6210\u4e00\u4e2a\u53c2\u6570\u4f20\u5165\u51fd\u6570\uff0c\u56e0\u6b64\u5c31\u53ef\u4ee5\u83b7\u53d6\u5230\u7c7b\u578b\u6821\u9a8c\u3002\u9e21\u8d3c ts\uff0c\u7ba1\u7684\u771f\u5bbd\u54e6\u3002"),(0,r.kt)("h3",{id:"this-\u53c2\u6570"},"this \u53c2\u6570"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'interface Card {\n  suit: string;\n  card: number;\n}\n\ninterface Deck {\n  suits: string[];\n  cards: Array<number>;\n  // \u624b\u52a8\u4f20\u5165\u4e86this \u5bf9\u8c61 \u5e76\u4e14\u7c7b\u578b\u4e3aDeck\n  createCardPicker(this: Deck): () => Card;\n}\n\nlet deck: Deck = {\n  suits: ["1", "2"],\n  cards: Array[52],\n  createCardPicker: function (this) {\n    return () => {\n      let pickedCard = Math.floor(Math.random() * 52);\n      let pickedSuit = Math.floor(pickedCard / 13);\n\n      return { suit: this.suits[pickedSuit], card: pickedCard % 13 };\n    };\n  },\n};\n\nlet cardPicker = deck.createCardPicker();\nlet pickedCard = cardPicker();\n\nalert("card: " + pickedCard.card + " of " + pickedCard.suit);\n')),(0,r.kt)("h3",{id:"this\u53c2\u6570\u5728\u56de\u8c03\u51fd\u6570\u91cc-\u7591\u95ee"},(0,r.kt)("inlineCode",{parentName:"h3"},"this"),"\u53c2\u6570\u5728\u56de\u8c03\u51fd\u6570\u91cc \u3010\u7591\u95ee\u3011"),(0,r.kt)("p",null,"\u4f60\u53ef\u4ee5\u4e5f\u770b\u5230\u8fc7\u5728\u56de\u8c03\u51fd\u6570\u91cc\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u62a5\u9519\uff0c\u5f53\u4f60\u5c06\u4e00\u4e2a\u51fd\u6570\u4f20\u9012\u5230\u67d0\u4e2a\u5e93\u51fd\u6570\u91cc\u7a0d\u540e\u4f1a\u88ab\u8c03\u7528\u65f6\u3002 \u56e0\u4e3a\u5f53\u56de\u8c03\u88ab\u8c03\u7528\u7684\u65f6\u5019\uff0c\u5b83\u4eec\u4f1a\u88ab\u5f53\u6210\u4e00\u4e2a\u666e\u901a\u51fd\u6570\u8c03\u7528\uff0c ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u5c06\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"undefined"),"\u3002 \u7a0d\u505a\u6539\u52a8\uff0c\u4f60\u5c31\u53ef\u4ee5\u901a\u8fc7 ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u53c2\u6570\u6765\u907f\u514d\u9519\u8bef\u3002 \u9996\u5148\uff0c\u5e93\u51fd\u6570\u7684\u4f5c\u8005\u8981\u6307\u5b9a ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u7684\u7c7b\u578b\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"interface UIElement {\n  addClickListener(onclick: (this: void, e: Event) => void): void;\n}\n")),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"this: void")," means that ",(0,r.kt)("inlineCode",{parentName:"p"},"addClickListener")," expects ",(0,r.kt)("inlineCode",{parentName:"p"},"onclick")," to be a function that does not require a ",(0,r.kt)("inlineCode",{parentName:"p"},"this")," type. Second, annotate your calling code with ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),":"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Handler {\n  info: string;\n  onClickBad(this: Handler, e: Event) {\n    // oops, used this here. using this callback would crash at runtime\n    this.info = e.message;\n  }\n}\nlet h = new Handler();\nuiElement.addClickListener(h.onClickBad); // error!\n")),(0,r.kt)("p",null,"\u6307\u5b9a\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u7c7b\u578b\u540e\uff0c\u4f60\u663e\u5f0f\u58f0\u660e",(0,r.kt)("inlineCode",{parentName:"p"},"onClickBad"),"\u5fc5\u987b\u5728",(0,r.kt)("inlineCode",{parentName:"p"},"Handler"),"\u7684\u5b9e\u4f8b\u4e0a\u8c03\u7528\u3002 \u7136\u540e TypeScript \u4f1a\u68c0\u6d4b\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"addClickListener"),"\u8981\u6c42\u51fd\u6570\u5e26\u6709",(0,r.kt)("inlineCode",{parentName:"p"},"this: void"),"\u3002 \u6539\u53d8 ",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u7c7b\u578b\u6765\u4fee\u590d\u8fd9\u4e2a\u9519\u8bef\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Handler {\n  info: string;\n  onClickGood(this: void, e: Event) {\n    // can't use this here because it's of type void!\n    console.log(\"clicked!\");\n  }\n}\nlet h = new Handler();\nuiElement.addClickListener(h.onClickGood);\n")),(0,r.kt)("p",null,"\u56e0\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"onClickGood"),"\u6307\u5b9a\u4e86",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\u7c7b\u578b\u4e3a",(0,r.kt)("inlineCode",{parentName:"p"},"void"),"\uff0c\u56e0\u6b64\u4f20\u9012",(0,r.kt)("inlineCode",{parentName:"p"},"addClickListener"),"\u662f\u5408\u6cd5\u7684\u3002 \u5f53\u7136\u4e86\uff0c\u8fd9\u4e5f\u610f\u5473\u7740\u4e0d\u80fd\u4f7f\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"this.info"),". \u5982\u679c\u4f60\u4e24\u8005\u90fd\u60f3\u8981\uff0c\u4f60\u4e0d\u5f97\u4e0d\u4f7f\u7528\u7bad\u5934\u51fd\u6570\u4e86\uff1a"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-ts"},"class Handler {\n  info: string;\n  onClickGood = (e: Event) => {\n    this.info = e.message;\n  };\n}\n")),(0,r.kt)("p",null,"\u8fd9\u662f\u53ef\u884c\u7684\u56e0\u4e3a\u7bad\u5934\u51fd\u6570\u4e0d\u4f1a\u6355\u83b7",(0,r.kt)("inlineCode",{parentName:"p"},"this"),"\uff0c\u6240\u4ee5\u4f60\u603b\u662f\u53ef\u4ee5\u628a\u5b83\u4eec\u4f20\u7ed9\u671f\u671b",(0,r.kt)("inlineCode",{parentName:"p"},"this: void"),"\u7684\u51fd\u6570\u3002 \u7f3a\u70b9\u662f\u6bcf\u4e2a ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler"),"\u5bf9\u8c61\u90fd\u4f1a\u521b\u5efa\u4e00\u4e2a\u7bad\u5934\u51fd\u6570\u3002 \u53e6\u4e00\u65b9\u9762\uff0c\u65b9\u6cd5\u53ea\u4f1a\u88ab\u521b\u5efa\u4e00\u6b21\uff0c\u6dfb\u52a0\u5230 ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler"),"\u7684\u539f\u578b\u94fe\u4e0a\u3002 \u5b83\u4eec\u5728\u4e0d\u540c ",(0,r.kt)("inlineCode",{parentName:"p"},"Handler"),"\u5bf9\u8c61\u95f4\u662f\u5171\u4eab\u7684\u3002"),(0,r.kt)("h2",{id:"6\u51fd\u6570\u7684\u91cd\u8f7djava-\u4e2d\u4e5f\u6709\u91cd\u8f7d"},"6.\u51fd\u6570\u7684\u91cd\u8f7d\u3010Java \u4e2d\u4e5f\u6709\u91cd\u8f7d\u3011"),(0,r.kt)("p",null,"\u91cd\u8f7d\uff1a\u5b66\u8fc7 Java \u7684\u90fd\u77e5\u9053\uff0c\u5728 Java \u4e2d\u867d\u7136\u662f\u7edf\u4e00\u51fd\u6570\u540d\u79f0\uff0c\u4f46\u662f\u4f1a\u6839\u636e\u4f20\u5165\u53c2\u6570\u7684\u7c7b\u578b\u7684\u4e0d\u540c\uff0c\u9700\u8981\u8c03\u7528\u4e0d\u540c\u7684\u4e1a\u52a1\u903b\u8f91\u3002"),(0,r.kt)("p",null,"\u770b\u770b js \u4e2d\u7684\u91cd\u8f7d\uff1a\u3010\u548c Java \u6709\u597d\u5927\u7684\u5dee\u522b\u5462\u3011"),(0,r.kt)("p",null,"\u8d77\u56e0\uff1aJavaScript \u672c\u8eab\u662f\u4e2a\u52a8\u6001\u8bed\u8a00\u3002 JavaScript \u91cc\u51fd\u6570\u6839\u636e\u4f20\u5165\u4e0d\u540c\u7684\u53c2\u6570\u800c\u8fd4\u56de\u4e0d\u540c\u7c7b\u578b\u7684\u6570\u636e\u662f\u5f88\u5e38\u89c1\u7684\u3002"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'let suitsDemo = ["header", "spades"];\n\nfunction pickCard(x): any {\n  if (typeof x == "object") {\n    let pickedCard = Math.floor(Math.random() * x.length);\n    return pickedCard;\n  } else if (typeof x == "number") {\n    let pickedSuit = Math.floor(x / 13);\n    return { suit: suitsDemo[pickedSuit], card: x % 13 };\n  }\n}\n')),(0,r.kt)("p",null,"\u6b64\u65f6\u8fd8\u6ca1\u6709\u91cd\u8f7d\u53d1\u751f\uff0c\u8fd9\u4e2a",(0,r.kt)("inlineCode",{parentName:"p"},"pickCard"),"\u51fd\u6570\u4f1a\u6839\u636e\u53c2\u6570\u7684\u7c7b\u578b\u7684\u4e0d\u540c\uff0c\u6765\u8fd4\u56de\u4e0d\u540c\u7c7b\u578b\u7684\u503c\u3002"),(0,r.kt)("p",null,"\u4f7f\u7528 ts \u4e2d\u7684\u91cd\u8f7d"),(0,r.kt)("pre",null,(0,r.kt)("code",{parentName:"pre",className:"language-typescript"},'let suits = ["hearts", "spades", "clubs", "diamonds"];\n// \u91cd\u8f7d\u68c0\u67e51\nfunction pickCard(x: { suit: string; card: number }[]): number;\n// \u91cd\u8f7d\u68c0\u67e52\nfunction pickCard(x: number): { suit: string; card: number };\n// \u5b9e\u9645\u7684\u65b9\u6cd5\uff1a\u88ab\u68c0\u67e5\u7684\u65b9\u6cd5\nfunction pickCard(x): any {\n  if (typeof x == "object") {\n    let pickedCard = Math.floor(Math.random() * x.length);\n    return pickedCard;\n  } else if (typeof x == "number") {\n    let pickedSuit = Math.floor(x / 13);\n    return { suit: suits[pickedSuit], card: x % 13 };\n  }\n}\n\nlet myDeck = [\n  { suit: "diamonds", card: 2 },\n  { suit: "spades", card: 10 },\n  { suit: "hearts", card: 4 },\n];\nlet pickedCard1 = myDeck[pickCard(myDeck)];\nalert("card: " + pickedCard1.card + " of " + pickedCard1.suit);\n\nlet pickedCard2 = pickCard(15);\nalert("card: " + pickedCard2.card + " of " + pickedCard2.suit);\n')),(0,r.kt)("p",null,"\u8fd9\u6837\u6539\u53d8\u540e\uff0c\u91cd\u8f7d\u7684",(0,r.kt)("inlineCode",{parentName:"p"},"pickCard"),"\u51fd\u6570\u5728\u8c03\u7528\u7684\u65f6\u5019\u4f1a\u8fdb\u884c\u6b63\u786e\u7684\u7c7b\u578b\u68c0\u67e5\u3002"),(0,r.kt)("p",null,(0,r.kt)("inlineCode",{parentName:"p"},"\u4e3a\u4e86\u8ba9\u7f16\u8bd1\u5668\u80fd\u591f\u9009\u62e9\u6b63\u786e\u7684\u68c0\u67e5\u7c7b\u578b\uff0c\u5b83\u4e0eJavaScript\u91cc\u7684\u5904\u7406\u6d41\u7a0b\u76f8\u4f3c\u3002 \u5b83\u67e5\u627e\u91cd\u8f7d\u5217\u8868\uff0c\u5c1d\u8bd5\u4f7f\u7528\u7b2c\u4e00\u4e2a\u91cd\u8f7d\u5b9a\u4e49\u3002 \u5982\u679c\u5339\u914d\u7684\u8bdd\u5c31\u4f7f\u7528\u8fd9\u4e2a\u3002 \u56e0\u6b64\uff0c\u5728\u5b9a\u4e49\u91cd\u8f7d\u7684\u65f6\u5019\uff0c\u4e00\u5b9a\u8981\u628a\u6700\u7cbe\u786e\u7684\u5b9a\u4e49\u653e\u5728\u6700\u524d\u9762\u3002")),(0,r.kt)("p",null,"\u6ce8\u610f\uff0c",(0,r.kt)("inlineCode",{parentName:"p"},"function pickCard(x): any"),"\u5e76\u4e0d\u662f\u91cd\u8f7d\u5217\u8868\u7684\u4e00\u90e8\u5206\uff0c\u56e0\u6b64\u8fd9\u91cc\u53ea\u6709\u4e24\u4e2a\u91cd\u8f7d\uff1a\u4e00\u4e2a\u662f\u63a5\u6536\u5bf9\u8c61\u53e6\u4e00\u4e2a\u63a5\u6536\u6570\u5b57\u3002 \u4ee5\u5176\u5b83\u53c2\u6570\u8c03\u7528 ",(0,r.kt)("inlineCode",{parentName:"p"},"pickCard"),"\u4f1a\u4ea7\u751f\u9519\u8bef\u3002"))}u.isMDXComponent=!0},79069:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20210101175831817-ddeedc3c87f5447f414d65a071fcf7a8.png"},91188:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20210101181911340-fb7f77ad27f439db488ff9c35a7c7fec.png"},37219:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20210101182345055-51b63eaaf619797c01ef927d9be6d8b8.png"}}]);