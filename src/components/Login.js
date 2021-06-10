import React from 'react'

export default function Login() {
  return (
    <div className="wrapper">
      <div className="grid">
        <div className="login-container">
          <h1>VRL</h1>
        </div>
        <div className="login-button">
          <a href="/spotify/login">Login with Spotify</a>
        </div>
      </div>
    </div>
  );
}
