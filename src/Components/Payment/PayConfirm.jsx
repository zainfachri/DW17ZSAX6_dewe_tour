import React from "react";
import { Link } from "react-router-dom";

const PayConfirm = () => {
  return (
    <div className="payconfirmBg">
      <div class="modal-dialog payconfirm">
        <div class="modal-content">
          <div class="modal-body">
            <p>
              Your payment will be confirmed within 1 x 24 hours To see orders
              click{" "}
              <Link to="/detail">
                <strong>Here </strong>
              </Link>
              thank you{" "}
            </p>
          </div>
          <div class="modal-footer">
            <Link to="/">
              <button
                type="button"
                class="btn btn-secondary"
                data-dismiss="modal"
              >
                Close
              </button>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayConfirm;
