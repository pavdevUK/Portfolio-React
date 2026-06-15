import React, { useState, useEffect } from 'react';
import UserTable from './user-table-component';
import { getUsers, addUser } from '../api/fitnessApi';

export default function CreateUser() {
  const [username, setUsername] = useState('');
  const [users, setUsers] = useState([]);

  useEffect(() => {
    fetchUsers();
  }, []);

  useEffect(() => {
    if (users.length > 0) {
      console.log('State has changed');
    }
  }, [users]);

  const fetchUsers = async () => {
    try {
      const data = await getUsers();
      setUsers(data);
    } catch (err) {
      console.log('Error fetching users:', err);
    }
  };

  const handleUsernameChange = (e) => {
    setUsername(e.target.value);
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const user = {
      username: username,
    };

    try {
      const response = await addUser(user);
      console.log(response);
      setUsername('');
      fetchUsers(); // Refresh user list
    } catch (err) {
      console.log('Error adding user:', err);
    }
  };

  return (
    <div>
      <h3 style={{ fontWeight: 400 }}>You are on Create/Delate User Page.</h3>
      <form action='' onSubmit={handleSubmit}>
        <div className='form-group col-12 col-md-6 mt-5 mx-auto'>
          <label>User</label>
          <input
            type='text'
            value={username}
            onChange={handleUsernameChange}
            className='form-control'
          />
        </div>
        <div className='form-group col-12 col-md-6 mx-auto'>
          <input
            type='submit'
            value='Create User'
            className='btn btn-primary '
          />
        </div>
      </form>
      <UserTable user={{ username, users }}> </UserTable>
    </div>
  );
}
