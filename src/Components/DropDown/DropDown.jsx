import React from "react";
import { Link } from "react-router-dom";

import "./DropDown.css";

const DropDown = () => {
  return (
    <>
      <div className="triangle-up"></div>
      <div className="drop-down">
        <div className="drop-out-top">
          <div className="drop-inside-top">
            <div className="drop-top">
              <Link to="/profile">
                <div className="drop-list">
                  <i
                    class="fa fa-user"
                    aria-hidden="true"
                    style={{ color: "#FFAF00" }}
                  ></i>
                  <span>Profile</span>
                </div>
              </Link>
              <Link to="/payment">
                <div className="drop-list">
                  <i
                    class="fa fa-money"
                    aria-hidden="true"
                    style={{ color: "#87A900" }}
                  ></i>
                  <span>Pay</span>
                </div>
              </Link>
            </div>
          </div>
        </div>
        <div className="drop-out-bottom">
          <div className="drop-inside-bottom">
            <div className="drop-list">
              <i
                class="fa fa-sign-out"
                aria-hidden="true"
                style={{ color: "#E50914" }}
              ></i>
              <span>Logout</span>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default DropDown;
