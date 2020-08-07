import React from "react";

import Logo from "../../img/tour/logo.png";

const PaymentName = () => {
  return (
    <table
      className="table table-borderless pay-price"
      style={{ width: "80%" }}
    >
      <thead>
        <tr>
          <img src={Logo} alt="Logo" />
        </tr>
      </thead>
      <thead>
        <tr className="pay-name">
          <th style={{ fontSize: 26 }}>6D/4N Fun Tassie Vacation</th>
          <th>Duration</th>
          <th>Date Trip</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>Australia</td>
          <td>26 August 2020</td>
          <td>6 Days 4 Night</td>
        </tr>
      </tbody>
      <thead className="pay-name">
        <tr>
          <th>
            <span className="waiting-payment">Waiting Payment</span>
          </th>
          <th>Accomodation</th>
          <th>Transportation</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td></td>
          <td>Hotel 4 Nights</td>
          <td>Qatar Airways</td>
        </tr>
      </tbody>
    </table>
  );
};

export default PaymentName;
