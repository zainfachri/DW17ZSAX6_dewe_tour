import React from "react";
import { Link } from "react-router-dom";

import Palm from "../../img/tour/palm.png";
import Hibiscus from "../../img/tour/hibiscus.png";
import Register from "../Register/Register";
import "./Login.css";

const Login = () => {
  return (
    <div className="login-page">
      <div className="login">
        <div className="palm">
          <img src={Palm} />
        </div>
        <div className="hibiscus">
          <img src={Hibiscus} />
        </div>
        <Link to="/">
          <div className="closed">X</div>
        </Link>
        <h1>Login</h1>
        <p>Email</p>
        <div className="input-group input-group-lg mb-3">
          <input type="text" class="form-control" />
        </div>
        <p>Password</p>
        <div className="input-group input-group-lg mb-3">
          <input type="password" class="form-control" />
        </div>
        <button>Login</button>
        <p>
          Don't have an account ? Klik <Link to="/register">Here</Link>
        </p>
      </div>
    </div>
  );
};

export default Login;
