import React, { Component, Fragment } from 'react';
import Title from './Title'
import SearchBar from './SearchBar'
import Banner from '../../img/tour/banner.png'
import './Header.css';
import Logo from '../../img/tour/logo.png'

export default function Header() {
    return(
        <div className="top"
        style={{
            backgroundImage: `url(${Banner} )`
        }}>
            <header>
                <img className="logo" src={Logo}/>
                <div className="menu">   
                    <a>Login</a>
                    <a>Register</a>
                </div>
            </header>  
            
            <Title 
                title="Explore"
                desc="your amazing city together"
            />
            <SearchBar />
        </div>
    )
}
