import axios from "axios"
import { GET_PRODUCTS } from "./actionTypes"
// getProducts 是异步的 action 创建函数
const getProducts = () => dispatch => {
  axios.get("http://localhost:3008/products").then(res => {
    dispatch({
      type: GET_PRODUCTS,
      newProducts: res.data
    })
  })
}
export { getProducts }
