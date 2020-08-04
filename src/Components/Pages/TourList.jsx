import React, { Component } from 'react'
import Tour from '../Content/Tour'
import '../Content/Content.css'

export default function TourList() {
    return(
        <div className="main">
            <p>Group Tour</p>
            <div className="tourList">
                <Tour
                    img="./img/pic1.png"
                    pages="12/15"
                    name="6D/4N Fun Tassie Vacation ..."
                    price="IDR. 12,398,000"
                    location="Australia"
                />
                <Tour
                    img="./img/pic2.png"
                    pages="14/15"
                    name="6D/4N Exciting Summer in ..."
                    price="IDR. 10,288,000"
                    location="South Korea"
                />
                <Tour
                    img="./img/pic3.png"
                    pages="10/15"
                    name="8D/6N Wonderful Autum ..."
                    price="IDR. 28,999,000"
                    location="Japan"
                />
                <Tour
                    img="./img/pic4.png"
                    pages="8/15"
                    name="4D/3N Overland Jakarta B..."
                    price="IDR. 3,188,000"
                    location="Indonesia"
                />
                <Tour
                    img="./img/pic5.png"
                    pages="14/15"
                    name="4D/3N Labuan Bajo Delight"
                    price="IDR. 10,488,000"
                    location="Indonesia"
                />
                <Tour
                    img="./img/pic6.png"
                    pages="10/15"
                    name="5D/4N Magic Tokyo Fun"
                    price="IDR. 11,188,000"
                    location="Japan"
                />
            </div>
        </div>
    )
}