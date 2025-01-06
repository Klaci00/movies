import React, { useState } from 'react';
import { PostLogin } from './HTTP/PostLogin';
import styles from './Login2.module.css'; // Import the CSS module

const Login2 = ({ setAuth, setisStaff, setUsernameGlobal }) => {
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [error, setError] = useState('');

    const handleLogin = async (e) => {
        e.preventDefault();
        PostLogin(setError, username, password, setAuth, setisStaff, setUsernameGlobal);
    };

    return (
        <div className={styles.container}>
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
                {error && <p>{error}</p>}
                <button type="submit">Login</button>
            </form>
        </div>
    );
};

export default Login2;