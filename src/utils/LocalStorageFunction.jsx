import { useState, useEffect } from "react";

function useSavedMovies() {
    const [movieList, setMovieList] = useState([]);
  
    function addMovie(movie) {
      let updatedMovies = [...movieList, movie];
      setMovieList(updatedMovies);
      localStorage.setItem("savedMovies", updatedMovies);
    }
  
    function removeMovie(id) {
      let updatedMovies = [...movieList];
      let movieIdxToDelete = updatedMovies.find((movie) => movie.id == id)
      updatedMovies.splice(movieIdxToDelete, 1);
      setMovieList(updatedMovies);
      localStorage.setItem("savedMovies", updatedMovies);
    }
  
    useEffect(() => {
      setMovieList(localStorage.getItem("savedMovies") || [])
    }, []);
  
    return { movieList, addMovie, removeMovie };
  }
  
  export default useSavedMovies;