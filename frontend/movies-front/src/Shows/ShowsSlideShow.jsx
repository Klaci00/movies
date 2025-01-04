import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { FetchShowsList } from './HTTP/FetchShowsList';
import { BASE_URL } from '../Settings';
import styles from '../Cascade Style Sheets/ShowsSlideshow.module.css'; // Import the CSS module

const ShowsSlideshow = () => {
  const [shows, setShows] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);
  let leftarrow='<';
  let rightarrow='>';
  useEffect(() => {
    FetchShowsList(BASE_URL, setShows);
  }, []);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex(prevIndex => (prevIndex + 1) % shows.length);
    }, 3000); // Change slide every 3 seconds

    return () => clearInterval(interval);
  }, [shows.length]);

  const handlePrevClick = () => {
    setCurrentIndex(prevIndex => (prevIndex - 1 + shows.length) % shows.length);
  };

  const handleNextClick = () => {
    setCurrentIndex(prevIndex => (prevIndex + 1) % shows.length);
  };

  if (shows.length === 0) {
    return <div>Loading...</div>;
  }

  return (
    <div className={styles.slideshow}>
      {shows.map((show, index) => (
        <div
          key={show.id}
          className={`${styles.show} ${index === currentIndex ? styles.active : ''}`}
        >
          <h2 className={styles.textinmiddle}>
            <Link className={styles.showlink} to={`/${show.id}`}>{show.title}</Link>
          </h2>
          <p className={styles.textinmiddle}>{show.description}</p>
          <div className={styles.listvenues_img}>
            <img className={styles.poster} src={show.poster} alt={show.title} />
          </div>
        </div>
      ))}
      <button className={styles.prevButton} onClick={handlePrevClick}>{leftarrow}</button>
      <button className={styles.nextButton} onClick={handleNextClick}>{rightarrow}</button>
    </div>
  );
};

export default ShowsSlideshow;