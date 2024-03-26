import React from 'react';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Footer from './components/Footer';
import Navbar from './components/Navbar';
import NotFound from './screens/404';
import PokemonDetails from './screens/PokemonDetails';
import Pokemons from './screens/Pokemons';

const App = () => {
  return (
    <BrowserRouter>
    <div className=' h-screen flex flex-col'> 
      <Navbar />
      <div className='container mx-auto flex-1 px-10'>
        <Routes>
          <Route path='/' element={<Pokemons />} />
          <Route path='/pokemons/:name' element={<PokemonDetails />} />
          <Route path='*' element={<NotFound />}/>
        </Routes>
      </div>
      <Footer />
      </div>
    </BrowserRouter>
  );
};

export default App;
