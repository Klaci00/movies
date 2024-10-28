export const countOccupiedSeats = (seats) => {
  return seats.filter(seatItem => seatItem.seat === 1).length;
};

