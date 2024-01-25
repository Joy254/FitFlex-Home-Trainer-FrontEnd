// Main.jsx

import React from 'react';
import ReactDOM from 'react-dom/client';
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import 'bootstrap/dist/css/bootstrap.min.css';
import App from './App';
import Signup from './components/Signup';
import Login from './components/Login';
import Home from './components/Home';
import ExerciseDetails from './components/ExerciseDetails';
import ExerciseDailyRoutine from './components/ExerciseDailyRoutine';
import AddExercise from './components/AddExercise'
import CommentSection from './components/CommentSection';
import './App.css';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<App />} />
        <Route path="/signup" element={<Signup />} />
        <Route path="/login" element={<Login />} />
        <Route path="/home" element={<Home/>}/>
        <Route path="/exercise-details/:id" element={<ExerciseDetails />} />
        <Route path="/exercise-daily-routine" element={<ExerciseDailyRoutine />} />
        <Route path="/add-exercise" element={<AddExercise />} />
        <Route path="/comments" element={<CommentSection />} />
      </Routes>
    </BrowserRouter>
  </React.StrictMode>,
);
