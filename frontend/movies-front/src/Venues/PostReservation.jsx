import axios from "axios";

export const PostReservation =(BASE_URL,dataToPOST)=> axios.post(`${BASE_URL}reservations/`, dataToPOST, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}` // Assuming the token is stored in localStorage
    }
  }).then(response => {
    window.location.reload();
  }).catch(error => {
    console.error('There was an error making the reservation!', error);
  });
