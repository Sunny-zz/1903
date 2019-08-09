#### react 实现跨域

由于使用了 create-react-app 所以必须的得看 create-react-app 的版本，高于 2.0 版本的不能在 package.json 内设置代理，必须使用 http-proxy-middleware 插件配置 proxy。

1. 低于 2.0 版本
   create-react-app 的版本在低于 2.0 的时候可以在 package.json 增加 proxy 配置， 配置成如下：

   ```json
     "proxy":{
       "/api":{
       "target":"target.com",
       "changeOrigin": true
     }
   }
   ```

2. 高于 2.0 版本
   建立 src/setupProxy.js 文件，npm 安装 install http-proxy-middleware , 配置成如下：(可配置多个代理)
   ```js
   const proxy = require(“http-proxy-middleware”);
   module.exports = function(app) {
    app.use(
      proxy("/base/", {
        target: “http://45.32.15.21:8090/”,
        changeOrigin: true
      })
    );
   };
   ```
