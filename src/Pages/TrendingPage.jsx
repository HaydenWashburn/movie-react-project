// Create a page that has the trending movies per week populated
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function GetTrending() {
  let [trendingMovies, setTrendingMovies] = useState([]);

  function fetchTrending() {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=b6ad3a4bb91a1af81fa26314c346bd24"
    )
      .then((response) => response.json())
      .then((data) => {
        setTrendingMovies(data.results);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    fetchTrending();
  }, []);

  return (
      <div className="movie-container">
        {trendingMovies.map((movie) => {
          return (
            <div>
              <div
                className="movie-content col s12 m6 l3"
              >
                <Link to={`/movie/${movie.id}`}>
                  <img
                    class="movie-image responsive-img"
                    src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                    alt="Movie Poster"
                  />
                </Link>
                <h5>{movie.title}</h5>
              </div>
            </div>
          );
        })}
      </div>
  );
}

export default GetTrending;
