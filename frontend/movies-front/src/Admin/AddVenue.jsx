import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VenueDataMaker } from './VenueDataMaker';
import { FetchShowsList } from '../Venues/Functions/FetchShowsList';

export const AddVenue = () => {
    const [shows, setShows] = useState([]);
    const [selectedShow, setSelectedShow] = useState('');
    const [roomName, setRoomName] = useState('');
    const [showtime, setShowtime] = useState('');

    useEffect(() => {
        FetchShowsList(setShows);
    }, []);

    const handleDropdownChange = (e) => {
        console.log('Selected show ID:', e.target.value);
        setSelectedShow(e.target.value);
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        const selectedShowObject = shows.find(show => show.id === parseInt(selectedShow));
        console.log('Selected show object:', selectedShowObject);

        if (!selectedShowObject) {
            console.error('Selected show object not found');
            return;
        }

        const venueData = VenueDataMaker(selectedShowObject.title,roomName,showtime,selectedShowObject.id);
        console.log(venueData)

        const token = localStorage.getItem('token');

        try {
            const response = await axios.post('http://127.0.0.1:8000/admin-venues', venueData, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('There was an error posting the venue!', error);
        }
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
                <input type="text" value={roomName} onChange={(e) => setRoomName(e.target.value)} required />
            </div>
            <div>
                <label>Showtime (Budapest Time):</label>
                <input type="datetime-local" value={showtime} onChange={(e) => setShowtime(e.target.value)} required />
            </div>
            <button type="submit">Post Venue</button>
        </form>
    );
};
