import apiClient from "../Auth/Functions/APIClient";

export const PostReservation = async (BASE_URL, dataToPOST) => await apiClient.post(`${BASE_URL}reservations/`, dataToPOST, {

}).catch(error => {
  console.error('There was an error making the reservation!', error);
});
