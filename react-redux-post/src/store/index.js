import { createStore, applyMiddleware, combineReducers } from "redux"
import logger from "redux-logger"
import comments from "./reducers/comments"
import posts from "./reducers/posts"
import thunk from "redux-thunk"
// 该中间件的功能是用于创建异步的 action 创建函数,有一个相对来说更高级的插件 redux-saga
const rootReducer = combineReducers({
  posts,
  comments
})
const store = createStore(rootReducer, applyMiddleware(logger, thunk))

export default store
