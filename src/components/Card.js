import React from 'react';

const Card = ({id, name, sprite, cardPressHandler}) => {

  const clickHandler = () => {
    cardPressHandler(id);
  }

  return (
    <div className="card" onClick={clickHandler}>
      <img className='card-img' src={sprite} alt={name} />
      <p className='card-text'>{name}</p>
    </div>
  )

}

export default Card;