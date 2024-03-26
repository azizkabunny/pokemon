import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import PokemonDetailsCard from '../components/PokemonDetailsCard';
import Button from '../components/Button';
import PokemonDetailsExtra from '../components/PokemonDetailsExtra';
const PokemonDetails = () => {
  const [pokemonData, setPokemonData] = useState(null);
  const params = useParams();
  const navigate = useNavigate();

  useEffect(() => {
    getPokemonDetails();
  }, [params]);

  const getPokemonDetails = async () => {
    const [response, response2] = await axios.all([
      axios.get(`https://pokeapi.co/api/v2/pokemon/${params.name}`),
      axios.get(`https://pokeapi.co/api/v2/pokemon-species/${params.name}`),
    ]);
    const pokemonDetails = {
      id: response.data.id,
      name: response.data.name,
      types: response.data.types,
      height: response.data.height,
      weight: response.data.weight,
      stats: response.data.stats,
      abilities: response.data.abilities,
      descriptions: [
        response2.data.flavor_text_entries.find(
          (item) => item.language.name === 'en'
        ),
        response2.data.flavor_text_entries.find(
          (item) => item.language.name === 'ja'
        ),
      ],
      color: response2.data.color.name,
      egg_groups: response2.data.egg_groups,
      gender_rate: response2.data.gender_rate,
      capture_rate: response2.data.capture_rate,
    };

    setPokemonData(pokemonDetails);
  };

  if (pokemonData == null) {
    return (
      <div>
        <h3>Loading...</h3>
      </div>
    );
  }
  return (
    <div className=' h-full py-10 grid grid-cols-1 md:grid-cols-12 gap-0 md:gap-4'>
      <PokemonDetailsCard pokemonData={pokemonData} />
      <PokemonDetailsExtra pokemonData={pokemonData} />
      <div className=' py-1 px-4 rounded-lg text-white fixed bottom-5 right-10'>
        <Button title={'Back'} func={() => navigate(-1)} />
      </div>
    </div>
  );
};

export default PokemonDetails;
