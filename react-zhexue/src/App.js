import React from "react"
import FilterableProductTable from "./components/FilterableProductTable"

// FilterableProductTable (橙色): 是整个示例应用的整体
// SearchBar (蓝色): 接受所有的用户输入
// ProductTable (绿色): 展示数据内容并根据用户输入筛选结果
// ProductCategoryRow (天蓝色): 为每一个产品类别展示标题
// ProductRow (红色): 每一行展示一个产品
function App() {
  return (
    <div className='App'>
      <h1>react 哲学</h1>
      <FilterableProductTable />
    </div>
  )
}
export default App
