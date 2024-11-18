export const LoginFormApp=(handleLogin,username,setUsername,password,setPassword)=>{
    return (
        <form onSubmit={handleLogin}>
          <h2>Login</h2>
          <input
            type='text'
            placeholder='Username'
            value={username}
            onChange={(e) => setUsername(e.target.value)}
          />
          <input
            type='password'
            placeholder='Password'
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button type='submit'>Login</button>
        </form>
      );   
}