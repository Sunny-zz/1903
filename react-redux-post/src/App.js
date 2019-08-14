import React from "react"
import { BrowserRouter as Router } from "react-router-dom"
import Main from "./components/Main"
function App() {
  return (
    <div className='app'>
      <Router>
        <Main />
      </Router>
    </div>
  )
}
export default App
