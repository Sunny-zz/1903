const webpack = require("webpack")
const MiniCssExtractPlugin = require("mini-css-extract-plugin")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")
module.exports = merge(common, {
  // 将环境设置成开发模式  要求速度快
  // 对应有生产模式(production) 要求体积小
  mode: "production",
  // 自动解析以下列为后缀名扩展
  // resolve: {
  //   extensions: [".js", ".json", ".vue"]
  // },
  // module 各种其他模块的配置(包括一些不支持的语法象 vue  react 框架语法)
  module: {
    // rules 代表规则
    // rules 下面每一条针对的就是一条模块的转化规则
    rules: [
      // 处理 css 文件的 和 组件内的 style 标签
      // 官方直接能看到的是 ExtractTextWbpackPlugin 但是下完之后按照文档提示不生效，所以换成了 MiniCssExtractPlugin
      // MiniCssExtractPlugin.loader 将 css-loader 导出的 css 分离出去放到 css 文件内
      // css-loader 解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
      // postcss-loader 转义 css 扩展
      // 而且必须注意顺序 从后往前的顺序
      {
        test: /\.(css|scss)$/,
        use: [
          {
            loader: MiniCssExtractPlugin.loader,
            options: {}
          },
          "css-loader",
          { loader: "sass-loader" },
          {
            loader: "postcss-loader",
            // options 是 postcss-loader 的配置 也可以直接在项目的根目录下新建一个 postcss.config.js 去配置
            options: {
              // plugins 是插件配置 我们 vue 组件样式的 scope 属性其实是新的 css 写法需要插件 postcss-cssnext 插件解析
              plugins: [require("postcss-cssnext")()]
            }
          }
        ]
      }
    ]
  },
  // plugins 插件配置 除了编译不认识的模块之外的功能基本上都是插件做的 比如 压缩 删除console 和注释 等等
  plugins: [
    // 针对具体用户的环境进行代码优化 该插件是 webpack 内置插件
    new webpack.DefinePlugin({
      "process.env.NODE_ENV": JSON.stringify("production")
    }),
    new MiniCssExtractPlugin({
      // Options similar to the same options in webpackOptions.output
      // all options are optional
      filename: "css/[name].[hash:8].css",
      chunkFilename: "css/[id].css",
      ignoreOrder: false, // Enable to remove warnings about conflicting order
      publicPath: "/css"
    })
  ]
})
