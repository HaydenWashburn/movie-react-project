import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function SuggestedFilms() {
  let [randomMovie, setRandomMovie] = useState([]);

  function getRandomMovie() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=b6ad3a4bb91a1af81fa26314c346bd24&language=en-US&region=US&include_adult=false&page=1"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results)
        setRandomMovie(data.results);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getRandomMovie();
  }, [])
  

  return (
    <div>
        <ul className="movie-container">
      {randomMovie.map((movie) => {
        return(
            <div className="movie-content">
            <Link to={`/movie/${movie.id}`}>
              <img
                className="movie-image"
                src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                alt="Movie Poster"
              />
            </Link>
            <li>
              <h5>{movie.title}</h5>
            </li>
          </div>
        )
      })}
</ul>
      <h1>This will hold a random selection of suggested films</h1>
    </div>
  );
}

export default SuggestedFilms;
