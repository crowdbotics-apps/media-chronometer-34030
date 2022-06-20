import React from "react"
import ReactDOM from "react-dom"
import { BrowserRouter as Router, Redirect } from "react-router-dom"

import "./style.css"
import Login4112 from "./views/login"
import ChangePassword from "./views/change-password"
import Dashboard from "./views/dashboard"
import PublicOnlyRoute from "./components/RoutesWrapper/PublicOnlyRoute"
import ProtectedRoute from "./components/RoutesWrapper/ProtectedRoute"

const App = () => {
  return (
    <Router>
      <div>
        <PublicOnlyRoute
          path="/"
          exact
          component={() => <Redirect to="/dashboard" />}
        />
        <PublicOnlyRoute exact component={Login4112} path="/login" />
        <PublicOnlyRoute component={ChangePassword} path="/change-password" />

        <ProtectedRoute component={Dashboard} path="/dashboard" />
      </div>
    </Router>
  )
}

ReactDOM.render(<App />, document.getElementById("app"))
