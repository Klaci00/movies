import axios from "axios";

export const PatchVenue =(BASE_URL,venueId,data)=> axios.patch(`${BASE_URL}venues/${venueId}/`, data, {
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