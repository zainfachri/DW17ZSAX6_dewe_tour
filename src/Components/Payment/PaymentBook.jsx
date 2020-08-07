import React from "react";

import book from "../../img/tour/book.png";

const PaymentBook = () => {
  return (
    <div className="book-img">
      <h2 style={{ fontWeight: 700 }}>Booking</h2>
      <p className="card-text" style={{ color: "#959595" }}>
        <strong>Saturday, </strong>
        22 July 2020
      </p>
      <img src={book} alt="" />
      <p style={{ color: "#959595", fontSize: 13 }}>upload payment proof</p>
    </div>
  );
};

export default PaymentBook;
