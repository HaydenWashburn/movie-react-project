// Create a page that has the trending movies per week populated
import { useState, useEffect } from "react";

function GetTrending() {
  let [trendingMovies, setTrendingMovies] = useState([]);

  function fetchTrending() {
    fetch(
      "https://api.themoviedb.org/3/trending/movie/week?api_key=b6ad3a4bb91a1af81fa26314c346bd24"
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
            <li className="d-flex">
              <p>{movie.title}</p>
            </li>
          );
        })}
      </ul>
    </div>
  );
}

export default GetTrending;
