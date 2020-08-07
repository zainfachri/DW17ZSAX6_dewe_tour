import React from "react";

import Header from "../Components/Header/Header";
import Benefit from "../DataTour/Benefit";
import TourData from "../DataTour/TourData";

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Benefit />
      <TourData />
    </div>
  );
};
export default Home;
