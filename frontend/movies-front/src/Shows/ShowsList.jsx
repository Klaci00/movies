import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchShowsList } from '../Venues/Functions/FetchShowsList';
const ShowsList = () => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    FetchShowsList(setShows);
  }, []);

  return (
    <div>
      {shows.map(show => (
        <div key={show.id} className='show'>
          <h2 className='textinmiddle'>
            <Link className='showlink' to={`/${show.id}`}>{show.title}</Link>
          </h2>
          <p className='textinmiddle'>{show.description}</p>
        <div className='listvenues_img'>
          <img className='poster' src={show.poster} alt={show.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowsList;
