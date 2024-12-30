export const ConstructPatchData_new = (seats, show, venue) => {
    const data = {
        title: show.title,
        room_name: venue.room_name,
        showtime: venue.showtime,
        seats: {},
        capacity: venue.capacity
    };
    seats.forEach((seatItem, index) => {
        const seatKey = `seat_${String(index).padStart(3, '0')}`;
        if (seatItem.seat==1){
        data.seats[seatKey] = false;}
    });
    console.log(data);
    return data;
};
