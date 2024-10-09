import axios from "axios";

export const PatchVenue =(venueId,data)=> axios.patch(`http://127.0.0.1:8000/venues/${venueId}/`, data, {
    headers: {
      'Authorization': `Token ${localStorage.getItem('token')}` // Assuming the token is stored in localStorage
    }
  })
  
  .then(response => {
    alert('Seats reserved successfully!');
    
  })
  .catch(error => {
    console.error('There was an error reserving the seats!', error);
  });