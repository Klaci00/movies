import axios from 'axios';

export const FetchShowsList =async (setShows)=>{
    try {
        const response = await axios.get('http://127.0.0.1:8000/');
        setShows(response.data);
    } catch (error) {
        console.error('There was an error fetching the shows!', error);
    }
}