import React, {useEffect, useState} from 'react';
import './App.css'
import MovieMain from './components/MovieMain'
import TopCastContainer from './components/TopCastContainer';
import { BookingButton } from './components/BookingButton';

function App() {
  const [moviepostman, setMovies] = useState([]);

  useEffect(() => {
    fetch("http://www.omdbapi.com/?i=tt3896198&apikey=7658a277") 
      .then(response => response.json())
      .then(data => setMovies(data));
  }, []);

  return (
    <div className="App">
      <MovieMain moviepostman={moviepostman}/>
      <TopCastContainer moviepostman={moviepostman}/>
      <BookingButton />
    </div>
  )
}


export default App
