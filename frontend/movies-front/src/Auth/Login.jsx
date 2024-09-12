import React, { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://127.0.0.1:8000/login/', { username, password });
      console.log('Response:', response.data); // Log the response data
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.user_id); // Save user ID
      console.log('Token:', response.data.token); // Log the token
      console.log('User ID:', response.data.user_id); // Log the user ID
      setAuth(true);
      alert('Login successful!');
      navigate('/');
      window.location.reload();
    } catch (error) {
      console.error('There was an error logging in!', error);
    }
  };

  return (
    <form onSubmit={handleLogin}>
      <h2>Login</h2>
      <input
        type="text"
        placeholder="Username"
        value={username}
        onChange={(e) => setUsername(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;
