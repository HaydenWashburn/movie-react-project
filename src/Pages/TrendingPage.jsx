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
            <div className="movie-content">
            <img className="placeholder-image" src="https://media.istockphoto.com/id/1022028010/vector/image-unavailable-icon.jpg?s=2048x2048&w=is&k=20&c=2LxVQ9bsyOAe6s_zhNE9dqn5FSHltb28oNXmPAq-UVU=" alt="Placeholder Photo" />
          <li>
            <p>{movie.title}</p>
            {/* <img src={movie.poster_path} alt="Movie Poster" /> */}
            </li>
          </div>
          );
        })}
      </ul>
    </div>
  );
}

export default GetTrending;
