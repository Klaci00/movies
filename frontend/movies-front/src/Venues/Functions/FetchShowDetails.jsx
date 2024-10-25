import axios from 'axios';

export const FetchShowDetails = (BASE_URL,setShow,id) =>{

  const getVenueDetails = axios.get(`${BASE_URL}${id}`)
      .then(response => {
        setShow(response.data);
      })
      .catch(error => {
        console.error('There was an error fetching the show!', error);
      });};