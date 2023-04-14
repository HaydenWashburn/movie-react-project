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
          <div class="#1976d2 blue darken-2 nav-wrapper">
            <h6 class="brand-logo center">
              ReactFlix
            </h6>
            <ul class="#1976d2 blue darken-2 left hide-on-med-and-down">
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
          <ul className="movie-container">
          {movieObject.map((movie)=>{
            return(
              <li className="d-flex">
                <p>{movie.title}</p>
                </li>
                )
              })}
              </ul>
        </body>
      </div>
    </div>
  );
}

export default HomePage;
