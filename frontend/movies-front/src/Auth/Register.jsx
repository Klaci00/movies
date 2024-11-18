import React, { useState } from 'react';
import { BASE_URL } from '../Settings';
import { useNavigate } from 'react-router-dom';
import { PostRegistration } from '../HTTP/PostRegistration';
import { RegistrationApp } from './Apps/RegistrationApp';

const Register = () => {
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const navigate = useNavigate();

  const handleRegister = async (e) => {
    e.preventDefault();
    PostRegistration(BASE_URL, username, password, navigate);
  };

  return (
    <RegistrationApp
      handleRegister={handleRegister}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword} />
  );
};

export default Register;
