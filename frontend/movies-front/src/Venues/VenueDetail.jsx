import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import '../Cascade Style Sheets/VenueDetail.css';
import RoomApp from './Apps/RoopApp';
import { useSeatStates } from './Functions/useSeatStates';
import { FetchShowDetails } from './HTTP/FetchShowDetails';
import { toggleSeat } from './Functions/toggleSeat';
import { PatchVenue } from './HTTP/PatchVenue';
import { PostReservation } from './PostReservation';
import { FetchVenueDetails_new } from './HTTP/FetchVenueDetails';
import { ConstructPatchData_new } from './Functions/CounstructPatchData';
import { ConstructPostData_new } from './Functions/constructPostData';
import { BASE_URL } from '../Settings';

const VenueDetail = () => {
  const { id, venueId } = useParams();
  const [show, setShow] = useState(null);
  const [venue, setVenue] = useState(null);
  const seats = useSeatStates(1000);
  const [seatNum, setSeatNum] = useState(localStorage.getItem('seatnum'));
  const [reservationComplete, setReservationComplete] = useState(false);

  useEffect(() => {
    // Fetch show details
    FetchShowDetails(BASE_URL, setShow, id);

    // Fetch venue details
    FetchVenueDetails_new(BASE_URL,venue, setVenue, venueId, seats);
  }, [id, venueId, reservationComplete]);

  const reserveSeats = async () => {
    try {
      const dataToPatch = ConstructPatchData_new(truncatedSeatlist, show, venue);
      await PatchVenue(BASE_URL, venueId, dataToPatch);
      
      const dataToPOST = ConstructPostData_new(truncatedSeatlist, show, venue);
      await PostReservation(BASE_URL, dataToPOST);
      
      // Set reservationComplete to true to trigger re-render 
      setReservationComplete(prevState => !prevState);
    }
    catch (error) {
      console.log(error.message)
      if (error.message == 'Conflict: Reservation already exists.') {
        window.alert('Az egyik helyet már lefoglalták, kérem frissítse az oldalt!');
      }
      else {
        window.alert('Ismeretlen hiba történt, kérem frissítse az oldalt!');
      }
    }
  };

  if (!show || !venue) return <div>Loading...</div>;

  
  const truncatedSeatlist=seats.slice(0,venue.capacity);

  // Remove spaces from the room name
  const room_name_without_spaces = venue.room_name.replace(/\s+/g, '');

  return (
    <RoomApp
      show={show}
      venue={venue}
      seats={truncatedSeatlist}
      room_name_without_spaces={room_name_without_spaces}
      toggleSeat={toggleSeat}
      seatNum={seatNum}
      setSeatNum={setSeatNum}
      reserveSeats={reserveSeats}
    />);

};

export default VenueDetail;