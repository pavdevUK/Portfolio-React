import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getUsers, getExerciseById, updateExercise } from '../api/fitnessApi';

export default function EditExercise({ match }) {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        // Fetch exercise details
        const exercise = await getExerciseById(match.params.id);
        console.log(exercise);
        setUsername(exercise.username);
        setDescription(exercise.description);
        setDuration(exercise.duration);
        setDate(new Date(exercise.date));

        // Fetch users list
        const usersData = await getUsers();
        if (usersData.length > 0) {
          setUsers(usersData.map((user) => user.username));
        }
        console.log('Component did mount');
      } catch (error) {
        console.log('Error fetching data:', error);
      }
    };

    fetchData();
  }, [match.params.id]);

  const handleSubmit = async (e) => {
    e.preventDefault();
    const exercises = {
      username,
      description,
      duration,
      date,
    };
    console.log(exercises);

    try {
      const response = await updateExercise(match.params.id, exercises);
      console.log(response);
      document.location.href = '/';
    } catch (err) {
      console.log('Error updating exercise:', err);
    }
  };

  return (
    <div>
      <h3 style={{ fontWeight: 400 }}>Update Exercise Log</h3>
      <form action='' onSubmit={handleSubmit}>
        <div className='form-group col-12 col-md-6 mt-5 mx-auto'>
          <label>Username:</label>
          <select
            required
            className='form-control'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          >
            {users.map((user, key) => (
              <option key={user + key}>{user}</option>
            ))}
          </select>
        </div>
        <div className='form-group col-12 col-md-6 mx-auto'>
          <label>Description</label>
          <input
            type='text'
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            className='form-control'
          />
        </div>
        <div className='form-group col-12 col-md-6 mx-auto'>
          <label>Duration (in minutes)</label>
          <input
            type='text'
            value={duration}
            onChange={(e) => setDuration(e.target.value)}
            className='form-control'
          />
        </div>

        <div className='form-group col-12 col-md-6 mx-auto'>
          <DatePicker
            className=''
            dateFormat='dd/MM/yyyy'
            selected={date}
            onChange={(date) => setDate(date)}
          />
        </div>
        <div className='form-group col-12 col-md-6 mx-auto'>
          <input
            type='submit'
            value='Update Exercise Log'
            className='btn btn-primary '
          />
        </div>
      </form>
    </div>
  );
}
