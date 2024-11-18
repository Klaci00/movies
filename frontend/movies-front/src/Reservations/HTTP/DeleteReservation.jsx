import axios from "axios"

export const DeleteReservation= async (BASE_URL,id,token,setReservationData,reservationData,error,setError)=>{
    try {
        await axios.delete(`${BASE_URL}reservdestroy/${id}/`, {
            headers: {
                Authorization: `Token ${token}`
            }
        });
        setReservationData(reservationData.filter(reservation => reservation.id !== id));
    } catch (error) {
        setError('There was an error deleting the reservation!');
        console.error('Error deleting reservation:', error);
    };
};