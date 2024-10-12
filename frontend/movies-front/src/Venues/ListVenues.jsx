import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';
import '../Cascade Style Sheets/VenueDetail.css';

const ListVenues = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [venues, setVenues] = useState([]);
  const [isAuth, setIsAuth] = useState(false);
  const [seatNum, setSeatNum]=useState(1);

  useEffect(() => {
    const token = localStorage.getItem('token');
    if (token) {setIsAuth(true)};
    // Fetch show details
    axios.get(`http://127.0.0.1:8000/${id}`)
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the show!', error);
      });

    // Fetch venues associated with the show
    axios.get(`http://127.0.0.1:8000/${id}/venues`)
      .then(response => {
        setVenues(response.data.venues);
      })
      .catch(error => {
        console.error('There was an error fetching the venues!', error);
      });
  }, [id]);

  const handleChange=(event)=>{
    const value = event.target.value;
    setSeatNum(value);
    console.log(value);
    localStorage.setItem('seatnum',value);
  };

  if (!show) return <div>Loading...</div>;
  else if (isAuth)  return (
    <div className='listvenues_main'>
      <h1 className='textinmiddle'>{show.title}</h1>
      <div className='listvenues_img'>
      <img className='poster' src={show.poster} alt={show.title} />
      </div>

      <p className='textinmiddle'>Korhatár: {show.rating}</p>
      <p className='textinmiddle'>Műsoridő: {show.playtime} perc</p>

      <h2 className='textinmiddle'>Venues</h2>
      <div>
      <h3 className='ticketcount'>Reserve Your Seats</h3>
      <label>
        How many seats would you like to reserve?
        <select value={seatNum} onChange={handleChange}>
          {Array.from({ length: 30 }, (_, i) => i + 1).map((number) => (
            <option key={number} value={number}>
              {number}
            </option>
          ))}
        </select>
      </label>
    </div>

      {venues.length > 0 ? (
        <ul className='textinmiddle'>
          {venues.map(venue => (
            <li key={venue.id}>
              <Link to={`/${id}/venues/${venue.id}`}>
                <p>Room Name: {venue.room_name}</p>
                <p>Showtime: {new Date(venue.showtime).toLocaleString('en-GB', { timeZone: 'Europe/Budapest' })}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className='textinmiddle'>No venues available for this show.</p>
      )}

    </div>
  );
  else return (    <div className='listvenues_main'>
      <h1 className='textinmiddle'>{show.title}</h1>
      <div className='listvenues_img'>
      <img className='poster' src={show.poster} alt={show.title} />
      </div>
    <p className='textinmiddle'>Korhatár: {show.rating}</p>
    <p className='textinmiddle'>Műsoridő: {show.playtime} perc</p>

    <h2 className='textinmiddle'>Venues</h2>
    {venues.length > 0 ? (
      <ul className='textinmiddle'>
      <strong>A foglaláshoz be kell jelentkeznie!</strong>
        {venues.map(venue => (
          <li key={venue.id}>
              <p>Room Name: {venue.room_name}</p>
              <p>Showtime: {new Date(venue.showtime).toLocaleString('en-GB', { timeZone: 'Europe/Budapest' })}</p>
              </li>
        ))}
      </ul>
    ) : (
      <p className='textinmiddle'>No venues available for this show.</p>
    )}
  </div>
)
};

export default ListVenues;
