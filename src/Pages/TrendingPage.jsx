// Create a page that has the trending movies per week populated
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GetTrending() {
  let [trendingMovies, setTrendingMovies] = useState([]);

  function fetchTrending() {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/day?api_key=b6ad3a4bb91a1af81fa26314c346bd24"
    )
      .then((response) => response.json())
      .then((response) => {
        setTrendingMovies(response.results);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
    <div>
      <ul className="movie-container">
        {trendingMovies.map((movie) => {
          return (
            <div className="movie-content">
            <Link to={`/movie/${movie.id}`}><img className="movie-image" src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`} alt="Movie Poster" /></Link> 
          <li>
            <h5>{movie.title}</h5>
            </li>
          </div>
          );
        })}
      </ul>
    </div>
  );
}

export default GetTrending;
