import React, { useState, useEffect } from 'react';
import ExerciseCard from './ExerciseCard'; // Import ExerciseCard component

const ExerciseList = ({searchTerm}) => {
  const [exercises, setExercises] = useState([]);
  const [filteredExercises, setFilteredExercises] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch('http://127.0.0.1:5500/exercises');
        const data = await response.json();
        setExercises(data.exercises);
      } catch (error) {
        console.error('Error fetching data:', error);
      }
    };

    fetchData();
  }, []);

  return (
    <div className="exercise-list container mt-5">
      <h1 className='text-warning fw-bold fs-20'>Exercise List</h1>
      <div className="row">
        {exercises.map((exercise) => (
          <ExerciseCard
            key={exercise.id}
            exercise={exercise}
            onLike={(exerciseId, updatedLike) => handleLike(exerciseId, updatedLike)}
            onDislike={(exerciseId, updatedDislike) => handleDislike(exerciseId, updatedDislike)}
          />
        ))}
      </div>
    </div>
  );
};

export default ExerciseList;
