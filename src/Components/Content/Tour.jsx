import React from "react";
import { Link } from "react-router-dom";

import DetailTour from "../DetailTour/DetailTour";
const Tour = (props) => {
  const { img, pages, name, price, location } = props;

  return (
    <div className="list">
      <Link to="/detail">
        <div className="tour">
          <div className="picture">
            <img src={img} />
            <p>{pages}</p>
          </div>
          <p>{name}</p>
          <div className="price">
            <p>{price}</p>
            <p>{location}</p>
          </div>
        </div>
      </Link>
    </div>
  );
};
export default Tour;
