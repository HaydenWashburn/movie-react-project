import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import useSavedMovies from "../utils/LocalStorageFunction";

function SingleFilmPage() {
  let [item, setItem] = useState({});
  let { id } = useParams();


  function getMovie() {
    fetch(
      `https://api.themoviedb.org/3/movie/${id}?api_key=b6ad3a4bb91a1af81fa26314c346bd24`
    )
      .then((response) => response.json())
      .then((data) => {
        setItem(data);
      })
      .catch((err) => console.error(err));
  }


  useEffect(() => {
    getMovie();
  });

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
      <button className="buttons">Save To Favorites</button>
    </div>
    </div>
  );
}

export default SingleFilmPage;
