import React, { Component } from 'react'

import icon1 from '../img/icon/guarantee.png'
import icon2 from '../img/icon/heart.png'
import icon3 from '../img/icon/agent.png'
import icon4 from '../img/icon/support.png'
import Content from '../Components/Content/Content'

function ContentMenu() {
    return(
        <div>
            <Content
                img= {icon1}
                name="Best Price Guarantee"
                detail="A small river named Duren flows by their place and supplies"
            />
            <Content
                img= {icon2}
                name="Travellers Love Us"
                detail="A small river named Duren flows by their place and supplies"
            />
            <Content
                img= {icon3}
                name="Best Travel Agent"
                detail="A small river named Duren flows by their place and supplies"
            />
            <Content
                img= {icon4}
                name="Our Dedicated Support"
                detail="A small river named Duren flows by their place and supplies"
            />
        </div>
    )
}
export default ContentMenu;
