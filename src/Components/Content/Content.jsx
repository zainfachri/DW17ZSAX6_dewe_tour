import React from "react";

import "./Content.css";

const Content = (props) => {
  return (
    <div className="container" style={{ marginTop: -70 }}>
      <div className="card">
        <img src={props.img} />
        <h3>{props.name}</h3>
        <p>{props.detail}</p>
      </div>
    </div>
  );
};
export default Content;
