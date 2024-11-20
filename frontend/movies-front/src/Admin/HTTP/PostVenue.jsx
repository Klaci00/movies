import axios from "axios";
import { VenueDataMaker } from "../Functions/VenueDataMaker";

export const PostVenue = async (shows,selectedShow,selectedRoomName,showtime,BASE_URL)=>{
    const selectedShowObject = shows.find(show => show.id === parseInt(selectedShow));
        console.log('Selected show object:', selectedShowObject);
        window.alert('Venue succesfully added!');

        if (!selectedShowObject) {
            console.error('Selected show object not found');
            return;
        }

        const venueData = VenueDataMaker(selectedShowObject.title,selectedRoomName,showtime,selectedShowObject.id);
        console.log(venueData)

        const token = localStorage.getItem('token');

        try {
            const response = await axios.post(`${BASE_URL}/admin-venues`, venueData, {
                headers: {
                    'Authorization': `Token ${token}`
                }
            });
            console.log(response.data);
        } catch (error) {
            console.error('There was an error posting the venue!', error);
        }
}