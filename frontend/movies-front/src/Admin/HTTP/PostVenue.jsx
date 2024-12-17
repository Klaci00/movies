import { VenueDataMaker } from "../Functions/VenueDataMaker";
import apiClient from "../../Auth/Functions/APIClient";

export const PostVenue = async (shows,selectedShow,roomTypes,selectedRoomTypeID,showtime,BASE_URL)=>{
    const selectedShowObject = shows.find(show => show.id === parseInt(selectedShow));
    console.log(roomTypes);
    const SelectedRoomTypeObject=roomTypes.find(roomType => roomType.id == selectedRoomTypeID);
    console.log(SelectedRoomTypeObject);
        if (!selectedShowObject) {
            console.error('Selected show object not found');
            return;
        }
        else if (!SelectedRoomTypeObject){
            console.error('Selected roomtype not found!');
            return;
        }

        const venueData = VenueDataMaker(selectedShowObject,SelectedRoomTypeObject,showtime);

        try {
            const response = await apiClient.post(`${BASE_URL}admin-venues/`, venueData);
            console.log(response.data);
            window.alert('Venue added succesfully!');
        } catch (error) {
            console.error('There was an error posting the venue!', error);
        }
}