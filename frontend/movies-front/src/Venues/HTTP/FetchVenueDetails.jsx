import apiClient from "../../Auth/Functions/APIClient";

export const FetchVenueDetails_new = async(BASE_URL, venue, setVenue, venueId, seats) => {
      const getVenues = await apiClient.get(`${BASE_URL}venues/${venueId}`)
            .then(response => {
                  setVenue(response.data);
                  console.log('response.data.room_style.capacity',response.data.room_style[0].capacity);
                  seats.slice(0,response.data.room_style[0].capacity).forEach((seatItem, index) => {
                        const seatKey = `seat_${String(index).padStart(3, '0')}`;
                        if (response.data.seats[seatKey] !== undefined) {
                              seatItem.setSeat(response.data.seats[seatKey]==true?2:1);
                        }
                        else{
                              seatItem.setSeat(0);
                        }
                  });
            }).catch(error => {
                  console.error('There was an error fetching the venue!', error);
            });
}