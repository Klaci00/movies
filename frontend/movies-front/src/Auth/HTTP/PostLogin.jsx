import axios from "axios";
import { setCookie } from "../Functions/CookieHandler";
import { jwtDecode as decode } from "jwt-decode";
import { BASE_URL } from "../../Settings";

export const PostLogin= async (setError,username,password,setAuth,setisStaff,setUsernameGlobal)=>{
    try {
        const response = await axios.post(`${BASE_URL}token/`, { username, password });
        const { access, refresh } = response.data;
        setCookie('access',access,5);
        setCookie('refresh',refresh,1620);
        const decodedToken = decode(access);
        setAuth(true);
        setisStaff(decodedToken['is_staff']);
        setUsernameGlobal(decodedToken['username']);
        window.alert('Login succesful!');
        
    } catch (err) {
        console.log(err);
        setError('Login failed. Please check your credentials and try again.');
    }
} 