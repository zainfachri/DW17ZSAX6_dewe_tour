import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

import Login from "../Login/Login";
import Palm from "../../img/tour/palm.png";
import Hibiscus from "../../img/tour/hibiscus.png";
import "./Register.css";

const Register = () => {
  return (
    <Router>
      <div className="register-page">
        <div className="bg">
          <div className="register">
            <div className="palm">
              <img src={Palm} />
            </div>
            <div className="hibiscus">
              <img src={Hibiscus} />
            </div>
            <Link>
              <div className="closed">X</div>
            </Link>
            <h1>Register</h1>
            <p style={{ marginTop: 40 }}>Full Name</p>
            <div className="input-group input-group-lg mb-3">
              <input type="text" class="form-control" />
            </div>
            <p>Email</p>
            <div className="input-group input-group-lg mb-3">
              <input type="email" class="form-control" />
            </div>
            <p>Password</p>
            <div className="input-group input-group-lg mb-3">
              <input type="password" class="form-control" />
            </div>
            <p>Phone</p>
            <div className="input-group input-group-lg mb-3">
              <input type="text" class="form-control" />
            </div>
            <button>Register</button>
            <p>
              Already have account ? <Link to="/login">Login</Link>
            </p>
          </div>
        </div>
      </div>

      <Switch>
        <Route path="/login">
          <Login />
        </Route>
      </Switch>
    </Router>
  );
};

export default Register;
