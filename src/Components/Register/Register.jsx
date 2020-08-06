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
      <div className="modal">
        <div className="bg">
          <div className="register">
            <div className="palm">
              <img src={Palm} />
            </div>
            <div className="hibiscus">
              <img src={Hibiscus} />
            </div>
            <Link>
              <span>X</span>
            </Link>
            <h1>Register</h1>
            <p>Full Name</p>
            <input type="text" required />
            <p>Email</p>
            <input type="email" required />
            <p>Password</p>
            <input type="password" required />
            <p>Phone</p>
            <input type="text" required />
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
