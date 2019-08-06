import React, { Component } from "react"
class SearchBar extends Component {
  render() {
    const { filterText, inStockOnly, handleInput } = this.props
    console.log(filterText, inStockOnly)
    return (
      <div>
        <input
          onChange={event => {
            handleInput("filterText", event)
          }}
          type='text'
          value={filterText}
        />
        <input
          onChange={event => {
            handleInput("inStockOnly", event)
          }}
          type='checkbox'
          checked={inStockOnly}
        />
      </div>
    )
  }
}
export default SearchBar
