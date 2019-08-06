import React, { Component } from "react"
import SearchBar from "./SearchBar"
import ProductTable from "./ProductTable"
import axios from "axios"
class FilterableProductTable extends Component {
  state = {
    filterText: "",
    inStockOnly: false,
    products: []
  }
  componentDidMount() {
    axios.get("http://localhost:3008/products").then(res => {
      this.setState({
        products: res.data
      })
    })
  }
  handleInput = (name, event) => {
    // 把修改 filterText, inStockOnly 的事件写在同一函数内
    // 1.你要修改那个 state
    // 2.向子组件获取 event 用于修改的结果
    const target = event.target
    // 判断这个 target 是 input:text 还是 input:checkbox
    const targetValue =
      target.type === "checkbox" ? target.checked : target.value
    this.setState({
      [name]: targetValue
    })
  }
  render() {
    const { filterText, inStockOnly, products } = this.state
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
    // ball  true
    // 先对 filterText 做筛选
    // 然后当 inStockOnly 是 true 在做一次筛选
    // const productsFilter = products
    //   .filter(item => item.name.indexOf(filterText) !== -1)
    //   .filter(item => (inStockOnly ? item.stocked : true))
    const productsFilter = products.filter(
      item => item.name.indexOf(filterText) !== -1
    )
    const productsFilterLast = inStockOnly
      ? productsFilter.filter(item => item.stocked)
      : productsFilter
    const showProducts = productsFilterLast.reduce((res, item) => {
      // 要生成一个新的数组 res 目标长得样子就是上面注释的样子
      // 目标就是根据不同的 category 在数组内生成多个对象(有几个 category 生成几个)
      // 第一次执行 reduce 的时候 res 没有任何数据所以在 else 内直接 push 一个对象
      // 第二次执行 reduce 的时候 res 内已经有了一个对象(该对象内有 category 类别)，所以就要判断该对象下的 category 类别和第二次 reduce 来的 category 类别是否一样，如果一样就像该对象内的 list 数组内push，如何不不一样执行上一步操作
      // 依次类推反复执行
      if (res.find(ele => item.category === ele.category)) {
        res.find(ele => item.category === ele.category).list.push(item)
      } else {
        res.push({
          category: item.category,
          list: [item]
        })
      }
      return res
    }, [])
    // const newShowProducts = showProducts.filter()
    return (
      <div>
        <SearchBar
          filterText={filterText}
          inStockOnly={inStockOnly}
          handleInput={this.handleInput}
        />
        <ProductTable showProducts={showProducts} />
      </div>
    )
  }
}
export default FilterableProductTable
