import React from "react"
import ReactDOM from "react-dom"
import "./index.css"
import App from "./App"
import * as serviceWorker from "./serviceWorker"
import { Provider } from "react-redux"
import store from "./store"
// react 和 redux 关联 ---->  react 获取 redux 中store 的数据类似当做自己的 state，store 数据变 react 组件内的也更新
// 需要从 react-redux 包中拿 Provider 组件 ,该组件的作用 获取 redux 中 store 数据提供给 react 中的所有组件
// 我们将该组件包裹在 App 组件外，意思就是提供给 App 组件 store，也就意味着所有组件都可以获取 store 中的数据了
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
)

serviceWorker.unregister()
