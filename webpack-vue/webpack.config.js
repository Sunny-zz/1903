//  webpack 的配置文件  webpack.config.js 是 webpack 的默认配置文件 打包的时候会默认找该文件的配置
const path = require("path")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
module.exports = {
  // 入口配置
  entry: "./src/main.js",
  // 出口配置
  output: {
    filename: "bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  // 自动解析以下列为后缀名扩展
  resolve: {
    extensions: [".js", ".json", ".vue"]
  },
  // module 各种其他模块的配置(包括一些不支持的语法象 vue  react 框架语法)
  module: {
    // rules 代表规则
    // rules 下面每一条针对的就是一条模块的转化规则
    rules: [
      // 处理 vue 组件的
      {
        test: /\.vue$/,
        loader: "vue-loader"
      },
      // 处理图片的
      {
        test: /\.(png|jpg|gif|jpeg|svg)$/,
        use: [
          {
            loader: "file-loader",
            options: {
              name: "[name][hash:5].[ext]"
            }
          }
        ]
      }
    ]
  },
  // plugins 插件配置 除了编译不认识的模块之外的功能基本上都是插件做的 比如 压缩 删除console 和注释 等等
  plugins: [new VueLoaderPlugin()]
}
