"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[7263],{3905:(e,n,t)=>{t.d(n,{Zo:()=>u,kt:()=>k});var r=t(67294);function l(e,n,t){return n in e?Object.defineProperty(e,n,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[n]=t,e}function a(e,n){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);n&&(r=r.filter((function(n){return Object.getOwnPropertyDescriptor(e,n).enumerable}))),t.push.apply(t,r)}return t}function i(e){for(var n=1;n<arguments.length;n++){var t=null!=arguments[n]?arguments[n]:{};n%2?a(Object(t),!0).forEach((function(n){l(e,n,t[n])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(n){Object.defineProperty(e,n,Object.getOwnPropertyDescriptor(t,n))}))}return e}function p(e,n){if(null==e)return{};var t,r,l=function(e,n){if(null==e)return{};var t,r,l={},a=Object.keys(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||(l[t]=e[t]);return l}(e,n);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(r=0;r<a.length;r++)t=a[r],n.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(l[t]=e[t])}return l}var o=r.createContext({}),s=function(e){var n=r.useContext(o),t=n;return e&&(t="function"==typeof e?e(n):i(i({},n),e)),t},u=function(e){var n=s(e.components);return r.createElement(o.Provider,{value:n},e.children)},d="mdxType",m={inlineCode:"code",wrapper:function(e){var n=e.children;return r.createElement(r.Fragment,{},n)}},c=r.forwardRef((function(e,n){var t=e.components,l=e.mdxType,a=e.originalType,o=e.parentName,u=p(e,["components","mdxType","originalType","parentName"]),d=s(t),c=l,k=d["".concat(o,".").concat(c)]||d[c]||m[c]||a;return t?r.createElement(k,i(i({ref:n},u),{},{components:t})):r.createElement(k,i({ref:n},u))}));function k(e,n){var t=arguments,l=n&&n.mdxType;if("string"==typeof e||l){var a=t.length,i=new Array(a);i[0]=c;var p={};for(var o in n)hasOwnProperty.call(n,o)&&(p[o]=n[o]);p.originalType=e,p[d]="string"==typeof e?e:l,i[1]=p;for(var s=2;s<a;s++)i[s]=t[s];return r.createElement.apply(null,i)}return r.createElement.apply(null,t)}c.displayName="MDXCreateElement"},53023:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>i,default:()=>m,frontMatter:()=>a,metadata:()=>p,toc:()=>s});var r=t(87462),l=(t(67294),t(3905));const a={authors:"junkui",title:"01-ts\u57fa\u7840\u7c7b\u578b",categories:["ts"],tags:["ts"],date:new Date("2020-12-29T11:35:21.000Z")},i=void 0,p={unversionedId:"ts\u57fa\u7840\u7c7b\u578b",id:"ts\u57fa\u7840\u7c7b\u578b",title:"01-ts\u57fa\u7840\u7c7b\u578b",description:"\u57fa\u7840\u7c7b\u578b",source:"@site/ts/01-ts\u57fa\u7840\u7c7b\u578b.md",sourceDirName:".",slug:"/ts\u57fa\u7840\u7c7b\u578b",permalink:"/ts/ts\u57fa\u7840\u7c7b\u578b",draft:!1,editUrl:"https://github.com/fu1996/fu1996.github.io/tree/main/ts/01-ts\u57fa\u7840\u7c7b\u578b.md",tags:[{label:"ts",permalink:"/ts/tags/ts"}],version:"current",lastUpdatedBy:"\u4ed8\u4fca\u594e",lastUpdatedAt:1711900781,formattedLastUpdatedAt:"2024\u5e743\u670831\u65e5",sidebarPosition:1,frontMatter:{authors:"junkui",title:"01-ts\u57fa\u7840\u7c7b\u578b",categories:["ts"],tags:["ts"],date:"2020-12-29T11:35:21.000Z"},sidebar:"tutorialSidebar",previous:{title:"ts\u5b98\u65b9\u5165\u95e8",permalink:"/ts/"},next:{title:"02-ts\u6216js\u4e2d\u7684\u53d8\u91cf\u58f0\u660e",permalink:"/ts/ts\u6216js\u4e2d\u7684\u53d8\u91cf\u58f0\u660e"}},o={},s=[{value:"\u57fa\u7840\u7c7b\u578b",id:"\u57fa\u7840\u7c7b\u578b",level:2},{value:"1.js \u4e2d\u7684 6 \u5927\u57fa\u7840\u7c7b\u578b \u548c 2 \u4e2a\u590d\u6742\u7c7b\u578b",id:"1js-\u4e2d\u7684-6-\u5927\u57fa\u7840\u7c7b\u578b-\u548c-2-\u4e2a\u590d\u6742\u7c7b\u578b",level:3},{value:"2. ts \u4e2d\u652f\u6301\u548c js \u4e00\u6837\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5e76\u4e14\u8fd8\u65b0\u589e\u4e86\u679a\u4e3e\u7b49",id:"2-ts-\u4e2d\u652f\u6301\u548c-js-\u4e00\u6837\u7684\u6570\u636e\u7c7b\u578b\u5e76\u4e14\u8fd8\u65b0\u589e\u4e86\u679a\u4e3e\u7b49",level:3},{value:"1.boolean \u5e03\u5c14\u7c7b\u578b",id:"1boolean-\u5e03\u5c14\u7c7b\u578b",level:4},{value:"2.number \u6570\u5b57\u7c7b\u578b",id:"2number-\u6570\u5b57\u7c7b\u578b",level:4},{value:"3.string \u5b57\u7b26\u4e32\u7c7b\u578b",id:"3string-\u5b57\u7b26\u4e32\u7c7b\u578b",level:4},{value:"4.\u6570\u7ec4\u7684\u4e24\u79cd\u65b9\u6cd5",id:"4\u6570\u7ec4\u7684\u4e24\u79cd\u65b9\u6cd5",level:4},{value:"5.\u5143\u7ec4\u7c7b\u578b Tuple \u3010\u7c7b\u6bd4 python\u3011",id:"5\u5143\u7ec4\u7c7b\u578b-tuple-\u7c7b\u6bd4-python",level:4},{value:"6.enum \u679a\u4e3e\u7c7b\u578b \u3010ts \u65b0\u589e\u3011",id:"6enum-\u679a\u4e3e\u7c7b\u578b-ts-\u65b0\u589e",level:4},{value:"7.Any \u4efb\u610f\u7c7b\u578b \u4e0d\u9650\u5236",id:"7any-\u4efb\u610f\u7c7b\u578b-\u4e0d\u9650\u5236",level:4},{value:"8.Void \u65e0\u4efb\u4f55\u7c7b\u578b",id:"8void-\u65e0\u4efb\u4f55\u7c7b\u578b",level:4},{value:"9.null \u548c undefined",id:"9null-\u548c-undefined",level:4},{value:"10.never \u7c7b\u578b",id:"10never-\u7c7b\u578b",level:4},{value:"11.Object \u5bf9\u8c61\u7c7b\u578b",id:"11object-\u5bf9\u8c61\u7c7b\u578b",level:4},{value:"12.\u7c7b\u578b\u65ad\u8a00 \u4f60\u77e5\u9053\u81ea\u5df1\u5728\u5e72\u5565",id:"12\u7c7b\u578b\u65ad\u8a00-\u4f60\u77e5\u9053\u81ea\u5df1\u5728\u5e72\u5565",level:4},{value:"1.\u5c16\u62ec\u53f7 \u8bed\u6cd5\u65ad\u8a00",id:"1\u5c16\u62ec\u53f7-\u8bed\u6cd5\u65ad\u8a00",level:5},{value:"2.<code>as</code> \u8bed\u6cd5",id:"2as-\u8bed\u6cd5",level:5}],u={toc:s},d="wrapper";function m(e){let{components:n,...t}=e;return(0,l.kt)(d,(0,r.Z)({},u,t,{components:n,mdxType:"MDXLayout"}),(0,l.kt)("h2",{id:"\u57fa\u7840\u7c7b\u578b"},"\u57fa\u7840\u7c7b\u578b"),(0,l.kt)("h3",{id:"1js-\u4e2d\u7684-6-\u5927\u57fa\u7840\u7c7b\u578b-\u548c-2-\u4e2a\u590d\u6742\u7c7b\u578b"},"1.js \u4e2d\u7684 6 \u5927\u57fa\u7840\u7c7b\u578b \u548c 2 \u4e2a\u590d\u6742\u7c7b\u578b"),(0,l.kt)("p",null,"\u7b80\u5355\u7c7b\u578b\uff1a\u4e00\u53e5\u8bdd\u8bb0\u4f4f\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"nnusb --s")," \u7eb3\u5c3c usb"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-javascript"},"null number undefined string boolean --ES6\u65b0\u589e symbol\n")),(0,l.kt)("p",null,"\u590d\u6742\u7c7b\u578b\uff1a\u5bf9\u8c61\u548c\u6570\u7ec4"),(0,l.kt)("h3",{id:"2-ts-\u4e2d\u652f\u6301\u548c-js-\u4e00\u6837\u7684\u6570\u636e\u7c7b\u578b\u5e76\u4e14\u8fd8\u65b0\u589e\u4e86\u679a\u4e3e\u7b49"},"2. ts \u4e2d\u652f\u6301\u548c js \u4e00\u6837\u7684\u6570\u636e\u7c7b\u578b\uff0c\u5e76\u4e14\u8fd8\u65b0\u589e\u4e86\u679a\u4e3e\u7b49"),(0,l.kt)("h4",{id:"1boolean-\u5e03\u5c14\u7c7b\u578b"},"1.boolean \u5e03\u5c14\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-js"},"let isDone: boolean = false;\n")),(0,l.kt)("h4",{id:"2number-\u6570\u5b57\u7c7b\u578b"},"2.number \u6570\u5b57\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let decLiteral: number = 6;\nlet hexLiteral: number = 0xf00d;\nlet binaryLiteral: number = 0b1010;\nlet octalLiteral: number = 0o744;\n")),(0,l.kt)("ul",null,(0,l.kt)("li",{parentName:"ul"},"ts \u4e2d\u7684\u6240\u6709\u6570\u5b57\u90fd\u662f\u6d6e\u70b9\u6570\uff0c\u6d6e\u70b9\u6570\u7684\u7c7b\u578b\u90fd\u662f number"),(0,l.kt)("li",{parentName:"ul"},"\u652f\u6301\u4e8c\u8fdb\u5236 \u5341\u8fdb\u5236 \u3001\u516b\u8fdb\u5236\u5b57\u9762\u91cf\u548c\u5341\u516d\u8fdb\u5236\u5b57\u9762\u91cf")),(0,l.kt)("h4",{id:"3string-\u5b57\u7b26\u4e32\u7c7b\u578b"},"3.string \u5b57\u7b26\u4e32\u7c7b\u578b"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-ts"},"let name: string = `Gene`;\nlet age: number = 37;\nlet sentence: string = `Hello, my name is ${name}.\n\nI'll be ${age + 1} years old next month.`;\n")),(0,l.kt)("h4",{id:"4\u6570\u7ec4\u7684\u4e24\u79cd\u65b9\u6cd5"},"4.\u6570\u7ec4\u7684\u4e24\u79cd\u65b9\u6cd5"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7b2c\u4e00\u79cd\uff1a"),"\u5143\u7d20\u7c7b\u578b\u540e\u9762\u63a5\u4e0a ",(0,l.kt)("inlineCode",{parentName:"p"},"[]"),"\uff0c\u8868\u793a\u7531\u6b64\u7c7b\u578b\u5143\u7d20\u7ec4\u6210\u7684\u4e00\u4e2a\u6570\u7ec4\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-tsx"},"let list: number[] = [1, 2, 3];\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u7b2c\u4e8c\u79cd\uff1a"),"\u6570\u7ec4\u6cdb\u578b\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"Array<\u5143\u7d20\u7c7b\u578b>"),"\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"let list: Array<number> = [1, 2, 3];\n")),(0,l.kt)("h4",{id:"5\u5143\u7ec4\u7c7b\u578b-tuple-\u7c7b\u6bd4-python"},"5.\u5143\u7ec4\u7c7b\u578b Tuple \u3010\u7c7b\u6bd4 python\u3011"),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u5143\u7ec4\uff1a"),"\u5141\u8bb8\u8868\u793a\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"\u5df2\u77e5\u6570\u91cf\u548c\u7c7b\u578b"),"\u7684\u6570\u7ec4\uff0c\u5404\u5143\u7d20\u7684\u7c7b\u578b\u4e0d\u5fc5\u76f8\u540c\uff0c\u7c7b\u6bd4\u4e0a\u9762\u6570\u7ec4\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// Declare a tuple type\nlet x: [string, number];\n// Initialize it\nx = ["hello", 10]; // OK\n// Initialize it incorrectly\nx = [10, "hello"]; // Error\n')),(0,l.kt)("p",null,"\u5f53\u4f7f\u7528\u53ef\u8bbf\u95ee\u7684\u5143\u7d20\u65f6\uff0c\u4f1a\u5f97\u5230\u6b63\u786e\u7684\u7c7b\u578b\uff0c\u4ee5\u53ca\u53ef\u4ee5\u4f7f\u7528\u8be5\u7c7b\u578b\u5bf9\u5e94\u7684\u65b9\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"console.log(x[0].substr(1)); // OK\nconsole.log(x[1].substr(1)); // Error, 'number' does not have 'substr'\n")),(0,l.kt)("p",null,"\u5f53\u8bbf\u95ee\u8d8a\u754c\u5143\u7d20\u65f6\u5019\uff0c\u4f1a\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"\u8054\u5408\u7c7b\u578b"),"\u6765\u5224\u65ad"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"x[3] = \"world\"; // OK, \u5b57\u7b26\u4e32\u53ef\u4ee5\u8d4b\u503c\u7ed9(string | number)\u7c7b\u578b\n\nconsole.log(x[5].toString()); // OK, 'string' \u548c 'number' \u90fd\u6709 toString\n\nx[6] = true; // Error, \u5e03\u5c14\u4e0d\u662f(string | number)\u7c7b\u578b\n")),(0,l.kt)("h4",{id:"6enum-\u679a\u4e3e\u7c7b\u578b-ts-\u65b0\u589e"},"6.enum \u679a\u4e3e\u7c7b\u578b \u3010ts \u65b0\u589e\u3011"),(0,l.kt)("p",null,"\u9ed8\u8ba4\u4ece 0 \u5f00\u59cb\u5bf9\u679a\u4e3e\u6210\u5458\u8fdb\u884c\u7f16\u53f7"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"enum Color {\n  Red,\n  Green,\n  Blue,\n}\nlet c: Color = Color.Green;\n")),(0,l.kt)("p",null,"\u81ea\u5b9a\u4e49\u7f16\u53f7\u7684\u8d77\u59cb\u6570\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"enum Color {\n  Red = 1,\n  Green,\n  Blue,\n}\nlet c: Color = Color.Green;\n")),(0,l.kt)("p",null,"\u5168\u90e8\u81ea\u5b9a\u4e49\u6570\u503c"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"enum Color {\n  Red = 1,\n  Green = 2,\n  Blue = 4,\n}\nlet c: Color = Color.Green;\n")),(0,l.kt)("p",null,"\u679a\u4e3e\u7c7b\u578b\u7684\u952e\u503c\u6620\u5c04"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"enum Color {\n  Red = 1,\n  Green,\n  Blue,\n}\nlet colorName: string = Color[2];\n\nconsole.log(colorName); // \u663e\u793a'Green'\u56e0\u4e3a\u4e0a\u9762\u4ee3\u7801\u91cc\u5b83\u7684\u503c\u662f2\n")),(0,l.kt)("h4",{id:"7any-\u4efb\u610f\u7c7b\u578b-\u4e0d\u9650\u5236"},"7.Any \u4efb\u610f\u7c7b\u578b \u4e0d\u9650\u5236"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'let notSure: any = 4;\nnotSure = "maybe a string instead";\nnotSure = false; // okay, definitely a boolean\n')),(0,l.kt)("p",null,"\u5728\u5bf9\u73b0\u6709\u4ee3\u7801\u8fdb\u884c\u6539\u5199\u7684\u65f6\u5019\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"any"),"\u7c7b\u578b\u662f\u5341\u5206\u6709\u7528\u7684\uff0c\u5b83\u5141\u8bb8\u4f60\u5728\u7f16\u8bd1\u65f6\u53ef\u9009\u62e9\u5730\u5305\u542b\u6216\u79fb\u9664\u7c7b\u578b\u68c0\u67e5\u3002 \u4f60\u53ef\u80fd\u8ba4\u4e3a ",(0,l.kt)("inlineCode",{parentName:"p"},"Object"),"\u6709\u76f8\u4f3c\u7684\u4f5c\u7528\uff0c\u5c31\u50cf\u5b83\u5728\u5176\u5b83\u8bed\u8a00\u4e2d\u90a3\u6837\u3002 \u4f46\u662f ",(0,l.kt)("inlineCode",{parentName:"p"},"Object"),"\u7c7b\u578b\u7684\u53d8\u91cf\u53ea\u662f\u5141\u8bb8\u4f60\u7ed9\u5b83\u8d4b\u4efb\u610f\u503c - \u4f46\u662f\u5374\u4e0d\u80fd\u591f\u5728\u5b83\u4e0a\u9762\u8c03\u7528\u4efb\u610f\u7684\u65b9\u6cd5\uff0c\u5373\u4fbf\u5b83\u771f\u7684\u6709\u8fd9\u4e9b\u65b9\u6cd5\uff1a"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"let notSure: any = 4;\nnotSure.ifItExists(); // okay, ifItExists might exist at runtime\nnotSure.toFixed(); // okay, toFixed exists (but the compiler doesn't check)\n\nlet prettySure: Object = 4;\nprettySure.toFixed(); // Error: Property 'toFixed' doesn't exist on type 'Object'.\n")),(0,l.kt)("h4",{id:"8void-\u65e0\u4efb\u4f55\u7c7b\u578b"},"8.Void \u65e0\u4efb\u4f55\u7c7b\u578b"),(0,l.kt)("p",null,"\u5f53\u51fd\u6570\u6ca1\u6709\u8fd4\u56de\u503c\u65f6\u5019\uff0c\u901a\u5e38\u8fd4\u56de\u503c\u7c7b\u578b\u5c31\u662f void"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'function warnUser(): void {\n  console.log("This is my warning message");\n}\n')),(0,l.kt)("p",null,"\u58f0\u660e\u4e00\u4e2a",(0,l.kt)("inlineCode",{parentName:"p"},"void"),"\u7c7b\u578b\u7684\u53d8\u91cf\uff0c\u53ea\u80fd\u4e3a\u5b83\u8d4b\u4e88",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"null")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"let unusable: void = undefined;\n")),(0,l.kt)("h4",{id:"9null-\u548c-undefined"},"9.null \u548c undefined"),(0,l.kt)("p",null,"TypeScript \u91cc\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\u4e24\u8005\u5404\u81ea\u6709\u81ea\u5df1\u7684\u7c7b\u578b\u5206\u522b\u53eb\u505a",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\u3002 \u548c ",(0,l.kt)("inlineCode",{parentName:"p"},"void"),"\u76f8\u4f3c\uff0c\u5b83\u4eec\u7684\u672c\u8eab\u7684\u7c7b\u578b\u7528\u5904\u4e0d\u662f\u5f88\u5927"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},"// Not much else we can assign to these variables!\nlet u: undefined = undefined;\nlet n: null = null;\n")),(0,l.kt)("p",null,(0,l.kt)("strong",{parentName:"p"},"\u6ce8\u610f\uff1a"),"\u9ed8\u8ba4\u60c5\u51b5\u4e0b\uff0cnull \u548c undefined \u662f\u6240\u6709\u7c7b\u578b\u7684\u5b50\u7c7b\u578b\uff0c\u6bd4\u5982\uff1a",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"\u8d4b\u503c\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"\u7c7b\u578b\u7684\u53d8\u91cf\u3002"),(0,l.kt)("p",null,"\u7136\u800c\uff0c\u5f53\u4f60\u6307\u5b9a\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"--strictNullChecks"),"\u6807\u8bb0\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\u548c",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"\u53ea\u80fd\u8d4b\u503c\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"void"),"\u548c\u5b83\u4eec\u5404\u81ea\u3002 \u8fd9\u80fd\u907f\u514d ",(0,l.kt)("em",{parentName:"p"},"\u5f88\u591a"),"\u5e38\u89c1\u7684\u95ee\u9898\u3002 \u4e5f\u8bb8\u5728\u67d0\u5904\u4f60\u60f3\u4f20\u5165\u4e00\u4e2a ",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"\uff0c\u4f60\u53ef\u4ee5\u4f7f\u7528\u8054\u5408\u7c7b\u578b",(0,l.kt)("inlineCode",{parentName:"p"},"string | null | undefined"),"\u3002 \u518d\u6b21\u8bf4\u660e\uff0c\u7a0d\u540e\u6211\u4eec\u4f1a\u4ecb\u7ecd\u8054\u5408\u7c7b\u578b\u3002"),(0,l.kt)("blockquote",null,(0,l.kt)("p",{parentName:"blockquote"},"\u6ce8\u610f\uff1a\u6211\u4eec\u9f13\u52b1\u5c3d\u53ef\u80fd\u5730\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"--strictNullChecks"))),(0,l.kt)("h4",{id:"10never-\u7c7b\u578b"},"10.never \u7c7b\u578b"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"never"),"\u7c7b\u578b\u8868\u793a\u7684\u662f\u90a3\u4e9b\u6c38\u4e0d\u5b58\u5728\u7684\u503c\u7684\u7c7b\u578b"),(0,l.kt)("ol",null,(0,l.kt)("li",{parentName:"ol"},"\u603b\u662f\u629b\u51fa\u5f02\u5e38"),(0,l.kt)("li",{parentName:"ol"},"\u6839\u672c\u5c31\u4e0d\u4f1a\u6709\u8fd4\u56de\u503c\u7684\u51fd\u6570\u8868\u8fbe\u5f0f\u6216\u7bad\u5934\u51fd\u6570\u8868\u8fbe\u5f0f\u7684\u8fd4\u56de\u503c\u7c7b\u578b"),(0,l.kt)("li",{parentName:"ol"},"\u5f53\u53d8\u91cf\u88ab\u6c38\u4e0d\u4e3a\u771f\u7684\u7c7b\u578b\u4fdd\u62a4\u6240\u7ea6\u675f\u65f6\uff0c\u4e5f\u53ef\u80fd\u4e3a",(0,l.kt)("inlineCode",{parentName:"li"},"never"),"\u7c7b\u578b")),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'// \u8fd4\u56denever\u7684\u51fd\u6570\u5fc5\u987b\u5b58\u5728\u65e0\u6cd5\u8fbe\u5230\u7684\u7ec8\u70b9\nfunction error(message: string): never {\n  throw new Error(message);\n}\n\n// \u63a8\u65ad\u7684\u8fd4\u56de\u503c\u7c7b\u578b\u4e3anever\nfunction fail() {\n  return error("Something failed");\n}\n\n// \u8fd4\u56denever\u7684\u51fd\u6570\u5fc5\u987b\u5b58\u5728\u65e0\u6cd5\u8fbe\u5230\u7684\u7ec8\u70b9\nfunction infiniteLoop(): never {\n  while (true) {}\n}\n')),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"never"),"\u7c7b\u578b\u662f\u4efb\u4f55\u7c7b\u578b\u7684\u5b50\u7c7b\u578b\uff0c\u4e5f\u53ef\u4ee5\u8d4b\u503c\u7ed9\u4efb\u4f55\u7c7b\u578b\uff1b\u7136\u800c\uff0c",(0,l.kt)("em",{parentName:"p"},"\u6ca1\u6709"),"\u7c7b\u578b\u662f",(0,l.kt)("inlineCode",{parentName:"p"},"never"),"\u7684\u5b50\u7c7b\u578b\u6216\u53ef\u4ee5\u8d4b\u503c\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"never"),"\u7c7b\u578b\uff08\u9664\u4e86",(0,l.kt)("inlineCode",{parentName:"p"},"never"),"\u672c\u8eab\u4e4b\u5916\uff09\u3002 \u5373\u4f7f ",(0,l.kt)("inlineCode",{parentName:"p"},"any"),"\u4e5f\u4e0d\u53ef\u4ee5\u8d4b\u503c\u7ed9",(0,l.kt)("inlineCode",{parentName:"p"},"never"),"\u3002"),(0,l.kt)("h4",{id:"11object-\u5bf9\u8c61\u7c7b\u578b"},"11.Object \u5bf9\u8c61\u7c7b\u578b"),(0,l.kt)("p",null,(0,l.kt)("inlineCode",{parentName:"p"},"object"),"\u8868\u793a\u975e\u539f\u59cb\u7c7b\u578b\uff0c\u4e5f\u5c31\u662f\u9664",(0,l.kt)("inlineCode",{parentName:"p"},"number"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"string"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"boolean"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"symbol"),"\uff0c",(0,l.kt)("inlineCode",{parentName:"p"},"null"),"\u6216",(0,l.kt)("inlineCode",{parentName:"p"},"undefined"),"\u4e4b\u5916\u7684\u7c7b\u578b\u3002"),(0,l.kt)("p",null,"\u4f7f\u7528",(0,l.kt)("inlineCode",{parentName:"p"},"object"),"\u7c7b\u578b\uff0c\u5c31\u53ef\u4ee5\u66f4\u597d\u7684\u8868\u793a\u50cf",(0,l.kt)("inlineCode",{parentName:"p"},"Object.create"),"\u8fd9\u6837\u7684 API\u3002"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'declare function create(o: object | null): void;\n\ncreate({ prop: 0 }); // OK\ncreate(null); // OK\n\ncreate(42); // Error\ncreate("string"); // Error\ncreate(false); // Error\ncreate(undefined); // Error\n')),(0,l.kt)("h4",{id:"12\u7c7b\u578b\u65ad\u8a00-\u4f60\u77e5\u9053\u81ea\u5df1\u5728\u5e72\u5565"},"12.\u7c7b\u578b\u65ad\u8a00 \u4f60\u77e5\u9053\u81ea\u5df1\u5728\u5e72\u5565"),(0,l.kt)("p",null,"\u67d0\u4e9b\u65f6\u5019\u4f60\u6bd4 TypeScript \u66f4\u4e86\u89e3\u67d0\u4e2a\u503c\u7684\u7c7b\u578b\u8be6\u7ec6\u4fe1\u606f\u3002\u4f60\u53ef\u4ee5\u901a\u8fc7",(0,l.kt)("inlineCode",{parentName:"p"},"\u7c7b\u578b\u65ad\u8a00"),"\u544a\u8bc9\u7f16\u8bd1\u5668\uff0c\u4f60\u77e5\u9053\u81ea\u5df1\u5728\u5e72\u5565\uff0c\u4e0d\u9700\u8981 typescript \u5e2e\u5fd9\u8fdb\u884c\u68c0\u67e5\u7c7b\u578b\u3002"),(0,l.kt)("h5",{id:"1\u5c16\u62ec\u53f7-\u8bed\u6cd5\u65ad\u8a00"},"1.\u5c16\u62ec\u53f7 \u8bed\u6cd5\u65ad\u8a00"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'let someValue: any = "this is a string";\n\nlet strLength: number = (<string>someValue).length;\n')),(0,l.kt)("h5",{id:"2as-\u8bed\u6cd5"},"2.",(0,l.kt)("inlineCode",{parentName:"h5"},"as")," \u8bed\u6cd5"),(0,l.kt)("pre",null,(0,l.kt)("code",{parentName:"pre",className:"language-typescript"},'let someValue: any = "this is a string";\n\nlet strLength: number = (someValue as string).length;\n')),(0,l.kt)("p",null,"\u4e24\u79cd\u65b9\u6cd5\u7b49\u4ef7\uff0c\u7136\u800c\uff0c\u5f53\u4f60\u5728 TypeScript \u91cc\u4f7f\u7528 JSX \u65f6\uff0c\u53ea\u6709 ",(0,l.kt)("inlineCode",{parentName:"p"},"as"),"\u8bed\u6cd5\u65ad\u8a00\u662f\u88ab\u5141\u8bb8\u7684\u3002"))}m.isMDXComponent=!0}}]);