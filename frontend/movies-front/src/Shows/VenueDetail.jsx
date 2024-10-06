import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import RoomTypeDict from './RoomTypeDict';
import '../Cascade Style Sheets/VenueDetail.css';
import RoomApp from './RoopApp';
import { useSeatStates } from './Functions/useSeatStates';
import { FetchShowDetails } from './Functions/FetchShowDetails';
import { toggleSeat } from './Functions/toggleSeat';
import { PatchVenue } from './Functions/PatchVenue';
import { PostReservation } from './Functions/PostReservation';
import { FetchVenueDetails,FetchVenueDetails_new } from './Functions/FetchVenueDetails';
import { ConstructPatchData,ConstructPatchData_new} from './Functions/CounstructPatchData';
import { ConstructPostData, ConstructPostData_new } from './Functions/constructPostData';

const VenueDetail = () => {
  const { id, venueId } = useParams();
  const [show, setShow] = useState(null);
  const [venue, setVenue] = useState(null);
  const seats = useSeatStates(180);

  useEffect(() => {
    // Fetch show details
    FetchShowDetails(setShow,id);
    
    // Fetch venue details
    FetchVenueDetails(setVenue,venueId,seats);
  }, [id, venueId]);


  const reserveSeats = async () => {
    const dataToPatch = ConstructPatchData(seats, show, venue);
    PatchVenue(venueId,dataToPatch);
 
    const dataToPOST=ConstructPostData(seats, show, venue);  
    PostReservation(dataToPOST)
      
  };

  if (!show || !venue) return <div>Loading...</div>;
  
  const numSeatsToDisplay = {
    'Kisterem': 80,
    'Közepes terem': 120,
    'Nagyterem': 180
  }
  // Remove spaces from the room name
const room_name_without_spaces = venue.room_name.replace(/\s+/g, '');
console.log(room_name_without_spaces);

// Use the cleaned room name to get the room dictionary
const roomDict = RoomTypeDict(room_name_without_spaces);

  return (
    <RoomApp
    title={show.title}
    poster={show.poster}
    showtime={venue.showtime}
    seats={seats}
    numSeatsToDisplay={numSeatsToDisplay[venue.room_name]}
    roomDict={roomDict}
    toggleSeat={toggleSeat}
    reserveSeats={reserveSeats}
/>);
  
};

export default VenueDetail;
