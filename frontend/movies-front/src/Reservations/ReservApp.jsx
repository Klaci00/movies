import React from 'react';

function ReservApp({ id, title, owner, room_name, showtime, seat_count, onDelete }) {
    function convertDateTime(datetime) {
        const date = new Date(datetime);
        const year = date.getUTCFullYear();
        const month = String(date.getUTCMonth() + 1).padStart(2, '0');
        const day = String(date.getUTCDate()).padStart(2, '0');
        const hours = String(date.getUTCHours()).padStart(2, '0');
        const minutes = String(date.getUTCMinutes()).padStart(2, '0');
        
        return `${year}.${month}.${day}. ${hours}:${minutes}`;
    }
    
    return (
        <div>
            <h3>{title}</h3>
            <strong>Helyszín: {room_name}, Kezdés: {convertDateTime(showtime)}, Foglalt székek száma: {seat_count}</strong>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}

export default ReservApp;
