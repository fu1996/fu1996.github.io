"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[3762],{3905:(e,t,r)=>{r.d(t,{Zo:()=>p,kt:()=>b});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var s=n.createContext({}),c=function(e){var t=n.useContext(s),r=t;return e&&(r="function"==typeof e?e(t):i(i({},t),e)),r},p=function(e){var t=c(e.components);return n.createElement(s.Provider,{value:t},e.children)},m="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},f=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,s=e.parentName,p=l(e,["components","mdxType","originalType","parentName"]),m=c(r),f=o,b=m["".concat(s,".").concat(f)]||m[f]||u[f]||a;return r?n.createElement(b,i(i({ref:t},p),{},{components:r})):n.createElement(b,i({ref:t},p))}));function b(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,i=new Array(a);i[0]=f;var l={};for(var s in t)hasOwnProperty.call(t,s)&&(l[s]=t[s]);l.originalType=e,l[m]="string"==typeof e?e:o,i[1]=l;for(var c=2;c<a;c++)i[c]=r[c];return n.createElement.apply(null,i)}return n.createElement.apply(null,r)}f.displayName="MDXCreateElement"},85078:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>a,metadata:()=>l,toc:()=>c});var n=r(87462),o=(r(67294),r(3905));const a={authors:"junkui",title:"js\u7684Promise\u4e13\u9898",categories:["js","work"],tags:["js","work","\u524d\u7aef"],date:new Date("2021-02-24T21:21:31.000Z")},i="Promise \u4e13\u9898",l={permalink:"/blog/js\u7684Promise\u4e13\u9898",source:"@site/blog/js\u7684Promise\u4e13\u9898.md",title:"js\u7684Promise\u4e13\u9898",description:"1.Promise \u7684\u72b6\u6001\u548c\u7f3a\u70b9",date:"2021-02-24T21:21:31.000Z",formattedDate:"2021\u5e742\u670824\u65e5",tags:[{label:"js",permalink:"/blog/tags/js"},{label:"work",permalink:"/blog/tags/work"},{label:"\u524d\u7aef",permalink:"/blog/tags/\u524d\u7aef"}],readingTime:1.23,hasTruncateMarker:!1,authors:[{name:"\u4ed8\u4fca\u594e",title:"\u4ece\u517b\u732a\u8f6c\u7801\u519c\u7684\u81ea\u5b66\u8005",url:"https://github.com/fu1996",imageURL:"https://avatars.githubusercontent.com/u/42232973",key:"junkui"}],frontMatter:{authors:"junkui",title:"js\u7684Promise\u4e13\u9898",categories:["js","work"],tags:["js","work","\u524d\u7aef"],date:"2021-02-24T21:21:31.000Z"},prevItem:{title:"js\u7684\u8de8\u57df\u4e13\u9898",permalink:"/blog/js\u7684\u8de8\u57df\u4e13\u9898"},nextItem:{title:"js\u7684\u6613\u6df7\u70b9",permalink:"/blog/js\u7684\u6613\u6df7\u70b9"}},s={authorsImageUrls:[void 0]},c=[{value:"1.Promise \u7684\u72b6\u6001\u548c\u7f3a\u70b9",id:"1promise-\u7684\u72b6\u6001\u548c\u7f3a\u70b9",level:2},{value:"\u7f3a\u70b9\uff1a",id:"\u7f3a\u70b9",level:3},{value:"2.Promise \u7684\u65b9\u6cd5 all \u548c race",id:"2promise-\u7684\u65b9\u6cd5-all-\u548c-race",level:2}],p={toc:c},m="wrapper";function u(e){let{components:t,...r}=e;return(0,o.kt)(m,(0,n.Z)({},p,r,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h2",{id:"1promise-\u7684\u72b6\u6001\u548c\u7f3a\u70b9"},"1.Promise \u7684\u72b6\u6001\u548c\u7f3a\u70b9"),(0,o.kt)("h3",{id:"\u7f3a\u70b9"},"\u7f3a\u70b9\uff1a"),(0,o.kt)("p",null,"Promise \u4e5f\u6709\u4e00\u4e9b\u7f3a\u70b9\u3002\u9996\u5148\uff0c\u65e0\u6cd5\u53d6\u6d88 Promise\uff0c\u4e00\u65e6\u65b0\u5efa\u5b83\u5c31\u4f1a\u7acb\u5373\u6267\u884c\uff0c\u65e0\u6cd5\u4e2d\u9014\u53d6\u6d88\u3002\u5176\u6b21\uff0c\u5982\u679c\u4e0d\u8bbe\u7f6e\u56de\u8c03\u51fd\u6570\uff0cPromise \u5185\u90e8\u629b\u51fa\u7684\u9519\u8bef\uff0c\u4e0d\u4f1a\u53cd\u5e94\u5230\u5916\u90e8\u3002\u7b2c\u4e09\uff0c\u5f53\u5904\u4e8e Pending \u72b6\u6001\u65f6\uff0c\u65e0\u6cd5\u5f97\u77e5\u76ee\u524d\u8fdb\u5c55\u5230\u54ea\u4e00\u4e2a\u9636\u6bb5\uff08\u521a\u521a\u5f00\u59cb\u8fd8\u662f\u5373\u5c06\u5b8c\u6210\uff09\u3002\u4e00\u822c\u6765\u8bf4\uff0c\u4e0d\u8981\u5728 then \u65b9\u6cd5\u91cc\u9762\u5b9a\u4e49 Reject \u72b6\u6001\u7684\u56de\u8c03\u51fd\u6570\uff08\u5373 then \u7684\u7b2c\u4e8c\u4e2a\u53c2\u6570\uff09\uff0c\u603b\u662f\u4f7f\u7528 catch \u65b9\u6cd5\uff0c\u7406\u7531\u662f\u66f4\u63a5\u8fd1\u540c\u6b65\u7684\u5199\u6cd5\u3002 then \u7684\u7b2c\u4e8c\u4e2a\u51fd\u6570\u53c2\u6570\u548c catch \u7b49\u4ef7"),(0,o.kt)("h2",{id:"2promise-\u7684\u65b9\u6cd5-all-\u548c-race"},"2.Promise \u7684\u65b9\u6cd5 all \u548c race"),(0,o.kt)("p",null,"Promise.all \u628a\u591a\u4e2a promise \u5b9e\u4f8b\u5f53\u6210\u4e00\u4e2a promise \u5b9e\u4f8b,\u5f53\u8fd9\u4e9b\u5b9e\u4f8b\u7684\u72b6\u6001\u90fd\u53d1\u751f\u6539\u53d8\u65f6\u624d\u4f1a\u8fd4\u56de\u4e00\u4e2a\u65b0\u7684 promise \u5b9e\u4f8b\uff0c\u624d\u4f1a\u6267\u884c then \u65b9\u6cd5\u3002 Promise.race \u53ea\u8981\u8be5\u6570\u7ec4\u4e2d\u7684 Promise \u5bf9\u8c61\u7684\u72b6\u6001\u53d1\u751f\u53d8\u5316\uff08\u65e0\u8bba\u662f resolve \u8fd8\u662f reject\uff09\u8be5\u65b9\u6cd5\u90fd\u4f1a\u8fd4\u56de\u3002"),(0,o.kt)("h2",{id:""}))}u.isMDXComponent=!0}}]);