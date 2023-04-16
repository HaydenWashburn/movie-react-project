// create Home Page with a list of movies/images  rendered
import { useState, useEffect } from "react";

function HomePage() {
  let [movieObject, setMovieObject] = useState([]);


// TODO: Figure out how to fetch image configuration API to insert movie posters"
  function getMovie() {
// try {
//   const results = Promise.all([
//     fetch('https://api.themoviedb.org/3/discover/movie/?api_key=b6ad3a4bb91a1af81fa26314c346bd24'),
//     fetch('https://image.tmdb.org/t/p/w500/?api_key=b6ad3a4bb91a1af81fa26314c346bd24')
//   ])
// } catch (error) {
  
// }
fetch(
'https://api.themoviedb.org/3/discover/movie?api_key=b6ad3a4bb91a1af81fa26314c346bd24&language=en-US&region=US&include_adult=false&page=1&year=2023'
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
        <body>
          <ul className="movie-container">
          {movieObject.map((movie)=>{
            return(
              <div className="movie-content">
                <img className="placeholder-image" src="https://media.istockphoto.com/id/1022028010/vector/image-unavailable-icon.jpg?s=2048x2048&w=is&k=20&c=2LxVQ9bsyOAe6s_zhNE9dqn5FSHltb28oNXmPAq-UVU=" alt="Placeholder Photo" />
              <li>
                <p>{movie.title}</p>
                {/* <img src={movie.poster_path} alt="Movie Poster" /> */}
                </li>
              </div>
                )
              })}
              </ul>
        </body>
    </div>
  );
}


export default HomePage;
