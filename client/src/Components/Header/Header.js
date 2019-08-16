import React from 'react';

import logo from '../../Assets/logo.svg';
import search from '../../Assets/search-white.svg';
import heart from '../../Assets/heart-white.svg';

import './Header.scss';

class Header extends React.Component {
  render () {
    return (
      <header className="header">
        <div className="header__container1"></div>
        <div className="header__container2">
          <img className="header__container2__logo"src={logo}></img>
        </div>
        <div className="header__container3">
          <div className="header__container3--flex">
            <p className="header__container3__text">Home</p>
            <p className="header__container3__text black">Business</p>
            <p className="header__container3__text">Tech</p>
            <p className="header__container3__text">Social</p>
          </div>
          <div className="header__container3__box">
            <img src={search} className="header__container3__icons"></img>
            <img src={heart} className="header__container3__icons"></img>
          </div>
        </div>
      </header>
    )
  }
}

export default Header;