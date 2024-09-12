import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';

const ShowsList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    axios.get('http://127.0.0.1:8000/')
      .then(response => {
        setShows(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the shows!', error);
      });
  }, []);

  return (
    <div>
      {shows.map(show => (
        <div key={show.id} className="show">
          <h2>
            <Link to={`/${show.id}`}>{show.title}</Link>
          </h2>
          <p>{show.description}</p>
          <p>{new Date(show.start).toLocaleString()}</p>
          <img src={show.poster} alt={show.title} />
        </div>
      ))}
    </div>
  );
};

export default ShowsList;
