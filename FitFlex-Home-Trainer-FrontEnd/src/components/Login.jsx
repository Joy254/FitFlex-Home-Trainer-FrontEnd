// src/components/Login.js
import { useState } from 'react';
import axios from 'axios';
import { useNavigate, Link } from 'react-router-dom';


const Login = () => {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async () => {
    try {
      const response = await axios.post('http://127.0.0.1:5500/login', {
        email,
        password,
      });

      // console.log(response.data.access_token)

      const { access_token, refresh_token } = response.data;
      // console.log(access_token)
      // setToken(access_token);
    

      // Store tokens in local storage
      localStorage.setItem('accessToken', access_token);
      localStorage.setItem('refreshToken', refresh_token);

      // Redirect to home or another page
      navigate('/home');
    } catch (error) {
      alert('Error logging in:', error);
    }
  };

  return (
    <div className='container'>
      <div className="header-container d-flex justify-content-between align-items-center mt-4">
      <h1 className="text-warning mt-4 text-center">FITFLEX HOME TRAINER 💪🏋️🏋️‍♀️ 🤼‍♂️</h1>
          <div className="header-buttons">
            <Link to="/login" className="btn btn-primary me-5">Login</Link>
            <Link to="/signup" className="btn btn-secondary me-5">Sign Up</Link>
            <Link to="/admin" className="btn btn-danger">Admin</Link>
          </div>
        </div>
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
  
        {/* <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="showPassword" />
          <label className="form-check-label" htmlFor="showPassword">Show</label>
        </div> */}
  
        <div className="mb-3 form-check">
          <input type="checkbox" className="form-check-input" id="rememberDevice" />
          <label className="form-check-label" htmlFor="rememberDevice">Remember me!</label>
        </div>
  
        <button type="button" className="btn btn-primary" onClick={handleLogin}>Sign In</button>
      </form>
    </div>
    </div>
  );  
};

export default Login;
