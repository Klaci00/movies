import React from 'react';
import PropTypes from 'prop-types';
import styles from './RegistrationApp.module.css'; // Import the CSS module

export const RegistrationApp = (props) => {
    return (
        <div className={styles.container}>
            <form onSubmit={props.handleRegister}>
                <h2>Regisztráció</h2>
                <div>
                    <input
                        type='text'
                        placeholder='Keresztnév'
                        value={props.firstname}
                        onChange={(e) => props.setFirstname(e.target.value)}
                    />
                    {props.problem.includes('A keresztnév és a vezetéknév megadása kötelező!') && <span>A keresztnév és a vezetéknév megadása kötelező!</span>}
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Vezetéknév'
                        value={props.lastname}
                        onChange={(e) => props.setLastname(e.target.value)}
                    />
                    {props.problem.includes('A keresztnév és a vezetéknév megadása kötelező!') && <span>A keresztnév és a vezetéknév megadása kötelező!</span>}
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='Felhasználónév'
                        value={props.username}
                        onChange={(e) => props.setUsername(e.target.value)}
                    />
                    {props.problem.includes('A felhasználónévnek legalább 5 karakter hosszúnak kell lennie!') && <span>A felhasználónévnek legalább 5 karakter hosszúnak kell lennie!</span>}
                    {props.problem.includes('A felhasználónév nem tartalmazhat szóközt!') && <span>A felhasználónév nem tartalmazhat szóközt!</span>}
                </div>
                <div>
                    <input
                        type='text'
                        placeholder='E-mail'
                        value={props.email}
                        onChange={(e) => props.setEmail(e.target.value)}
                    />
                    {props.problem.includes('Az email cím formátuma nem megfelelő!') && <span>Az email cím formátuma nem megfelelő!</span>}
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='Jelszó'
                        value={props.password}
                        onChange={(e) => props.setPassword(e.target.value)}
                    />
                    {props.problem.includes('A jelszónak legalább 8 karakter hosszúnak kell lennie!') && <span>A jelszónak legalább 8 karakter hosszúnak kell lennie!</span>}
                    {props.problem.includes('A jelszónak tartalmaznia kell legalább egy nagybetűt, egy kisbetűt, egy számjegyet és egy speciális karaktert!') && <span>A jelszónak tartalmaznia kell legalább egy nagybetűt, egy kisbetűt, egy számjegyet és egy speciális karaktert!</span>}
                </div>
                <div>
                    <input
                        type='password'
                        placeholder='Jelszó megerősítése'
                        value={props.confPW}
                        onChange={(e) => props.setConfPW(e.target.value)}
                    />
                    {props.problem.includes('A jelszavak nem egyeznek!') && <span>A jelszavak nem egyeznek!</span>}
                </div>
                <button type='submit' disabled={props.buttonDisabled}>Regisztráció</button>
            </form>
        </div>
    );
};

RegistrationApp.propTypes = {
    handleRegister: PropTypes.func.isRequired,
    firstname: PropTypes.string.isRequired,
    setFirstname: PropTypes.func.isRequired,
    lastname: PropTypes.string.isRequired,
    setLastname: PropTypes.func.isRequired,
    username: PropTypes.string.isRequired,
    setUsername: PropTypes.func.isRequired,
    email: PropTypes.string.isRequired,
    setEmail: PropTypes.func.isRequired,
    password: PropTypes.string.isRequired,
    setPassword: PropTypes.func.isRequired,
    confPW: PropTypes.string.isRequired,
    setConfPW: PropTypes.func.isRequired,
    problem: PropTypes.string.isRequired,
    buttonDisabled: PropTypes.bool.isRequired,
};

export default RegistrationApp;