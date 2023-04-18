// create Home Page with a list of movies/images  rendered
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  let [movieObject, setMovieObject] = useState([]);

  function getMovie() {
    fetch(
      "https://api.themoviedb.org/3/discover/movie?api_key=b6ad3a4bb91a1af81fa26314c346bd24&language=en-US&region=US&include_adult=false&page=1&year=2023"
    )
      .then((response) => response.json())
      .then((data) => {
        // console.log(data.results)
        setMovieObject(data.results);
      })
      .catch((err) => console.error(err));
  }

  console.log(movieObject);
  useEffect(() => {
    getMovie();
  }, []);

  return (
    <div>
      <body>
        <ul className="movie-container">
          {movieObject.map((movie) => {
            return (
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
            );
          })}
        </ul>
      </body>
    </div>
  );
}

export default HomePage;
