import { useAuth0 } from "@auth0/auth0-react";
import React from "react";
import Profile from "../Components/profile";
import LogoutButton from "../Components/logout";
import LoginButton from "../Components/login";

function ProfilePage(){
    return(
        <div className="profile-container">
        <div>
            <Profile />
            <div className="buttons">
            <LoginButton />
            <LogoutButton />
            </div>
        </div>
        </div>
    )
} 


export default ProfilePage;