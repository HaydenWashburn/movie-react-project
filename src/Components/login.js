import { useAuth0 } from "@auth0/auth0-react";
import { Link } from 'react-router-dom';
import React from "react";

const LoginButton = () => {
  const { loginWithRedirect } = useAuth0();

  return  <Link class="waves-effect waves-light btn red" onClick={() => loginWithRedirect()}>Log In</Link>
}
export default LoginButton;