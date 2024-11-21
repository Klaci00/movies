import React from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Logout = ({ setAuth,setIsAdmin }) => {
  const navigate = useNavigate();
  const handleLogout = async () => {

    try {
      await axios.post('http://127.0.0.1:8000/api/logout/', {}, {
        headers: {
          Authorization: `Token ${localStorage.getItem('token')}`
        }
      });

      localStorage.removeItem('token');
      localStorage.removeItem('userId');
      setAuth(false);
      setIsAdmin(false);
      alert('Logout successful!');
      navigate('/');
    } catch (error) {
      console.error('There was an error logging out!', error);
    }
  };

  return (
    <button onClick={handleLogout}>Logout</button>
  );
};

export default Logout;
