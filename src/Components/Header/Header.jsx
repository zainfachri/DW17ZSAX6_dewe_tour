import React, { Component, Fragment } from 'react';
import Title from './Title'
import SearchBar from './SearchBar'
import './Header.css';

export default function Header() {
    return(
        <div className="top">
            <img src="./img/banner.png" />
            <header>
                <img className="logo" src="img/logo.png"/>
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
