import React, { useEffect, useState } from 'react';
import { FetchShowsList } from '../Shows/HTTP/FetchShowsList';
import { BASE_URL } from '../Settings';
import { PostVenue } from './HTTP/PostVenue';
import { FetchRoomStyles } from './HTTP/FetchRoomStyles';
import styles from './Apps/FormApp.module.css';


export const AddVenue = (props) => {
    const [shows, setShows] = useState([]);
    const [selectedShow, setSelectedShow] = useState('');
    const [showtime, setShowtime] = useState('');
    const [roomTypes,setRoomTypes]=useState([]);
    const [selectedRoomTypeID,setSelectedRoomTypeID]=useState('');
    useEffect(() => {
        FetchShowsList(BASE_URL,setShows);
        FetchRoomStyles(setRoomTypes);
    }, []);

    const handleDropdownChange = (e) => {
        setSelectedShow(e.target.value);
    };

    const handleDropdownChange2 = (e) => {
        setSelectedRoomTypeID(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        PostVenue(shows,selectedShow,roomTypes,selectedRoomTypeID,showtime,BASE_URL);       
    };
    return (
        <form onSubmit={handleSubmit} className={props.darkMode?styles.light:styles.dark} >
            <div>
                <label>Show:</label>
                <select value={selectedShow} onChange={handleDropdownChange} required>
                    <option value="" disabled>Select a show</option>
                    {shows.map(show => (
                        <option key={show.id} value={show.id}>{show.title}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Room Name:</label>
                <select value={selectedRoomTypeID} onChange={handleDropdownChange2} required>
                    <option value="" disabled>Select a room</option>
                    {roomTypes.map(roomType => (
                        <option key={roomType.id} value={roomType.id}>{roomType.room_name}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Showtime (Budapest Time):</label>
                <input type="datetime-local" value={showtime} onChange={(e) => setShowtime(e.target.value)} required />
            </div>
            <button type="submit">Post Venue</button>
        </form>
    );
};
