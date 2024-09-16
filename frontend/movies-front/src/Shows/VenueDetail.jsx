import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';


const VenueDetail = () => {
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';

  const { id, venueId } = useParams();
  const [show, setShow] = useState(null);
  const [venue, setVenue] = useState(null);
  const [seatA, setSeatA] = useState(0);
  const [seatB, setSeatB] = useState(0);
  const [seatC, setSeatC] = useState(0);
  const [seatD, setSeatD] = useState(0);

  useEffect(() => {
    // Fetch show details
    axios.get(`http://127.0.0.1:8000/${id}`)
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the show!', error);
      });

    // Fetch venue details
    axios.get(`http://127.0.0.1:8000/${id}/venues/${venueId}`)
      .then(response => {
        setVenue(response.data);
        setSeatA(response.data.seat_a);
        setSeatB(response.data.seat_b);
        setSeatC(response.data.seat_c);
        setSeatD(response.data.seat_d);
      })
      .catch(error => {
        console.error('There was an error fetching the venue!', error);
      });
  }, [id, venueId]);

  const toggleSeat = (seat, setSeat) => {
    if (seat !== 2) {
      setSeat(prevSeat => (prevSeat === 0 ? 1 : 0));
    }
  };

  // Define the getCSRFToken function
  function getCookie(name) {
    let cookieValue = null;
    if (document.cookie && document.cookie !== '') {
        const cookies = document.cookie.split(';');
        for (let i = 0; i < cookies.length; i++) {
            const cookie = cookies[i].trim();
            if (cookie.substring(0, name.length + 1) === (name + '=')) {
                cookieValue = decodeURIComponent(cookie.substring(name.length + 1));
                break;
            }
        }
    }
    return cookieValue;
}




  // Update the reserveSeats function to use the CSRF token
  const reserveSeats = async () => {
    const userId = localStorage.getItem('userId');
    const csrftoken = getCookie('csrftoken');
    console.log(csrftoken);

    axios.patch(`http://127.0.0.1:8000/${id}/venues/${venueId}/`, {
      room_name: venue.room_name,
      showtime: venue.showtime,
      seat_a: seatA,
      seat_b: seatB,
      seat_c: seatC,
      seat_d: seatD,
      user_id: userId
    }, {
      headers: {
        'X-CSRFToken': csrftoken
      }
    })
    .then(response => {
      alert('Seats reserved successfully!');
      window.location.reload();
    })
    .catch(error => {
      console.error('There was an error reserving the seats!', error);
    });
  };

  if (!show || !venue) return <div>Loading...</div>;

  return (
    <div>
      <h1>{show.title}</h1>
      <img src={show.poster} alt={show.title} />
      <p>Showtime: {new Date(venue.showtime).toLocaleString()}</p>
      <div>
        <div
          onClick={() => toggleSeat(seatA, setSeatA)}
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: seatA === 0 ? 'green' : seatA === 1 ? 'red' : 'gray',
            display: 'inline-block',
            margin: '5px',
            cursor: seatA !== 2 ? 'pointer' : 'not-allowed'
          }}
        ></div>
        <div
          onClick={() => toggleSeat(seatB, setSeatB)}
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: seatB === 0 ? 'green' : seatB === 1 ? 'red' : 'gray',
            display: 'inline-block',
            margin: '5px',
            cursor: seatB !== 2 ? 'pointer' : 'not-allowed'
          }}
        ></div>
        <div
          onClick={() => toggleSeat(seatC, setSeatC)}
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: seatC === 0 ? 'green' : seatC === 1 ? 'red' : 'gray',
            display: 'inline-block',
            margin: '5px',
            cursor: seatC !== 2 ? 'pointer' : 'not-allowed'
          }}
        ></div>
        <div
          onClick={() => toggleSeat(seatD, setSeatD)}
          style={{
            width: '20px',
            height: '20px',
            backgroundColor: seatD === 0 ? 'green' : seatD === 1 ? 'red' : 'gray',
            display: 'inline-block',
            margin: '5px',
            cursor: seatD !== 2 ? 'pointer' : 'not-allowed'
          }}
        ></div>
      </div>
      <button onClick={reserveSeats}>Reserve Seats</button>
    </div>
  );
};

export default VenueDetail;
