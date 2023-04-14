// create Home Page with a list of movies/images  rendered
import { useState, useEffect } from "react";

function HomePage() {
  let [movieObject, setMovieObject] = useState([]);

  function getMovie() {

    fetch(
      'https://api.themoviedb.org/3/discover/movie/?api_key=b6ad3a4bb91a1af81fa26314c346bd24'
    )
      .then((response) => response.json())
      .then((response) => {
      // console.log(response.results)
        setMovieObject(response.results)
      })   
      .catch((err) => console.error(err));
  }
console.log(movieObject)
  useEffect(() => {
    getMovie();
  }, []);


  return (
    <div>
      <header>
        <nav>
          <div class="#9e9e9e grey nav-wrapper">
            <a href="#!" class="brand-logo center">
              Home Of The Movies
            </a>
            <ul class="#9e9e9e grey left hide-on-med-and-down">
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
        <body>
          {movieObject.map((movie)=>{
            return(
              <div className="movie-container">
              <h6>{movie.title}</h6>
                {/* <img src={movie.poster_path} alt="Movie poster" /> */}
              </div>
            )
          })}
        </body>
      </div>
    </div>
  );
}

export default HomePage;
