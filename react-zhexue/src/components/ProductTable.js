import React from "react"
import ProductCategoryRow from "./ProductCategoryRow"
import ProductRow from "./ProductRow"

// const showProducts = [
//   {
//     category: "Sporting Goods",
//     list: [{
//   "category": "Sporting Goods",
//   "price": "$49.99",
//   "stocked": true,
//   "name": "Football"
//      }]
//   }
// ]
const ProductTable = props => {
  const { showProducts } = props
  const content = showProducts.map(item => (
    <div key={item.category}>
      <ProductCategoryRow category={item.category} />
      {item.list.map((product, index) => (
        <ProductRow key={index} name={product.name} price={product.price} />
      ))}
    </div>
  ))
  return <div>{content}</div>
}

export default ProductTable
