import React from "react";

const PaymentTotal = (props) => {
  return (
    <table className="table pay-price" style={{ width: "100%" }}>
      <thead>
        <tr>
          <th>No</th>
          <th>Full Name</th>
          <th>Gender</th>
          <th>Phone</th>
          <th colspan="2"></th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>1</td>
          <td>M.Fachri Zain</td>
          <td>Male</td>
          <td>082164894643</td>
          <th>Qty</th>
          <th>: 1</th>
        </tr>
        <tr>
          <td colspan="4"></td>
          <th>Total</th>
          <th>
            : <span>IDR. 12,398,000</span>
          </th>
        </tr>
      </tbody>
    </table>
  );
};

export default PaymentTotal;
