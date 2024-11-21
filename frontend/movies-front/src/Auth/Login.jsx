import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { LoginFormApp } from './Apps/RegistrationFormApp';
import { BASE_URL } from '../Settings';

const Login = ({ setAuth }) => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleLogin = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post(`${BASE_URL}login/`, { username, password });
      console.log('Response:', response.data); // Log the response data
      localStorage.setItem('token', response.data.token);
      localStorage.setItem('userId', response.data.user_id); // Save user ID
      localStorage.setItem('is_staff',response.data.is_staff)
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
    LoginFormApp(handleLogin,username,setUsername,password,setPassword)
  );
};

export default Login;