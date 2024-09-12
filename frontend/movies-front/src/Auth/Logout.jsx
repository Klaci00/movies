import React from 'react';
import axios from 'axios';

const Logout = ({ setAuth }) => {
  const handleLogout = async () => {
    try {
      await axios.post('http://127.0.0.1:8000/logout/', {}, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      });
      localStorage.removeItem('token');
      setAuth(false);
      alert('Logout successful!');
    } catch (error) {
      console.error('There was an error logging out!', error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
