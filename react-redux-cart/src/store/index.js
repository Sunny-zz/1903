import { createStore, applyMiddleware, combineReducers } from "redux"
import logger from "redux-logger"
import thunk from "redux-thunk"
import products from "./reducers/products"
import cart from "./reducers/cart"
const rootReducer = combineReducers({
  products,
  cart
})
export default createStore(rootReducer, applyMiddleware(logger, thunk))
