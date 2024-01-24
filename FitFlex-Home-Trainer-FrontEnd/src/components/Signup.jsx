import React from 'react'

function Signup() {
    return (
      <>
        <h1>Sign Up Form</h1>
        <form className="form" method="post">
          <label htmlFor="name">Username</label>
          <input type="text" id="name" name="name" placeholder="Enter your name" required />
  
          <label htmlFor="email">Email</label>
          <input type="email" id="email" name="email" placeholder="Enter your email" required />
  
          <label htmlFor="password">Password</label>
          <input type="password" id="password" name="password" placeholder="Enter your password" required />
  
          <label htmlFor="confirm_password">Confirm Password</label>
          <input
            type="password"
            id="confirm_password"
            name="confirm_password"
            placeholder="Confirm your password"
            required
          />
  
          <button type="submit">Sign Up</button>
          <label className="lbl1">
            Already have an account? <a href="#">Login</a>
          </label>
        </form>
      </>
    );
  }
  
export default Signup