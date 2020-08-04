import React from 'react';
import './App.css';
import Header from './Components/Header/Header'
import ContentMenu from './Components/Pages/ContentMenu'
import TourList from './Components/Pages/TourList'
import Footer from './Components/Footer/Footer'

function App() {
  return (
    <div className="App">
      <Header />
      <ContentMenu />
      <TourList />
      <Footer />
    </div>
  );
}

export default App;
