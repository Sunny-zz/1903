// 商品列表的 容器组件负责与 redux 交互获取数据以及 action 创建函数，再将这些当作 props 传递给展示组件
import React from "react"
import ProductList from "./ProductList"
import { connect } from "react-redux"
import { getProducts } from "../store/actions"
// 需要把 容器组件接收到的所有 props(store中的数据，action 创建函数，假如容器组件是路由组件还有路由的 props 信息) 全部传递给 展示组件
const ProductListContainer = props => <ProductList {...props} />
const mapStateToProps = state => {
  return { products: state.products }
}
export default connect(
  mapStateToProps,
  { getProducts }
)(ProductListContainer)
