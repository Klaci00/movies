export const RegistrationApp = (props) => {
    return (
        <form onSubmit={props.handleRegister}>
            <h2>Register</h2>
            <input
                type='text'
                placeholder='Username'
                value={props.username}
                onChange={(e) => props.setUsername(e.target.value)}
            />
            <input
                type='password'
                placeholder='Password'
                value={props.password}
                onChange={(e) => props.setPassword(e.target.value)}
            />
            <button type='submit'>Register</button>
        </form>
    );
}