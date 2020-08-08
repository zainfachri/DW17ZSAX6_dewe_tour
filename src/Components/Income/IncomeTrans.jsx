import React from "react";

import "./IncomeTrans.css";

const IncomeTrans = () => {
  return (
    <div className="table-wrapper">
      <div className="table-income">
        <h1>Incoming Transaction</h1>
        <table className="table table-striped income">
          <thead>
            <tr>
              <th>No</th>
              <th>Users</th>
              <th>Trip</th>
              <th>Bukti Transfer</th>
              <th>Status Payment</th>
              <th>Action</th>
            </tr>
          </thead>
          <tbody>
            <tr>
              <td>1</td>
              <td>M.Fachri Zain</td>
              <td>6D/4N Fun Tassie Vaca...</td>
              <td>bca.png</td>
              <td>
                <strong>Pending</strong>
              </td>
              <td>
                <i class="fa fa-search" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>M.Fachri Zain</td>
              <td>6D/4N Fun Tassie Vaca...</td>
              <td>bca.png</td>
              <td>
                <strong>Pending</strong>
              </td>
              <td>
                <i class="fa fa-search" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>M.Fachri Zain</td>
              <td>6D/4N Fun Tassie Vaca...</td>
              <td>bca.png</td>
              <td>
                <strong>Pending</strong>
              </td>
              <td>
                <i class="fa fa-search" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>M.Fachri Zain</td>
              <td>6D/4N Fun Tassie Vaca...</td>
              <td>bca.png</td>
              <td>
                <strong>Pending</strong>
              </td>
              <td>
                <i class="fa fa-search" aria-hidden="true"></i>
              </td>
            </tr>
            <tr>
              <td>1</td>
              <td>M.Fachri Zain</td>
              <td>6D/4N Fun Tassie Vaca...</td>
              <td>bca.png</td>
              <td>
                <strong>Pending</strong>
              </td>
              <td>
                <i class="fa fa-search" aria-hidden="true"></i>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default IncomeTrans;
