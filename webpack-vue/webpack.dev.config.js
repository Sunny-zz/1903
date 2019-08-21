//  webpack 的配置文件  webpack.config.js 是 webpack 的默认配置文件 打包的时候会默认找该文件的配置
const webpack = require("webpack")
const merge = require("webpack-merge")
const common = require("./webpack.common.js")

module.exports = merge(common, {
  // 将环境设置成开发模式  要求速度快
  // 对应有生产模式(production) 要求体积小
  mode: "development",
  // 开发模式下 使用什么类型的工具编译打包
  devtool: "eval",
  // devServer 作用是提供简单服务器，实时重新加载你的项目
  devServer: {
    // 服务器地址的文件夹
    contentBase: "./dist",
    compress: true,
    // 手动设置端口号  但是有个弊端如果此端口号被占用服务器起不来，去掉 prot 设置会默认打开 8080 端口如果被占用会换成 8081 以此类推
    // port: 9000
    // 启用 HMR 热模块替换
    hot: true,
    // HMR 热替换的时候控制台的提示信息不显示
    clientLogLevel: "none",
    // 在此服务器下的所有地址都指向 index.html,单页面应用必须设置此项
    historyApiFallback: true
  },

  // module 各种其他模块的配置(包括一些不支持的语法象 vue  react 框架语法)
  module: {
    // rules 代表规则
    // rules 下面每一条针对的就是一条模块的转化规则
    rules: [
      // 处理 css 文件的 和 组件内的 style 标签
      // style-loader 将模块的导出作为样式添加到 DOM 中
      // css-loader 解析 CSS 文件后，使用 import 加载，并且返回 CSS 代码
      // postcss-loader 转义 css 扩展
      // 而且必须注意顺序 从后往前的顺序
      {
        test: /\.(css|scss)$/,
        use: [
          "style-loader",
          "css-loader",
          // sass-loader  将 Sass 编译成 CSS  需要配合 node-sass 包一起使用
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
    // 辅助 HMR 工作的两个插件是 webpck 自带的，只需导入 webpack 即可
    new webpack.NamedModulesPlugin(),
    new webpack.HotModuleReplacementPlugin()
  ]
})
