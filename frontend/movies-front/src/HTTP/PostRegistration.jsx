import axios from "axios";

export const PostRegistration= async (BASE_URL,username,password,navigate)=> {try {
    await axios.post(`${BASE_URL}register/`, { username, password });
    alert('Registration successful!');
    navigate('/');
  } catch (error) {
    console.error('There was an error registering!', error);
  }};