import axios from "axios";

export const FetchReservations = async (BASE_URL,username,token,setReservationData,error,setError) => {
    if (username) {
        try {
            const response = await axios.get(`${BASE_URL}reservations/${username}`, {
                headers: {
                    Authorization: `Token ${token}`,
                }
            });
            setReservationData(response.data);
        } catch (error) {
            setError('There was an error fetching the reservations!');
            console.error('Error fetching reservations:', error);
        }
    }
};