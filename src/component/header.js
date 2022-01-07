import React from 'react';

const Header = (props) => {
  return (
    <header>
      <h1>HoloEN Memory Card</h1>
      <div className='scoreBoard'>
        <div className='score'>Score:{props.score}</div>
        <div className='bestScore'>Best Score:{props.highScore}</div>
      </div>
    </header>
  )
};

export default Header;