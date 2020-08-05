import React from 'react'
import Header from '../Components/Header/Header'
import Benefit from '../DataTour/Benefit'
import TourData from '../DataTour/TourData'
import Footer from '../Components/Footer/Footer'

const Home = () => {
  return (
    <div className="App">
      <Header />
      <Benefit />
      <TourData />
      <Footer />
    </div>
  );
}
export default Home