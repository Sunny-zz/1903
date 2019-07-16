module.exports = {
  devServer: {
    // 配置代理服务器
    proxy: {
      "/api": {
        target: "https://www.wanandroid.com",
        ws: true,
        changeOrigin: true,
        pathRewrite: {
          "^/api": ""
        }
      }
    }
  }
}
