import React from 'react';
import { Link } from 'react-router-dom';

function Login() {
  return (
    <div className="Login">
      <h1>Login page</h1>
      <a href="https://accounts.spotify.com/authorize?client_id=608f84d58d204c17ac1ed11d7b95a11b&response_type=token&redirect_uri=http://localhost:3000/callback">Login</a>
    </div>
  )
}

export default Login;
