import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);
  const [seatA, setSeatA] = useState(0);
  const [seatB, setSeatB] = useState(0);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/${id}`)
      .then(response => {
        setShow(response.data);
        setSeatA(response.data.seat_a);
        setSeatB(response.data.seat_b);
      })
      .catch(error => {
        console.error('There was an error fetching the show!', error);
      });
  }, [id]);

  const toggleSeat = (seat, setSeat) => {
    if (seat !== 2) {
      setSeat(prevSeat => (prevSeat === 0 ? 1 : 0));
    }
  };

  const reserveSeats = () => {
    axios.patch(`http://127.0.0.1:8000/${id}/`, {
      seat_a: seatA,
      seat_b: seatB
    })
    .then(response => {
      alert('Seats reserved successfully!');
    })
    .catch(error => {
      console.error('There was an error reserving the seats!', error);
    });
  };

  if (!show) return <div>Loading...</div>;

  return (
    <div>
      <h1>{show.title}</h1>
      <p>{show.description}</p>
      <p>{new Date(show.start).toLocaleString()}</p>
      <img src={show.poster} alt={show.title} />
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
      </div>
      <button onClick={reserveSeats}>Reserve Seats</button>
    </div>
  );
};

export default ShowDetail;
