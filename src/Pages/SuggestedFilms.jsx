import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import selectRandomRangeFromList from "../utils/HelperFunction";

function SuggestedFilms() {
  let [randomMovie, setRandomMovie] = useState([]);

  let [page, setPage] = useState(1);

  function getRandomMovies(pages = 1, startingPage = 1) {
    let fetches = new Array(pages).fill(null).map((_, idx) => {
      return fetch(
        `https://api.themoviedb.org/3/discover/movie?api_key=b6ad3a4bb91a1af81fa26314c346bd24&language=en-US&region=US&include_adult=false&page=${
          idx + startingPage
        }&year=2023`
      );
    });

    Promise.all(fetches)
      .then((results) =>
        Promise.all(results.map((response) => response.json()))
      )
      .then((allResults) => {
        // console.log(data.results)
        setRandomMovie(
          allResults.reduce((acc, data) => acc.concat(data.results), [])
        );
      })
      .catch((err) => console.error(err));
  }

  function refreshPage() {
    window.location.reload(false);
  }

  useEffect(() => {
    getRandomMovies(10, 1);
  }, [page]);

  let suggestedList = selectRandomRangeFromList(randomMovie, 12);
  console.log(suggestedList.length);

  return (
    <div>
      <div className="page-button-container">
        <a class="waves-effect waves-light btn red" onClick={refreshPage}>
          Refresh
        </a>
      </div>
      <div className="movie-container">
        {suggestedList.map((movie) => {
          return (
            <div>
              <div
                className="movie-content"
                // style={{paddingRight:"5px", paddingLeft:"5px"}} (attempting to get rid of gap when screen size is 704-785px)
              >
                <Link to={`/movie/${movie.id}`}>
                  <img
                    class="movie-image  responsive-img"
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

export default SuggestedFilms;
