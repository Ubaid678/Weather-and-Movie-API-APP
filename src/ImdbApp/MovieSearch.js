import './App.css';
import React, { useState } from 'react';


function MovieSearch(props) {

  const [movieTitle,setMovieTitle] = useState('');

  const searchMovies  = async (e) => 
  {
    e.preventDefault()
    const apiKey = '64a8128d'; 
    const x = `http://www.omdbapi.com/?apikey=${apiKey}&t=${movieTitle}`;
    

    try 
    {
      const response = await fetch(x);
      const data = await response.json();
      props.addFavorite(data)
    }
    catch(e)
    {
    console.log(e);
    }
  }


  return (
    <div className="App">
      <form onSubmit={searchMovies}>
        <label htmlFor="query">Movie Title</label>
        <input type="text" name='query' value={movieTitle} onChange={(e) => setMovieTitle(e.target.value)} placeholder='Enter a movie title' role='search' />
        <button type='submit'>Search</button>
      </form>      
    </div>
  );
}

export default MovieSearch;
