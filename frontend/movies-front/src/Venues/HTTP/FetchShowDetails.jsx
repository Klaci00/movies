import apiClient from "../../Auth/Functions/APIClient";

export const FetchShowDetails = (BASE_URL, setShow, id) => {

  const getVenueDetails = apiClient.get(`${BASE_URL}${id}`)
    .then(response => {
      setShow(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the show!', error);
    });
};