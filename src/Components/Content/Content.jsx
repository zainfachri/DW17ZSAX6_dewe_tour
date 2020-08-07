import React from "react";

import "./Content.css";

const Content = (props) => {
  const { img, name, detail } = props;

  return (
    <div className="container" style={{ marginTop: 30 }}>
      <div className="card benefit">
        <img src={img} />
        <h3>{name}</h3>
        <p>{detail}</p>
      </div>
    </div>
  );
};
export default Content;
