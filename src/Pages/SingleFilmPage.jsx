import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";

function SingleFilmPage() {
  let [item, setItem] = useState({});
  let { id } = useParams();

  function getMovie() {
    fetch(
      `'https://api.themoviedb.org/3/movie/${id}?api_key=b6ad3a4bb91a1af81fa26314c346bd24`
    )
      .then((response) => response.json())
      .then((response) => {
        console.log(response.results);
        setItem(response.results);
      })
      .catch((err) => console.error(err));
  }

  useEffect(() => {
    getMovie();
  });

  return (
    <div>
      <img
        className="movie-image"
        src={`https://image.tmdb.org/t/p/w500/${item.poster_path}`}
        alt="Movie"
      />
      <h5>{item.title}</h5>
      <p>{item.overview}</p>
      <p>{item.release_date}</p>
    </div>
  );
}

export default SingleFilmPage;
