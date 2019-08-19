import React from "react"
import { connect } from "react-redux"
import Cart from "./Cart"
import { addToCart, subToCart } from "../store/actions"
const CartContainer = props => <Cart {...props} />
const mapStateToProps = state => {
  return {
    cart: state.cart,
    products: state.products
  }
}
export default connect(
  mapStateToProps,
  { addToCart, subToCart }
)(CartContainer)
