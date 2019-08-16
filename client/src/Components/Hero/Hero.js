import React from 'react';

import './Hero.scss';
import image from '../../Assets/word_cloud.png';


class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <p className="hero__title animated fadeInLeft">Top Trending Words</p>
        <p className="hero__description animated fadeInLeft">LCD screens are uniquely modern in style, and the liquid crystals that make them work have allowed humanity to create slimmer, more portable technology than we’ve ever had access to before.</p>
        <div className="hero__image-container">
          <img className="hero__image-container__image" src={image}></img>
        </div>
      </section>
      
    )
  }
}

export default Hero;