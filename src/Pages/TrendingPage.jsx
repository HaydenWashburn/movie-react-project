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
    <div>
      <div className="movie-container row">
        {trendingMovies.map((movie) => {
          return (
            <div>
                   <div className="movie-content col l4 m6 s12" 
                // style={{paddingRight:"5px", paddingLeft:"5px"}} (attempting to get rid of gap when screen size is 704-785px)
                >
              <Link to={`/movie/${movie.id}`}>
                <img
                  class="movie-image section responsive-img"
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
    </div>
  );
}

export default GetTrending;
