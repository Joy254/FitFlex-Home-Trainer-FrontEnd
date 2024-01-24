import React from 'react'

function Login() {
  return (
    <div className="login-container">
    <form action="/login" method="post">
      <label htmlFor="email">Email Address</label>
      <h1>Login</h1>
      <input type="email" id="email" name="email" placeholder="Enter text" />

      <label htmlFor="password">Password</label>
      <input
        type={showPassword ? 'text' : 'password'}
        id="password"
        name="password"
        placeholder="Enter text"
      />
      <input type="checkbox" onClick={handleShowPassword} /> Show

      <div className="remember-device">
        <input type="checkbox" /> Remember this device
      </div>

      <button type="submit">Sign In</button>
    </form>
  </div>
  )
}

export default Login