import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import '../Cascade Style Sheets/VenueDetail.css';
import { BASE_URL } from '../Settings';
import { FetchUserName } from '../HTTP/FetchUserName';
import { RoutesApp } from './Apps/RoutesApp';
import { NavApp } from './Apps/NavApp';

const Layout = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [isAdmin, setIsAdmin] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    FetchUserName(token, BASE_URL, setUsername, setIsAdmin, setIsAuth);
  }, []);

  return (
    <Router className='router'>
      <div className='main_screen'>
        <NavApp isAuth={isAuth} username={username} isAdmin={isAdmin} setIsAuth={setIsAuth} setIsAdmin={setIsAdmin} />
        <RoutesApp username={username} setIsAuth={setIsAuth} />
      </div>
    </Router>
  );
};

export default Layout;

