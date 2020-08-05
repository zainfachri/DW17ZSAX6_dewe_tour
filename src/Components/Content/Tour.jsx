import React from 'react'

const Tour = (props) => {
    return(
            <div className="tour">
                <div className="picture">
                    <img src={props.img}/>
                    <p>{props.pages}</p>
                </div>
                <p>{props.name}</p>
                <div className="price">
                    <p>{props.price}</p>
                    <p>{props.location}</p>
                </div>
            </div>
    )
}
export default Tour