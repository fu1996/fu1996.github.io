---
authors: junkui
title: 02-docker查漏补缺
categories:
  - 后端
  - docker
tags:
  - docker
date: 2024-03-30 21:45:14
---

## 0. 免费容器平台，可以玩耍docker

https://labs.play-with-docker.com/

## 1. docker 的查漏补缺

### 1. docker 的 volume mount 和 bind mount 的区别和应用场景

https://docs.docker.com/get-started/06_bind_mounts/

卷挂载将数据保存在数据库中。当您需要持久性地存储应用程序数据时，卷装载是一个不错的选择。
绑定挂载是另一种挂载类型，它允许您将目录从主机的文件系统共享到容器中。在处理应用程序时，可以使用绑定挂载将源代码挂载到容器中。保存文件后，容器会立即看到您对代码所做的更改。这意味着您可以在容器中运行进程，以监视文件系统更改并对其进行响应。


### 2. 使用网络实现 两个容器的相互通信

https://docs.docker.com/get-started/07_multi_container/

使用网络排查工具：https://github.com/nicolaka/netshoot 可以进行排查

- 如何创建网络，
- 如何加入网络
- 如何排查网络
- --network-alias 是如何使用


### 3. Layer caching 图层缓存 和 .dockerignore 文件

分层的实际应用，是需要学习一个重要的课程，以帮助减少容器映像的生成时间。图层更改后，还必须重新创建所有下游图层。

修改前：

```shell
# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /app
COPY . .
RUN yarn install --production
CMD ["node", "src/index.js"]
```
修改后：
```shell
# syntax=docker/dockerfile:1
FROM node:18-alpine
WORKDIR /app
COPY package.json yarn.lock ./
RUN yarn install --production
COPY . .
CMD ["node", "src/index.js"]
```

### 4. Multi-stage builds 多阶段构建

在构建 React 应用程序时，你需要一个 Node 环境来将 JS 代码（通常是 JSX）、SASS 样式表等编译为静态 HTML、JS 和 CSS。如果您不进行服务器端渲染，则甚至不需要 Node 环境来进行生产构建。您可以将静态资源放在静态 nginx 容器中。

```shell
# syntax=docker/dockerfile:1
FROM node:18 AS build
WORKDIR /app
COPY package* yarn.lock ./
RUN yarn install
COPY public ./public
COPY src ./src
RUN yarn run build

FROM nginx:alpine
COPY --from=build /app/build /usr/share/nginx/html
```

使用 node:18 映像执行构建（最大化层缓存），然后将输出复制到 nginx 容器中。


## 2. docker-compose

### 1. 常用命令

```shell
# 在 容器名为 web 的容器中执行 ls 命令，和 docker run [container_name] [command]效果一样
docker compose run web ls

# 查看容器使用 .env 文件时候的 环境变量信息
docker compose config
# 停止容器，当您运行 docker compose down 时，不会删除撰写文件中的命名卷。如果要删除卷，则需要添加 --volumes 标志。
docker compose down
# 查看每一层的信息  底部显示底座，顶部显示最新的层
docker image history [image_name]
```

### 2. 在docker-compose 中使用 env 环境变量

https://docs.docker.com/compose/environment-variables/set-environment-variables/

重点：
- 如何定义环境变量
  - 在外部文件.env中定义并使用
  - 在compose.yaml 中定义并使用
- 如何查看环境变量信息
- 环境变量的覆盖顺序


### 3. docker compose 中的网络

https://docs.docker.com/compose/networking/
在myapp的目录下存在 compose.yaml文件。
```shell
services:
  web:
    build: .
    ports:
      - "8000:8000"
  db:
    image: postgres
    ports:
      - "8001:5432"
```

启动以后
1. 创建名为的 myapp_default 网络。
2. 创建名为 web 的容器。它以 web 的名字加入网络 myapp_default。
3. 创建名为 db 的容器。它以 db 的名字加入网络 myapp_default。

容器间的网络通信：
web 容器和db容器 均在 myapp_default 网络中，现在，每个容器都可以查找服务名称 web 或 db 获取相应容器的 IP 地址。
例如， web 的应用程序代码可以连接到 URL postgres://db:5432 （注意这里是容器的端口） 并开始使用 Postgres 数据库。

外部和容器的网络通信：

- 外部主机可以连接到 web 容器的 8000 端口。
- 外部主机可以连接到 db 容器的 8001 端口。