import React from "react"
import propsType from "prop-types"
const ProductCategoryRow = props => <h3>{props.category}</h3>
ProductCategoryRow.propTypes = {
  category: propsType.string
}
ProductCategoryRow.defaultProps = {
  category: "默认的标题"
}
export default ProductCategoryRow
