import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

import Banner from "../../img/tour/banner.png";
import Logo from "../../img/tour/logo.png";
import Login from "../Login/Login";
import Register from "../Register/Register";
import "./Header.css";

const Header = () => {
  return (
    <Router>
      <div
        className="top"
        style={{
          background: `linear-gradient(to bottom, rgba(0,0, 0, 0), black), url(${Banner} ) #1c1c1c`,
        }}
      >
        <header>
          <img className="logo" src={Logo} />
          <div className="menu">
            <Link to="/Login">
              <button className="log" style={{ color: "#fff" }}>
                Login
              </button>
            </Link>
            <Link to="/Register">
              <button className="reg" style={{ color: "#fff" }}>
                Register
              </button>
            </Link>
          </div>
        </header>
        <div classname="container">
          <div className="banner">
            <h1 style={{ fontSize: 66 }}>Explore</h1>
            <h1 style={{ fontSize: 64 }}>your amazing city together</h1>
          </div>
          <label style={{ fontSize: 20 }} className="sometext">
            Find great places to holiday
          </label>
          <div className="input-group input-group-lg mb-3">
            <input type="text" class="form-control" />
            <div class="input-group-append">
              <button
                class="btn btn-outline-secondary"
                type="button"
                id="button-addon2"
              >
                Button
              </button>
            </div>
          </div>
        </div>
      </div>

      <Switch>
        <Route path="/Login">
          <Login />
        </Route>
        <Route path="/Register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};
export default Header;
