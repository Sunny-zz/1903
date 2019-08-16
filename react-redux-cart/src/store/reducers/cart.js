const initialState = {
  // 在购物车中的商品 id 数组
  productIdsInCart: ["1", "2"],
  // 购买的商品的个数
  quantityById: {
    "1": 2,
    "2": 3
  }
}

export default (state = initialState, action) => {
  switch (action.type) {
    default:
      return state
  }
}
