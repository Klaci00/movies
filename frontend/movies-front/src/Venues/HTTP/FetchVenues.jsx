import apiClient from "../../Auth/Functions/APIClient";

export const FetchVenues = (BASE_URL, setVenues, id) => {
  apiClient.get(`${BASE_URL}${id}/venues`)
    .then(response => {
      setVenues(response.data.venues);
    })
    .catch(error => {
      console.error('There was an error fetching the venues!', error);
    });
}
