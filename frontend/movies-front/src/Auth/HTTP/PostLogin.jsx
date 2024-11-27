import axios from "axios"
import { useNavigate } from "react-router-dom"
export const PostLogin= async (BASE_URL,username,password,setAuth)=>{
    
        const response = await axios.post(`${BASE_URL}login/`, { username, password });
        localStorage.setItem('token', response.data.token);
        localStorage.setItem('userId', response.data.user_id); // Save user ID
        console.log('Token:', response.data.token); // Log the token
        console.log('User ID:', response.data.user_id); // Log the user ID
        setAuth(true);
        alert('Login successful!');
        window.location.reload();
      
}