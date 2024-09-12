import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes, Link } from 'react-router-dom';
import Register from '../Auth/Register';
import Login from '../Auth/Login';
import Logout from '../Auth/Logout';
import ShowsList from '../Shows/ShowsList';
import ShowDetail from '../Shows/ShowDetail';

const Layout = () => {
  const [isAuth, setIsAuth] = useState(false);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {
      setIsAuth(true);
      // Fetch user info if needed
      setUsername('User'); // Replace with actual username fetching logic
    }
  }, []);

  return (
    <Router>
      <div>
        <nav>
          <Link to="/">Home</Link>
          {!isAuth ? (
            <>
              <Link to="/register">Register</Link>
              <Link to="/login">Login</Link>
            </>
          ) : (
            <>
              <span>Welcome, {username}!</span>
              <Logout setAuth={setIsAuth} />
            </>
          )}
        </nav>
        <Routes>
          <Route path="/" element={<ShowsList />} />
          <Route path="/register" element={<Register />} />
          <Route path="/login" element={<Login setAuth={setIsAuth} />} />
          <Route path="/:id" element={<ShowDetail />} />
        </Routes>
      </div>
    </Router>
  );
};

export default Layout;
