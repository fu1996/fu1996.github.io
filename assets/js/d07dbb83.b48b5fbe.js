"use strict";(self.webpackChunkmy_website=self.webpackChunkmy_website||[]).push([[9141],{3905:(e,t,r)=>{r.d(t,{Zo:()=>i,kt:()=>m});var n=r(67294);function o(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function l(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){o(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function p(e,t){if(null==e)return{};var r,n,o=function(e,t){if(null==e)return{};var r,n,o={},a=Object.keys(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||(o[r]=e[r]);return o}(e,t);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(n=0;n<a.length;n++)r=a[n],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var c=n.createContext({}),d=function(e){var t=n.useContext(c),r=t;return e&&(r="function"==typeof e?e(t):l(l({},t),e)),r},i=function(e){var t=d(e.components);return n.createElement(c.Provider,{value:t},e.children)},s="mdxType",k={inlineCode:"code",wrapper:function(e){var t=e.children;return n.createElement(n.Fragment,{},t)}},u=n.forwardRef((function(e,t){var r=e.components,o=e.mdxType,a=e.originalType,c=e.parentName,i=p(e,["components","mdxType","originalType","parentName"]),s=d(r),u=o,m=s["".concat(c,".").concat(u)]||s[u]||k[u]||a;return r?n.createElement(m,l(l({ref:t},i),{},{components:r})):n.createElement(m,l({ref:t},i))}));function m(e,t){var r=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var a=r.length,l=new Array(a);l[0]=u;var p={};for(var c in t)hasOwnProperty.call(t,c)&&(p[c]=t[c]);p.originalType=e,p[s]="string"==typeof e?e:o,l[1]=p;for(var d=2;d<a;d++)l[d]=r[d];return n.createElement.apply(null,l)}return n.createElement.apply(null,r)}u.displayName="MDXCreateElement"},66802:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>k,frontMatter:()=>a,metadata:()=>p,toc:()=>d});var n=r(87462),o=(r(67294),r(3905));const a={authors:"junkui",title:"01-docker\u5e38\u7528\u7684\u547d\u4ee4",categories:["\u540e\u7aef","docker"],tags:["docker"],slug:"/",date:new Date("2021-03-29T21:45:14.000Z")},l="\u5e38\u7528\u547d\u4ee4",p={unversionedId:"docker\u5e38\u7528\u7684\u547d\u4ee4",id:"docker\u5e38\u7528\u7684\u547d\u4ee4",title:"01-docker\u5e38\u7528\u7684\u547d\u4ee4",description:"\u542f\u52a8\u91cd\u542f\u547d\u4ee4",source:"@site/docker/01-docker\u5e38\u7528\u7684\u547d\u4ee4.md",sourceDirName:".",slug:"/",permalink:"/docker/",draft:!1,editUrl:"https://github.com/fu1996/fu1996.github.io/tree/main/docker/01-docker\u5e38\u7528\u7684\u547d\u4ee4.md",tags:[{label:"docker",permalink:"/docker/tags/docker"}],version:"current",lastUpdatedBy:"\u4ed8\u4fca\u594e",lastUpdatedAt:1711900781,formattedLastUpdatedAt:"2024\u5e743\u670831\u65e5",sidebarPosition:1,frontMatter:{authors:"junkui",title:"01-docker\u5e38\u7528\u7684\u547d\u4ee4",categories:["\u540e\u7aef","docker"],tags:["docker"],slug:"/",date:"2021-03-29T21:45:14.000Z"},sidebar:"tutorialSidebar",next:{title:"02-docker\u67e5\u6f0f\u8865\u7f3a",permalink:"/docker/docker\u67e5\u6f0f\u8865\u7f3a"}},c={},d=[{value:"\u542f\u52a8\u91cd\u542f\u547d\u4ee4",id:"\u542f\u52a8\u91cd\u542f\u547d\u4ee4",level:2},{value:"\u8fdb\u5165\u4e00\u4e2a\u5bb9\u5668",id:"\u8fdb\u5165\u4e00\u4e2a\u5bb9\u5668",level:2},{value:"\u4e0e\u672c\u673a\u4e92\u4f20\u6587\u4ef6",id:"\u4e0e\u672c\u673a\u4e92\u4f20\u6587\u4ef6",level:2},{value:"docker \u6279\u91cf\u5220\u9664",id:"docker-\u6279\u91cf\u5220\u9664",level:2},{value:"\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u6570\u636e\u2014\u2014\u6570\u636e\u5377",id:"\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u6570\u636e\u6570\u636e\u5377",level:2}],i={toc:d},s="wrapper";function k(e){let{components:t,...a}=e;return(0,o.kt)(s,(0,n.Z)({},i,a,{components:t,mdxType:"MDXLayout"}),(0,o.kt)("h1",{id:"\u5e38\u7528\u547d\u4ee4"},"\u5e38\u7528\u547d\u4ee4"),(0,o.kt)("h2",{id:"\u542f\u52a8\u91cd\u542f\u547d\u4ee4"},"\u542f\u52a8\u91cd\u542f\u547d\u4ee4"),(0,o.kt)("p",null,"docker \u542f\u52a8\u547d\u4ee4,docker \u91cd\u542f\u547d\u4ee4,docker \u5173\u95ed\u547d\u4ee4"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"\u542f\u52a8        systemctl start docker\n\u5b88\u62a4\u8fdb\u7a0b\u91cd\u542f   sudo systemctl daemon-reload\n\u91cd\u542fdocker\u670d\u52a1   systemctl restart  docker\n\u91cd\u542fdocker\u670d\u52a1  sudo service docker restart\n\u5173\u95eddocker service docker stop\n\u5173\u95eddocker systemctl stop docker\n")),(0,o.kt)("h2",{id:"\u8fdb\u5165\u4e00\u4e2a\u5bb9\u5668"},"\u8fdb\u5165\u4e00\u4e2a\u5bb9\u5668"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"sudo docker exec -it [container_id] bash\n")),(0,o.kt)("h2",{id:"\u4e0e\u672c\u673a\u4e92\u4f20\u6587\u4ef6"},"\u4e0e\u672c\u673a\u4e92\u4f20\u6587\u4ef6"),(0,o.kt)("p",null,"\u9996\u5148\u9700\u8981\u786e\u5b9a docker \u5bb9\u5668\u7684 container_id,\u53ef\u4ee5\u4f7f\u7528 docker ps -a \u67e5\u770b\u4f60\u8981\u64cd\u4f5c\u7684 docker \u5bb9\u5668\u7684 container_id\ndocker \u5bb9\u5668\u5411\u672c\u673a\u4f20\u9001\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker cp container_id:docker\u5bb9\u5668\u5185\u7684\u6587\u4ef6\u5168\u8def\u5f84 \u672c\u673a\u4fdd\u5b58\u6587\u4ef6\u7684\u5168\u8def\u5f84\n")),(0,o.kt)("p",null,"\u4f8b\u5982\uff1adocker cp 4a2f08d2c1f8:/data1/configure.txt E:\\PHP\\configure.txt\n\u672c\u673a\u5411 docker \u5bb9\u5668\u4f20\u9001\u6587\u4ef6"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre"},"docker cp \u672c\u673a\u4fdd\u5b58\u6587\u4ef6\u7684\u5168\u8def\u5f84 container_id:docker\u5bb9\u5668\u5185\u7684\u6587\u4ef6\u5168\u8def\u5f84\n")),(0,o.kt)("p",null,"\u4f8b\u5982\uff1adocker cp E:\\PHP\\configure.txt 4a2f08d2c1f8:/data1/configure.txt"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5b89\u88c5 docker")),(0,o.kt)("p",null,"CentOS7 # \u5b89\u88c5\u4f9d\u8d56\u5305 yum install -y yum-utils device-mapper-persistent-data lvm2 # \u6dfb\u52a0 Docker \u8f6f\u4ef6\u5305\u6e90 yum-config-manager \\ --add-repo \\ ",(0,o.kt)("a",{parentName:"p",href:"https://download.docker.com/linux/centos/docker-ce.repo"},"https://download.docker.com/linux/centos/docker-ce.repo")," # \u66f4\u65b0 yum \u5305\u7d22\u5f15 yum makecache fast # \u5b89\u88c5 Docker CE yum install docker-ce # \u542f\u52a8 systemctl start docker # \u6d4b\u8bd5 docker run hello-world docker version # \u5378\u8f7d yum remove docker-ce rm -rf /var/lib/docker"),(0,o.kt)("p",null,"Ubuntu14.06/16.04 # \u5b89\u88c5\u8bc1\u4e66 $ sudo apt-get install \\ apt-transport-https \\ ca-certificates \\ curl \\ software-properties-common # \u6dfb\u52a0 Docker \u6e90\u7684 KEY $ curl -fsSL ",(0,o.kt)("a",{parentName:"p",href:"https://download.docker.com/linux/ubuntu/gpg"},"https://download.docker.com/linux/ubuntu/gpg"),' | sudo apt-key add - # \u6dfb\u52a0 Docker \u8f6f\u4ef6\u5305\u6e90 $ sudo add-apt-repository \\ "deb ',"[arch=amd64]"," ",(0,o.kt)("a",{parentName:"p",href:"https://download.docker.com/linux/ubuntu"},"https://download.docker.com/linux/ubuntu"),' \\ $(lsb_release -cs) \\ stable" # \u66f4\u65b0 apt \u5305\u7d22\u5f15 $ sudo apt-get update # \u5b89\u88c5 Docker CE $ sudo apt-get install docker-ce # \u6d4b\u8bd5 sudo docker run hello-world sudo docker version # \u5378\u8f7d Docker CE $ sudo apt-get purge docker-ce $ sudo rm -rf /var/lib/docker'),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"linux")),(0,o.kt)("p",null,"\u81ea\u52a8\u914d\u7f6e Docker \u52a0\u901f\u5668\uff08\u63a8\u8350\uff09"),(0,o.kt)("p",null,(0,o.kt)("em",{parentName:"p"},"\u9002\u7528\u4e8e Ubuntu14.04\u3001Debian\u3001CentOS6 \u3001CentOS7\u3001Fedora\u3001Arch Linux\u3001openSUSE Leap 42.1")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://link.jianshu.com/?t=https://www.daocloud.io/mirror#accelerator-doc"},"registry-mirro"),"\u4e0b\xb7",(0,o.kt)("a",{parentName:"p",href:"https://link.jianshu.com/?t=https://www.daocloud.io/mirror#accelerator-doc"},"r \u914d\u7f6e\u547d\u4ee4")," \u5982\u4e0b\uff08\u6ce8\u610f\u4fee\u6539\u4e3a\u81ea\u5df1\u7684\u5730\u5740\uff09\uff1a"),(0,o.kt)("p",null,"curl -sSL ",(0,o.kt)("a",{parentName:"p",href:"https://get.daocloud.io/daotools/set_mirror.sh"},"https://get.daocloud.io/daotools/set_mirror.sh")," | sh -s http://\u4f60\u7684\u7684\u5730\u5740.m.daocloud.io"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5728\u914d\u7f6e\u5b8c\u6210\u540e\u6839\u636e\u7ec8\u7aef\u4e2d\u7684\u63d0\u793a\u91cd\u542f docker \u4f7f\u914d\u7f6e\u751f\u6548\u3002")),(0,o.kt)("p",null,"\u624b\u52a8\u914d\u7f6e Docker \u52a0\u901f\u5668"),(0,o.kt)("p",null,"Docker \u7248\u672c\u5728 1.8 - 1.11"),(0,o.kt)("p",null,"\u627e\u5230 Docker \u914d\u7f6e\u6587\u4ef6\uff0c\u4e0d\u540c\u7684 Linux \u53d1\u884c\u7248\u7684\u914d\u7f6e\u8def\u5f84\u4e0d\u540c\uff0c\u5177\u4f53\u8def\u5f84\u8bf7\u53c2\u8003 ",(0,o.kt)("a",{parentName:"p",href:"https://link.jianshu.com/?t=https://docs.docker.com/engine/admin/"},"Docker \u5b98\u65b9\u6587\u6863")),(0,o.kt)("p",null,"\u5728\u914d\u7f6e\u6587\u4ef6\u4e2d\u7684 DOCKER_OPTS \u52a0\u5165"),(0,o.kt)("p",null,"--registry-mirror=\u4f60\u7684\u52a0\u901f\u5730\u5740"),(0,o.kt)("p",null,"\u91cd\u542f Docker\uff08\u4e0d\u540c\u7684 Linux \u53d1\u884c\u7248\u7684\u91cd\u542f\u547d\u4ee4\u4e0d\u4e00\u5b9a\u76f8\u540c\uff09"),(0,o.kt)("p",null,"service docker restart"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.daocloud.io/mirror"},"https://www.daocloud.io/mirror")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(39667).Z,width:"626",height:"268"})),(0,o.kt)("p",null,"\u8fdb\u5165\u5bb9\u5668 id \u4e3a xyz \u7684\u63a7\u5236\u53f0"),(0,o.kt)("p",null,"docker exec -it xyz sh"),(0,o.kt)("p",null,"docker \u955c\u50cf\u914d\u7f6e\u6e90\u6587\u4ef6\uff1a"),(0,o.kt)("p",null,"/etc/docker/daemon.json"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(39667).Z,width:"626",height:"268"})),(0,o.kt)("p",null,"\u7ed9\u955c\u50cf\u6253\u6807\u8bb0"),(0,o.kt)("p",null,"docker tag"),(0,o.kt)("p",null,"\u5bfc\u51fa\u548c\u5bfc\u5165\u955c\u50cf"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(39667).Z,width:"626",height:"268"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u521b\u5efa\u5bb9\u5668\u5e38\u7528\u547d\u4ee4\uff1a")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"docker container run ","[cmd]")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(39667).Z,width:"626",height:"268"})),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(39667).Z,width:"626",height:"268"})),(0,o.kt)("p",null,"docker container run ","[cmd]"),(0,o.kt)("p",null,"run \u7684\u53c2\u6570\uff1a\u5e38\u7528\u7684 -itd"),(0,o.kt)("p",null,"ctrl+ p + q \u9000\u51fa\u5f53\u524d\u5bb9\u5668\u547d\u4ee4\u884c\u4f46\u4e0d\u7ed3\u675f\u5bb9\u5668"),(0,o.kt)("p",null,"--cpus :\u540e\u9762\u53c2\u6570\u662f\u6838\u6570"),(0,o.kt)("p",null,"--memory \uff1a\u53c2\u6570\u662f\u5185\u5b58\u5927\u5c0f 512m"),(0,o.kt)("p",null,"\u800c swap \uff1a\u800c\u4ea4\u6362\u533a\u7684\u5185\u5b58\u662f--memory \u7684 2 \u500d \uff0c\u5728\u5185\u5b58\u4e0d\u591f\u65f6\u542f\u7528\uff0c\u6bd4\u5185\u5b58\u6162\u3002"),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u7ba1\u7406\u5bb9\u5668\u5e38\u7528\u7684\u547d\u4ee4\uff1a")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(39667).Z,width:"626",height:"268"})),(0,o.kt)("p",null,"\u8fdb\u5165 nginx03 \u4f2a\u7ec8\u7aef"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(39667).Z,width:"626",height:"268"})),(0,o.kt)("p",null,"\u5217\u51fa bs1 \u7684 root \u76ee\u5f55\uff0c\u5e76\u62f7\u8d1d anaconda-ks.cfg \u6587\u4ef6\u5230\u8fd9\u91cc"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(39667).Z,width:"626",height:"268"})),(0,o.kt)("p",null,"sudo pip3 install virtualenvwrapper -i ",(0,o.kt)("a",{parentName:"p",href:"http://pypi.douban.com/simple/"},"http://pypi.douban.com/simple/")," --trusted-host=pypi.douban.com/simple"),(0,o.kt)("p",null,"\u5176\u4ed6\u4e66\u7b7e"),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/Sun_White_Boy/article/details/81144924"},"https://blog.csdn.net/Sun_White_Boy/article/details/81144924")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/qq_37189082/article/details/97658103"},"https://blog.csdn.net/qq_37189082/article/details/97658103")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://www.cnblogs.com/ZhangRuoXu/p/6370107.html"},"https://www.cnblogs.com/ZhangRuoXu/p/6370107.html")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://zhuanlan.zhihu.com/p/137114974"},"https://zhuanlan.zhihu.com/p/137114974")),(0,o.kt)("p",null,(0,o.kt)("a",{parentName:"p",href:"https://blog.csdn.net/sirobot/article/details/106888683"},"https://blog.csdn.net/sirobot/article/details/106888683")),(0,o.kt)("h2",{id:"docker-\u6279\u91cf\u5220\u9664"},"docker \u6279\u91cf\u5220\u9664"),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"\u6740\u6b7b\u6240\u6709\u6b63\u5728\u8fd0\u884c\u7684\u5bb9\u5668\ndocker kill $(docker ps -a -q)\n\n\u5220\u9664\u6240\u6709\u5df2\u7ecf\u505c\u6b62\u7684\u5bb9\u5668\ndocker rm $(docker ps -a -q)\n\n\u5220\u9664\u6240\u6709\u672a\u6253 dangling \u6807\u7b7e\u7684\u955c\u50cf\ndocker rmi $(docker images -q -f dangling=true)\n\n\u5220\u9664\u6240\u6709\u955c\u50cf\ndocker rmi $(docker images -q)\n\n\u5f3a\u5236\u5220\u9664\u955c\u50cf\u540d\u79f0\u4e2d\u5305\u542b\u201cdoss-api\u201d\u7684\u955c\u50cf\ndocker rmi --force $(docker images | grep doss-api | awk '{print $3}')\n")),(0,o.kt)("h2",{id:"\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u6570\u636e\u6570\u636e\u5377"},"\u7ba1\u7406\u5e94\u7528\u7a0b\u5e8f\u6570\u636e\u2014\u2014\u6570\u636e\u5377"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(51146).Z,width:"901",height:"598"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"volume \u6570\u636e\u5377")),(0,o.kt)("p",null,"\u4f7f\u7528\u672c\u5730\u6620\u5c04\u5230\u5bb9\u5668\u7684\u6570\u636e\u5377\uff0c\u4e00\u767e\u4e2a\u5bb9\u5668\u53ef\u4ee5\u4f7f\u7528\u76f8\u540c\u7684\u672c\u4e8b\u6570\u636e\u5377\u3002\u5b9e\u73b0\u6570\u636e\u5171\u4eab\u3002 \u548c-v \u5dee\u4e0d\u591a\uff0c\u4f46\u662f-v \u4e0d\u901a\u7528\u3002"),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(30917).Z,width:"1292",height:"506"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Bind Mounts \u7ed1\u5b9a\u6302\u8f7d","*","*"),"\u5df2\u7ecf\u5b58\u5728","*",(0,o.kt)("strong",{parentName:"p"},"*","\u4e8e\u5bbf\u4e3b\u673a\u7684\u6570\u636e")),(0,o.kt)("p",null,(0,o.kt)("img",{alt:"img",src:r(30917).Z,width:"1292",height:"506"})),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"\u5b9e\u6218\uff1a\u642d\u5efa lnmp \u7f51\u7ad9\u5e73\u53f0\u5b9e\u6218")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"1.\u81ea\u5b9a\u4e49\u7f51\u7edc")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker network create lnmp\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"2.\u521b\u5efa MySQL \u6570\u636e\u5e93\u5bb9\u5668","[\u9700\u8981\u6388\u6743 ip \u767b\u5f55]")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -itd  --name lnmp_mysql  --net lnmp  -p 3306:3306  --mount src=mysql-vol,dst=/var/lib/mysql  -e MYSQL_ROOT_PASSWORD=123456  mysql:5.6 --character-set-server=utf8\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"3.\u521b\u5efa\u6240\u9700\u6570\u636e\u5e93")),(0,o.kt)("pre",null,(0,o.kt)("code",{parentName:"pre",className:"language-bash"},"docker run -itd \\ --name lnmp_web \\ --net lnmp \\ -p 88:80 \\ --mount type=bind,src=/app/wwroot.dst=/var/www/html richarvey/nginx-php-fpm\n")))}k.isMDXComponent=!0},51146:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/clipboard-1617357667406-94a957e8b3fbf102e78e7af12e3d35b4.png"},30917:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/clipboard-1617357667407-a2cdad99a646bbb22795e9d2b8b9f8b5.png"},39667:(e,t,r)=>{r.d(t,{Z:()=>n});const n=r.p+"assets/images/clipboard-51138e3d748f3b5f4f86e625a49568f3.png"}}]);