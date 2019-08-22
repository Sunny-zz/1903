const path = require("path")
const { CleanWebpackPlugin } = require("clean-webpack-plugin")
const VueLoaderPlugin = require("vue-loader/lib/plugin")
const HtmlWebpackPlugin = require("html-webpack-plugin")

module.exports = {
  entry: "./src/main.js",
  // 自动解析以下列为后缀名扩展
  resolve: {
    extensions: [".js", ".json", ".vue"]
  },
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
              name: "images/[name].[hash:5].[ext]"
            }
          }
        ]
      }
    ]
  },
  output: {
    filename: "js/[name].bundle.js",
    path: path.resolve(__dirname, "dist")
  },
  plugins: [
    // 清理 dist 文件件
    new CleanWebpackPlugin(),
    // VueLoaderPlugin 作用是搭配 vue-loader 用来编译 vue 组件的
    new VueLoaderPlugin(),
    // 创建 html 模版
    new HtmlWebpackPlugin({
      template: "public/index.html"
    })
  ]
}
