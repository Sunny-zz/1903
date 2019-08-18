import React from "react"
import ProductListContainer from "./components/ProductListContainer"
import CartContainer from "./components/CartContainer"

function App() {
  return (
    <div className='App'>
      <h1>hello redux cart</h1>
      <ProductListContainer />
      <hr />
      <br />
      <CartContainer />
    </div>
  )
}
export default App
