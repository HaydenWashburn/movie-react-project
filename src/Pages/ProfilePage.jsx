import React from "react";
import Profile from "../Components/profile";
import LogoutButton from "../Components/logout";
import LoginButton from "../Components/login";

function ProfilePage(){
    return(
        <div>
            <div className="page-button-container">
            <LoginButton />
            <LogoutButton />
            </div>
        <div className="profile-container">
            <Profile />
        </div>
        </div>
    )
} 


export default ProfilePage;