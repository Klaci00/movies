import React, { useState } from 'react';
import axios from 'axios';

const AddShow = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [playtime, setPlaytime] = useState(0);
    const [poster, setPoster] = useState(null);
    const [selectedRestriction, setSelectedRestriction]=useState('');
    const Restrictions=['Korosztályra való tekintet nélkül megtekinthető','6 éven felülieknek','12 éven felülieknek','16 éven felülieknek','18 éven felülieknek'];
    const handleSubmit = async (e) => {
        e.preventDefault();


        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('rating', selectedRestriction);
        formData.append('playtime', playtime);
        formData.append('poster', poster);

        const token = localStorage.getItem('token');

        try {
            const response = await axios.post('http://127.0.0.1:8000/', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data',
                    'Authorization': `Token ${token}`
                }
            });
            console.log(response.data);
            window.alert('Show added succesfully!');
        } catch (error) {
            console.error('There was an error posting the show!', error);
        }
    };

    const handleDropdownChange = (e) => {
        console.log('Selected roomname:', e.target.value);
        setSelectedRestriction(e.target.value);
    };

    const handlePlaytimeFocus = (e) => {
        if (e.target.value === '0') {
            setPlaytime('');
        }
    };


    return (
        <form onSubmit={handleSubmit}>
            <div>
                <label>Title:</label>
                <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
            </div>
            <div>
                <label>Description:</label>
                <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
            </div>
            <div>
                <label>Rating:</label>
                <select value={selectedRestriction} onChange={handleDropdownChange} required>
                    <option value="" disabled>Select a restriction</option>
                    {Restrictions.map(restriction => (
                        <option key={restriction} value={restriction}>{restriction}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Playtime:</label>
                <input type="number" value={playtime} 
                onChange={(e) => setPlaytime(Number(e.target.value))} 
                onFocus={handlePlaytimeFocus}
                required />
            </div>
            <div>
                <label>Poster:</label>
                <input type="file" onChange={(e) => setPoster(e.target.files[0])} required />
            </div>
            <button type="submit">Add Show</button>
        </form>
    );
};

export default AddShow;
