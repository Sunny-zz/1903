import React, { Component } from "react"
class Cart extends Component {
  render() {
    const { cart } = this.props
    const content = cart.productIdsInCart.length ? (
      <ul>
        {cart.productIdsInCart.map(item => (
          <li key={item}>{item}</li>
        ))}
      </ul>
    ) : (
      "请添加商品"
    )
    return <div>{content}</div>
  }
}
export default Cart
