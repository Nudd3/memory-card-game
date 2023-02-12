import React from 'react';

const Header = ({ currentScore, highScore }) => {
  return (
    <header className='header'>
      <div className='title-section'>
        <h3>Memory Game</h3>
      </div>
      <div className='score-section'>
        <h3>Current Score: {currentScore}</h3>
        <h3>High Score: {highScore}</h3>
      </div>
    </header>
  );
};

export default Header;
