import React, { Component } from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

import Palm from "../../img/tour/palm.png";
import Hibiscus from "../../img/tour/hibiscus.png";
import Register from "../Register/Register";
import "./Login.css";

const Login = () => {
  return (
    <Router>
      <div className="modal">
        <div className="bg">
          <div className="login">
            <div className="palm">
              <img src={Palm} />
            </div>
            <div className="hibiscus">
              <img src={Hibiscus} />
            </div>
            <Link to="/">
              <span>X</span>
            </Link>
            <h1>Login</h1>
            <p>Email</p>
            <input type="text" />
            <p>Password</p>
            <input type="password" />
            <button>Login</button>
            <p>
              Don't have an account ? Klik <Link to="/register">Here</Link>
            </p>
          </div>
        </div>
      </div>

      <Switch>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default Login;
