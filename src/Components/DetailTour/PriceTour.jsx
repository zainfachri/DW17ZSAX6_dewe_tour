import React, { useState } from "react";
import { Link } from "react-router-dom";

const PriceTour = () => {
  const [counter, setCounter] = useState(1);
  const price = 12398000;
  const counterTotal = counter * price;

  const formatter = new Intl.NumberFormat("en-US", {
    style: "currency",
    currency: "IDR",
    minimumFractionDigits: 0,
  });

  const handleCountMinus = () => {
    if (counter <= 1) {
      return false;
    } else {
      setCounter(counter - 1);
    }
  };
  const handleCountPlus = () => {
    setCounter(counter + 1);
  };

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
            <button className="minus" onClick={() => handleCountMinus()}>
              -{" "}
            </button>
            {counter}
            <button className="plus" onClick={() => handleCountPlus()}>
              {" "}
              +
            </button>
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
            {formatter.format(counterTotal)}
          </h1>
          <div className="row book">
            <div className="col-7" />
            <div className="col-5">
              <Link to="/payment">
                <button type="button" class="btn btn-warning btn-lg">
                  BOOK NOW
                </button>
              </Link>
            </div>
          </div>
        </div>
      </div>
      <hr />
    </div>
  );
};

export default PriceTour;
