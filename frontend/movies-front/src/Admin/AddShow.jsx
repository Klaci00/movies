import React, { useState } from 'react';
import axios from 'axios';

const AddShow = () => {
    const [title, setTitle] = useState('');
    const [description, setDescription] = useState('');
    const [rating, setRating] = useState('');
    const [playtime, setPlaytime] = useState(0);
    const [poster, setPoster] = useState(null);

    const handleSubmit = async (e) => {
        e.preventDefault();

        const formData = new FormData();
        formData.append('title', title);
        formData.append('description', description);
        formData.append('rating', rating);
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
        } catch (error) {
            console.error('There was an error posting the show!', error);
        }
    };

    return (
        <form onSubmit={handleSubmit} className='addshow'>
            <br/>
            <div>
                <p>
                    <label>Title:</label>
                </p>
                <p>
                    <input type="text" value={title} onChange={(e) => setTitle(e.target.value)} required />
                </p>
            </div>
            <br/>
            <div>
                <p>
                    <label>Description:</label>
                </p>
                <p>
                    <textarea value={description} onChange={(e) => setDescription(e.target.value)} required />
                </p>
            </div>
            <br/>
            <div>
                <p>
                <label>Rating:</label>
                </p>
                <p>
                <input type="text" value={rating} onChange={(e) => setRating(e.target.value)} required />
                </p>
            </div>
            <br/>
            <div>
                <p>
                <label>Playtime:</label>
                </p>
                <p>
                <input type="number" value={playtime} onChange={(e) => setPlaytime(Number(e.target.value))} required />
                </p>
            </div>
            <br/>
            <div>
                <p>
                    <label>Poster:</label>
                </p>
                <p>
                <input type="file" onChange={(e) => setPoster(e.target.files[0])} required />
                </p>
            </div>
            <br/>
            <button type="submit">Add Show</button>
        </form>
    );
};

export default AddShow;
