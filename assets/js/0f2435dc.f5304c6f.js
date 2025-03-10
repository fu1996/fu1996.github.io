"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5421],{3905:(e,t,l)=>{l.d(t,{Zo:()=>d,kt:()=>g});var n=l(67294);function a(e,t,l){return t in e?Object.defineProperty(e,t,{value:l,enumerable:!0,configurable:!0,writable:!0}):e[t]=l,e}function i(e,t){var l=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),l.push.apply(l,n)}return l}function r(e){for(var t=1;t<arguments.length;t++){var l=null!=arguments[t]?arguments[t]:{};t%2?i(Object(l),!0).forEach((function(t){a(e,t,l[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(l)):i(Object(l)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(l,t))}))}return e}function o(e,t){if(null==e)return{};var l,n,a=function(e,t){if(null==e)return{};var l,n,a={},i=Object.keys(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||(a[l]=e[l]);return a}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)l=i[n],t.indexOf(l)>=0||Object.prototype.propertyIsEnumerable.call(e,l)&&(a[l]=e[l])}return a}var p=n.createContext({}),s=function(e){var t=n.useContext(p),l=t;return e&&(l="function"==typeof e?e(t):r(r({},t),e)),l},d=function(e){var t=s(e.components);return n.createElement(p.Provider,{value:t},e.children)},c="mdxType",u={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},m=n.forwardRef((function(e,t){var l=e.components,a=e.mdxType,i=e.originalType,p=e.parentName,d=o(e,["components","mdxType","originalType","parentName"]),c=s(l),m=a,g=c["".concat(p,".").concat(m)]||c[m]||u[m]||i;return l?n.createElement(g,r(r({ref:t},d),{},{components:l})):n.createElement(g,r({ref:t},d))}));function g(e,t){var l=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var i=l.length,r=new Array(i);r[0]=m;var o={};for(var p in t)hasOwnProperty.call(t,p)&&(o[p]=t[p]);o.originalType=e,o[c]="string"==typeof e?e:a,r[1]=o;for(var s=2;s<i;s++)r[s]=l[s];return n.createElement.apply(null,r)}return n.createElement.apply(null,l)}m.displayName="MDXCreateElement"},6058:(e,t,l)=>{l.r(t),l.d(t,{assets:()=>p,contentTitle:()=>r,default:()=>u,frontMatter:()=>i,metadata:()=>o,toc:()=>s});var n=l(87462),a=(l(67294),l(3905));const i={authors:"junkui",title:"JS\u57fa\u784006-JS-Web_API-DOM",categories:["js"],tags:["js"],date:new Date("2021-02-05T23:18:51.000Z")},r="JS Web API",o={unversionedId:"js\u57fa\u7840/JS\u57fa\u784006-JS-Web_API",id:"js\u57fa\u7840/JS\u57fa\u784006-JS-Web_API",title:"JS\u57fa\u784006-JS-Web_API-DOM",description:"\u540e\u7eed\u5185\u5bb9\u4ecb\u7ecd\uff1a",source:"@site/js/js\u57fa\u7840/JS\u57fa\u784006-JS-Web_API.md",sourceDirName:"js\u57fa\u7840",slug:"/js\u57fa\u7840/JS\u57fa\u784006-JS-Web_API",permalink:"/js/js\u57fa\u7840/JS\u57fa\u784006-JS-Web_API",draft:!1,editUrl:"https://github.com/fu1996/fu1996.github.io/tree/main/js/js\u57fa\u7840/JS\u57fa\u784006-JS-Web_API.md",tags:[{label:"js",permalink:"/js/tags/js"}],version:"current",lastUpdatedBy:"fjk",lastUpdatedAt:1741598022,formattedLastUpdatedAt:"2025\u5e743\u670810\u65e5",frontMatter:{authors:"junkui",title:"JS\u57fa\u784006-JS-Web_API-DOM",categories:["js"],tags:["js"],date:"2021-02-05T23:18:51.000Z"},sidebar:"tutorialSidebar",previous:{title:"JS\u57fa\u784005-\u524d4\u7ae0\u5185\u5bb9\u56de\u987e",permalink:"/js/js\u57fa\u7840/JS\u57fa\u784005-\u524d4\u7ae0\u5185\u5bb9\u56de\u987e"},next:{title:"JS\u57fa\u784007-JS-Web_API\u4e4bBOM",permalink:"/js/js\u57fa\u7840/JS\u57fa\u784007-JS-Web_API\u4e4bBOM"}},p={},s=[{value:"\u540e\u7eed\u5185\u5bb9\u4ecb\u7ecd\uff1a",id:"\u540e\u7eed\u5185\u5bb9\u4ecb\u7ecd",level:2},{value:"1.DOM \u64cd\u4f5c\uff08Document Object Modal\uff09",id:"1dom-\u64cd\u4f5cdocument-object-modal",level:2},{value:"2.\u9898\u76ee\u548c\u77e5\u8bc6\u70b9",id:"2\u9898\u76ee\u548c\u77e5\u8bc6\u70b9",level:2},{value:"\u9898\u76ee\uff1a",id:"\u9898\u76ee",level:3},{value:"\u77e5\u8bc6\u70b9\uff1a",id:"\u77e5\u8bc6\u70b9",level:3},{value:"3.DOM \u8282\u70b9\u7684\u64cd\u4f5c",id:"3dom-\u8282\u70b9\u7684\u64cd\u4f5c",level:2},{value:"1.\u83b7\u53d6\u5143\u7d20\u7684\u65b9\u6cd5",id:"1\u83b7\u53d6\u5143\u7d20\u7684\u65b9\u6cd5",level:3},{value:"2.\u8282\u70b9\u7684 property \u4fee\u6539\u5bf9\u8c61\u5c5e\u6027",id:"2\u8282\u70b9\u7684-property-\u4fee\u6539\u5bf9\u8c61\u5c5e\u6027",level:3},{value:"3.\u8282\u70b9\u7684 attribute \u4fee\u6539\u7684\u662f\u6807\u7b7e\u7684\u5c5e\u6027",id:"3\u8282\u70b9\u7684-attribute-\u4fee\u6539\u7684\u662f\u6807\u7b7e\u7684\u5c5e\u6027",level:3},{value:"4.attribute \u548c property \u7684\u533a\u522b",id:"4attribute-\u548c-property-\u7684\u533a\u522b",level:3},{value:"4.DOM \u7ed3\u6784\u7684\u64cd\u4f5c",id:"4dom-\u7ed3\u6784\u7684\u64cd\u4f5c",level:2},{value:"1.\u65b0\u589e/\u63d2\u5165\u8282\u70b9",id:"1\u65b0\u589e\u63d2\u5165\u8282\u70b9",level:3},{value:"2.\u83b7\u53d6\u5b50/\u7236\u5143\u7d20",id:"2\u83b7\u53d6\u5b50\u7236\u5143\u7d20",level:3},{value:"\u83b7\u53d6\u5b50\u5143\u7d20\u7684 API \u8be6\u89e3\u3010\u91cd\u8981\u3011",id:"\u83b7\u53d6\u5b50\u5143\u7d20\u7684-api-\u8be6\u89e3\u91cd\u8981",level:4},{value:"childNodes \u3010\u5b50\u5143\u7d20\u7684\u8282\u70b9\u7684\u96c6\u5408\u3011",id:"childnodes-\u5b50\u5143\u7d20\u7684\u8282\u70b9\u7684\u96c6\u5408",level:4},{value:"children \u3010\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u52a8\u6001\u66f4\u65b0\u5b50\u5143\u7d20\u7684\u96c6\u5408\u3011",id:"children-\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u52a8\u6001\u66f4\u65b0\u5b50\u5143\u7d20\u7684\u96c6\u5408",level:4},{value:"3.\u5220\u9664\u8282\u70b9\u3010\u662f\u8282\u70b9\u5c5e\u6027\u3011",id:"3\u5220\u9664\u8282\u70b9\u662f\u8282\u70b9\u5c5e\u6027",level:3},{value:"5.DOM \u7684\u6027\u80fd\u3010\u91cd\u70b9\u3011",id:"5dom-\u7684\u6027\u80fd\u91cd\u70b9",level:2},{value:"1.\u539f\u56e0\u53ca\u4f18\u5316",id:"1\u539f\u56e0\u53ca\u4f18\u5316",level:3},{value:"2. \u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u7f13\u5b58",id:"2-\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u7f13\u5b58",level:3},{value:"3.\u5c06\u9891\u7e41\u64cd\u4f5c\u6539\u4e3a\u4e00\u6b21\u6027\u64cd\u4f5c",id:"3\u5c06\u9891\u7e41\u64cd\u4f5c\u6539\u4e3a\u4e00\u6b21\u6027\u64cd\u4f5c",level:3},{value:"6.\u89e3\u7b54",id:"6\u89e3\u7b54",level:2}],d={toc:s},c="wrapper";function u(e){let{components:t,...i}=e;return(0,a.kt)(c,(0,n.Z)({},d,i,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"js-web-api"},"JS Web API"),(0,a.kt)("h2",{id:"\u540e\u7eed\u5185\u5bb9\u4ecb\u7ecd"},"\u540e\u7eed\u5185\u5bb9\u4ecb\u7ecd\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DOM"),(0,a.kt)("li",{parentName:"ul"},"BOM"),(0,a.kt)("li",{parentName:"ul"},"\u4e8b\u4ef6\u7ed1\u5b9a"),(0,a.kt)("li",{parentName:"ul"},"ajax"),(0,a.kt)("li",{parentName:"ul"},"\u5b58\u50a8")),(0,a.kt)("h2",{id:"1dom-\u64cd\u4f5cdocument-object-modal"},"1.DOM \u64cd\u4f5c\uff08Document Object Modal\uff09"),(0,a.kt)("p",null,"vue \u548c react \u5c01\u88c5\u4e86 DOM \u64cd\u4f5c\uff0cDOM \u64cd\u4f5c\u662f\u57fa\u7840\u3002"),(0,a.kt)("p",null,"\u8be6\u89c1 MDN \u6587\u6863\uff1a",(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model"},"https://developer.mozilla.org/zh-CN/docs/Web/API/Document_Object_Model")),(0,a.kt)("h2",{id:"2\u9898\u76ee\u548c\u77e5\u8bc6\u70b9"},"2.\u9898\u76ee\u548c\u77e5\u8bc6\u70b9"),(0,a.kt)("h3",{id:"\u9898\u76ee"},"\u9898\u76ee\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DOM \u5c5e\u4e8e\u90a3\u79cd\u6570\u636e\u7ed3\u6784\uff1f"),(0,a.kt)("li",{parentName:"ul"},"DOM \u64cd\u4f5c\u7684\u5e38\u7528 API"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attribute"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"property"),"\u7684\u533a\u522b"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u6027\u63d2\u5165\u591a\u4e2a DOM \u8282\u70b9\uff0c\u8003\u8651\u6027\u80fd")),(0,a.kt)("h3",{id:"\u77e5\u8bc6\u70b9"},"\u77e5\u8bc6\u70b9\uff1a"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DOM \u672c\u8d28\uff1aHTML \u89e3\u6790\u51fa\u6765\u7684\u4e00\u4e2a ",(0,a.kt)("inlineCode",{parentName:"li"},"\u6811\u7ed3\u6784")),(0,a.kt)("li",{parentName:"ul"},"DOM \u8282\u70b9\u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"DOM \u6570\u636e\u7ed3\u6784"),(0,a.kt)("li",{parentName:"ul"},"DOM \u7684\u6027\u80fd")),(0,a.kt)("h2",{id:"3dom-\u8282\u70b9\u7684\u64cd\u4f5c"},"3.DOM \u8282\u70b9\u7684\u64cd\u4f5c"),(0,a.kt)("h3",{id:"1\u83b7\u53d6\u5143\u7d20\u7684\u65b9\u6cd5"},"1.\u83b7\u53d6\u5143\u7d20\u7684\u65b9\u6cd5"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Element \u83b7\u53d6\u7684\u662f\u5355\u4e2a\u7684\u5143\u7d20\uff0cElements \u83b7\u53d6\u7684\u662f\u4e00\u7ec4\u5143\u7d20")),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ID"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 TagName"),(0,a.kt)("li",{parentName:"ul"},"\u901a\u8fc7 ClassName"),(0,a.kt)("li",{parentName:"ul"},'\u901a\u8fc7\u9009\u62e9\u5668 querySelectorAll("',"[\u63a5\u53d7\u9009\u62e9\u5668]",'")')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20210206103613032",src:l(83112).Z,width:"1062",height:"390"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-html"},'<button>\u6309\u94ae</button>\n<div class="div1" id="div1">\n  <p class="p-cls" id="p1">p1</p>\n  <p class="p-cls">p2</p>\n  <p class="p-cls">p3</p>\n</div>\n<div class="div2">\n  <p id="p2">div p1</p>\n</div>\n')),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'console.log("\u83b7\u53d6\u5143\u7d20\u7684N\u4e2d\u65b9\u5f0f");\n// \u901a\u8fc7id\nconst p1 = document.getElementById("p1");\nconsole.log("p1\u53d8\u7ea2", p1);\np1.style.color = "red";\n\n// \u901a\u8fc7\u7c7b\u540d\u83b7\u53d6\nconsole.log("\u901a\u8fc7\u7c7b\u540d\u83b7\u53d6");\nconst ps = document.getElementsByClassName("p-cls");\nconsole.log(ps);\n\n// \u901a\u8fc7\u6807\u7b7e\u540d \u83b7\u53d6\u6240\u6709\u7684 p \u5143\u7d20\nconsole.log("\u901a\u8fc7\u6807\u7b7e\u540d \u83b7\u53d6\u6240\u6709\u7684 p \u5143\u7d20");\nconst tagEles = document.getElementsByTagName("p");\nconsole.log(tagEles);\n\n// \u901a\u8fc7CSS\u9009\u62e9\u5668\u6765\u83b7\u53d6 p2\nconsole.log("\u901a\u8fc7CSS\u9009\u62e9\u5668\u6765\u83b7\u53d6 p2");\nconst p2 = document.querySelector(".div2 #p2");\nconsole.log("p2", p2);\n\n// \u901a\u8fc7CSS\u9009\u62e9\u5668\u53d6\u591a\u4e2a\u5143\u7d20\nconsole.log("\u901a\u8fc7CSS\u9009\u62e9\u5668\u53d6\u591a\u4e2a\u5143\u7d20");\nconst divPList = document.querySelectorAll(".div1 .p-cls");\nconsole.log(divPList);\n\nconsole.log("\u83b7\u53d6\u5143\u7d20\u7684N\u4e2d\u65b9\u5f0f ==== \u7ed3\u675f");\n')),(0,a.kt)("h3",{id:"2\u8282\u70b9\u7684-property-\u4fee\u6539\u5bf9\u8c61\u5c5e\u6027"},"2.\u8282\u70b9\u7684 property \u4fee\u6539\u5bf9\u8c61\u5c5e\u6027"),(0,a.kt)("p",null,"\u4e00\u79cd js \u64cd\u4f5c\u5c5e\u6027\u7684\u5f62\u5f0f"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20210205233556607",src:l(67999).Z,width:"1029",height:"592"})),(0,a.kt)("h3",{id:"3\u8282\u70b9\u7684-attribute-\u4fee\u6539\u7684\u662f\u6807\u7b7e\u7684\u5c5e\u6027"},"3.\u8282\u70b9\u7684 attribute \u4fee\u6539\u7684\u662f\u6807\u7b7e\u7684\u5c5e\u6027"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20210205233936159",src:l(86790).Z,width:"1191",height:"580"})),(0,a.kt)("h3",{id:"4attribute-\u548c-property-\u7684\u533a\u522b"},"4.attribute \u548c property \u7684\u533a\u522b"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"property\uff1a\u4fee\u6539\u5bf9\u8c61\u5c5e\u6027\uff0c\u4e0d\u4f1a\u4f53\u73b0\u5728 HTML \u4e2d"),(0,a.kt)("li",{parentName:"ul"},"attribute\uff1a\u4fee\u6539 HTML \u5c5e\u6027\uff0c\u4f1a\u6539\u53d8 HTML \u7684\u7ed3\u6784"),(0,a.kt)("li",{parentName:"ul"},"\u5f15\u8d77 DOM \u91cd\u65b0\u6e32\u67d3\uff0c\u5c3d\u91cf\u4f7f\u7528 property \u7684\u64cd\u4f5c")),(0,a.kt)("h2",{id:"4dom-\u7ed3\u6784\u7684\u64cd\u4f5c"},"4.DOM \u7ed3\u6784\u7684\u64cd\u4f5c"),(0,a.kt)("h3",{id:"1\u65b0\u589e\u63d2\u5165\u8282\u70b9"},"1.\u65b0\u589e/\u63d2\u5165\u8282\u70b9"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20210205234654693",src:l(8396).Z,width:"1175",height:"644"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'console.log("\u65b0\u589eDOM\u5143\u7d20\u5f00\u59cb");\nconst div1 = document.getElementById("div1");\n// \u521b\u5efa\u65b0\u8282\u70b9\nconst p = document.createElement("p");\np.innerHTML = "\u4ffa\u662f\u4e00\u4e2a\u65b0\u8282\u70b9";\n// \u7136\u540e\u653e\u5165 div\u5bb9\u5668\ndiv1.appendChild(p);\n\n// \u76f4\u63a5 \u5411\u5bb9\u5668\u4e2d \u6dfb\u52a0\u5df2\u5b58\u5728\u5143\u7d20\nconst p2 = document.getElementById("p2");\ndiv1.appendChild(p2);\n')),(0,a.kt)("p",null,"\u7ed3\u679c\u5982\u56fe\uff1a"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20210206105717519",src:l(59484).Z,width:"1683",height:"633"})),(0,a.kt)("h3",{id:"2\u83b7\u53d6\u5b50\u7236\u5143\u7d20"},"2.\u83b7\u53d6\u5b50/\u7236\u5143\u7d20"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20210205235255218",src:l(80283).Z,width:"1131",height:"603"})),(0,a.kt)("h4",{id:"\u83b7\u53d6\u5b50\u5143\u7d20\u7684-api-\u8be6\u89e3\u91cd\u8981"},"\u83b7\u53d6\u5b50\u5143\u7d20\u7684 API \u8be6\u89e3\u3010\u91cd\u8981\u3011"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20210206110154895",src:l(65547).Z,width:"2049",height:"931"})),(0,a.kt)("h4",{id:"childnodes-\u5b50\u5143\u7d20\u7684\u8282\u70b9\u7684\u96c6\u5408"},"childNodes \u3010\u5b50\u5143\u7d20\u7684\u8282\u70b9\u7684\u96c6\u5408\u3011"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"Node.childNodes \u8fd4\u56de\u5305\u542b\u6307\u5b9a\u8282\u70b9\u7684\u5b50\u8282\u70b9\u7684\u96c6\u5408\uff0c\u8be5\u96c6\u5408\u4e3a\u5373\u65f6\u66f4\u65b0\u7684\u96c6\u5408\uff08live collection\uff09")),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/Node/childNodes"},"https://developer.mozilla.org/zh-CN/docs/Web/API/Node/childNodes")),(0,a.kt)("h4",{id:"children-\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u52a8\u6001\u66f4\u65b0\u5b50\u5143\u7d20\u7684\u96c6\u5408"},"children \u3010\u8fd4\u56de\u7684\u662f\u4e00\u4e2a\u52a8\u6001\u66f4\u65b0\u5b50\u5143\u7d20\u7684\u96c6\u5408\u3011"),(0,a.kt)("p",null,(0,a.kt)("strong",{parentName:"p"},"`"),"ParentNode.children",(0,a.kt)("strong",{parentName:"p"}," ",(0,a.kt)("inlineCode",{parentName:"strong"},"\u662f\u4e00\u4e2a\u53ea\u8bfb\u5c5e\u6027\uff0c\u8fd4\u56de \u4e00\u4e2aNode\u7684\u5b50["),"elements",(0,a.kt)("inlineCode",{parentName:"strong"},"](https://developer.mozilla.org/zh-CN/docs/Web/API/Element) \uff0c\u662f\u4e00\u4e2a\u52a8\u6001\u66f4\u65b0\u7684 ["),"HTMLCollection`](",(0,a.kt)("a",{parentName:"strong",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection)%E3%80%82"},"https://developer.mozilla.org/zh-CN/docs/Web/API/HTMLCollection)\u3002"))),(0,a.kt)("p",null,(0,a.kt)("a",{parentName:"p",href:"https://developer.mozilla.org/zh-CN/docs/Web/API/ParentNode/children"},"https://developer.mozilla.org/zh-CN/docs/Web/API/ParentNode/children")),(0,a.kt)("h3",{id:"3\u5220\u9664\u8282\u70b9\u662f\u8282\u70b9\u5c5e\u6027"},"3.\u5220\u9664\u8282\u70b9\u3010\u662f\u8282\u70b9\u5c5e\u6027\u3011"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20210205235322292",src:l(50542).Z,width:"1182",height:"190"})),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-js"},'console.log("DOM\u5143\u7d20\u7684\u5220\u9664");\nconst div2 = document.getElementById("div2");\nconst delEle = div2.removeChild(div2.childNodes[1]);\nconsole.log("\u88ab\u5220\u9664\u7684\u5143\u7d20", delEle);\n')),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20210206111904820",src:l(56814).Z,width:"1813",height:"402"})),(0,a.kt)("h2",{id:"5dom-\u7684\u6027\u80fd\u91cd\u70b9"},"5.DOM \u7684\u6027\u80fd\u3010\u91cd\u70b9\u3011"),(0,a.kt)("h3",{id:"1\u539f\u56e0\u53ca\u4f18\u5316"},"1.\u539f\u56e0\u53ca\u4f18\u5316"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DOM \u64cd\u4f5c\u975e\u5e38 \u6602\u8d35\uff0c\u8017\u8d39 CPU \u5565\u7684\uff0c\u907f\u514d\u9891\u7e41\u7684 DOM \u64cd\u4f5c"),(0,a.kt)("li",{parentName:"ul"},"\u5bf9 DOM \u67e5\u8be2\u8fdb\u884c\u7f13\u5b58"),(0,a.kt)("li",{parentName:"ul"},"\u5c06\u9891\u7e41\u64cd\u4f5c\u5408\u5e76\u4e3a\u4e00\u6b21\u6027\u64cd\u4f5c")),(0,a.kt)("h3",{id:"2-\u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u7f13\u5b58"},"2. \u67e5\u8be2\u7ed3\u679c\u8fdb\u884c\u7f13\u5b58"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20210205235648227",src:l(52389).Z,width:"1232",height:"525"})),(0,a.kt)("h3",{id:"3\u5c06\u9891\u7e41\u64cd\u4f5c\u6539\u4e3a\u4e00\u6b21\u6027\u64cd\u4f5c"},"3.\u5c06\u9891\u7e41\u64cd\u4f5c\u6539\u4e3a\u4e00\u6b21\u6027\u64cd\u4f5c"),(0,a.kt)("p",null,(0,a.kt)("img",{alt:"image-20210205235720929",src:l(27924).Z,width:"809",height:"600"})),(0,a.kt)("p",null,"\u6587\u6863\u7247\u6bb5\u76f8\u5f53\u4e8e\u4e00\u4e2a\u7f13\u5b58\u533a\uff0c\u5b58\u50a8\u5728\u5185\u5b58\u4e2d\uff0c\u5e76\u6ca1\u6709\u76f4\u63a5\u6267\u884c DOM \u7684\u64cd\u4f5c\u3002"),(0,a.kt)("h2",{id:"6\u89e3\u7b54"},"6.\u89e3\u7b54"),(0,a.kt)("ul",null,(0,a.kt)("li",{parentName:"ul"},"DOM \u5c5e\u4e8e\u90a3\u79cd\u6570\u636e\u7ed3\u6784\uff1f\u3010\u6811\u7ed3\u6784\u3011"),(0,a.kt)("li",{parentName:"ul"},"DOM \u64cd\u4f5c\u7684\u5e38\u7528 API\u3002\u3010\u589e\u5220\u6539\u67e5\u3011"),(0,a.kt)("li",{parentName:"ul"},(0,a.kt)("inlineCode",{parentName:"li"},"attribute"),"\u548c",(0,a.kt)("inlineCode",{parentName:"li"},"property"),"\u7684\u533a\u522b\u3002\u3010\u4f1a\u4e0d\u4f1a\u6539\u53d8 HTML \u7684\u7ed3\u6784\u3011"),(0,a.kt)("li",{parentName:"ul"},"\u4e00\u6b21\u6027\u63d2\u5165\u591a\u4e2a DOM \u8282\u70b9\uff0c\u8003\u8651\u6027\u80fd")))}u.isMDXComponent=!0},67999:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/image-20210205233556607-93d0e3d38b8573a8790470238d7ebb42.png"},86790:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/image-20210205233936159-a00c84ffcb704375eba63a100340c69b.png"},8396:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/image-20210205234654693-5b142578ea64172e4b5960507eb8130b.png"},80283:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/image-20210205235255218-51cf775eb2e56483f37884e72d24473b.png"},50542:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/image-20210205235322292-88b44931713159b136b6dc1814857bbc.png"},52389:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/image-20210205235648227-44f8bcae917e18abb290ac9dca5678ed.png"},27924:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/image-20210205235720929-3fa6791236aa19207f48256f3831f6ae.png"},83112:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/image-20210206103613032-d96edb44d5ff5d36c0971e808bf571d5.png"},59484:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/image-20210206105717519-f32dced031225732945b3e0a7ba48cb5.png"},65547:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/image-20210206110154895-15f71ec785ce0430cf1e7a09c863cf0a.png"},56814:(e,t,l)=>{l.d(t,{Z:()=>n});const n=l.p+"assets/images/image-20210206111904820-ae0bd078cd58e6b819cb155086e36811.png"}}]);