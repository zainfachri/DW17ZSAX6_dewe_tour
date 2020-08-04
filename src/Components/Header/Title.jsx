import React, { Component } from 'react'

function Title(props) {
    return (
        <div className="banner">
            <h1>{props.title}</h1>
            <h1>{props.desc}</h1>
        </div>
    )
}
export default Title;