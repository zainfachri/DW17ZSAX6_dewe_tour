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
          backgroundImage: `url(${Banner} )`,
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

        <div className="banner">
          <h1>Explore</h1>
          <h1>your amazing city together"</h1>
        </div>

        <div className="search">
          <label>Find great places to holiday</label>
          <br />
          <br />
          <input type="text" />
          <button>Search</button>
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
