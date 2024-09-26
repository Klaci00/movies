import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
const VenueDetail = () => {
  axios.defaults.xsrfCookieName = 'csrftoken';
  axios.defaults.xsrfHeaderName = 'X-CSRFToken';

  const { id, venueId } = useParams();
  const [show, setShow] = useState(null);
  const [venue, setVenue] = useState(null);
 
  const useSeatStates = (numSeats) => {
    const seatStates = [];
    for (let i = 1; i <= numSeats; i++) {
        const [seat, setSeat] = useState(0);
        seatStates.push({ seat, setSeat });
    }
    return seatStates;
};



  const seats = useSeatStates(180);
  console.log(seats[110]);

    const updateSeats = (response, seats) => {
      seats.forEach((seatItem, index) => {
        let seatKey='';
        index<10 ? seatKey = `seat_00${index + 1}` : ( seatKey<100 ? `seat_0${index + 1}`:`seat_${index + 1}`);
          if (response.data[seatKey] !== undefined) {
              seatItem.setSeat(response.data[seatKey]);
          }
      });
  };
  
  const countOccupiedSeats = (seats) => {
    return seats.filter(seatItem => seatItem.seat === 1).length;
  };
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
        seats.forEach((seatItem, index) => {
          const seatKey = `seat_${String(index + 1).padStart(3, '0')}`;
          if (response.data[seatKey] !== undefined) {
              seatItem.setSeat(response.data[seatKey]);
          }
      });
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

const constructPatchData = (seats, show, venue) => {
  const data = {
      title: show.title,
      room_name: venue.room_name,
      showtime: venue.showtime,
  };

  seats.forEach((seatItem, index) => {
      const seatKey = `seat_${String(index + 1).padStart(3, '0')}`;
      data[seatKey] = seatItem.seat;
  });

  return data;
};

const constructPostData = (seats, show, venue) => {
  const data = {
      venueId: venue.id,
      title: show.title,
      room_name: venue.room_name,
      showtime: venue.showtime,
      seat_count: countOccupiedSeats(seats)
  };

  seats.forEach((seatItem, index) => {
      const seatKey = `seat_${String(index + 1).padStart(3, '0')}`;
      data[seatKey] = seatItem.seat;
  });
  return data;
};
  // Update the reserveSeats function to use the CSRF token
  const reserveSeats = async () => {
    const userId = localStorage.getItem('userId');
    const csrftoken = getCookie('csrftoken');
    console.log(csrftoken);
    const data = constructPatchData(seats, show, venue);

    axios.patch(`http://127.0.0.1:8000/venues/${venueId}/`, data, {
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
    
    
    const dataToPOST=constructPostData(seats,show,venue);  
    console.log(venue.id);
      axios.post(`http://127.0.0.1:8000/reservations/`, dataToPOST, {
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
