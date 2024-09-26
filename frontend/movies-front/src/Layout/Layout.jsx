import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import ShowsList from '../Shows/ShowsList';
import VenueDetail from '../Shows/VenueDetail';
import ListVenues from '../Shows/ListVenues';
import Reservations2 from '../Reservations/Reservations2';
import axios from 'axios';

const Layout = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [username, setUsername] = useState('');
  
    useEffect(() => {
      const token = localStorage.getItem('token');
      if (token) {
        setIsAuth(true);
        axios.get('http://127.0.0.1:8000/user/', {
          headers: {
            Authorization: `Token ${token}`
          }
        })
        .then(response => {
          setUsername(response.data.username);
        })
        .catch(error => {
          console.error('There was an error fetching the user info!', error);
        });
      }
    }, []);
  
    return (
      <Router>
        <div>
          <nav>
            <Link to='/'>Home</Link>
            {!isAuth ? (
              <>
                <Link to='/register'>Register</Link>
                <Link to='/login'>Login</Link>
              </>
            ) : (
              <>
                <span>Welcome, {username}!</span>
                <Link to='/reservations'>Reservations</Link>
                <Logout setAuth={setIsAuth} />
              </>
            )}
          </nav>
          <Routes>
            <Route path='/' element={<ShowsList />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login setAuth={setIsAuth} />} />
            <Route path='/:id' element={<ListVenues />} />
            <Route path=':id/venues/:venueId' element={<VenueDetail />} />
            <Route path='/reservations' element={<Reservations2 />} />
          </Routes>
        </div>
      </Router>
    );
  };
  
  export default Layout;
  
  