import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BASE_URL } from '../Settings';
import { FetchVenues } from './HTTP/FetchVenues';
import { FetchShowDetails } from './HTTP/FetchShowDetails';
import { ListVenuesApp } from './Apps/ListVenuesApp';
import '../Cascade Style Sheets/VenueDetail.css';

const ListVenues = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [venues, setVenues] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [seatNum, setSeatNum] = useState(1);

  useEffect(() => {
    localStorage.setItem('seatnum', seatNum);
    const token = localStorage.getItem('token');
    if (token) { setIsAuth(true) };
    // Fetch show details
    FetchShowDetails(BASE_URL, setShow, id);
    // Fetch venues associated with the show
    FetchVenues(BASE_URL, setVenues, id);
  }, [id]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSeatNum(value);
    console.log(value);
    localStorage.setItem('seatnum', value);
  };

  return ListVenuesApp(show, isAuth, seatNum, handleChange, venues, id);

};

export default ListVenues;
