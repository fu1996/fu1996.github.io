"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[5626],{3905:(e,t,n)=>{n.d(t,{Zo:()=>u,kt:()=>g});var r=n(67294);function a(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function o(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function l(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?o(Object(n),!0).forEach((function(t){a(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):o(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function s(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var i=r.createContext({}),c=function(e){var t=r.useContext(i),n=t;return e&&(n="function"==typeof e?e(t):l(l({},t),e)),n},u=function(e){var t=c(e.components);return r.createElement(i.Provider,{value:t},e.children)},p="mdxType",m={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},d=r.forwardRef((function(e,t){var n=e.components,a=e.mdxType,o=e.originalType,i=e.parentName,u=s(e,["components","mdxType","originalType","parentName"]),p=c(n),d=a,g=p["".concat(i,".").concat(d)]||p[d]||m[d]||o;return n?r.createElement(g,l(l({ref:t},u),{},{components:n})):r.createElement(g,l({ref:t},u))}));function g(e,t){var n=arguments,a=t&&t.mdxType;if("string"==typeof e||a){var o=n.length,l=new Array(o);l[0]=d;var s={};for(var i in t)hasOwnProperty.call(t,i)&&(s[i]=t[i]);s.originalType=e,s[p]="string"==typeof e?e:a,l[1]=s;for(var c=2;c<o;c++)l[c]=n[c];return r.createElement.apply(null,l)}return r.createElement.apply(null,n)}d.displayName="MDXCreateElement"},94215:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=n(87462),a=(n(67294),n(3905));const o={authors:"junkui",title:"FCC\u4e2d\u7684ES6\u77e5\u8bc6\u70b9\u6c47\u603b",categories:["js"],tags:["js","ES6"],slug:"/",date:new Date("2021-01-06T20:59:22.000Z")},l="ES6",s={unversionedId:"js\u57fa\u7840/FCC\u4e2d\u7684ES6\u77e5\u8bc6\u70b9\u6c47\u603b",id:"js\u57fa\u7840/FCC\u4e2d\u7684ES6\u77e5\u8bc6\u70b9\u6c47\u603b",title:"FCC\u4e2d\u7684ES6\u77e5\u8bc6\u70b9\u6c47\u603b",description:"1.const \u548c let",source:"@site/js/js\u57fa\u7840/FCC\u4e2d\u7684ES6\u77e5\u8bc6\u70b9\u6c47\u603b.md",sourceDirName:"js\u57fa\u7840",slug:"/",permalink:"/js/",draft:!1,editUrl:"https://github.com/fu1996/fu1996.github.io/tree/main/js/js\u57fa\u7840/FCC\u4e2d\u7684ES6\u77e5\u8bc6\u70b9\u6c47\u603b.md",tags:[{label:"js",permalink:"/js/tags/js"},{label:"ES6",permalink:"/js/tags/es-6"}],version:"current",lastUpdatedBy:"fjk",lastUpdatedAt:1741598022,formattedLastUpdatedAt:"2025\u5e743\u670810\u65e5",frontMatter:{authors:"junkui",title:"FCC\u4e2d\u7684ES6\u77e5\u8bc6\u70b9\u6c47\u603b",categories:["js"],tags:["js","ES6"],slug:"/",date:"2021-01-06T20:59:22.000Z"},sidebar:"tutorialSidebar",previous:{title:"\u5236\u4f5c\u4e00\u4e2a\u4f01\u4e1a\u7ea7\u811a\u624b\u67b6",permalink:"/js/cli/\u5236\u4f5c\u4e00\u4e2a\u4f01\u4e1a\u7ea7\u811a\u624b\u67b6"},next:{title:"JS\u57fa\u784001-\u53d8\u91cf\u7c7b\u578b\u548c\u8ba1\u7b97\u6c47\u603b",permalink:"/js/js\u57fa\u7840/JS\u57fa\u784001-\u53d8\u91cf\u7c7b\u578b\u548c\u8ba1\u7b97"}},i={},c=[{value:"1.const \u548c let",id:"1const-\u548c-let",level:2},{value:"2.\u7bad\u5934\u51fd\u6570\u548c\u9ed8\u8ba4\u503c \u4ee5\u53ca args",id:"2\u7bad\u5934\u51fd\u6570\u548c\u9ed8\u8ba4\u503c-\u4ee5\u53ca-args",level:2},{value:"3.\u6269\u5c55\u8fd0\u7b97\u7b26",id:"3\u6269\u5c55\u8fd0\u7b97\u7b26",level:2},{value:"4.\u5bf9\u8c61\u5c5e\u6027\u51bb\u7ed3",id:"4\u5bf9\u8c61\u5c5e\u6027\u51bb\u7ed3",level:2},{value:"5.\u89e3\u6784\u8d4b\u503c...",id:"5\u89e3\u6784\u8d4b\u503c",level:2},{value:"1.\u5bf9\u8c61\u7684\u7ed3\u6784\u8d4b\u503c",id:"1\u5bf9\u8c61\u7684\u7ed3\u6784\u8d4b\u503c",level:3},{value:"2.\u6570\u7ec4\u7684\u7ed3\u6784\u8d4b\u503c",id:"2\u6570\u7ec4\u7684\u7ed3\u6784\u8d4b\u503c",level:3},{value:"3.\u4f20\u53c2\u65f6\u5019\u5bf9\u53c2\u6570\u8fdb\u884c\u89e3\u6784",id:"3\u4f20\u53c2\u65f6\u5019\u5bf9\u53c2\u6570\u8fdb\u884c\u89e3\u6784",level:3},{value:"6.\u6a21\u677f\u5b57\u7b26\u4e32",id:"6\u6a21\u677f\u5b57\u7b26\u4e32",level:2},{value:"7.\u5bf9\u8c61\u901f\u5199",id:"7\u5bf9\u8c61\u901f\u5199",level:2},{value:"1.\u5bf9\u8c61\u7684\u952e\u503c\u4e0a",id:"1\u5bf9\u8c61\u7684\u952e\u503c\u4e0a",level:3},{value:"2.\u5bf9\u8c61\u5b58\u50a8\u7684\u65b9\u6cd5\u4e0a",id:"2\u5bf9\u8c61\u5b58\u50a8\u7684\u65b9\u6cd5\u4e0a",level:3},{value:"8.\u7c7b\u7ec4\u4ef6 \u66ff\u6362\u6784\u9020\u51fd\u6570",id:"8\u7c7b\u7ec4\u4ef6-\u66ff\u6362\u6784\u9020\u51fd\u6570",level:2},{value:"1.\u6784\u9020\u51fd\u6570\u548c\u7c7b",id:"1\u6784\u9020\u51fd\u6570\u548c\u7c7b",level:3},{value:"2.\u4f7f\u7528 setter \u548c getter \u3010Java\u3011",id:"2\u4f7f\u7528-setter-\u548c-getter-java",level:3},{value:"9.\u4f7f\u7528 script \u7684 type = module \u6a21\u5757\u5316",id:"9\u4f7f\u7528-script-\u7684-type--module-\u6a21\u5757\u5316",level:2},{value:"1.export \u548c import",id:"1export-\u548c-import",level:3},{value:"2.\u9ed8\u8ba4\u5bfc\u51fa",id:"2\u9ed8\u8ba4\u5bfc\u51fa",level:3},{value:"10.\u4f7f\u7528 promise \u5bf9\u8c61",id:"10\u4f7f\u7528-promise-\u5bf9\u8c61",level:2}],u={toc:c},p="wrapper";function m(e){let{components:t,...n}=e;return(0,a.kt)(p,(0,r.Z)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",{id:"es6"},"ES6"),(0,a.kt)("h2",{id:"1const-\u548c-let"},"1.const \u548c let"),(0,a.kt)("h2",{id:"2\u7bad\u5934\u51fd\u6570\u548c\u9ed8\u8ba4\u503c-\u4ee5\u53ca-args"},"2.\u7bad\u5934\u51fd\u6570\u548c\u9ed8\u8ba4\u503c \u4ee5\u53ca args"),(0,a.kt)("h2",{id:"3\u6269\u5c55\u8fd0\u7b97\u7b26"},"3.\u6269\u5c55\u8fd0\u7b97\u7b26"),(0,a.kt)("h2",{id:"4\u5bf9\u8c61\u5c5e\u6027\u51bb\u7ed3"},"4.\u5bf9\u8c61\u5c5e\u6027\u51bb\u7ed3"),(0,a.kt)("h2",{id:"5\u89e3\u6784\u8d4b\u503c"},"5.\u89e3\u6784\u8d4b\u503c..."),(0,a.kt)("h3",{id:"1\u5bf9\u8c61\u7684\u7ed3\u6784\u8d4b\u503c"},"1.\u5bf9\u8c61\u7684\u7ed3\u6784\u8d4b\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u57fa\u7840\nconst HIGH_TEMPERATURES = {\n  yesterday: 75,\n  today: 77,\n  tomorrow: 80,\n};\n\nconst { today, tomorrow } = HIGH_TEMPERATURES;\n\n// \u7ed3\u6784\u8d4b\u503c \u5728\u63d0\u53d6\u503c\u65f6\u5206\u914d\u65b0\u7684\u53d8\u91cf\u540d\u79f0  highToday = 77\nconst { today: highToday, tomorrow: highTomorrow } = HIGH_TEMPERATURES;\n\n// \u591a\u5c42\u89e3\u6784\nconst LOCAL_FORECAST = {\n  yesterday: { low: 61, high: 75 },\n  today: { low: 64, high: 77 },\n  tomorrow: { low: 68, high: 80 },\n};\nconst {\n  today: { low: lowToday, high: highToday },\n} = LOCAL_FORECAST;\n")),(0,a.kt)("h3",{id:"2\u6570\u7ec4\u7684\u7ed3\u6784\u8d4b\u503c"},"2.\u6570\u7ec4\u7684\u7ed3\u6784\u8d4b\u503c"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// \u57fa\u7840\nconst [a, b] = [1, 2, 3, 4, 5, 6];\nconsole.log(a, b); // 1, 2\n\n// \u9017\u53f7\u5f53\u4f5c\u7d22\u5f15\nconst [a, b, , , c] = [1, 2, 3, 4, 5, 6];\nconsole.log(a, b, c); // 1, 2, 5\n\n// \u5e94\u7528 \u5feb\u901f\u4ea4\u6362\u4e24\u4e2a\u53c2\u6570\u6570\u503c\nlet a = 8,\n  b = 6;\n[b, a] = [a, b];\n\n//\u7ed3\u5408\u6269\u5c55\u8fd0\u7b97\u7b26\nconst [a, b, ...arr] = [1, 2, 3, 4, 5, 7];\nconsole.log(a, b); // 1, 2\nconsole.log(arr); // [3, 4, 5, 7]\n\n// \u53d8\u6210slice \u65b9\u6cd5\nconst source = [1, 2, 3, 4, 5, 6, 7, 8, 9, 10];\nfunction removeFirstTwo(list) {\n  const [, , ...arr] = list;\n  console.log(arr, list);\n  return arr;\n}\nconst arr = removeFirstTwo(source);\n")),(0,a.kt)("h3",{id:"3\u4f20\u53c2\u65f6\u5019\u5bf9\u53c2\u6570\u8fdb\u884c\u89e3\u6784"},"3.\u4f20\u53c2\u65f6\u5019\u5bf9\u53c2\u6570\u8fdb\u884c\u89e3\u6784"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"const stats = {\n  max: 56.78,\n  standard_deviation: 4.34,\n  median: 34.54,\n  mode: 23.87,\n  min: -0.75,\n  average: 35.85\n};\n\nconst half = ({max,min}) => (max+min) / 2.0;\n\n")),(0,a.kt)("h2",{id:"6\u6a21\u677f\u5b57\u7b26\u4e32"},"6.\u6a21\u677f\u5b57\u7b26\u4e32"),(0,a.kt)("h2",{id:"7\u5bf9\u8c61\u901f\u5199"},"7.\u5bf9\u8c61\u901f\u5199"),(0,a.kt)("h3",{id:"1\u5bf9\u8c61\u7684\u952e\u503c\u4e0a"},"1.\u5bf9\u8c61\u7684\u952e\u503c\u4e0a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"const getMousePosition = (x, y) => ({\n  x: x,\n  y: y,\n});\n\nconst getMousePosition = (x, y) => ({ x, y });\n")),(0,a.kt)("h3",{id:"2\u5bf9\u8c61\u5b58\u50a8\u7684\u65b9\u6cd5\u4e0a"},"2.\u5bf9\u8c61\u5b58\u50a8\u7684\u65b9\u6cd5\u4e0a"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// OLD\nconst person = {\n  name: "Taylor",\n  sayHello: function () {\n    return `Hello! My name is ${this.name}.`;\n  },\n};\n\n// NEW\nconst person = {\n  name: "Taylor",\n  sayHello() {\n    return `Hello! My name is ${this.name}.`;\n  },\n};\n')),(0,a.kt)("h2",{id:"8\u7c7b\u7ec4\u4ef6-\u66ff\u6362\u6784\u9020\u51fd\u6570"},"8.\u7c7b\u7ec4\u4ef6 \u66ff\u6362\u6784\u9020\u51fd\u6570"),(0,a.kt)("h3",{id:"1\u6784\u9020\u51fd\u6570\u548c\u7c7b"},"1.\u6784\u9020\u51fd\u6570\u548c\u7c7b"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u6784\u9020\u51fd\u6570\nvar SpaceShuttle = function (targetPlanet) {\n  this.targetPlanet = targetPlanet;\n};\nvar zeus = new SpaceShuttle("Jupiter");\n\n// \u7c7b \u548cpython\u4e00\u6837\nvar SpaceShuttle = function (targetPlanet) {\n  this.targetPlanet = targetPlanet;\n};\nvar zeus = new SpaceShuttle("Jupiter");\n')),(0,a.kt)("h3",{id:"2\u4f7f\u7528-setter-\u548c-getter-java"},"2.\u4f7f\u7528 setter \u548c getter \u3010Java\u3011"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},"// Only change code below this line\nclass Thermostat {\n  constructor(temperature) {\n    this._temperature = (5 / 9) * (temperature - 32);\n  }\n  get temperature() {\n    return this._temperature;\n  }\n  set temperature(temperature) {\n    this._temperature = temperature;\n  }\n}\n// Only change code above this line\n\nconst thermos = new Thermostat(76); // Setting in Fahrenheit scale\nlet temp = thermos.temperature; // 24.44 in Celsius\nthermos.temperature = 26;\ntemp = thermos.temperature; // 26 in Celsius\nconsole.log(temp);\n")),(0,a.kt)("h2",{id:"9\u4f7f\u7528-script-\u7684-type--module-\u6a21\u5757\u5316"},"9.\u4f7f\u7528 script \u7684 type = module \u6a21\u5757\u5316"),(0,a.kt)("h3",{id:"1export-\u548c-import"},"1.export \u548c import"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-javascript"},'// \u5bfc\u5165\u5168\u90e8\u5185\u5bb9\nimport * as stringFunctions from "./string_functions.js";\n// Only change code above this line\n\nstringFunctions.uppercaseString("hello");\nstringFunctions.lowercaseString("WORLD!");\n')),(0,a.kt)("h3",{id:"2\u9ed8\u8ba4\u5bfc\u51fa"},"2.\u9ed8\u8ba4\u5bfc\u51fa"),(0,a.kt)("pre",null,(0,a.kt)("code",{parentName:"pre",className:"language-JavaScript"},"// export default\u4e0evar\uff0clet\u6216const \u4e0d\u80fd\u4e00\u8d77\u4f7f\u7528\n// named function\nexport default function add(x, y) {\n  return x + y;\n}\n\n// anonymous function\nexport default function(x, y) {\n  return x + y;\n}\n")),(0,a.kt)("h2",{id:"10\u4f7f\u7528-promise-\u5bf9\u8c61"},"10.\u4f7f\u7528 promise \u5bf9\u8c61"))}m.isMDXComponent=!0}}]);