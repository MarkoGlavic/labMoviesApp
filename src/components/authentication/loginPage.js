import React, { useContext } from "react";

import { AuthContext } from "./authContext";

const LoginPage = () => {
  const {authenticate } = useContext(AuthContext);
  const { token, signout } = useContext(AuthContext);


  const login = () => {
    const password = Math.random().toString(36).substring(7);
    authenticate('user1', password);
  };

  return (
    <>
  {token ? (
        <p>
          Welcome! <button onClick={() => signout()}>Sign out</button>
        </p>
      ) : (
        <p>
          You are not logged in, if you want access to Upcoming movies or Favourite movies please log in!
        </p>
      )}

      <h2>Login page</h2>
      <p>You must log in to view the protected pages </p>
      {/* Login web form  */}
      <button onClick={login}>Submit</button>
    </>
    )
};

export default LoginPage;
