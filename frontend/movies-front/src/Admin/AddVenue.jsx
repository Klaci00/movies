import React, { useEffect, useState } from 'react';
import { FetchShowsList } from '../Shows/HTTP/FetchShowsList';
import { BASE_URL } from '../Settings';
import { PostVenue } from './HTTP/PostVenue';

export const AddVenue = () => {
    const [shows, setShows] = useState([]);
    const [selectedShow, setSelectedShow] = useState('');
    const [showtime, setShowtime] = useState('');
    const [selectedRoomName,setSelectedRoomname]=useState('');
    const roomNames=['Nagyterem','Közepes terem','Kisterem'];
    useEffect(() => {
        FetchShowsList(BASE_URL,setShows);
    }, []);

    const handleDropdownChange = (e) => {
        console.log('Selected show ID:', e.target.value);
        setSelectedShow(e.target.value);
    };

    const handleDropdownChange2 = (e) => {
        console.log('Selected roomname:', e.target.value);
        setSelectedRoomname(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        PostVenue(shows,selectedShow,selectedRoomName,showtime,BASE_URL);
        
    };

    return (
        <form onSubmit={handleSubmit}>
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
                <select value={selectedRoomName} onChange={handleDropdownChange2} required>
                    <option value="" disabled>Select a room</option>
                    {roomNames.map(roomname => (
                        <option key={roomname} value={roomname}>{roomname}</option>
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
