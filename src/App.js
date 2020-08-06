import React, { useState } from "react";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

import "./App.css";
import Home from "./Pages/Home";

function App() {
  return (
    <div className="App">
      <Home />
    </div>
  );
}

export default App;
