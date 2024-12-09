import axios from "axios";

export const FetchShowDetails = async (BASE_URL, setShow, id) => {

  const getVenueDetails = await axios.get(`${BASE_URL}${id}`)
    .then(response => {
      setShow(response.data);
    })
    .catch(error => {
      console.error('There was an error fetching the show!', error);
    });
};