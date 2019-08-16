import React, { Component } from "react"
class ProductList extends Component {
  render() {
    // 获取容器组件给的 数据展示
    const { products } = this.props
    const content = products.length ? (
      <ul>
        {products.map(product => (
          <li key={product.id}>{product.name}</li>
        ))}
      </ul>
    ) : (
      "请稍等"
    )
    return <div>{content}</div>
  }
}
export default ProductList
