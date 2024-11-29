import React, { useEffect, useState } from 'react';
import { BASE_URL } from '../Settings';
import { PostRegistration } from './HTTP/PostRegistration';
import { RegistrationApp } from './Apps/RegistrationApp';
import { PostLogin } from './HTTP/PostLogin';
import { setCookie } from './Functions/CookieHandler';
import {jwtDecode as decode} from 'jwt-decode';
import axios from 'axios';
import { CheckUserName } from './HTTP/CheckUserName';
import { CheckEmail } from './HTTP/CheckEmail';
import { ValidateInputs } from './Functions/ValidateInputs';

const Register = ({ onloginSuccess, setAuth, setisStaff, setUsernameGlobal }) => {
    const [firstname, setFirstname] = useState('');
    const [lastname, setLastname] = useState('');
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const [confPW, setConfPW] = useState('');
    const [error, setError] = useState('');
    const [isTaken, setIstaken] = useState('');
    const [problem, setProblem] = useState('');
    const [buttonDisabled, setButtonDisabled] = useState(true);

    useEffect(() => {
        ValidateInputs(firstname, lastname, email, username, password, confPW, setProblem, setButtonDisabled);
    }, [firstname, lastname, email, username, password, confPW]);

    const handleRegister = async (e) => {
        e.preventDefault();
        
        const isValid = ValidateInputs(firstname, lastname, email, username, password, confPW, setProblem, setButtonDisabled);
        if (!isValid) {
            return;
        }

        try {
            const response_username = await CheckUserName(BASE_URL, username, axios);
            const response_email = await CheckEmail(BASE_URL,email,axios);
            if (response_username === 'Username is available.'
                &&
                response_email ==='E-mail is available.'
            ) {
                await PostRegistration(BASE_URL, username, password,firstname,lastname,email);
                await PostLogin(setCookie, decode, axios, setError, BASE_URL, username, password, onloginSuccess, setAuth, setisStaff, setUsernameGlobal);
            } else {
                window.alert('This username or e-mail address is taken! Please, choose another one.');
            }
        } catch (err) {
            console.error('Registration error:', err);
            setError('An error occurred during registration. Please try again.');
        }
    };

    return (
        <RegistrationApp
            handleRegister={handleRegister}
            firstname={firstname}
            setFirstname={setFirstname}
            lastname={lastname}
            setLastname={setLastname}
            username={username}
            setUsername={setUsername}
            email={email}
            setEmail={setEmail}
            password={password}
            setPassword={setPassword}
            confPW={confPW}
            setConfPW={setConfPW}
            problem={problem}
            error={error}
            buttonDisabled={buttonDisabled}
        />
    );
};

export default Register;
