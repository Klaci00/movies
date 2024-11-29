import { VenueDataMaker } from "../Functions/VenueDataMaker";
import apiClient from "../../Auth/Functions/APIClient";

export const PostVenue = async (shows,selectedShow,selectedRoomName,showtime,BASE_URL)=>{
    const selectedShowObject = shows.find(show => show.id === parseInt(selectedShow));
        window.alert('Venue succesfully added!');

        if (!selectedShowObject) {
            console.error('Selected show object not found');
            return;
        }

        const venueData = VenueDataMaker(selectedShowObject.title,selectedRoomName,showtime,selectedShowObject.id);

        try {
            const response = await apiClient.post(`${BASE_URL}/admin-venues`, venueData);
            console.log(response.data);
        } catch (error) {
            console.error('There was an error posting the venue!', error);
        }
}