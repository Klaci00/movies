import apiClient from "../../Auth/Functions/APIClient";

export const PatchVenue = async (BASE_URL, venueId, data) => await apiClient.patch(`${BASE_URL}venues/${venueId}/`, data)
  .then(response => {
    alert('Seats reserved successfully!');
  })
  .catch(error => {
    console.error('There was an error reserving the seats!', error);
  });