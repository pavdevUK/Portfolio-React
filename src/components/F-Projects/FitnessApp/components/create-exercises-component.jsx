import React, { useState, useEffect } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { getUsers, addExercise } from '../api/fitnessApi';

export default function CreateExercises() {
  const [username, setUsername] = useState('');
  const [description, setDescription] = useState('');
  const [duration, setDuration] = useState(0);
  const [date, setDate] = useState(new Date());
  const [users, setUsers] = useState([]);

  useEffect(() => {
    const fetchUsers = async () => {
      try {
        const usersData = await getUsers();
        if (usersData.length > 0) {
          setUsername(usersData[0].username);
          setUsers(usersData.map((user) => user.username));
        }
        console.log('Component did mount');
      } catch (err) {
        console.log('Error fetching users:', err);
      }
    };

    fetchUsers();
  }, []);

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
      const response = await addExercise(exercises);
      console.log(response);
      window.location.href = '/';
    } catch (err) {
      console.log('Error adding exercise:', err);
    }
  };

  return (
    <div>
      <h3 style={{ fontWeight: 400 }}>Create new Exercise Log</h3>
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
            value='Create Exercise Log'
            className='btn btn-primary '
          />
        </div>
      </form>
    </div>
  );
}
