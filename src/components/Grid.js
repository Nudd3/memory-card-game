import React from 'react';
import Card from './Card';
const Grid = ({ pokemons, cardPressHandler }) => {
  return (
    <div className='grid'>
      {pokemons?.map((pokemon) => {
        return (
          <Card
            key={pokemon.id}
            name={pokemon.name}
            sprite={pokemon.sprite}
            cardPressHandler={cardPressHandler}
          />
        );
      })}
    </div>
  );
};

export default Grid;
