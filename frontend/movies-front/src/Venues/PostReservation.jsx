import axios from "axios";

export const PostReservation =(dataToPOST)=> axios.post(`http://127.0.0.1:8000/reservations/`, dataToPOST, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}` // Assuming the token is stored in localStorage
    }
  }).then(response => {
    window.location.reload();
  }).catch(error => {
    console.error('There was an error making the reservation!', error);
  });
