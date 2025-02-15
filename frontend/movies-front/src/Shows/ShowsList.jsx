import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchShowsList } from './HTTP/FetchShowsList';
import { BASE_URL } from '../Settings';
import styles from './ShowsList.module.css'; // Import the CSS module

const ShowsList = ({darkMode}) => {
  const [shows, setShows] = useState([]);

  useEffect(() => {
    FetchShowsList(BASE_URL, setShows);
  }, []);

  return (
    <div className={`${styles.container} ${!darkMode ? styles.dark : ''}`}>
      {shows.map(show => (
        <div key={show.id} className={`${!darkMode?styles.dark:' '} ${styles.show}`}>
          <h2 className={styles.textinmiddle}>
            <Link className={styles.showlink} to={`/${show.id}`}>{show.title}</Link>
          </h2>
          <p className={`${!darkMode?styles.dark: ''} ${styles.textinmiddle}`}>{show.description}</p>
          <div className={styles.listvenues_img}>
            <img className={styles.poster} src={show.poster} alt={show.title} />
          </div>
        </div>
      ))}
    </div>
  );
};

export default ShowsList;