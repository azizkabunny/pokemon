import React from 'react';

const PokemonDetailsExtra = ({ pokemonData }) => {
  return (
    <div className=' h-full col-span-8 p-5'>
      <h3 className='text-2xl font-bold'>Description</h3>
      {pokemonData.descriptions.map((item, index) => (
        <p key={index} className='mt-5'>
          {item.flavor_text}
        </p>
      ))}
      <div>
        <h3 className='mt-10 text-2xl font-bold'>Abilities</h3>
        <ul>
          {pokemonData.abilities.map((item, index) => (
            <li className=' capitalize' key={index}>
              {item.ability.name}
            </li>
          ))}
        </ul>
        <h3 className='mt-10 text-2xl font-bold'>Gender Ratio</h3>
        {pokemonData.gender_rate > 0 ? (
          <p>
            <span className='border-r-2 border-gray-500 pr-2 mr-2'>
              Female: {12.5 * (8 - pokemonData.gender_rate)}%
            </span>
            <span>Male: {12.5 * pokemonData.gender_rate}</span>
          </p>
        ) : (
          <span>Genderless</span>
        )}
        <div className='flex gap-10'>
          <div>
            <h3 className='mt-10 text-2xl font-bold'>Egg Group</h3>
            <ul>
              {pokemonData.egg_groups.map((item, index) => (
                <li className='capitalize' key={index}>
                  {item.name}
                </li>
              ))}
            </ul>
          </div>
          <div>
            <h3 className='mt-10 text-2xl font-bold'>Catch Ratio</h3>
            <ul>
              <li>{Math.round((100 / 255) * pokemonData?.capture_rate)}%</li>
            </ul>
          </div>
          <div>
            <h3 className=' mt-10 text-2xl font-bold'>Color</h3>
            <ul>
              <li className='capitalize'>{pokemonData.color}</li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
};

export default PokemonDetailsExtra;
