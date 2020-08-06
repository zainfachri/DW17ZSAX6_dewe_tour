import React from "react";
import {
  BrowserRouter as Router,
  Switch,
  Link,
  Route,
  Redirect,
} from "react-router-dom";

import DetailTour from "../DetailTour/DetailTour";
const Tour = (props) => {
  return (
    <Router>
      <div className="list">
        <Link to="/detail">
          <div className="tour">
            <div className="picture">
              <img src={props.img} />
              <p>{props.pages}</p>
            </div>
            <p>{props.name}</p>
            <div className="price">
              <p>{props.price}</p>
              <p>{props.location}</p>
            </div>
          </div>
        </Link>
      </div>
      <Switch>
        <Route path="/detail">
          <DetailTour />
        </Route>
      </Switch>
    </Router>
  );
};
export default Tour;
