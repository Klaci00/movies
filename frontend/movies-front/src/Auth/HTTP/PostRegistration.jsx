import axios from "axios";

export const PostRegistration= async (BASE_URL,username,password,firstname,lastname,email)=> {try {
    await axios.post(`${BASE_URL}register/`, { 'first_name':firstname,'last_name':lastname,username, password,email });
    alert('Registration successful!');
  } catch (error) {
    console.error('There was an error registering!', error);
  }};