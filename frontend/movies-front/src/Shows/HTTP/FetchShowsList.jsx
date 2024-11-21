import axios from 'axios';
import apiClient from '../../Auth/Functions/APIClient';
export const FetchShowsList = async (BASE_URL, setShows) => {
    try {
        const response = await apiClient.get(`${BASE_URL}`);
        console.log(apiClient);
        setShows(response.data);
    } catch (error) {
        console.error('There was an error fetching the shows!', error);
    }
}