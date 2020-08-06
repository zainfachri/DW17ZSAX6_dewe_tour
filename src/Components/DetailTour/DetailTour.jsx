import React from "react";

import ImageTour from "./ImageTour";
import InfoTrip from "./InfoTrip";
import DescTour from "./DescTour";
import PriceTour from "./PriceTour";
import "./DetailTour.css";

import a1 from "../../img/tour/a1.png";
import a2 from "../../img/tour/a2.png";
import a3 from "../../img/tour/a3.png";
import a4 from "../../img/tour/a4.png";

const DetailTour = (props) => {
  return (
    <div className="container detail">
      <div className="detail-title">
        <h1>6D/4N Fun Tassie Vacation + Sydney</h1>
        <p style={{ fontSize: 22, color: "#A8A8A8", fontWeight: "700" }}>
          Australia
        </p>
      </div>

      <ImageTour a1={a1} a2={a2} a3={a3} a4={a4} />
      <InfoTrip />
      <DescTour />
      <PriceTour />
    </div>
  );
};

export default DetailTour;
