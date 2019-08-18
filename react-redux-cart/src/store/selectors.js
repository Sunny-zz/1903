const productsInCart = (cart, products) => {
  return products.length && cart.productIdsInCart.length
    ? cart.productIdsInCart.map(item => {
        const currentProduct = products.find(ele => ele.id === item)
        return {
          ...currentProduct,
          num: cart.quantityById[item]
        }
      })
    : []
}
export { productsInCart }
// [
//   {
//     id: "1",
//     name: "iphone 12",
//     price: 9999,
//     inventory: 100,
//     num: 2
//   }
// ]
// {
//   // 在购物车中的商品 id 数组
//   productIdsInCart: ["1", "2"],
//   // 购买的商品的个数
//   quantityById: {
//     "1": 2,
//     "2": 3
//   }
// }

// [
//   {
//     "id": "1",
//     "name": "iphone 12",
//     "price": 9999,
//     "inventory": 100
//   }
// ]
