import React, { Component } from 'react'
import Content from '../Content/Content'

function ContentMenu() {
    return(
        <div>
            <Content
                img="./img/guarantee.png"
                name="Best Price Guarantee"
                detail="A small river named Duren flows by their place and supplies"
            />
            <Content
                img="./img/heart.png"
                name="Travellers Love Us"
                detail="A small river named Duren flows by their place and supplies"
            />
            <Content
                img="./img/agent.png"
                name="Best Travel Agent"
                detail="A small river named Duren flows by their place and supplies"
            />
            <Content
                img="./img/support.png"
                name="Our Dedicated Support"
                detail="A small river named Duren flows by their place and supplies"
            />
        </div>
    )
}
export default ContentMenu;