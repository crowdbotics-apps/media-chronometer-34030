import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter as Router, Route } from "react-router-dom";

import "./style.css";
import Login4112 from "./views/login";
import ChangePassword4450 from "./views/change-password";
import Dashboard from "./views/dashboard";

const App = () => {
  return (
    <Router>
      <div>
        <Route exact component={Login4112} path="/login" />
        <Route exact component={ChangePassword4450} path="/change-password" />
        <Route component={Dashboard} path="/dashboard" />
        <Route exact component={Login4112} path="*" />
      </div>
    </Router>
  );
};

ReactDOM.render(<App />, document.getElementById("app"));
