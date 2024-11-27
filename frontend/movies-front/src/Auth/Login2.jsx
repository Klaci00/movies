import React, { useState } from 'react';
import axios from 'axios';
import {jwtDecode as decode} from 'jwt-decode';
import { setCookie } from './Functions/CookieHandler';
import { PostLogin } from './HTTP/PostLogin';
import { BASE_URL } from '../Settings';

const Login2 = ({onLoginSuccess,setAuth,setisStaff,setUsernameGlobal }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        PostLogin(setCookie,decode,axios,setError,BASE_URL,username,password,onLoginSuccess,setAuth,setisStaff,setUsernameGlobal);
    };

    return (
        <div>
            <h2>Login</h2>
            <form onSubmit={handleLogin}>
                <div>
                    <label>Username: </label>
                    <input
                        type="text"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                    />
                </div>
                <div>
                    <label>Password: </label>
                    <input
                        type="password"
                        value={password}
                        onChange={(e) => setPassword(e.target.value)}
                    />
                </div>
                {error && <p style={{ color: 'red' }}>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login2;