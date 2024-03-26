import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';

const SearchModal = ({ toggle, closeModal }) => {
  const [pokemons, setPokemons] = useState([]);
  const [searchText, setSearchText] = useState('');
  const navigate = useNavigate();

  useEffect(() => {
    getPokemons();
  }, []);

  const getPokemons = async () => {
    const response = await axios.get(
      'https://pokeapi.co/api/v2/pokemon/?limit=1302'
    );
    setPokemons(response.data.results);
  };

  if (!toggle) {
    return null;
  }

  return (
    <div className='fixed z-50 bg-white bg-opacity-80 top-0 bottom-0 right-0 left-0 flex items-center justify-center'>
      <div className='w-5/12 bg-white shadow-lg border-2 border-gray-200 rounded-lg'>
        <div className='border-2 border-b-gray-200 p-1 px-5 flex items-center gap-2'>
          <svg
            xmlns='http://www.w3.org/2000/svg'
            fill='none'
            viewBox='0 0 24 24'
            strokeWidth={1.5}
            stroke='currentColor'
            className='w-6 h-6'
          >
            <path
              strokeLinecap='round'
              strokeLinejoin='round'
              d='m21 21-5.197-5.197m0 0A7.5 7.5 0 1 0 5.196 5.196a7.5 7.5 0 0 0 10.607 10.607Z'
            />
          </svg>
          <input
            className='p-2 flex-1 outline-none text-lg'
            placeholder='Type a pokemon here...'
            type='text'
            value={searchText}
            onChange={(e) => setSearchText(e.target.value)}
          />
          <button onClick={closeModal}>
            <svg
              xmlns='http://www.w3.org/2000/svg'
              fill='none'
              viewBox='0 0 24 24'
              strokeWidth={1.5}
              stroke='currentColor'
              className='w-6 h-6'
            >
              <path
                strokeLinecap='round'
                strokeLinejoin='round'
                d='M6 18 18 6M6 6l12 12'
              />
            </svg>
          </button>
        </div>
        <div className='h-[250px] list-none overflow-auto flex flex-col'>
          {pokemons
            .filter((item) => item.name.startsWith(searchText))
            .map((item, index) => (
              <li
                onClick={() => {
                  navigate(`/pokemons/${item.name}`);
                  closeModal();
                }}
                className='capitalize p-2 hover:bg-gray-50 cursor-pointer'
                key={index}
              >
                {item.name}
              </li>
            ))}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;
