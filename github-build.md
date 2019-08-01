### github 部署 vue 项目(带路由的)

1. 保证本地项目正常运行 (之前已经设置了全局的 publicPath 不需要参考下面的步骤 2，3，4)
2. 由于要部署到你自己的 github 的某个仓库下(仓库名 vuex-xxx),并不是 xxx.github.io 仓库，部署项目的时候必须设置 publicPath
3. 新建 vue.config.js 去配置 publicPath
4. 把自己项目内路由相关的所有地址(router 内的 path router-link 的 to ，router 的 push 方法)
5. 在本地重启环境访问网址 localhost:8080/vuex-xxx 项目正常运行，所有的路由都是 localhost:8080/vuex-xxx 下的子地址
6. 安装一个上传工具 gh-pages ,在 package.json 内设置好脚本命令
7. 将本地的项目做成 git 仓库上传
8. 执行部署命令生成 dist 文件夹

   - 新建分支并切换过去，删除内容只剩下 dist 里面的内容，然后上传 gh-pages 分支
   - 以后更新的话 可以使用 npm run deploy ，不能使用的话重新执行之前的步骤

9. 打开部署后的网址可以访问项目了
10. 但是该项目由于 vue 路由设置模式是 history 模式，会出现在子页面刷新的时候直接 404，可以将模式改成 hash 模式（此模式下路径会加上#，导致你的 router-link 的 active 会发生变化），不使用 hash 模式的话需要后台服务器设置配置，将所有的链接默认指向 index.html
11. 如果你把路由的模式改成了 hash 模式，那么我们项目内的所有路由相关的地址不需要加 publicPath(我们自己设置的公共变量，已经设置过了把值改为 "")，但是仍然需要设置 vue.config.js 内的 publicPath

###### 错误

1. "file" argument must be a non-empty string
2. The "file" argument must be of type string. Received type undefined
