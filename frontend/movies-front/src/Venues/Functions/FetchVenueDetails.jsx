import axios from "axios";
import { BASE_URL } from "../../Settings";


export const FetchVenueDetails_new=(BASE_URL,setVenue,venueId,seats)=>{
const getVenues = axios.get(`${BASE_URL}venues/${venueId}`)
      .then(response => {
        setVenue(response.data);
        seats.forEach((seatItem, index) => {
        const seatKey = `seat_${String(index).padStart(3, '0')}`;
        if (response.data.seats[seatKey] !== undefined) {
              seatItem.setSeat(response.data.seats[seatKey]);
        }});
        }).catch(error => {
        console.error('There was an error fetching the venue!', error);
              });}