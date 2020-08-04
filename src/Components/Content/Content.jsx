import React, { Component } from 'react'
import './Content.css'

export default function Content(props) {
    return(
        <div className="menuContent">
            <div className="card">
                <img src={props.img}/>
                <h3>{props.name}</h3>
                <p>{props.detail}</p>
            </div>
        </div>
    )
}