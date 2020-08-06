import React from "react";

const PriceTour = () => {
  return (
    <div>
      <div className="row number">
        <div className="col-6">
          <h1>
            <span style={{ color: "#FFAF00" }}>IDR. 12,398,000</span> / Person
          </h1>
        </div>
        <div className="col-6">
          <h1 style={{ textAlign: "right" }}>
            <span className="minus">- </span>1<span className="plus"> +</span>
          </h1>
        </div>
      </div>
      <hr />
      <div className="row">
        <div className="col-6">
          <h1 style={{ fontSize: 28, fontWeight: "bold" }}>Total :</h1>
        </div>
        <div className="col-6">
          <h1 style={{ color: "#FFAF00", fontSize: 28, textAlign: "right" }}>
            IDR. 12,398,000
          </h1>
          <div className="row book">
            <div className="col-7" />
            <div className="col-5">
              <button type="button" class="btn btn-warning btn-lg">
                BOOK NOW
              </button>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PriceTour;
