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
        if (seatItem.seat!=0){
        data.seats[seatKey] = seatItem.seat;}
    });
    console.log(data);
    return data;
};
