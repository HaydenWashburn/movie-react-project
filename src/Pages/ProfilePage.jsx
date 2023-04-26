import React from "react";
import Profile from "../Components/profile";
import LogoutButton from "../Components/logout";
import LoginButton from "../Components/login";
import useSavedMovies from "../utils/LocalStorageFunction";

function ProfilePage(){
   let { movieList } = useSavedMovies()
    return(
        <div>
            <div className="page-button-container">
            <LoginButton />
            <LogoutButton />
            </div>
        <div className="profile-container">
            <Profile />
            {movieList.map((movie)=>{
                return(
                    <p>{movie.title}</p>
                )
            })}
        </div>  
        </div>
    )
} 


export default ProfilePage;