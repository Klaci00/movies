import React, { useEffect, useState } from 'react';
import axios from 'axios';

const Reservations = () => {
  const [reservations, setReservations] = useState([]);
  const [error, setError] = useState(null);
  const [username, setUsername] = useState('');

  useEffect(() => {
    const fetchUsername = async () => {
      try {
        const token = localStorage.getItem('token');

        const userResponse = await axios.get('http://127.0.0.1:8000/user/', {
          headers: {
            'Authorization': `Token ${token}`
          }
        });

        setUsername(userResponse.data.username);
      } catch (error) {
        setError('Failed to fetch username');
        console.error('Error fetching username:', error);
      }
    };

    const fetchReservations = async () => {
      try {
        const token = localStorage.getItem('token');

        const response = await axios.get(`http://127.0.0.1:8000/reservations/${username}`, {
          headers: {
            'Authorization': `Token ${token}`,
            'Username': username
          }
        });

        setReservations(response.data);
      } catch (error) {
        setError('Failed to fetch reservations');
        console.error('Error fetching reservations:', error);
      }
    };

    fetchUsername().then(fetchReservations);
  }, [username]);

  return (
    <div>
      <h1>Reservations</h1>
      {error && <p>{error}</p>}
      <ul>
        {reservations.map((reservation) => (
          <li key={reservation.id}>
            <h2>{reservation.title}</h2>
            <p><strong>Owner:</strong> {reservation.owner}</p>
            <p><strong>Room Name:</strong> {reservation.room_name}</p>
            <p><strong>Showtime:</strong> {new Date(reservation.showtime).toLocaleString()}</p>
            <p><strong>Seat Count:</strong> {reservation.seat_count}</p>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Reservations;
