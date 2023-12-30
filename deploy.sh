image=registry.cn-beijing.aliyuncs.com/jk-poc/blog:${BUILD_NUMBER}
container_name=blog-fe
# nginx_conf_path=/root/chatdd/chatdd-agent-v2/conf
# docker stop ${container_name}
# docker rm -f ${container_name}
# docker run -d --name ${container_name} -p 8900:80  ${image}

docker pull ${image}

# 判断镜像是否已经启动
is_running=$(docker ps -q -f name=${container_name})

if [ -n "$is_running" ]; then
    echo "镜像已经启动，将进行暂停和删除操作..."
    # 暂停并删除镜像
    docker stop ${container_name}
    docker rm -f ${container_name}
else
    echo "镜像未启动，将进行启动操作..."
    # 启动镜像
fi

docker run -d --add-host host.docker.internal:$(ip addr show docker0 | grep -Po 'inet \K[\d.]+')  --name ${container_name} -p 8900:80  ${image}
# docker run -d -v ${nginx_conf_path}:/etc/nginx/conf.d --add-host host.docker.internal:$(ip addr show docker0 | grep -Po 'inet \K[\d.]+')  --name ${container_name} -p 8900:80  ${image}
