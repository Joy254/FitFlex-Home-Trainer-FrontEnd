import React, { useState } from 'react';
import { Routes, Route } from 'react-router-dom';
import NavBar from './NavBar';
import SearchBar from './SearchBar';
import ExerciseDisplay from './ExerciseDisplay';


function Home() {
  const [searchTerm, setSearchTerm] = useState('');

  const handleSearch = (searchTerm) => {
    setSearchTerm(searchTerm);
  };

  return (
    <div className="Container">
      <div className="App">
        <h1 className="text-warning mt-4 text-center">FITFLEX HOME TRAINER 💪🏋️🏋️‍♀️ 🤼‍♂️</h1>
        <br></br>       
          <NavBar />
          <ExerciseDisplay />
          <SearchBar onSearch={handleSearch} />
      </div>
    </div>
  );
}
export default Home;

