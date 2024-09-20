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

  const seats = [
    { seat: seatA, setSeat: setSeatA },
    { seat: seatB, setSeat: setSeatB },
    { seat: seatC, setSeat: setSeatC },
    { seat: seatD, setSeat: setSeatD },
  ];
  
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
    axios.get(`http://127.0.0.1:8000/venues/${venueId}`)
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

    axios.patch(`http://127.0.0.1:8000/venues/${venueId}/`, {
      title: show.title,
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
      
    })
    .catch(error => {
      console.error('There was an error reserving the seats!', error);
      console.log(show.title)
    });
    
    const seatCount = [seatA, seatB, seatC, seatD].reduce((count, seat) => {
      return count + (seat === 1 ? 1 : 0);},0);
      console.log(seatCount);
    console.log(venue.id);
      axios.post(`http://127.0.0.1:8000/reservations/`, {
        venueId: venue.id,
        title: show.title,
        room_name: venue.room_name,
        showtime: venue.showtime,
        seat_a: seatA,
        seat_b: seatB,
        seat_c: seatC,
        seat_d: seatD,
        seat_count: seatCount
      }, {
        headers: {
          'Authorization': `Token ${localStorage.getItem('token')}` // Assuming the token is stored in localStorage
        }
      }).then(response => {
        window.location.reload();
      }).catch(error => {
        console.error('There was an error making the reservation!', error);
      });
      
  };

  if (!show || !venue) return <div>Loading...</div>;

  return (
    <div>
      <h1>{show.title}</h1>
      <img src={show.poster} alt={show.title} />
      <p>Showtime: {new Date(venue.showtime).toLocaleString()}</p>
      <div>
        {seats.map(({ seat, setSeat }, index) => (
          <div
            key={index}
            onClick={() => toggleSeat(seat, setSeat)}
            style={{
              width: '20px',
              height: '20px',
              backgroundColor: seat === 0 ? 'green' : seat === 1 ? 'red' : 'gray',
              display: 'inline-block',
              margin: '5px',
              cursor: seat !== 2 ? 'pointer' : 'not-allowed',
            }}
          ></div>
        ))}
      </div>
      <button onClick={reserveSeats}>Reserve Seats</button>
    </div>
  );
  
};

export default VenueDetail;
