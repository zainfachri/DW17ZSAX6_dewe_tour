import React from 'react';
import {
    BrowserRouter as Router,
    Switch,
    Link,
    Route,
    Redirect
  } from 'react-router-dom';

import Banner from '../../img/tour/banner.png'
import Logo from '../../img/tour/logo.png'
import Login from '../Login/Login'
import './Header.css';

const Header = () => {
    return(
        <Router>
            <div className="top"
            style={{
                backgroundImage: `url(${Banner} )`
            }}>
                <header>
                    <img className="logo" src={Logo}/>
                    <div className="menu">   
                            <button style={{color:"#fff"}}><Link to="/Login">Login</Link></button>
                        <button>Register</button>
                    </div>
                </header>  
                
                <div className="banner">
                <h1>Explore</h1>
                <h1>your amazing city together"</h1>
                </div>
                
                <div className="search">
                <label>Find great places to holiday</label><br/><br/>
                <input type="text"/>
                <button>Search</button>
            </div>
            </div>

        <Switch>
            <Route path="/Login">
                <Login />
            </Route>
        </Switch>
        </Router>
    )
}
export default Header