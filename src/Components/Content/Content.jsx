import React from 'react'
import './Content.css'
import { Container } from 'react-bootstrap'

const Content = (props) => {
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
export default Content