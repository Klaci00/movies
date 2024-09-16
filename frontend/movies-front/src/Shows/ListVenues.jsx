import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, Link } from 'react-router-dom';

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [venues, setVenues] = useState([]);

  useEffect(() => {
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

  if (!show) return <div>Loading...</div>;

  return (
    <div>
      <h1>{show.title}</h1>
      <img src={show.poster} alt={show.title} />
      <p>Rating: {show.rating}</p>
      <p>Playtime: {show.playtime} minutes</p>

      <h2>Venues</h2>
      {venues.length > 0 ? (
        <ul>
          {venues.map(venue => (
            <li key={venue.id}>
              <Link to={`/venues/${venue.id}`}>
                <p>Room Name: {venue.room_name}</p>
                <p>Showtime: {new Date(venue.showtime).toLocaleString()}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p>No venues available for this show.</p>
      )}
    </div>
  );
};

export default ShowDetail;
