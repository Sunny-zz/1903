import { ADD_TO_CART, SUB_TO_CART } from "../actionTypes"
const initialState = {
  // 在购物车中的商品 id 数组
  productIdsInCart: [],
  // 购买的商品的个数
  quantityById: {}
}

export default (state = initialState, action) => {
  const { id } = action
  const { productIdsInCart, quantityById } = state

  switch (action.type) {
    case ADD_TO_CART:
      // 第一次添加商品
      // 多次买
      // return {
      //   productIdsInCart: [action.id],
      //   quantityById: { [action.id]: 1 }
      // }
      const hasInCart = productIdsInCart.indexOf(id) !== -1
      return {
        productIdsInCart:
          // 如果原来有那么直接等于原来的 没有的话展开原来的添加上新来的
          hasInCart ? productIdsInCart : [...productIdsInCart, id],
        // 点击的商品 id 属性名肯定要被加到 quantityById 对象下，判断什么时候加1 什么时候等 1
        quantityById: {
          ...quantityById,
          [id]: hasInCart ? quantityById[id] + 1 : 1
        }
      }
    case SUB_TO_CART:
      const newQuantityById = { ...quantityById }
      let newProductIdsInCart = [...productIdsInCart]
      if (newQuantityById[id] === 1) {
        delete newQuantityById[id]
        newProductIdsInCart = newProductIdsInCart.filter(ele => ele !== id)
      } else {
        newQuantityById[id]--
      }
      return {
        productIdsInCart: newProductIdsInCart,
        quantityById: newQuantityById
      }
    default:
      return state
  }
}
