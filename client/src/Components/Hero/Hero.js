import React from 'react';

import './Hero.scss';
import image from '../../Assets/word_cloud.png';


class Hero extends React.Component {
  render() {
    return (
      <section className="hero">
        <p className="hero__title animated fadeInLeft">Top Trending Words</p>
        <p className="hero__description animated fadeInLeft">Interested in knowing what topics are trending? This word web displays the most commonly used words across Mashable! The larger the word the more used it has been in the past two years.</p>
        <div className="hero__image-container">
          <img className="hero__image-container__image" src={image}></img>
        </div>
      </section>
      
    )
  }
}

export default Hero;