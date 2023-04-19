// create Home Page with a list of movies/images  rendered
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function HomePage() {
  let [movieObject, setMovieObject] = useState([]);
  let [page, setPage] = useState(1);

  function getMovies(pages = 1, startingPage = 1) {
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
        setMovieObject(
          allResults.reduce((acc, data) => acc.concat(data.results), [])
        );
      })
      .catch((err) => console.error(err));
  }

  console.log(movieObject);
  useEffect(() => {
    getMovies(1, page);
  }, [page]);

  return (
      <div className="movie-container row">
         {/* <ul class="pagination">
         <li class="waves-effect"><a href="#!"><i   
          onClick={() => {
            setPage(page + 1);
          }}
        class="material-icons">arrow_forward</i></a></li>
         </ul> */}
        {movieObject.map((movie) => {
          return (
            <div>
              <div
                className="movie-content col s12 m6 l4"
                // style={{paddingRight:"5px", paddingLeft:"5px"}} (attempting to get rid of gap when screen size is 704-785px)
              >
                <Link to={`/movie/${movie.id}`}>
                  <img
                    class="movie-image section hoverable"
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

export default HomePage;
