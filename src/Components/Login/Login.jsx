import React from "react";
import { Link } from "react-router-dom";

import Palm from "../../img/tour/palm.png";
import Hibiscus from "../../img/tour/hibiscus.png";
import "./Login.css";

const Login = ({ handleLogin, setModalLogin }) => {
  return (
    <div className="login-page">
      <div className="login">
        <div className="palm">
          <img src={Palm} />
        </div>
        <div className="hibiscus">
          <img src={Hibiscus} />
        </div>
        <div className="closed" onClick={() => setModalLogin(false)}>
          X
        </div>
        <h1>Login</h1>
        <p>Email</p>
        <div className="input-group input-group-lg mb-3">
          <input type="text" class="form-control" />
        </div>
        <p>Password</p>
        <div className="input-group input-group-lg mb-3">
          <input type="password" class="form-control" />
        </div>
        {/* <Link to="/income-transaction"> */}
        <button onClick={() => handleLogin()}>Login</button>
        <p>Don't have an account ? Klik Here</p>
        {/* </Link> */}
      </div>
    </div>
  );
};

export default Login;
