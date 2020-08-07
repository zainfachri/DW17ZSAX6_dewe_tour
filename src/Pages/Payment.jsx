import React, { Fragment } from "react";

import PaymentName from "../Components/Payment/PaymentName";
import PaymentBook from "../Components/Payment/PaymentBook";
import PaymentTotal from "../Components/Payment/PaymentTotal";
import PayButton from "../Components/Payment/PayButton";
import "../Components/Payment/Payment.css";

const Payment = () => {
  return (
    <Fragment>
      <div className="container payment">
        <div className="row inside-pay">
          <PaymentName />
          <PaymentBook />
          <PaymentTotal />
        </div>
      </div>
      <div className="container">
        <PayButton />
      </div>
    </Fragment>
  );
};

export default Payment;
