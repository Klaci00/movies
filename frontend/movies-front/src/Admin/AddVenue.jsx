import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { VenueDataMaker } from './VenueDataMaker';
import { FetchShowsList } from '../Venues/Functions/FetchShowsList';

export const AddVenue = () => {
    const [shows, setShows] = useState([]);
    const [selectedShow, setSelectedShow] = useState('');
    const [roomName, setRoomName] = useState('');
    const [showtime, setShowtime] = useState('');
    const [selectedRoomName,setSelectedRoomname]=useState('');
    const roomNames=['Nagyterem','Közepes terem','Kisterem'];
    useEffect(() => {
        FetchShowsList(setShows);
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

        const selectedShowObject = shows.find(show => show.id === parseInt(selectedShow));
        console.log('Selected show object:', selectedShowObject);
        window.alert('Venue succesfully added!');

        if (!selectedShowObject) {
            console.error('Selected show object not found');
            return;
        }

        const venueData = VenueDataMaker(selectedShowObject.title,selectedRoomName,showtime,selectedShowObject.id);
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
        <form onSubmit={handleSubmit} className='addvenue'>
            <div>
                <label>Show:</label><br/>
                <select value={selectedShow} onChange={handleDropdownChange} required>
                    <option value="" disabled>Select a show</option>
                    {shows.map(show => (
                        <option key={show.id} value={show.id}>{show.title}</option>
                    ))}
                </select>
            </div>
            <div>
            <br/><label>Room Name:</label><br/>
                <select value={selectedRoomName} onChange={handleDropdownChange2} required>
                    <option value="" disabled>Select a room</option>
                    {roomNames.map(roomname => (
                        <option key={roomname} value={roomname}>{roomname}</option>
                    ))}
                </select>

            </div>
            <div>
            <br/><label>Showtime (Budapest Time):</label><br/>
                <input type="datetime-local" value={showtime} onChange={(e) => setShowtime(e.target.value)} required />
            </div>
            <br/><button type="submit">Post Venue</button>
        </form>
    );
};
