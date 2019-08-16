import React from 'react';
import Homepage from './Components/Homepage/Homepage.js';
import Header from './Components/Header/Header';
import Hero from './Components/Hero/Hero';
import Footer from './Components/Footer/Footer';
import Data from './Components/Data/Data';
import './App.scss';

class App extends React.Component {
  render () {
    return (
      <>
        <Header />
        <Hero />
        <Data />
        <Footer />
      </>
    );
  }
}

export default App;
