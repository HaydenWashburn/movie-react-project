import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useSavedMovies from "../utils/LocalStorageFunction";
import { useAuth0 } from "@auth0/auth0-react";
import LoginButton from "../Components/login";

function SingleFilmPage() {
  let [item, setItem] = useState({});
  let { id } = useParams();
  let { user, isAuthenticated } = useAuth0();
  let { movieList, addMovie, removeMovie } = useSavedMovies(isAuthenticated && user.email);

  function getMovie() {
    Promise.all([
      fetch(
        `https://api.themoviedb.org/3/movie/${id}?api_key=b6ad3a4bb91a1af81fa26314c346bd24`
      ),
      fetch(
        `https://api.themoviedb.org/3/movie/${id}/reviews?api_key=b6ad3a4bb91a1af81fa26314c346bd24&language=en-US&page=1`
      ),
    ])
      .then((responses) => Promise.all(responses.map(response=>response.json())) )
      .then((data) => {
        console.log(data)
        let result = {...data[0], ...data[1]}
        console.log(result)
        setItem(result);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getMovie();
  }, []);

  let isFavorite = movieList.find((movie) => {
    return movie.id == id;
  });
  let ActionButton = () =>{
    if(isAuthenticated){
      if(isFavorite){
        return(
          <button
          class="waves-effect waves-light btn red"
          onClick={() => {
            removeMovie(item.id);
          }}
        >
          Remove From Watch List
        </button>
        )
      }else{
       return( <button
        class="waves-effect waves-light btn red"
        onClick={() => {
          addMovie(item);
        }}
      >
        Save To Watch List
      </button>
     ) }
    }else{
      return <LoginButton />
    }
  }


  return (
    <div className="singleFilm-container row">
      <div className="movie-content">
        <img
          className="movie-image section"
          src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
          alt="Movie"
        />
        <h5>{item.title}</h5>
        <p className="overview-container section">{item.overview}</p>
        <p>Release Date: {item.release_date}</p>
        <ActionButton />
        {/* <h3>Reviews:</h3>
        {item.results.map((review)=>{return(
          <p>{review.content}</p>
        )})} */}
      </div>
    </div>
  );
}

export default SingleFilmPage;
