import { useState, useEffect } from "react";

function useSavedMovies(email) {
    const [movieList, setMovieList] = useState([]);
  
    function addMovie(movie) {
      if(!email || !movie)return
      let updatedMovies = [...movieList, movie];
      setMovieList(updatedMovies);
      localStorage.setItem("savedMovies-"+ email, JSON.stringify(updatedMovies));
    }
  
    function removeMovie(id) {
      if(!email || !id)return
      let updatedMovies = [...movieList];
      let movieIdxToDelete = updatedMovies.find((movie) => movie.id == id)
      updatedMovies.splice(movieIdxToDelete, 1);
      setMovieList(updatedMovies);
      localStorage.setItem("savedMovies-" + email, JSON.stringify(updatedMovies));
    }
  
    useEffect(() => {
      if(email){
        setMovieList(JSON.parse(localStorage.getItem("savedMovies-" + email)) || [])
      }
    }, [email]);
  
    return { movieList, addMovie, removeMovie };
  }
  
  export default useSavedMovies;