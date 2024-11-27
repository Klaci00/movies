import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../Cascade Style Sheets/VenueDetail.css';
import { RoutesApp } from './Apps/RoutesApp';
import { NavApp } from './Apps/NavApp';
import apiClient from '../Auth/Functions/APIClient';
import { getCookie } from '../Auth/Functions/CookieHandler';
const Layout = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState('');

  const [user, setUser] = useState(null);
  const handleLoginSuccess = (decodedToken) => {
   setUser(decodedToken); // You can also redirect the user or store the token as needed 
   setUsername(decodedToken.username);
  };
  const checkAuthStatus = async () => { 
    if(getCookie('refresh')){
    try {

    const response = await apiClient.get('auth-status/');
    if (response.data.user.username!=null){
      setIsAuth(true);
      setUsername(response.data.user.username);
      setIsAdmin(response.data.user.is_staff);
    }
  }
    catch (error) { 
      console.error('Error checking auth status:', error); 
      setUser(null);
     }}};

    useEffect(() => {
      checkAuthStatus();   
    }, []);
  return (
    <Router className='router'>
      <div className='main_screen'>
        <NavApp isAuth={isAuth} setIsAuth={setIsAuth} isAdmin={isAdmin} setIsAdmin={setIsAdmin} username={username} setUserName={setUsername} />
        <RoutesApp username={username} setUsername={setUsername} setisStaff={setIsAdmin} isAuth={isAuth} setIsAuth={setIsAuth} handleLoginSuccess={handleLoginSuccess} />
      </div>
    </Router>
  );
};

export default Layout;