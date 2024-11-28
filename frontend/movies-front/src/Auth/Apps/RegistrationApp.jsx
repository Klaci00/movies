import React from 'react';
import PropTypes from 'prop-types';

export const RegistrationApp = (props) => {
    return (
        <form onSubmit={props.handleRegister}>
            <h2>Register</h2>
            <div>
                <input
                    type='text'
                    placeholder='First name'
                    value={props.firstname}
                    onChange={(e) => props.setFirstname(e.target.value)}
                />
                {props.problem.includes('First and last name are mandatory!') && <span style={{color:'red'}}>First and last name are mandatory!</span>}
            </div>
            <div>
                <input
                    type='text'
                    placeholder='Last name'
                    value={props.lastname}
                    onChange={(e) => props.setLastname(e.target.value)}
                />
                {props.problem.includes('First and last name are mandatory!') && <span style={{color:'red'}}>First and last name are mandatory!</span>}
            </div>
            <div>
                <input
                    type='text'
                    placeholder='Username'
                    value={props.username}
                    onChange={(e) => props.setUsername(e.target.value)}
                />
                {props.problem.includes('The username must be at least 5 characters long!') && <span style={{color:'red'}}>The username must be at least 5 characters long!</span>}
                {props.problem.includes('The username is not supposed to contain spaces!') && <span style={{color:'red'}}>The username is not supposed to contain spaces!</span>}
            </div>
            <div>
                <input
                    type='text'
                    placeholder='E-mail'
                    value={props.email}
                    onChange={(e) => props.setEmail(e.target.value)}
                />
                {props.problem.includes('The email must be in a correct format!') && <span style={{color:'red'}}>The email must be in a correct format!</span>}
            </div>
            <div>
                <input
                    type='password'
                    placeholder='Password'
                    value={props.password}
                    onChange={(e) => props.setPassword(e.target.value)}
                />
                {props.problem.includes('The password must be at least 8 characters long!') && <span style={{color:'red'}}>The password must be at least 8 characters long!</span>}
                {props.problem.includes('The password must contain at least one uppercase letter, at least one lowercase letter, and at least one special character!') && <span style={{color:'red'}}>The password must contain at least one uppercase letter, at least one lowercase letter, and at least one special character!</span>}
            </div>
            <div>
                <input
                    type='password'
                    placeholder='Confirm password'
                    value={props.confPW}
                    onChange={(e) => props.setConfPW(e.target.value)}
                />
                {props.problem.includes('The passwords do not match!') && <span style={{color:'red'}}>The passwords do not match!</span>}
            </div>
            <button type='submit' disabled={props.buttonDisabled}>Register</button>
            {props.error && <span style={{color:'red'}}>{props.error}</span>}
            <span style={{color:'red'}}>{props.problem}</span>
        </form>
    );
}

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
    error: PropTypes.string,
    buttonDisabled: PropTypes.bool.isRequired
};

export default RegistrationApp;
