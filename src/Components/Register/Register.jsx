import React from "react";

import Palm from "../../img/tour/palm.png";
import Hibiscus from "../../img/tour/hibiscus.png";
import "./Register.css";

const Register = ({ setModalRegister }) => {
  return (
    <div className="register-page">
      <div className="register">
        <div className="palm">
          <img src={Palm} />
        </div>
        <div className="hibiscus">
          <img src={Hibiscus} />
        </div>
        <div className="closed" onClick={() => setModalRegister(false)}>
          X
        </div>
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
        <p>Address</p>
        <div className="input-group input-group-lg mb-3">
          <input type="text" class="form-control" />
        </div>
        <button>Register</button>
        <p>Already have account ? Login</p>
      </div>
    </div>
  );
};

export default Register;
