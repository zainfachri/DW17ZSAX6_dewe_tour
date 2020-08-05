import React, { useState } from 'react'
import {
  BrowserRouter as Router,
  Route,
  Switch,
  Link 
} from "react-router-dom";

import './App.css'
import Home from './Pages/Home'
import Header from './Components/Header/Header'
import Login from './Components/Login/Login'

function App() {

  return (
    <div className="App">
      <Home />
    </div>
  )
}

export default App;
