import apiClient from "../../Auth/Functions/APIClient";

export const PatchVenue = async (BASE_URL, venueId, data) => {
  try {
    const response = await apiClient.patch(`${BASE_URL}venues/${venueId}/`, data);
    window.alert('Seats reserved succesfully!');
    return response.data;
  } catch (error) {
    if (error.response && error.response.status === 409) { throw new Error('Conflict: Reservation already exists.'); }
    else { throw new Error('There was an error making the reservation!'); }
  }
};