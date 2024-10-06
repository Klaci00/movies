export const ConstructPatchData = (seats, show, venue) => {
    const data = {
        title: show.title,
        room_name: venue.room_name,
        showtime: venue.showtime,
    };
  
    seats.forEach((seatItem, index) => {
        const seatKey = `seat_${String(index + 1).padStart(3, '0')}`;
        data[seatKey] = seatItem.seat;
    });
  
    return data;
  };

  export const ConstructPatchData_new = (seats, show, venue) => {
    const data = {
        title: show.title,
        room_name: venue.room_name,
        showtime: venue.showtime,
        seats: {}
    };


    seats.forEach((seatItem, index) => {
        const seatKey = `seat_${String(index).padStart(3, '0')}`;
        data.seats[seatKey] = seatItem.seat;
    });


    return data;
};