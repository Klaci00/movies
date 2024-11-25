import apiClient from "../Auth/Functions/APIClient";

export const PostReservation = (BASE_URL, dataToPOST) => apiClient.post(`${BASE_URL}reservations/`, dataToPOST, {
  
}).then(response => {
  window.location.reload();
}).catch(error => {
  console.error('There was an error making the reservation!', error);
});
