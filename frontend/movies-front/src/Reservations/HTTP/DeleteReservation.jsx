import apiClient from "../../Auth/Functions/APIClient";

export const DeleteReservation= async (BASE_URL,id,token,setReservationData,reservationData,error,setError)=>{
    try {
        await apiClient.delete(`${BASE_URL}reservdestroy/${id}/`);
        setReservationData(reservationData.filter(reservation => reservation.id !== id));
    } catch (error) {
        setError('There was an error deleting the reservation!');
        console.error('Error deleting reservation:', error);
    };
};