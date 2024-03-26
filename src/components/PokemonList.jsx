import React, { useEffect, useState } from 'react';
import PokemonItem from './PokemonItem';
import axios from 'axios';
import Pagination from './Pagination';

const PokemonList = () => {
  // STEP 1//
  const [pokemonsData, setPokemonsData] = useState(null);

  // STEP 3//
  useEffect(() => {
    getPokemons('https://pokeapi.co/api/v2/pokemon/?offset=0&limit=12');
  }, []);

  const getPokemons = (url) => {
    axios.get(url).then((res) => {
      setPokemonsData({
        ...res.data,
        results: res.data.results.map((item) => ({
          ...item,
          image: `https://img.pokemondb.net/artwork/large/${item.name}.jpg`,
        })),
      });
    });
  };
  console.log('pokemonsData:', pokemonsData);

  // STEP 2//
  if (pokemonsData == null) {
    return (
      <div className='h-full'>
        <h1>Loading...</h1>
      </div>
    );
  }

  return (
    <>
      <div className=' grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 py-10 gap-4'>
        {pokemonsData.results.map((item, index) => (
          <PokemonItem pokemon={item} key={index} />
        ))}
      </div>
      <Pagination
        next={() => {
          getPokemons(pokemonsData.next);
          setPokemonsData(null);
        }}
        prev={() => {
          getPokemons(pokemonsData.previous);
          setPokemonsData(null);
        }}
        nextDisabled={!pokemonsData.next}
        prevDisabled={!pokemonsData.previous}
      />
    </>
  );
};

export default PokemonList;
