import React, { useEffect, useState } from 'react';
import Grid from './Grid';
const Main = ({currentScoreUpdater}) => {
  const NUMBER_OF_CARDS = 12; // Possibility

  const [pokemonsArray, setPokemonsArray] = useState([]);
  const [rememberedCards, setRememberedCards] = useState([]);


  useEffect(() => {
    const createCards = async() => {
      setPokemonsArray(shuffle(await getPokemons()));
    }

    createCards();
  }, [])

  // useEffect(() => {
  //   console.log(rememberedCards);
  // }, [rememberedCards])

  useEffect(() => {
    shuffle(pokemonsArray);
  })

  const getPokemons = async () => {
    const pokemonArray = [];

    for (let i = 1; i <= NUMBER_OF_CARDS; i++) {
      const url = `https://pokeapi.co/api/v2/pokemon/${i}`;
      const response = await fetch(url, { mode: 'cors' });
      const data = await response.json();
      const id = data.id;
      const name = data.name;
      const sprite = data.sprites.other.dream_world.front_default;
      pokemonArray.push({ id: id, name: name, sprite: sprite });
    }

    return pokemonArray;
  };

  // Adds the name of the pressed pokemon to the rememberedCards array
  // If the pokemon has already been pressed, reset the game
  const cardPressHandler = (name) => {
    if(rememberedCards.includes(name)) {
      // highscore check
      // reset game
      console.log('Card already clicked');
    } else {
      // increase score
      currentScoreUpdater();
      setRememberedCards(rememberedCards => [...rememberedCards, name]);
    }
    
  }

  function shuffle(array) {
    let currentIndex = array.length,  randomIndex;
  
    // While there remain elements to shuffle.
    while (currentIndex !== 0) {
  
      // Pick a remaining element.
      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex--;
  
      // And swap it with the current element.
      [array[currentIndex], array[randomIndex]] = [
        array[randomIndex], array[currentIndex]];
    }
  
    return array;
  }

  return (
    <main className='main'>
      <Grid pokemons={pokemonsArray} cardPressHandler={cardPressHandler}/>
    </main>
  );
};

export default Main;
