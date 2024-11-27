import React, { useState } from 'react';
import { BASE_URL } from '../Settings';
import { useNavigate } from 'react-router-dom';
import { PostRegistration } from './HTTP/PostRegistration';
import { RegistrationApp } from './Apps/RegistrationApp';
import { PostLogin } from './HTTP/PostLogin';
import { setCookie } from './Functions/CookieHandler';
import { jwtDecode as decode } from 'jwt-decode';
import axios from 'axios';
import { CheckUserName } from './HTTP/CheckUserName';
const Register = ({onloginSuccess,setAuth,setisStaff,setUsernameGlobal}) => {
  const [firstname,setFirstname]=useState('');
  const [lastname,setLastname]=useState('');
  const [username, setUsername] = useState('');
  const [password, setPassword] = useState('');
  const [error,setError]=useState('');
  const navigate = useNavigate();
  const [isTaken,setIstaken]=useState('');
  const handleRegister = async (e) => {
    e.preventDefault();
   const response = await CheckUserName(BASE_URL, username,axios,setIstaken);
   if(response=='Username is available.')
    { await PostRegistration(BASE_URL, username, password, navigate);
      await PostLogin(setCookie,decode,axios,setError,BASE_URL,username,password,onloginSuccess,setAuth,setisStaff,setUsernameGlobal)  } 
   else
   {window.alert('This username is taken!')}
   ;}
  return (
    <RegistrationApp
      handleRegister={handleRegister}
      firstname={firstname}
      setFirstname={setFirstname}
      lastname={lastname}
      setLastname={setLastname}
      username={username}
      setUsername={setUsername}
      password={password}
      setPassword={setPassword} />
  );
};

export default Register;
