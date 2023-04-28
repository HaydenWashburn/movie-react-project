import React from "react";
import { Link } from "react-router-dom";
import Profile from "../Components/profile";
import LogoutButton from "../Components/logout";
import LoginButton from "../Components/login";
import useSavedMovies from "../utils/LocalStorageFunction";
import { useAuth0 } from "@auth0/auth0-react";

function ProfilePage() {
  let { user, isAuthenticated } = useAuth0()
  let { movieList } = useSavedMovies(isAuthenticated && user.email);
  return (
    <div>
      <div className="page-button-container">
        <LoginButton />
        <LogoutButton />
      </div>
      <div className="profile-container">
        <Profile />
      </div>
      <div className="movie-container">
        {movieList.map((movie) => {
          return (
            <div className="movie-content">
              <Link to={`/movie/${movie.id}`}>
                <img
                  class="movie-image section responsive-img"
                  src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}
                  alt="Movie Poster"
                />
              </Link>
              <p>{movie.title}</p>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default ProfilePage;
