import React, { useEffect, useState } from 'react';
import { useParams, Link } from 'react-router-dom';
import { BASE_URL } from '../Settings';
import { FetchVenues } from './HTTP/FetchVenues';
import { FetchShowDetails } from './HTTP/FetchShowDetails';
import { ListVenuesApp } from './Apps/ListVenuesApp';

const ListVenues = ({isAuth,darkMode}) => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [venues, setVenues] = useState([]);
  const [seatNum, setSeatNum] = useState(1);

  useEffect(() => {
    localStorage.setItem('seatnum', seatNum);
    // Fetch show details
    FetchShowDetails(BASE_URL, setShow, id);
    // Fetch venues associated with the show
    FetchVenues(BASE_URL, setVenues, id);
  }, [id]);

  const handleChange = (event) => {
    const value = event.target.value;
    setSeatNum(value);
    localStorage.setItem('seatnum', value);
  };

  return ListVenuesApp(show, isAuth, seatNum, handleChange, venues, id,darkMode);

};

export default ListVenues;
