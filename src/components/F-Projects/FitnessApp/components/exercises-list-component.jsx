import React, { useState, useEffect } from 'react';
import TableRow from './exercises-list-table-row.jsx';
import { getExercises, deleteExercise } from '../api/fitnessApi';

export default function ExercisesList() {
  const [exercises, setExercises] = useState([]);

  useEffect(() => {
    const fetchExercises = async () => {
      try {
        const data = await getExercises();
        setExercises(data);
      } catch (err) {
        console.log('Error fetching exercises:', err);
      }
    };

    fetchExercises();
  }, []);

  const handleDeleteExercise = async (id) => {
    try {
      const response = await deleteExercise(id);
      console.log(response);
      setExercises(exercises.filter((el) => el._id !== id));
    } catch (err) {
      console.log('Error deleting exercise:', err);
    }
  };

  return (
    <div>
      <h3 style={{ fontWeight: 400 }}>You are on Exercises List Component</h3>
      <table className='table mt-4'>
        <thead>
          <tr>
            <th scope='col' />
            <th scope='col'>Username</th>
            <th scope='col'>Description</th>
            <th scope='col'>Duration</th>
            <th scope='col'>Date</th>
          </tr>
        </thead>
        <tbody>
          {exercises.map((exercise, index) => (
            <TableRow
              key={exercise._id}
              delete={handleDeleteExercise}
              exercise={exercise}
              index={index + 1}
            />
          ))}
        </tbody>
      </table>
    </div>
  );
}
