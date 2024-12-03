import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../Cascade Style Sheets/VenueDetail.css';
import { RoutesApp } from './Apps/RoutesApp';
import { NavApp } from './Apps/NavApp';
import { getCookie, getCookieExpiryTime } from '../Auth/Functions/CookieHandler';
import { refreshToken } from '../Auth/Functions/AuthService';
import { jwtDecode as decode } from 'jwt-decode';
const Layout = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState('');
  const [time, setTime] = useState(1);

  useEffect(() => { 
    if (getCookie('refresh') === undefined) { //No refresh token? You are logged out!
      setIsAuth(false);
      setTime(1);
    }
    else {
      if (getCookie('access') === undefined) { //No acces token? Let's get a new one!
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
  }, [time,isAuth]);
  const checkAuthStatus = async () => {
    const refresh=getCookie('refresh');
    if (refresh!=undefined) {
      try {
        const response = decode(refresh);
        if (response.username != null) {
          setIsAuth(true);
          setUsername(response.username);
          setIsAdmin(response.is_staff);
        }
      }
      catch (error) {
        console.error('Error checking auth status:', error);
        setIsAuth(false);
      }
    }
    else{setIsAuth(false);};
  };

  useEffect(() => {
    checkAuthStatus();
  }, []);

  return (
    <Router className='router'>
      <div className='main_screen'>
        <NavApp isAuth={isAuth} setIsAuth={setIsAuth} isAdmin={isAdmin} setIsAdmin={setIsAdmin} username={username} setUserName={setUsername} />
        <RoutesApp username={username} setUsername={setUsername} setisStaff={setIsAdmin} isAuth={isAuth} setIsAuth={setIsAuth}/>
      </div>
    </Router>
  );
};

export default Layout;