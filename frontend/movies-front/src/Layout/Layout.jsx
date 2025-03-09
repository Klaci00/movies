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
import FooterApp from './Apps/FooterApp';
import styles from './Layout.module.css';
const Layout = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState('');
  const [time, setTime] = useState(1);
  const [showWarning, setShowWarning] = useState(false);
  const [visible, setVisible] = useState(true);
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
      <div className='main_screen'>
        <button className={`${styles.menuButton} ${hideNav ? '':styles.hidden}`} onClick={()=>setHideNav(false)} >Menü</button>
        <NavApp isAuth={isAuth} setIsAuth={setIsAuth} isAdmin={isAdmin} setIsAdmin={setIsAdmin} username={username} setUserName={setUsername} setShowWarning={setShowWarning} setVisible={setVisible} setHideNav={setHideNav} hideNav={hideNav} />
        <RoutesApp username={username} setUsername={setUsername} setisStaff={setIsAdmin} isAuth={isAuth} setIsAuth={setIsAuth} darkMode={darkMode}/>
        <FooterApp />
        <CookieWarning showWarning={showWarning} setShowWarning={setShowWarning} visible={visible} setVisible={setVisible} />
        <JumpUpButton darkMode={darkMode} />
        <DarkModeButton darkMode={darkMode} toggleDarkMode={toggleDarkMode}></DarkModeButton>
        <div className={`${darkMode ? 'dark ':''}background`}></div>
      </div>
    </Router>
  );
};

export default Layout;