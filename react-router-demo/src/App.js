import React from "react"
import Main from "./components/Main"
import { NavLink } from "react-router-dom"
import { HashRouter as Router } from "react-router-dom"
import "./app.css"
import Header from "./components/Header"

function App() {
  return (
    <Router className='App'>
      <Header />
      <ul>
        <li>
          <NavLink
            className='nav-item'
            exact
            activeStyle={{ color: "red" }}
            to='/'
          >
            home
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} to='/newabout'>
            about
          </NavLink>
        </li>
        <li>
          <NavLink activeStyle={{ color: "red" }} to='/topics'>
            topics
          </NavLink>
        </li>
      </ul>
      <Main />
    </Router>
  )
}
export default App
