FROM nginx:1.17.1-alpine

COPY ./build /usr/share/nginx/html

# 默认启动
CMD ["nginx", "-g", "daemon off;"]