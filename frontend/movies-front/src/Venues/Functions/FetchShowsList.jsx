import axios from 'axios';

export const FetchShowsList =async (BASE_URL, setShows)=>{
    try {
        const response = await axios.get(`${BASE_URL}`);
        setShows(response.data);
    } catch (error) {
        console.error('There was an error fetching the shows!', error);
    }
}