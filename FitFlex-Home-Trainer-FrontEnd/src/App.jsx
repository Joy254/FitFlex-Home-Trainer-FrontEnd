// App.jsx

import React from 'react';
import './App.css';
import { Routes, Route } from 'react-router-dom';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';


function App({setToken}) {
  return (
    <>
      <div className="container">
      <Routes>
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login setToken={setToken} />} />
        <Route path="/home" element={<Home />} />
      </Routes>
        <Signup />
      </div>
    </>
  );
}

export default App;
