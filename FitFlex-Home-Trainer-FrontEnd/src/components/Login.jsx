// src/Login.js
import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setToken }) => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5500/login', {
        email,
        password,
      });

      const { access_token, refresh_token } = response.data;
      setToken(access_token);
      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('refreshToken', refresh_token);
      navigate('/home');
    } catch (error) {
      alert('Error logging in:', error);
    }
  };

  return (
    <div className="login-container">
      <form className="bg-light p-4 rounded w-50"> {/* Set form width to 50% */}
        <h1 className="text-warning fw-bold fs-20">Login</h1> {/* Make Login header yellow */}
  
        <div className="mb-3">
          <label htmlFor="email" className="form-label text-blue">Email Address</label> {/* Make labels blue */}
          <input
            type="email"
            id="email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="form-control"
            placeholder="Enter your email"
          />
        </div>
  
        <div className="mb-3">
          <label htmlFor="password" className="form-label text-blue">Password</label> {/* Make labels blue */}
          <input
            type="password"
            id="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="form-control"
            placeholder="Enter your password"
          />
        </div>
  
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="showPassword" />
          <label className="form-check-label" htmlFor="showPassword">Show</label>
        </div>
  
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="rememberDevice" />
          <label className="form-check-label" htmlFor="rememberDevice">Remember this device</label>
        </div>
  
        <button type="button" className="btn btn-primary" onClick={handleLogin}>Sign In</button>
      </form>
    </div>
  );  
};

export default Login;
