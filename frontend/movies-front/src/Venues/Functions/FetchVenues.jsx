import axios from "axios";

export const FetchVenues=(BASE_URL,setVenues,id)=>{
    axios.get(`${BASE_URL}${id}/venues`)
    .then(response => {
      setVenues(response.data.venues);
    })
    .catch(error => {
      console.error('There was an error fetching the venues!', error);
    });
}
