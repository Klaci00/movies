import { countOccupiedSeats } from "./countOccupiedSeats";
import { ConstructSeatNames } from "./ConstructSeatNames";

    export const ConstructPostData_new = (seats, show, venue) => {
        const data = {
            venueId: venue.id,
            title: show.title,
            room_name: venue.room_name,
            showtime: venue.showtime,
            seats: {},
            seat_count: countOccupiedSeats(seats),
            seatnames: ''
        };
    
        const seatnamesArray = [];
    
        seats.forEach((seatItem, index) => {
            const seatKey = `seat_${String(index).padStart(3, '0')}`;
            if(seatItem.seat!=0)
            {if(seatItem.seat===1) {data.seats[seatKey] =  true;
                seatnamesArray.push(ConstructSeatNames(venue.room_name,index));
            }}
        });
    
        data.seatnames = seatnamesArray.join('; ');
        return data;
    };
    