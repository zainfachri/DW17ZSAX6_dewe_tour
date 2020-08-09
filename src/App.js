import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import DetailTour from "./Components/DetailTour/DetailTour";
import Payment from "./Pages/Payment";
import Login from "./Components/Login/Login";
import Register from "./Components/Register/Register";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import Profile from "./Pages/Profile";
import IncomeTrans from "./Components/Income/IncomeTrans";

import ScrollTop from "./Components/utility/ScrollTop";

function App() {
  const [isLogin, setLogin] = useState(false);
  const [modalLogin, setModalLogin] = useState(false);
  const [modalRegister, setModalRegister] = useState(false);

  // const showModalLogin = () => {
  //   setModalLogin(true);
  //   setModalRegister(false);
  // };

  // const showModalRegister = () => {
  //   setModalRegister(true);
  //   setModalLogin(false);
  // };
  const handleLogin = () => {
    setLogin(!isLogin);
    setModalLogin(false);
  };

  return (
    <Router>
      <Navbar
        isLogin={isLogin}
        setModalLogin={setModalLogin}
        setModalRegister={setModalRegister}
      />
      {modalLogin && (
        <Login setModalLogin={setModalLogin} handleLogin={handleLogin} />
      )}
      {modalRegister && <Register setModalRegister={setModalRegister} />}
      <ScrollTop>
        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/detail" component={DetailTour} />
          <Route exact path="/payment" component={Payment} />
          <Route exact path="/profile" component={Profile} />
          <Route exact path="/income-transaction" component={IncomeTrans} />
        </Switch>
      </ScrollTop>
      {/* <IncomeTrans /> */}
      <Footer />
    </Router>
  );
}

export default App;
