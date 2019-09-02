import React from "react"
import { BrowserRouter as Router, Link } from "react-router-dom"
import Main from "./components/Main"

function App() {
  return (
    <Router>
      <ul>
        <li>
          <Link to='/'>Home</Link>
        </li>
        <li>
          <Link to='/about'>About</Link>
        </li>
      </ul>
      <Main />
    </Router>
  )
}
export default App
