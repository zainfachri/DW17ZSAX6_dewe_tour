import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "../Login/Login";
import Register from "../Register/Register";
import Logo from "../../img/tour/logo.png";

import NavBg from "../../img/icon/navbar.png";
import "../Header/Header.css";
import "./Navbar.css";

const Navbar = () => {
  return (
    <Router>
      <nav
        className="navbar navbar-light navBg"
        style={{
          background: `url(${NavBg} )`,
        }}
      >
        <Link to="/">
          <img className="logo" src={Logo} />
        </Link>
        <form className="form-inline">
          <Link to="/Login">
            <button className="log" type="submit">
              Login
            </button>
          </Link>
          <Link to="/Register">
            <button
              className="reg"
              style={{ color: "#fff", marginRight: 100 }}
              type="submit"
            >
              Register
            </button>
          </Link>
        </form>
      </nav>
      <Switch>
        <Route path="/login">
          <Login />
        </Route>
        <Route path="/register">
          <Register />
        </Route>
      </Switch>
    </Router>
  );
};

export default Navbar;
