import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import ShowsList from '../Shows/ShowsList';
import VenueDetail from '../Venues/VenueDetail';
import ListVenues from '../Venues/ListVenues';
import Reservations2 from '../Reservations/Reservations2';
import AddShow from '../Admin/AddShow';
import { AddVenue } from '../Admin/AddVenue';
import '../Cascade Style Sheets/VenueDetail.css';
import { BASE_URL } from '../Settings';
import { FetchUserName } from '../HTTP/FetchUserName';
import { RoutesApp } from './RoutesApp';
const Layout = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin,setIsAdmin] = useState(false);
    const [username, setUsername] = useState('');
    
    useEffect(() => {
      const token = localStorage.getItem('token');
      FetchUserName(token,BASE_URL,setUsername,setIsAdmin,setIsAuth);
          }, []);
  
    return (
      <Router className='router'>
        <div className='main_screen'>
          <nav className='nav'>
            <Link to='/'><p>Home</p></Link>
            {!isAuth ? (
              <>
                <Link to='/register'><p>Register</p></Link>
                <Link to='/login'><p>Login</p></Link>
              </>
            ) : (
              <>
                <span>Welcome, {username}!</span>
                <Link to='/reservations'><p>Reservations</p></Link>
                {isAdmin ? (
                  <>
                    <Link to='/addshow'><p>Add Show</p></Link>
                    <Link to='/addvenue'><p>Add Venue</p></Link>
                  </>)
                  :
                  (<></>)}
                <Logout setAuth={setIsAuth} />
              </>
            )}
          </nav>
          <RoutesApp username={username} setIsAuth={setIsAuth} />      
        </div>
      </Router>
    );
  };
  
  export default Layout;
  
  