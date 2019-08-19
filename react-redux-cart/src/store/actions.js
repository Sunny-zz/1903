import axios from "axios"
import { GET_PRODUCTS, ADD_TO_CART, SUB_TO_CART } from "./actionTypes"
// getProducts 是异步的 action 创建函数   redux-thunk
const getProducts = () => dispatch => {
  axios.get("http://localhost:3008/products").then(res => {
    dispatch({
      type: GET_PRODUCTS,
      newProducts: res.data
    })
  })
}
const addToCart = id => {
  return {
    type: ADD_TO_CART,
    id
  }
}
const subToCart = id => {
  return {
    type: SUB_TO_CART,
    id
  }
}
export { getProducts, addToCart, subToCart }
