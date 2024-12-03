import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../Cascade Style Sheets/VenueDetail.css';
import { RoutesApp } from './Apps/RoutesApp';
import { NavApp } from './Apps/NavApp';
import apiClient from '../Auth/Functions/APIClient';
import { getCookie, getCookieExpiryTime } from '../Auth/Functions/CookieHandler';
import { refreshToken } from '../Auth/Functions/AuthService';
import { AccessTokenServer } from '../Auth/Functions/AccessTokenServer';
const Layout = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState('');
  const [user, setUser] = useState(null);
  const [time, setTime] = useState(1);

  const handleLoginSuccess = (decodedToken) => {
    setUser(decodedToken); // You can also redirect the user or store the token as needed 
    setUsername(decodedToken.username);
  };

  useEffect(() => { 
    if (getCookie('refresh') === null) { //No refresh token? You are logged out!
      setIsAuth(false);
    }
    else {
      if (getCookie('access') === null) { //No acces token? Let's get a new one!
        refreshToken();
        const newTime = getCookieExpiryTime('access');
        setTime(newTime);
      }
      const interval = setInterval(() => { //Create 1 s interval to count 1 sec.
        setTime((t) => t - 1);
        if (time < 5) { //Access token is about to expire, let's get a new one!
          refreshToken();
          const newTime = getCookieExpiryTime('access');
          setTime(newTime);
        }
        console.log('Time is: ', time);
      }, 1000);
      return () => clearInterval(interval); //Get rid of the interval for optimisation.
    }
  }, [time]);
  const checkAuthStatus = async () => {
    if (getCookie('refresh')) {
      try {

        const response = await apiClient.get('auth-status/');
        if (response.data.user.username != null) {
          setIsAuth(true);
          setUsername(response.data.user.username);
          setIsAdmin(response.data.user.is_staff);
        }
      }
      catch (error) {
        console.error('Error checking auth status:', error);
        setUser(null);
      }
    }
  };

  useEffect(() => {
    checkAuthStatus();
    const cookieTime = getCookieExpiryTime('access');
    console.log(`Cookie lifetime is ${cookieTime} seconds.`)
    setTime(cookieTime);
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