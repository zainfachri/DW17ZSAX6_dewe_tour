import React from "react";
import { Link } from "react-router-dom";

import tourData from "../../DataTour/TourData";

const Tour = () => {
  // const { img, pages, name, price, location } = tourData;

  return (
    <div className="main">
      <p>Group Tour</p>
      {tourData.map((tour) => (
        <div className="tourList">
          <div className="list">
            <Link to="/detail">
              <div className="tour">
                <div className="picture">
                  <img src={tour.img} />
                  <p>{tour.pages}</p>
                </div>
                <p>{tour.name}</p>
                <div className="price">
                  <p>{tour.price}</p>
                  <p>{tour.location}</p>
                </div>
              </div>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};
export default Tour;
