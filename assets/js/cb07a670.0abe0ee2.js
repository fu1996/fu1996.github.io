"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[4163],{3905:(e,t,n)=>{n.d(t,{Zo:()=>c,kt:()=>m});var a=n(67294);function l(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function r(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){l(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function i(e,t){if(null==e)return{};var n,a,l=function(e,t){if(null==e)return{};var n,a,l={},o=Object.keys(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||(l[n]=e[n]);return l}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(a=0;a<o.length;a++)n=o[a],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(l[n]=e[n])}return l}var s=a.createContext({}),p=function(e){var t=a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):r(r({},t),e)),n},c=function(e){var t=p(e.components);return a.createElement(s.Provider,{value:t},e.children)},u="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},d=a.forwardRef((function(e,t){var n=e.components,l=e.mdxType,o=e.originalType,s=e.parentName,c=i(e,["components","mdxType","originalType","parentName"]),u=p(n),d=l,m=u["".concat(s,".").concat(d)]||u[d]||k[d]||o;return n?a.createElement(m,r(r({ref:t},c),{},{components:n})):a.createElement(m,r({ref:t},c))}));function m(e,t){var n=arguments,l=t&&t.mdxType;if("string"==typeof e||l){var o=n.length,r=new Array(o);r[0]=d;var i={};for(var s in t)hasOwnProperty.call(t,s)&&(i[s]=t[s]);i.originalType=e,i[u]="string"==typeof e?e:l,r[1]=i;for(var p=2;p<o;p++)r[p]=n[p];return a.createElement.apply(null,r)}return a.createElement.apply(null,n)}d.displayName="MDXCreateElement"},12915:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>r,default:()=>k,frontMatter:()=>o,metadata:()=>i,toc:()=>p});var a=n(87462),l=(n(67294),n(3905));const o={authors:"junkui",title:"js\u7684\u6613\u6df7\u70b9",categories:["js","work"],tags:["js","work","\u524d\u7aef"],date:new Date("2021-02-23T21:03:57.000Z")},r="\u6613\u6df7\u70b9",i={permalink:"/blog/js\u7684\u6613\u6df7\u70b9",source:"@site/blog/js\u7684\u6613\u6df7\u70b9.md",title:"js\u7684\u6613\u6df7\u70b9",description:"1.\u51fd\u6570\u58f0\u660e\u63d0\u524d\u548c\u53d8\u91cf\u63d0\u5347 \u3010let const \u548c var\u3011",date:"2021-02-23T21:03:57.000Z",formattedDate:"2021\u5e742\u670823\u65e5",tags:[{label:"js",permalink:"/blog/tags/js"},{label:"work",permalink:"/blog/tags/work"},{label:"\u524d\u7aef",permalink:"/blog/tags/\u524d\u7aef"}],readingTime:7.695,hasTruncateMarker:!1,authors:[{name:"\u4ed8\u4fca\u594e",title:"\u4e00\u540d\u5728\u5927\u5b66\u4ece\u52a8\u7269\u79d1\u5b66\u4e13\u4e1a\u8f6c\u7801\u519c\u7684\u81ea\u5b66\u8005",url:"https://github.com/fu1996",imageURL:"https://avatars.githubusercontent.com/u/42232973",key:"junkui"}],frontMatter:{authors:"junkui",title:"js\u7684\u6613\u6df7\u70b9",categories:["js","work"],tags:["js","work","\u524d\u7aef"],date:"2021-02-23T21:03:57.000Z"},prevItem:{title:"js\u7684Promise\u4e13\u9898",permalink:"/blog/js\u7684Promise\u4e13\u9898"},nextItem:{title:"Fiddler\u6293\u5305\u5206\u6790\u8c37\u6b4c\u6d4f\u89c8\u5668\u8c03\u7528\u5730\u7406\u4f4d\u7f6e\u9519\u8bef\u539f\u56e0",permalink:"/blog/Fiddler\u6293\u5305\u5206\u6790\u8c37\u6b4c\u6d4f\u89c8\u5668\u8c03\u7528\u5730\u7406\u4f4d\u7f6e\u9519\u8bef\u539f\u56e0"}},s={authorsImageUrls:[void 0]},p=[{value:"1.\u51fd\u6570\u58f0\u660e\u63d0\u524d\u548c\u53d8\u91cf\u63d0\u5347 \u3010let const \u548c var\u3011",id:"1\u51fd\u6570\u58f0\u660e\u63d0\u524d\u548c\u53d8\u91cf\u63d0\u5347-let-const-\u548c-var",level:2},{value:"2.arguments \u7684\u64cd\u4f5c",id:"2arguments-\u7684\u64cd\u4f5c",level:2},{value:"3. for in \u662f\u5426\u53ef\u4ee5\u904d\u5386\u539f\u578b\u4e0a\u7684\u5c5e\u6027 =\u300b \u53ef\u4ee5",id:"3-for-in-\u662f\u5426\u53ef\u4ee5\u904d\u5386\u539f\u578b\u4e0a\u7684\u5c5e\u6027--\u53ef\u4ee5",level:2},{value:"4.\u91cd\u7ed8\u548c\u91cd\u6392\uff0c\u54ea\u4e9b\u5c5e\u6027\u4f1a\u5f15\u8d77\u91cd\u6392\uff1f",id:"4\u91cd\u7ed8\u548c\u91cd\u6392\u54ea\u4e9b\u5c5e\u6027\u4f1a\u5f15\u8d77\u91cd\u6392",level:2},{value:"5.new \u505a\u4e86\u4ec0\u4e48",id:"5new-\u505a\u4e86\u4ec0\u4e48",level:2},{value:"6.js \u4e3a\u4ec0\u4e48\u662f\u5355\u7ebf\u7a0b\u7684",id:"6js-\u4e3a\u4ec0\u4e48\u662f\u5355\u7ebf\u7a0b\u7684",level:2},{value:"7.\u540c\u6b65\u548c\u5f02\u6b65\u7684\u7406\u89e3",id:"7\u540c\u6b65\u548c\u5f02\u6b65\u7684\u7406\u89e3",level:2},{value:"8.Map Set \u548c Symbol",id:"8map-set-\u548c-symbol",level:2},{value:"9.for...in \u548c for...of",id:"9forin-\u548c-forof",level:2},{value:"10.Object.is() \u4e0e\u539f\u6765\u7684\u6bd4\u8f83\u64cd\u4f5c\u7b26\u201c ===\u201d\u3001\u201c ==\u201d\u7684\u533a\u522b\uff1f",id:"10objectis-\u4e0e\u539f\u6765\u7684\u6bd4\u8f83\u64cd\u4f5c\u7b26--\u7684\u533a\u522b",level:2},{value:"11.fetch \u548c Ajax \u6709\u4ec0\u4e48\u4e0d\u540c",id:"11fetch-\u548c-ajax-\u6709\u4ec0\u4e48\u4e0d\u540c",level:2},{value:"12.GET \u548c POST \u7684\u533a\u522b",id:"12get-\u548c-post-\u7684\u533a\u522b",level:2},{value:"13.\u5b58\u50a8\u76f8\u5173\uff08cookie\uff0cweb storage \u548c session\uff09",id:"13\u5b58\u50a8\u76f8\u5173cookieweb-storage-\u548c-session",level:2},{value:"1.cookie \u548c session \u533a\u522b",id:"1cookie-\u548c-session-\u533a\u522b",level:3},{value:"2.\u4ec0\u4e48\u662f Cookie \u9694\u79bb\uff1f\uff08\u6216\u8005\u8bf4\uff1a\u8bf7\u6c42\u8d44\u6e90\u7684\u65f6\u5019\u4e0d\u8981\u8ba9\u5b83\u5e26 cookie \u600e\u4e48\u505a\uff09",id:"2\u4ec0\u4e48\u662f-cookie-\u9694\u79bb\u6216\u8005\u8bf4\u8bf7\u6c42\u8d44\u6e90\u7684\u65f6\u5019\u4e0d\u8981\u8ba9\u5b83\u5e26-cookie-\u600e\u4e48\u505a",level:3},{value:"14.\u9875\u9762\u7f13\u5b58\u539f\u7406",id:"14\u9875\u9762\u7f13\u5b58\u539f\u7406",level:2},{value:"Ajax \u89e3\u51b3\u6d4f\u89c8\u5668\u7f13\u5b58\u95ee\u9898\uff1f",id:"ajax-\u89e3\u51b3\u6d4f\u89c8\u5668\u7f13\u5b58\u95ee\u9898",level:3},{value:"15.xss \u548c csrf",id:"15xss-\u548c-csrf",level:2},{value:"16.git fetch \u662f\u5e72\u561b\u7684",id:"16git-fetch-\u662f\u5e72\u561b\u7684",level:2},{value:"17.\u72b6\u6001\u7801 304 \u662f\u5e72\u561b\u7684 \u5177\u4f53\uff0c405 504 \u53c8\u662f\u5e72\u561b\u7684",id:"17\u72b6\u6001\u7801-304-\u662f\u5e72\u561b\u7684-\u5177\u4f53405-504-\u53c8\u662f\u5e72\u561b\u7684",level:2},{value:"18.\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b",id:"18\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b",level:2},{value:"19.postison \u7684\u51e0\u79cd\u5c5e\u6027\u548c display",id:"19postison-\u7684\u51e0\u79cd\u5c5e\u6027\u548c-display",level:2},{value:"20.\u76d2\u6a21\u578b\u7684\u7406\u89e3",id:"20\u76d2\u6a21\u578b\u7684\u7406\u89e3",level:2},{value:"21.\u539f\u578b\u7ee7\u627f\u7684\u51e0\u79cd\u65b9\u5f0f",id:"21\u539f\u578b\u7ee7\u627f\u7684\u51e0\u79cd\u65b9\u5f0f",level:2},{value:"22.\u4e8b\u4ef6\u59d4\u6258\u539f\u7406",id:"22\u4e8b\u4ef6\u59d4\u6258\u539f\u7406",level:2},{value:"23.\u884c\u5185\u5143\u7d20 \u548c\u5757\u7ea7\u5143\u7d20\u6709\u54ea\u4e9b\uff0c\u53ca\u5176\u533a\u522b\uff1f",id:"23\u884c\u5185\u5143\u7d20-\u548c\u5757\u7ea7\u5143\u7d20\u6709\u54ea\u4e9b\u53ca\u5176\u533a\u522b",level:2},{value:"24.display: none; \u4e0e visibility: hidden; \u7684\u533a\u522b",id:"24display-none-\u4e0e-visibility-hidden-\u7684\u533a\u522b",level:2}],c={toc:p},u="wrapper";function k(e){let{components:t,...o}=e;return(0,l.kt)(u,(0,a.Z)({},c,o,{components:t,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"1\u51fd\u6570\u58f0\u660e\u63d0\u524d\u548c\u53d8\u91cf\u63d0\u5347-let-const-\u548c-var"},"1.\u51fd\u6570\u58f0\u660e\u63d0\u524d\u548c\u53d8\u91cf\u63d0\u5347 \u3010let const \u548c var\u3011"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/echolun/p/7612142.html"},"https://www.cnblogs.com/echolun/p/7612142.html")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u51fd\u6570\u4f1a\u9996\u5148\u88ab\u63d0\u5347\uff0c\u7136\u540e\u624d\u662f\u53d8\u91cf"))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'console.log(a);\nvar a = "\u5b59\u609f\u7a7a";\nfunction a() {\n  console.log("\u5c0f\u94bb\u98ce");\n}\n'))),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u53d8\u91cf\u5df2\u5b58\u5728\u58f0\u660e \u4e8c\u6b21\u58f0\u660e\u4f1a\u88ab\u5ffd\u7565")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("p",{parentName:"li"},"\u4e0a\u9762\u4ee3\u7801\u7b49\u540c\u4e8e\uff1a")),(0,l.kt)("li",{parentName:"ul"},(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},'function a() {\n  console.log("\u5c0f\u94bb\u98ce");\n}\nvar a; //\u7531\u4e8e\u4e0a\u9762\u51fd\u6570\u5df2\u58f0\u660ea,\u76f8\u540c\u7684\u53d8\u91cf\u540d\u58f0\u660e\u4f1a\u88ab\u76f4\u63a5\u5ffd\u7565\nconsole.log(a); //\u8f93\u51fa\u51fd\u6570\u672c\u4f53\na = "\u5b59\u609f\u7a7a";\n')),(0,l.kt)("p",{parentName:"li"},"\u6d4b\u8bd5\u9898\uff1a"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"console.log(a); //?\na(); //?\nvar a = 3;\nfunction a() {\n  console.log(10);\n}\nconsole.log(a); //?\na = 6;\na(); //?\n")),(0,l.kt)("p",{parentName:"li"},"\u6d4b\u8bd5\u9898 2"),(0,l.kt)("pre",{parentName:"li"},(0,l.kt)("code",{parentName:"pre",className:"language-js"},"var foo = 1;\nfunction bar() {\n  foo = 10;\n  return;\n  function foo() {} // \u5728 return \u540e\u4e0d\u6267\u884c \u4f46\u662f\u4e0d\u5f71\u54cd\u53d8\u91cf\u63d0\u524d\n}\nbar();\nalert(foo); //\u7b54\u6848\uff1a1\n")),(0,l.kt)("p",{parentName:"li"},"\u76f8\u5f53\u4e8e"),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("img",{alt:"image-20210223212709849",src:n(59879).Z,width:"1268",height:"462"})),(0,l.kt)("p",{parentName:"li"},(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f bar \u51fd\u6570\u91cc\u9762\u7684 foo \u6b64\u65f6\u4e5f\u662f\u51fd\u6570\u7684\u989c\u8272")))),(0,l.kt)("h2",{id:"2arguments-\u7684\u64cd\u4f5c"},"2.arguments \u7684\u64cd\u4f5c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"function foo(a) {\n  arguments[0] = 2;\n  alert(a); //\u7b54\u6848\uff1a2\uff0c\u56e0\u4e3a\uff1aa\u3001arguments\u662f\u5bf9\u5b9e\u53c2\u7684\u8bbf\u95ee\uff0cb\u3001\u901a\u8fc7arguments[i]\u53ef\u4ee5\u4fee\u6539\u6307\u5b9a\u5b9e\u53c2\u7684\u503c\n}\nfoo(1);\n")),(0,l.kt)("h2",{id:"3-for-in-\u662f\u5426\u53ef\u4ee5\u904d\u5386\u539f\u578b\u4e0a\u7684\u5c5e\u6027--\u53ef\u4ee5"},"3. for in \u662f\u5426\u53ef\u4ee5\u904d\u5386\u539f\u578b\u4e0a\u7684\u5c5e\u6027 =\u300b \u53ef\u4ee5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'const a = {\n  b: 2,\n  c: 3,\n};\nconsole.log(a);\nObject.prototype.d = 3;\nObject.prototype.func = function () {\n  console.log("obj func");\n};\n\nfor (const key in a) {\n  console.log({ key });\n  if (Object.hasOwnProperty.call(a, key)) {\n    const element = a[key];\n  }\n}\n')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20210223214105874",src:n(89042).Z,width:"1209",height:"789"})),(0,l.kt)("p",null,"\u53d1\u73b0\u81ea\u5df1\u6dfb\u52a0\u7684\u539f\u578b\u5c5e\u6027\u548c\u65b9\u6cd5\u4f9d\u7136\u53ef\u4ee5\u904d\u5386\u51fa\u6765\uff0c\u4f46\u662f\u5bf9\u8c61\u672c\u8eab\u7684\u4e0d\u53ef\u904d\u5386\uff0c\u67e5\u9605\u8d44\u6599\u53d1\u73b0\uff0c\u6d45\u7ea2\u8272\u7684\u65f6\u4e0d\u53ef\u679a\u4e3e\u5c5e\u6027\u3002"),(0,l.kt)("p",null,(0,l.kt)("a",{parentName:"p",href:"https://blog.csdn.net/web_zhouliang/article/details/78710034"},"https://blog.csdn.net/web_zhouliang/article/details/78710034")),(0,l.kt)("p",null,"\u7ed9\u5bf9\u8c61 a \u6dfb\u52a0\u4e0d\u53ef\u679a\u4e3e\u5c5e\u6027"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},'Object.defineProperty(a, "hh", {\n  value: "\u4e0d\u53ef\u679a\u4e3e",\n  enumerable: false,\n});\n')),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20210223215930174",src:n(90316).Z,width:"1141",height:"1027"})),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u904d\u5386\u7684\u672c\u8d28\u8fd8\u662f\u679a\u4e3e")),(0,l.kt)("p",null,"\u6269\u5c55\uff1a",(0,l.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/JavaScript/Guide/Working_with_Objects#%E6%9E%9A%E4%B8%BE%E4%B8%80%E4%B8%AA%E5%AF%B9%E8%B1%A1%E7%9A%84%E6%89%80%E6%9C%89%E5%B1%9E%E6%80%A7"},"\u679a\u4e3e\u4e00\u4e2a\u5bf9\u8c61\u7684\u6240\u6709\u5c5e\u6027")),(0,l.kt)("h2",{id:"4\u91cd\u7ed8\u548c\u91cd\u6392\u54ea\u4e9b\u5c5e\u6027\u4f1a\u5f15\u8d77\u91cd\u6392"},"4.\u91cd\u7ed8\u548c\u91cd\u6392\uff0c\u54ea\u4e9b\u5c5e\u6027\u4f1a\u5f15\u8d77\u91cd\u6392\uff1f"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u91cd\u6392"),"\u662f\u6307",(0,l.kt)("inlineCode",{parentName:"p"},"dom\u6811\u53d1\u751f\u7ed3\u6784\u53d8\u5316\u540e\uff0c\u9700\u8981\u91cd\u65b0\u6784\u5efadom\u7ed3\u6784"),"\u3002 ",(0,l.kt)("strong",{parentName:"p"},"\u91cd\u7ed8"),"\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"\u6307dom\u8282\u70b9\u6837\u5f0f\u6539\u53d8\uff0c\u91cd\u65b0\u7ed8\u5236"),"\u3002 ",(0,l.kt)("strong",{parentName:"p"},"\u91cd\u6392\u4e00\u5b9a\u4f1a\u5e26\u6765\u91cd\u7ed8\uff0c\u91cd\u7ed8\u4e0d\u4e00\u5b9a\u6709\u91cd\u6392\u3002")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5982\u4f55\u51cf\u5c11\u6d4f\u89c8\u5668\u91cd\u6392"),"\uff1a\u5c06\u9700\u8981\u591a\u6b21\u91cd\u6392\u7684\u5143\u7d20\uff0cposition \u5c5e\u6027\u8bbe\u4e3a absolute \u6216 fixed\uff0c\u8fd9\u6837\u6b64\u5143\u7d20\u5c31\u8131\u79bb\u4e86\u6587\u6863\u6d41\uff0c\u5b83\u7684\u53d8\u5316\u4e0d\u4f1a\u5f71\u54cd\u5230\u5176\u4ed6\u5143\u7d20\u3002"),(0,l.kt)("h2",{id:"5new-\u505a\u4e86\u4ec0\u4e48"},"5.new \u505a\u4e86\u4ec0\u4e48"),(0,l.kt)("h2",{id:"6js-\u4e3a\u4ec0\u4e48\u662f\u5355\u7ebf\u7a0b\u7684"},"6.js \u4e3a\u4ec0\u4e48\u662f\u5355\u7ebf\u7a0b\u7684"),(0,l.kt)("h2",{id:"7\u540c\u6b65\u548c\u5f02\u6b65\u7684\u7406\u89e3"},"7.\u540c\u6b65\u548c\u5f02\u6b65\u7684\u7406\u89e3"),(0,l.kt)("p",null,"1.\u540c\u6b65\u548c\u5f02\u6b65\u7684\u533a\u522b?"),(0,l.kt)("p",null,"\u540c\u6b65\uff1a\u963b\u585e\u7684"),(0,l.kt)("p",null,"-\u5f20\u4e09\u53eb\u674e\u56db\u53bb\u5403\u996d\uff0c\u674e\u56db\u4e00\u76f4\u5fd9\u5f97\u4e0d\u505c\uff0c\u5f20\u4e09\u4e00\u76f4\u7b49\u7740\uff0c\u76f4\u5230\u674e\u56db\u5fd9\u5b8c\u4e24\u4e2a\u4eba\u4e00\u5757\u53bb\u5403\u996d"),(0,l.kt)("p",null,"=\u6d4f\u89c8\u5668\u5411\u670d\u52a1\u5668\u8bf7\u6c42\u6570\u636e\uff0c\u670d\u52a1\u5668\u6bd4\u8f83\u5fd9\uff0c\u6d4f\u89c8\u5668\u4e00\u76f4\u7b49\u7740\uff08\u9875\u9762\u767d\u5c4f\uff09\uff0c\u76f4\u5230\u670d\u52a1\u5668\u8fd4\u56de\u6570\u636e\uff0c\u6d4f\u89c8\u5668\u624d\u80fd\u663e\u793a\u9875\u9762"),(0,l.kt)("p",null,"\u5f02\u6b65\uff1a\u975e\u963b\u585e\u7684"),(0,l.kt)("p",null,"-\u5f20\u4e09\u53eb\u674e\u56db\u53bb\u5403\u996d\uff0c\u674e\u56db\u5728\u5fd9\uff0c\u5f20\u4e09\u8bf4\u4e86\u4e00\u58f0\u7136\u540e\u81ea\u5df1\u5c31\u53bb\u5403\u996d\u4e86\uff0c\u674e\u56db\u5fd9\u5b8c\u540e\u81ea\u5df1\u53bb\u5403"),(0,l.kt)("p",null,"=\u6d4f\u89c8\u5668\u5411\u670d\u52a1\u5668\u8bf7\u6c42\u6570\u636e\uff0c\u670d\u52a1\u5668\u6bd4\u8f83\u5fd9\uff0c\u6d4f\u89c8\u5668\u53ef\u4ee5\u81ea\u5982\u7684\u5e72\u539f\u6765\u7684\u4e8b\u60c5\uff08\u663e\u793a\u9875\u9762\uff09\uff0c\u670d\u52a1\u5668\u8fd4\u56de\u6570\u636e\u7684\u65f6\u5019\u901a\u77e5\u6d4f\u89c8\u5668\u4e00\u58f0\uff0c\u6d4f\u89c8\u5668\u628a\u8fd4\u56de\u7684\u6570\u636e\u518d\u6e32\u67d3\u5230\u9875\u9762\uff0c\u5c40\u90e8\u66f4\u65b0"),(0,l.kt)("h2",{id:"8map-set-\u548c-symbol"},"8.Map Set \u548c Symbol"),(0,l.kt)("h2",{id:"9forin-\u548c-forof"},"9.for...in \u548c for...of"),(0,l.kt)("p",null,"for...of \u53ef\u4ee5\u7528\u6765\u904d\u5386\u6570\u7ec4\uff0c\u7c7b\u6570\u7ec4\u5bf9\u8c61\uff0cargument\uff0c\u5b57\u7b26\u4e32\uff0cMap \u548c Set\uff0c"),(0,l.kt)("p",null,"for...in \u7528\u6765\u904d\u5386\u5bf9\u8c61"),(0,l.kt)("h2",{id:"10objectis-\u4e0e\u539f\u6765\u7684\u6bd4\u8f83\u64cd\u4f5c\u7b26--\u7684\u533a\u522b"},"10.Object.is() \u4e0e\u539f\u6765\u7684\u6bd4\u8f83\u64cd\u4f5c\u7b26\u201c ===\u201d\u3001\u201c ==\u201d\u7684\u533a\u522b\uff1f"),(0,l.kt)("p",null,"\u4e24\u7b49\u53f7\u5224\u7b49\uff0c\u4f1a\u5728\u6bd4\u8f83\u65f6\u8fdb\u884c\u7c7b\u578b\u8f6c\u6362\uff1b"),(0,l.kt)("p",null,"\u4e09\u7b49\u53f7\u5224\u7b49(\u5224\u65ad\u4e25\u683c)\uff0c\u6bd4\u8f83\u65f6\u4e0d\u8fdb\u884c\u9690\u5f0f\u7c7b\u578b\u8f6c\u6362,\uff08\u7c7b\u578b\u4e0d\u540c\u5219\u4f1a\u8fd4\u56de false\uff09\uff1b"),(0,l.kt)("p",null,"Object.is \u5728\u4e09\u7b49\u53f7\u5224\u7b49\u7684\u57fa\u7840\u4e0a\u7279\u522b\u5904\u7406\u4e86 NaN \u3001-0 \u548c +0 \uff0c\u4fdd\u8bc1 -0 \u548c +0 \u4e0d\u518d\u76f8\u540c\uff0c"),(0,l.kt)("p",null,"\u4f46 Object.is(NaN, NaN) \u4f1a\u8fd4\u56de true."),(0,l.kt)("h2",{id:"11fetch-\u548c-ajax-\u6709\u4ec0\u4e48\u4e0d\u540c"},"11.fetch \u548c Ajax \u6709\u4ec0\u4e48\u4e0d\u540c"),(0,l.kt)("h2",{id:"12get-\u548c-post-\u7684\u533a\u522b"},"12.GET \u548c POST \u7684\u533a\u522b"),(0,l.kt)("h2",{id:"13\u5b58\u50a8\u76f8\u5173cookieweb-storage-\u548c-session"},"13.\u5b58\u50a8\u76f8\u5173\uff08cookie\uff0cweb storage \u548c session\uff09"),(0,l.kt)("p",null,"cookie \u4f18\u70b9\uff1a 1.\u53ef\u4ee5\u89e3\u51b3 HTTP \u65e0\u72b6\u6001\u7684\u95ee\u9898\uff0c\u4e0e\u670d\u52a1\u5668\u8fdb\u884c\u4ea4\u4e92 \u7f3a\u70b9\uff1a 1.\u6570\u91cf\u548c\u957f\u5ea6\u9650\u5236\uff0c\u6bcf\u4e2a\u57df\u540d\u6700\u591a 20 \u6761\uff0c\u6bcf\u4e2a cookie \u957f\u5ea6\u4e0d\u80fd\u8d85\u8fc7 4kb 2.\u5b89\u5168\u6027\u95ee\u9898\u3002\u5bb9\u6613\u88ab\u4eba\u62e6\u622a 3.\u6d6a\u8d39\u5e26\u5bbd\uff0c\u6bcf\u6b21\u8bf7\u6c42\u65b0\u9875\u9762\uff0ccookie \u90fd\u4f1a\u88ab\u53d1\u9001\u8fc7\u53bb"),(0,l.kt)("h3",{id:"1cookie-\u548c-session-\u533a\u522b"},"1.cookie \u548c session \u533a\u522b"),(0,l.kt)("p",null,"1.cookie \u6570\u636e\u5b58\u653e\u5728\u5ba2\u6237\u7684\u6d4f\u89c8\u5668\u4e0a\uff0csession \u6570\u636e\u653e\u5728\u670d\u52a1\u5668\u4e0a\u3002 2.session \u4f1a\u5728\u4e00\u5b9a\u65f6\u95f4\u5185\u4fdd\u5b58\u5728\u670d\u52a1\u5668\u4e0a\u3002\u5f53\u8bbf\u95ee\u589e\u591a\uff0c\u4f1a\u6bd4\u8f83\u5360\u7528\u4f60\u670d\u52a1\u5668\u7684\u6027\u80fd\u3002\u8003\u8651\u5230\u51cf\u8f7b\u670d\u52a1\u5668\u6027\u80fd\u65b9\u9762\uff0c\u5e94\u5f53\u4f7f\u7528 COOKIE\u3002"),(0,l.kt)("p",null,"sessionStorage \u662f\u5f53\u524d\u5bf9\u8bdd\u7684\u7f13\u5b58\uff0c\u6d4f\u89c8\u5668\u7a97\u53e3\u5173\u95ed\u5373\u6d88\u5931\uff0clocalStorage \u6301\u4e45\u5b58\u5728\uff0c\u9664\u975e\u6e05\u9664\u6d4f\u89c8\u5668\u7f13\u5b58\u3002"),(0,l.kt)("h3",{id:"2\u4ec0\u4e48\u662f-cookie-\u9694\u79bb\u6216\u8005\u8bf4\u8bf7\u6c42\u8d44\u6e90\u7684\u65f6\u5019\u4e0d\u8981\u8ba9\u5b83\u5e26-cookie-\u600e\u4e48\u505a"},"2.\u4ec0\u4e48\u662f Cookie \u9694\u79bb\uff1f\uff08\u6216\u8005\u8bf4\uff1a\u8bf7\u6c42\u8d44\u6e90\u7684\u65f6\u5019\u4e0d\u8981\u8ba9\u5b83\u5e26 cookie \u600e\u4e48\u505a\uff09"),(0,l.kt)("p",null,"\u5982\u679c\u9759\u6001\u6587\u4ef6\u90fd\u653e\u5728\u4e3b\u57df\u540d\u4e0b\uff0c\u90a3\u9759\u6001\u6587\u4ef6\u8bf7\u6c42\u7684\u65f6\u5019\u90fd\u5e26\u6709\u7684 cookie \u7684\u6570\u636e\u63d0\u4ea4\u7ed9 server \u7684\uff0c\u975e\u5e38\u6d6a\u8d39\u6d41\u91cf\uff0c"),(0,l.kt)("p",null,"\u6240\u4ee5\u4e0d\u5982\u9694\u79bb\u5f00\u3002"),(0,l.kt)("p",null,"\u56e0\u4e3a cookie \u6709\u57df\u7684\u9650\u5236\uff0c\u56e0\u6b64\u4e0d\u80fd\u8de8\u57df\u63d0\u4ea4\u8bf7\u6c42\uff0c\u6545\u4f7f\u7528\u975e\u4e3b\u8981\u57df\u540d\u7684\u65f6\u5019\uff0c\u8bf7\u6c42\u5934\u4e2d\u5c31\u4e0d\u4f1a\u5e26\u6709 cookie \u6570\u636e\uff0c"),(0,l.kt)("p",null,"\u8fd9\u6837\u53ef\u4ee5\u964d\u4f4e\u8bf7\u6c42\u5934\u7684\u5927\u5c0f\uff0c\u964d\u4f4e\u8bf7\u6c42\u65f6\u95f4\uff0c\u4ece\u800c\u8fbe\u5230\u964d\u4f4e\u6574\u4f53\u8bf7\u6c42\u5ef6\u65f6\u7684\u76ee\u7684\u3002"),(0,l.kt)("p",null,"\u540c\u65f6\u8fd9\u79cd\u65b9\u5f0f\u4e0d\u4f1a\u5c06 cookie \u4f20\u5165 Web Server\uff0c\u4e5f\u51cf\u5c11\u4e86 Web Server \u5bf9 cookie \u7684\u5904\u7406\u5206\u6790\u73af\u8282\uff0c"),(0,l.kt)("p",null,"\u63d0\u9ad8\u4e86 webserver \u7684 http \u8bf7\u6c42\u7684\u89e3\u6790\u901f\u5ea6\u3002"),(0,l.kt)("h2",{id:"14\u9875\u9762\u7f13\u5b58\u539f\u7406"},"14.\u9875\u9762\u7f13\u5b58\u539f\u7406"),(0,l.kt)("p",null,"\u9875\u9762\u7f13\u5b58\u72b6\u6001\u662f\u7531 http header \u51b3\u5b9a\u7684\uff0c\u4e00\u4e2a\u6d4f\u89c8\u5668\u8bf7\u6c42\u4fe1\u606f\uff0c\u4e00\u4e2a\u662f\u670d\u52a1\u5668\u54cd\u5e94\u4fe1\u606f\u3002\u4e3b\u8981\u5305\u62ec Pragma: no-cache\u3001Cache-Control\u3001 Expires\u3001 Last-Modified\u3001If-Modified-Since\u3002"),(0,l.kt)("h3",{id:"ajax-\u89e3\u51b3\u6d4f\u89c8\u5668\u7f13\u5b58\u95ee\u9898"},"Ajax \u89e3\u51b3\u6d4f\u89c8\u5668\u7f13\u5b58\u95ee\u9898\uff1f"),(0,l.kt)("p",null,'1\u3001\u5728 ajax \u53d1\u9001\u8bf7\u6c42\u524d\u52a0\u4e0a anyAjaxObj.setRequestHeader("If-Modified-Since","0")\u3002'),(0,l.kt)("p",null,'2\u3001\u5728 ajax \u53d1\u9001\u8bf7\u6c42\u524d\u52a0\u4e0a anyAjaxObj.setRequestHeader("Cache-Control","no-cache")\u3002'),(0,l.kt)("p",null,'3\u3001\u5728 URL \u540e\u9762\u52a0\u4e0a\u4e00\u4e2a\u968f\u673a\u6570\uff1a "fresh=" + Math.random();\u3002'),(0,l.kt)("p",null,'4\u3001\u5728 URL \u540e\u9762\u52a0\u4e0a\u65f6\u95f4\u6233\uff1a"nowtime=" + new Date().getTime();\u3002'),(0,l.kt)("h2",{id:"15xss-\u548c-csrf"},"15.xss \u548c csrf"),(0,l.kt)("h2",{id:"16git-fetch-\u662f\u5e72\u561b\u7684"},"16.git fetch \u662f\u5e72\u561b\u7684"),(0,l.kt)("h2",{id:"17\u72b6\u6001\u7801-304-\u662f\u5e72\u561b\u7684-\u5177\u4f53405-504-\u53c8\u662f\u5e72\u561b\u7684"},"17.\u72b6\u6001\u7801 304 \u662f\u5e72\u561b\u7684 \u5177\u4f53\uff0c405 504 \u53c8\u662f\u5e72\u561b\u7684"),(0,l.kt)("h2",{id:"18\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b"},"18.\u4f2a\u7c7b\u548c\u4f2a\u5143\u7d20\u7684\u533a\u522b"),(0,l.kt)("h2",{id:"19postison-\u7684\u51e0\u79cd\u5c5e\u6027\u548c-display"},"19.postison \u7684\u51e0\u79cd\u5c5e\u6027\u548c display"),(0,l.kt)("h2",{id:"20\u76d2\u6a21\u578b\u7684\u7406\u89e3"},"20.\u76d2\u6a21\u578b\u7684\u7406\u89e3"),(0,l.kt)("h2",{id:"21\u539f\u578b\u7ee7\u627f\u7684\u51e0\u79cd\u65b9\u5f0f"},"21.\u539f\u578b\u7ee7\u627f\u7684\u51e0\u79cd\u65b9\u5f0f"),(0,l.kt)("h2",{id:"22\u4e8b\u4ef6\u59d4\u6258\u539f\u7406"},"22.\u4e8b\u4ef6\u59d4\u6258\u539f\u7406"),(0,l.kt)("h2",{id:"23\u884c\u5185\u5143\u7d20-\u548c\u5757\u7ea7\u5143\u7d20\u6709\u54ea\u4e9b\u53ca\u5176\u533a\u522b"},"23.\u884c\u5185\u5143\u7d20 \u548c\u5757\u7ea7\u5143\u7d20\u6709\u54ea\u4e9b\uff0c\u53ca\u5176\u533a\u522b\uff1f"),(0,l.kt)("h2",{id:"24display-none-\u4e0e-visibility-hidden-\u7684\u533a\u522b"},"24.display: none; \u4e0e visibility: hidden; \u7684\u533a\u522b"),(0,l.kt)("p",null,(0,l.kt)("img",{alt:"image-20210224220523306",src:n(2957).Z,width:"1188",height:"600"})))}k.isMDXComponent=!0},59879:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20210223212709849-ba4f1a0c7c3278578dcd9301ccd3e16a.png"},89042:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20210223214105874-f36a37fed1182f09cd3e5f04438495e5.png"},90316:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20210223215930174-3db9a71a5f9194098784567244701168.png"},2957:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/image-20210224220523306-150a5597e337d5cf4bc512150529b6bc.png"}}]);