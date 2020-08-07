import React from "react";
import PayConfirm from "./PayConfirm";
import { BrowserRouter as Router, Route, Switch, Link } from "react-router-dom";

const PayButton = () => {
  return (
    <Router>
      <div className="row paybtn">
        <div className="col-9"></div>
        <div className="col-3">
          <Link to="/payconfirm">
            <button type="button" class="btn btn-warning btn-lg">
              PAY
            </button>
          </Link>
        </div>
      </div>

      <Switch>
        <Route path="/payconfirm">
          <PayConfirm />
        </Route>
      </Switch>
    </Router>
  );
};

export default PayButton;
