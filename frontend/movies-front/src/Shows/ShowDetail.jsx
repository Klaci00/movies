import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

const ShowDetail = () => {
  const { id } = useParams();
  const [show, setShow] = useState(null);

  useEffect(() => {
    axios.get(`http://127.0.0.1:8000/${id}`)
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the show!', error);
      });
  }, [id]);

  if (!show) return <div>Loading...</div>;

  return (
    <div>
      <h1>{show.title}</h1>
      <p>{show.description}</p>
      <p>{new Date(show.start).toLocaleString()}</p>
      <img src={show.poster} alt={show.title} />
      <p>Seat A: {show.seat_a}</p>
      <p>Seat B: {show.seat_b}</p>
    </div>
  );
};

export default ShowDetail;
