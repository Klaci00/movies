// Seat.js
import React from 'react';

const Seat = ({ seat, toggleSeat }) => (
  <div
    onClick={() => toggleSeat(seat.value, seat.setValue)}
    style={{
      width: '20px',
      height: '20px',
      backgroundColor: seat.value === 0 ? 'green' : seat.value === 1 ? 'red' : 'gray',
      display: 'inline-block',
      margin: '5px',
      cursor: seat.value !== 2 ? 'pointer' : 'not-allowed'
    }}
  ></div>
);

export default Seat;
