import React, { Component } from "react"
class ProductList extends Component {
  componentDidMount() {
    this.props.getProducts()
  }
  render() {
    // 获取容器组件给的 数据展示
    const { products, addToCart, cart } = this.props
    const content = products.length ? (
      <ul>
        {products.map(product => (
          <li key={product.id}>
            <span>{product.name}</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>{product.price}</span>
            <span>&nbsp;&nbsp;&nbsp;&nbsp;</span>
            <span>x{product.inventory}</span>
            <br />
            <button
              disabled={
                cart.quantityById[product.id] === product.inventory
                  ? true
                  : false
              }
              onClick={() => addToCart(product.id)}
            >
              {cart.quantityById[product.id] === product.inventory
                ? "sold out"
                : "add to cart"}
            </button>
          </li>
        ))}
      </ul>
    ) : (
      "请稍等"
    )
    return <div>{content}</div>
  }
}
export default ProductList
