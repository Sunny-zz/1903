import React from "react"
// 让 react 的 js 内能写 html 标签
// 我们称 这种语法叫  jsx 语法
import ReactDOM from "react-dom"
//  将 react 虚拟 dom 转化成 真实 dom 的工具
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"

ReactDOM.render(<App />, document.getElementById("root"))

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
