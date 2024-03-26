import React from 'react';
import { Link } from 'react-router-dom';

const PokemonItem = ({ pokemon }) => {
  return (
    <Link to={`/pokemons/${pokemon.name}`} className='border-2 rounded-lg p-5'>
      <p className='font-bold capitalize text-lg'>{pokemon.name}</p>
      <div className='flex justify-center p-5'>
        <img
          className='h-[120px] w-[120px] object-contain'
          src={pokemon.image}
        />
      </div>
    </Link>
  );
};

export default PokemonItem;
