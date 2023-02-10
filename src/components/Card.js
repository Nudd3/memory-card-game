import React from 'react';

const Card = ({ name, sprite, cardPressHandler }) => {
  const clickHandler = () => {
    cardPressHandler(name);
  };

  return (
    <div className='card' onClick={clickHandler}>
      <img className='card-img' src={sprite} alt={name} />
      <p className='card-text'>{name.toUpperCase()}</p>
    </div>
  );
};

export default Card;
