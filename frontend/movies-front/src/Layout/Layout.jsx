import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import ShowsList from '../Shows/ShowsList';
import VenueDetail from '../Shows/VenueDetail';
import ListVenues from '../Shows/ListVenues';
import Reservations2 from '../Reservations/Reservations2';
import AddShow from '../Admin/AddShow';
import { AddVenue } from '../Admin/AddVenue';
import axios from 'axios';
import '../Cascade Style Sheets/VenueDetail.css';

const Layout = () => {
    const [isAuth, setIsAuth] = useState(false);
    const [isAdmin,setIsAdmin] = useState(false);
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
          if (response.data.is_staff==true){
            setIsAdmin(true);
          }
        })
        .catch(error => {
          console.error('There was an error fetching the user info!', error);
        });
      }
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
          <Routes className='routes'>
            <Route path='/' element={<ShowsList />} />
            <Route path='/register' element={<Register />} />
            <Route path='/login' element={<Login setAuth={setIsAuth} />} />
            <Route path='/:id' element={<ListVenues className='listvenues' />} />
            <Route path=':id/venues/:venueId' element={<VenueDetail />} />
            <Route path='/reservations' element={<Reservations2 />} />
            <Route path='/addshow' element={<AddShow/>} />
            <Route path='/addvenue' element={<AddVenue/>} />
          </Routes>
        </div>
      </Router>
    );
  };
  
  export default Layout;
  
  