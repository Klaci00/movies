export const PostLogin= async (setCookie,decode,axios,setError,BASE_URL,username,password,onLoginSuccess,setAuth,setisStaff,setUsernameGlobal)=>{
    try {
        const response = await axios.post(`${BASE_URL}token/`, { username, password });
        const { access, refresh } = response.data;
        setCookie('access',access,5);
        setCookie('refresh',refresh,1620);
        const decodedToken = decode(access);
        onLoginSuccess(decodedToken);
        setAuth(true);
        setisStaff(decodedToken['is_staff']);
        setUsernameGlobal(decodedToken['username']);
        window.alert('Login succesful!');
        
    } catch (err) {
        console.log(err);
        setError('Login failed. Please check your credentials and try again.');
    }
} 