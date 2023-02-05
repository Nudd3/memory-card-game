import React from 'react';
import Grid from './Grid';
const Main = (props) => {
  const NUMBER_OF_CARDS = 12;

  const getPokemons = async () => {
    const pokemonArray = [];

    for (let i = 1; i <= NUMBER_OF_CARDS; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const response = await fetch(url, {mode: 'cors'});
      const data = await response.json();
      console.log(data);
    }
  };

  return (
    <main className='main'>
      <Grid />
      <button onClick={getPokemons}>click</button>
    </main>
  );
};

export default Main;
