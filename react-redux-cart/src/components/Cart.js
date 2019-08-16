import React, { Component } from "react"
import { productsInCart } from "../store/selectors"
class Cart extends Component {
  render() {
    const { cart, products } = this.props

    // const content =
    //   products.length && cart.productIdsInCart.length ? (
    //     <ul>
    //       {/* <li>
    //       <span>iphone12 9999元 2</span>
    //     </li>
    //     <li>
    //       <span>奔驰 110 20000元 3</span>
    //     </li> */}
    //       {cart.productIdsInCart.map(item => (
    //         <li key={item}>
    //           <span>{products.find(product => product.id === item).name}</span>
    //           <br />
    //           <span>买了{cart.quantityById[item]}个</span>
    //         </li>
    //       ))}
    //     </ul>
    //   ) : (
    //     "请添加商品"
    //   )

    const content = productsInCart(cart, products).length ? (
      <ul>
        {productsInCart(cart, products).map(item => (
          <li key={item.id}>
            <span>{item.name}</span>
            &nbsp;&nbsp;&nbsp;
            <span>买了{item.num}个</span>
          </li>
        ))}
      </ul>
    ) : (
      "请添加商品"
    )
    return <div>{content}</div>
  }
}
export default Cart
