import React from 'react';
import PokemonType from './PokemonType';
import Stats from './Stats';

const PokemonDetailsCard = ({ pokemonData }) => {
  return (
    <div className='p-5 h-full col-span-4 border-2 border-gray-200 rounded-lg '>
      <h3 className='text-3xl capitalize font-bold flex'>
        {pokemonData.name}
        <span className='text-2xl ml-2 font-medium border-b-2 border-b-gray-300 pb-1'>
          #{pokemonData.id}
        </span>
      </h3>
      <div className='mt-5 flex gap-1 flex-wrap'>
        {pokemonData.types.map((item, index) => (
          <PokemonType type={item.type.name} key={index} />
        ))}
      </div>
      <div className=' flex py-10 items-center justify-center'>
        <img
          className='h-52'
          src={`https://img.pokemondb.net/artwork/large/${pokemonData.name}.jpg`}
        />
      </div>
      <div className='flex gap-4'>
        <div className='border-r-2 pr-4 flex flex-col py-2'>
          <span>Height</span>
          <span className='text-3xl font-bold border-b-2'>
            {pokemonData.height}.00 m
          </span>
        </div>
        <div className='flex flex-col py-2'>
          <span>Weight</span>
          <span className='text-3xl font-bold border-b-2'>
            {pokemonData.weight}.00 kg
          </span>
        </div>
      </div>
      <div className='mt-7'>
        {pokemonData.stats.map((item, index) => (
          <Stats key={index} title={item.stat.name} value={item.base_stat} />
        ))}
      </div>
    </div>
  );
};

export default PokemonDetailsCard;
