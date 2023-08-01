import './App.css';
import React, { useState } from 'react';
import MovieSearch from './MovieSearch';
import FavoritesList from './FavoritesList';
import MovieModal from './MovieModal';


function App() {
  const [favorites,setFavorites] = useState([]);
  const [isModalOpen,setIsModalOpen] = useState(false);
  const [selectedMovie,setSelectedMovie] = useState(null);

  const addFavorite = (movie) => 
  {
    setFavorites([...favorites,movie]);
  }
  
  const showModal = (movie) =>
  {
    setSelectedMovie(movie);
    setIsModalOpen(true);
  }

  const closeModal = () =>
  {
    setSelectedMovie(null);
    setIsModalOpen(false);
  }

  const removeFavorite = (movie) => {
    setFavorites(favorites.filter(x => x.imdbID !== movie.imdbID))
  }

  return (
       
    <div className='App'>
      <MovieSearch addFavorite={addFavorite} />
      <FavoritesList favorites={favorites} removeFavorite={removeFavorite} showModal={showModal}/>
      { selectedMovie && (
      <MovieModal isModalOpen={isModalOpen} movie={selectedMovie} closeModal={closeModal}/>
      ) }
    </div>
  );
  
  }
export default App;
