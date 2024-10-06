import axios from "axios";

export const FetchVenueDetails=(setVenue,venueId,seats)=>{
const getVenues = axios.get(`http://127.0.0.1:8000/venues/${venueId}`)
      .then(response => {
        setVenue(response.data);
        seats.forEach((seatItem, index) => {
        const seatKey = `seat_${String(index + 1).padStart(3, '0')}`;
        if (response.data[seatKey] !== undefined) {
              seatItem.setSeat(response.data[seatKey]);
        }});
        }).catch(error => {
        console.error('There was an error fetching the venue!', error);
              });}

export const FetchVenueDetails_new=(setVenue,venueId,seats)=>{
const getVenues = axios.get(`http://127.0.0.1:8000/venues/${venueId}`)
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