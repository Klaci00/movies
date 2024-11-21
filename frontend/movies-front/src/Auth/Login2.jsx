// Login2.js
import React, { useState } from 'react';
import axios from 'axios';
import {jwtDecode as decode} from 'jwt-decode';

import { BASE_URL } from '../Settings';

const Login2 = ({ onLoginSuccess }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        try {
            const response = await axios.post(`${BASE_URL}token/`, { username, password });
            const { access, refresh } = response.data;

            console.log(response);
            document.cookie = `access_token=${access}; path=/; secure; HttpOnly;`;
            document.cookie = `refresh_token=${refresh}; path=/; secure; HttpOnly;`;

            const decodedToken = decode(access);
            onLoginSuccess(decodedToken);
            console.log('access: ',access);
            console.log('refresh: ',refresh);
            console.log(document.cookie);
        } catch (err) {
            console.log(err);
            setError('Login failed. Please check your credentials and try again.');
        }
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