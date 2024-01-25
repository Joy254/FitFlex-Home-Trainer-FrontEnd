// App.jsx

import React from 'react';
import { Link } from 'react-router-dom';
import './App.css';
import Signup from './components/Signup';

function App() {
  return (
    <>
      <div className="container">
        <div className="header-container d-flex justify-content-between align-items-center mt-4">
          <h1 className="header-text italicize text-warning">
            <span className="text-green">FITFLEX HOME</span> TRAINER
          </h1>
          <div className="header-buttons">
            <Link to="/login" className="btn btn-primary me-5">Login</Link>
            <Link to="/signup" className="btn btn-secondary">Sign Up</Link>
          </div>
        </div>
        <Signup />
      </div>
    </>
  );
}

export default App;
