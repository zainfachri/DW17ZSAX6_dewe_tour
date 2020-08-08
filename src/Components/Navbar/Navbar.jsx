import React, { useState } from "react";
import { Link } from "react-router-dom";

import Logo from "../../img/tour/logo.png";
import NavBg from "../../img/icon/navbar.png";
import Profil from "../../img/profle/fachri.jpg";
import DropDown from "../DropDown/DropDown";

import "../Header/Header.css";
import "./Navbar.css";

const Navbar = ({ isLogin, setModalLogin, setModalRegister }) => {
  const [isDropdown, setDropDown] = useState(false);

  const showDropDown = () => {
    setDropDown(!isDropdown);
  };

  return (
    <>
      <nav
        className="navbar navbar-light navBg"
        style={{
          background: `url(${NavBg} )`,
        }}
      >
        <Link to="/">
          <img className="logo" src={Logo} />
        </Link>
        <div className="auth">
          {!isLogin && (
            <div>
              <button
                className="log"
                type="submit"
                onClick={() => setModalLogin(true)}
              >
                Login
              </button>

              <button
                className="reg"
                style={{ color: "#fff", marginRight: 100 }}
                type="submit"
                onClick={() => setModalRegister(true)}
              >
                Register
              </button>
            </div>
          )}
          {isLogin && (
            <div className="iconPic">
              <img src={Profil} alt="" onClick={() => showDropDown()} />
            </div>
          )}
        </div>
      </nav>
      {isDropdown && <DropDown showDropDown={showDropDown} />}
    </>
  );
};

export default Navbar;
