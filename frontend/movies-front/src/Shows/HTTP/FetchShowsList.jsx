import apiClient from '../../Auth/Functions/APIClient';

export const FetchShowsList = async (BASE_URL, setShows) => {
    try {
        const response = await apiClient.get(`${BASE_URL}`);
        setShows(response.data);
        console.log(response.data);
    } catch (error) {
        console.error('There was an error fetching the shows!', error);
    }
}