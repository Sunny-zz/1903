import React from "react"
import Header from "./components/Header"
import { BrowserRouter as Router } from "react-router-dom"
import Main from "./components/Main"

function App() {
  return (
    <Router className='App'>
      <Header />
      <Main />
    </Router>
  )
}
export default App
