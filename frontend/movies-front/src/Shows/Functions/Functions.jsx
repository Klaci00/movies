import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';


export const useSeatStates = (numSeats) => {
    const seatStates = [];
    for (let i = 1; i <= numSeats; i++) {
        const [seat, setSeat] = useState(0);
        seatStates.push({ seat, setSeat });
    }
    return seatStates;
};

export const toggleSeat = (seat, setSeat) => {
    if (seat !== 2) {
      setSeat(prevSeat => (prevSeat === 0 ? 1 : 0));
    }
  };

export const constructPatchData = (seats, show, venue) => {
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

export const countOccupiedSeats = (seats) => {
    return seats.filter(seatItem => seatItem.seat === 1).length;
  };

export const constructPostData = (seats, show, venue) => {
    const data = {
        venueId: venue.id,
        title: show.title,
        room_name: venue.room_name,
        showtime: venue.showtime,
        seat_count: countOccupiedSeats(seats)
    };
  
    seats.forEach((seatItem, index) => {
        const seatKey = `seat_${String(index + 1).padStart(3, '0')}`;
        data[seatKey] = seatItem.seat;
    });
    return data;
  };