import React from "react";

const InfoTrip = () => {
  return (
    <div>
      <div className="info-trip">
        <h3>Information Trip</h3>
        <div className="row row-cols-5 fasility">
          <div className="col">
            <p style={{ color: "#A8A8A8", fontWeight: 800 }}>Accomodation</p>
            <p>
              <i class="fa fa-building"></i> Hotel 4 Nights
            </p>
          </div>
          <div className="col">
            <p style={{ color: "#A8A8A8", fontWeight: 800 }}>Transportation</p>
            <p>
              <i class="fa fa-plane"></i> Qatar Airways
            </p>
          </div>
          <div className="col">
            <p style={{ color: "#A8A8A8", fontWeight: 800 }}>Eat</p>
            <p>
              <i class="fa fa-cutlery"></i> Included as Itinerary
            </p>
          </div>
          <div className="col">
            <p style={{ color: "#A8A8A8", fontWeight: 800 }}>Duration</p>
            <p>
              <i class="fa fa-clock-o"></i> 6 Day
            </p>
          </div>
          <div className="col">
            <p style={{ color: "#A8A8A8", fontWeight: 800 }}>Date Trip</p>
            <p>
              <i class="fa fa-calendar"></i> 26 August 2020
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default InfoTrip;
