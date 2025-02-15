import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import { RoutesApp } from './Apps/RoutesApp';
import { NavApp } from './Apps/NavApp';
import { getCookie, getCookieExpiryTime } from '../Auth/Functions/CookieHandler';
import { refreshToken } from '../Auth/Functions/AuthService';
import { jwtDecode as decode } from 'jwt-decode';
import CookieWarning from '../Auth/Apps/CookieWarning';
import JumpUpButton from './Apps/JumpUpButton';
import DarkModeButton from './Apps/DarkModeButton';
import { use } from 'react';
const Layout = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState('');
  const [time, setTime] = useState(1);
  const [showWarning, setShowWarning] = useState(false);
  const [visible, setVisible] = useState(true);
  const [innerWidth, setInnerWidth] = useState(0);
  const [innerHeight, setInnerHeight] = useState(0);
  const [update, setUpdate] = useState(0);
  const [hideNav, setHideNav] = useState(false);
  const [darkMode, setDarkMode] = useState(false);
  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    localStorage.setItem('darkmode', !darkMode);
  }
  useEffect(() => {
    if (localStorage.getItem('darkmode') === 'true') {
      setDarkMode(true);
    }
  }, []);
  useEffect(() => {
    const interval = setInterval(() => {
        setInnerWidth(window.innerWidth);
        setInnerHeight(window.innerHeight);
        setUpdate(update + 1);
    }, 1000); () => {
        clearInterval(interval);
    }, [update]
});
  useEffect(() => { 
    console.log(time);
    if (getCookie('refresh') === undefined) { //No refresh token? You are logged out!
      setIsAuth(false);
      
    }
    else {
      if (getCookie('access') === undefined) { //No acces token? Let's get a new one!
        refreshToken();
        
        
      }
      const interval = setInterval(() => { //Create 60 s interval.
        const newTime = getCookieExpiryTime('access');
        setTime(newTime);    
        if (newTime < 90) { //Access token is about to expire, let's get a new one!
          refreshToken();
          const newTime = getCookieExpiryTime('access');
          setTime(newTime);
        }
      }, 60000);
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
      <div className='main_screen'>{hideNav ? <button onClick={()=>setHideNav(false)} >Menü</button> :
        <NavApp isAuth={isAuth} setIsAuth={setIsAuth} isAdmin={isAdmin} setIsAdmin={setIsAdmin} username={username} setUserName={setUsername} setShowWarning={setShowWarning} setVisible={setVisible} setHideNav={setHideNav} innerWidth={innerWidth} innerHeight={innerHeight} />}
        <RoutesApp username={username} setUsername={setUsername} setisStaff={setIsAdmin} isAuth={isAuth} setIsAuth={setIsAuth} darkMode={darkMode}/>
        <CookieWarning showWarning={showWarning} setShowWarning={setShowWarning} visible={visible} setVisible={setVisible} />
        <JumpUpButton innerWidth={innerWidth} darkMode={darkMode} />
        <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode}></DarkModeButton>
        <div className={`${darkMode ? 'dark ':''}background`}></div>
      </div>
    </Router>
  );
};

export default Layout;