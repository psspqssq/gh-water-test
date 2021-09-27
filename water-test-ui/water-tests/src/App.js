import React, { useState } from "react"
import { BrowserRouter, Route, Switch } from "react-router-dom"
import { Link } from "react-router-dom"
import Login from "./Components/Login"
import Dashboard from "./Components/Dashboard"
import "./App.css"

const App = () => {
  const [token, setToken] = useState()
  if (!token) {
    return <Login setToken={setToken} />
  }
  return (
    <div className="wrapper">
      <h1>Application</h1>
      <BrowserRouter>
        <Switch>
          <Route path="/login">
            <Login />
          </Route>
          <Route path="/dashboard">
            <Dashboard />
          </Route>
        </Switch>
      </BrowserRouter>
    </div>
  )
}

export default App
