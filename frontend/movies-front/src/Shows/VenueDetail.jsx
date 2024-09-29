import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';
import RoomTypeDict from './RoomTypeDict';
import '../Cascade Style Sheets/VenueDetail.css';
import RoomApp from './RoopApp';

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
  
  const numSeatsToDisplay = {
    'Kisterem': 80,
    'Közepes terem': 120,
    'Nagyterem': 180
  }
  // Remove spaces from the room name
const room_name_without_spaces = venue.room_name.replace(/\s+/g, '');
console.log(room_name_without_spaces);

// Use the cleaned room name to get the room dictionary
const roomDict = RoomTypeDict(room_name_without_spaces);

  return (
    <RoomApp
    title={show.title}
    poster={show.poster}
    showtime={venue.showtime}
    seats={seats}
    numSeatsToDisplay={numSeatsToDisplay[venue.room_name]}
    roomDict={roomDict}
    toggleSeat={toggleSeat}
    reserveSeats={reserveSeats}
/>);
  
};

export default VenueDetail;
