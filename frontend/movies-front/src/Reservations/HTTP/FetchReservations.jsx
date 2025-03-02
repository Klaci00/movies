import apiClient from "../../Auth/Functions/APIClient";

export const FetchReservations = async (BASE_URL, username, setReservationData, setError) => {
    if (username) {
        try {
            const response = await apiClient.get(`${BASE_URL}reservations/${username}/`);
            setReservationData(response.data);
        } catch (error) {
            setError('There was an error fetching the reservations!');
            console.error('Error fetching reservations:', error);
        }
    }
};
