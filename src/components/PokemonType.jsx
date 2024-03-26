import React from 'react';

const colors = {
  normal: 'bg-stone-500 border-transparent text-primary-foreground',
  fire: 'bg-orange-500 border-transparent text-primary-foreground',
  water: 'bg-sky-500 border-transparent text-primary-foreground',
  grass: 'bg-green-600 border-transparent text-primary-foreground',
  electric: 'bg-yellow-400 border-transparent text-primary-foreground',
  ice: 'bg-blue-300 border-transparent text-primary-foreground',
  fighting: 'bg-red-500 border-transparent text-primary-foreground',
  poison: 'bg-fuchsia-600 border-transparent text-primary-foreground',
  ground: 'bg-orange-300 border-transparent text-primary-foreground',

  flying: 'bg-violet-300 border-transparent text-primary-foreground',
  psychic: 'bg-pink-600 border-transparent text-primary-foreground',
  bug: 'bg-lime-500 border-transparent text-primary-foreground',
  rock: 'bg-stone-600 border-transparent text-primary-foreground',
  ghost: 'bg-violet-400 border-transparent text-primary-foreground',
  dark: 'bg-stone-800 border-transparent text-primary-foreground',
  dragon: 'bg-violet-600 border-transparent text-primary-foreground',
  steel: 'bg-slate-400 border-transparent text-primary-foreground',
  fairy: 'bg-pink-300 border-transparent text-primary-foreground',
};
const PokemonType = ({ type }) => {
  return (
    <div
      className={` text-sm capitalize flex items-center justify-center w-16 rounded-xl text-white ${colors[type]}`}
    >
      {type}
    </div>
  );
};

export default PokemonType;
