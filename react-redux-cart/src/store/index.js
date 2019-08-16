import { createStore, applyMiddleware, combineReducers } from "redux"
import logger from "redux-logger"
import products from "./reducers/products"
const rootReducer = combineReducers({
  products
})
export default createStore(rootReducer, applyMiddleware(logger))
