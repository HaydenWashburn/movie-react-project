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
      <header>
        <nav>
          <div class="#212121 grey darken-4 nav-wrapper">
            <h6 class="brand-logo center">ReactFlix</h6>
            <ul class="#212121 grey darken-4 left hide-on-med-and-down">
              <li>
                <a href="home">Home</a>
              </li>
              <li>
                <a href="trending">Trending</a>
              </li>
              <li>
                <a href="suggested">Suggested</a>
              </li>
            </ul>
          </div>
        </nav>
      </header>
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
    </div>
  );
}

export default GetTrending;
