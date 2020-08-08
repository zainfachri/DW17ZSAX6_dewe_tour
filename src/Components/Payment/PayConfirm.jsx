import React from "react";
import { Link } from "react-router-dom";

const PayConfirm = ({ setModalPayment }) => {
  return (
    <div className="payconfirmBg">
      <div class="modal-dialog payconfirm">
        <div class="modal-content">
          <div class="modal-body">
            <p>
              Your payment will be confirmed within 1 x 24 hours To see orders
              click{" "}
              <Link to="/profile">
                <strong>Here </strong>
              </Link>
              thank you{" "}
            </p>
          </div>
          <div class="modal-footer">
            <button
              type="button"
              class="btn btn-secondary"
              data-dismiss="modal"
              onClick={() => setModalPayment(false)}
            >
              Close
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PayConfirm;
