import React from 'react';

function ReservApp({ id, title, owner, room_name, showtime, seat_count, onDelete }) {
    return (
        <div>
            <div>{title}</div>
            <p>Helyszín: {room_name}, Kezdés: {showtime}, Foglalt székek száma: {seat_count}</p>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}

export default ReservApp;
