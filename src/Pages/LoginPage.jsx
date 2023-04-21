import { useAuth0 } from "@auth0/auth0-react";
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return (
    <div className="login-card">
        <h3>Click Here To Login Or Create An Account</h3>
    <button className="login-button" onClick={() => loginWithRedirect()}>Log In</button>

    </div>
  )
};

export default LoginButton;