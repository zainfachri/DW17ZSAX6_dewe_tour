import React from "react";
import contentMenu from "../../DataTour/Benefit";

import "./Content.css";

const Content = () => {
  return (
    <div className="container" style={{ marginTop: 30 }}>
      {contentMenu.map((benefit) => (
        <div className="card benefit" key={benefit.id}>
          <img src={benefit.img} />
          <h3>{benefit.name}</h3>
          <p>{benefit.detail}</p>
        </div>
      ))}
    </div>
  );
};
export default Content;
