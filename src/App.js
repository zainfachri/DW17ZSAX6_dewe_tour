import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";
import DetailTour from "./Components/DetailTour/DetailTour";
import Payment from "./Pages/Payment";
import Navbar from "./Components/Navbar/Navbar";
import Footer from "./Components/Footer/Footer";
import PayConfirm from "./Components/Payment/PayConfirm";

function App() {
  return (
    <Router>
      <Navbar />

      <Switch>
        <Route exact path="/">
          <Home />
        </Route>
        <Route path="/detail">
          <DetailTour />
        </Route>
        <Route path="/payment">
          <Payment />
        </Route>
      </Switch>
      <Footer />
    </Router>
  );
}

export default App;
