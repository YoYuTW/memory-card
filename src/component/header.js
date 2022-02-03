import React from 'react';
import enLogo from './Hololive_English_logo.png';
import '../styles/header.css';

const Header = (props) => {
  return (
    <header>
      <h1><img src={enLogo} alt='HoloEN' height='72px'/> Memory Card</h1>
      <div className='scoreBoard'>
        <div className='score'>Score:{props.score}</div>
        <div className='bestScore'>Best Score:{props.highScore}</div>
      </div>
    </header>
  )
};

export default Header;