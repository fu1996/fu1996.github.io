---
authors: junkui
title: 03-docker使用jenkins
categories:
  - 后端
  - docker
tags:
  - docker
date: 2021-01-16 21:18:22
---

# docker 中使用 jenkins

安装方法见：https://www.w3cschool.cn/jenkins/jenkins-79ex28jh.html

今天在 docker 中启动 jenkins 容器时，按照官方文档中的方法执行：

```bash
docker run -p 8080:8080 -p 50000:50000 -v /your/home:/var/jenkins_home jenkins
```

遇到了一个权限为题，报错为：

```bash
Can not write to /var/jenkins_home/copy_reference_file.log. Wrong volume permissions?
touch: cannot touch ‘/var/jenkins_home/copy_reference_file.log’: Permission denied
```

原因是 Jenkins 镜像内部使用的用户是 jenkons，但是我们启动容器时的账号是 root，导致没有权限操作内部目录，我们可以稍微改一下上面的命令：

```bash
docker run -p 8080:8080 -p 50000:50000 -v /your/home:/var/jenkins_home -u 0 jenkins
```

这样就启动成功了。

这命令的意思是覆盖容器中内置的帐号，该用外部传入，这里传入 0 代表的是 root 帐号 Id。这样再启动的时候就应该没问题了。

## Please wait while Jenkins is getting ready to work...

Please wait while Jenkins is getting ready to work (jenkins)
如果界面提示 Jenkins 正在启动,请稍后…或者提示
Please wait while Jenkins is getting ready to work…

换了清华的镜像进去之后下载插件无数失败
问题：
没被墙但是网速很慢
解决方法:
需要你进入 jenkins 的工作目录，打开 hudson.model.UpdateCenter.xml 把 http://updates.jenkins-ci.org/update-center.json 改成 http://mirror.xmission.com/jenkins/updates/update-center.json

这是一条华丽的分割线，然而，发现清华的镜像里面还是引用了很多官网的
http://updates.jenkins-ci.org/download/

SO
1、将安装目录下的 hudson.model.UpdateCenter.xml
中改成

```
<?xml version='1.1' encoding='UTF-8'?>
<sites>
  <site>
    <id>default</id>
    <url>https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json</url>
  </site>
</sites>
```

没错就是这个
https://mirrors.tuna.tsinghua.edu.cn/jenkins/updates/update-center.json

2、将 updates 文件夹下的 default.json 中所有
http://updates.jenkins-ci.org/download/
替换为
https://mirrors.tuna.tsinghua.edu.cn/jenkins/

然后重启 Jenkins
http://localhost:8080/restart
。。。。war 包版当然重启 tomcat 就行，
windows 安装版也可以找安装包选 Repair 吧

## 安装 jenkins 时出现 No such plugin: cloudbees-folder 的解决办法

标签：No cloudbees plugin jenkins such folder

今天安装了一下 jenkins，在初始化安装插件时出现“ No such plugin: cloudbees-folder”错误，根据网上的教程：

1、打开链接“http://ftp.icm.edu.pl/packages/jenkins/plugins/cloudbees-folder/”，在最下面找到并打开“latest”目录。

2、将目录中的“cloudbees-folder.hpi”下载下来后放在“jenkins 安装目录\war\WEB-INF\detached-plugins”文件夹中。

执行 1、2 步骤后刷新页面仍然出现“ No such plugin: cloudbees-folder”错误，猜测这个“hpi”文件可能是项目启动时候加载，是需要重启 jenkins 服务才可以，因此执行：

3、在“控制面板-管理工具-服务”中找到“jenkins”服务，重启服务。

再次打开 jenkins 的链接 http://localhost:8080/ 后已经可以正常安装插件，问题解决。
