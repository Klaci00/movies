import React from 'react';
function ReservApp({ id, title, owner, room_name, showtime, seat_count, onDelete,seatnames }) {
    function convertDateTime(datetime) {
        const date = new Date(datetime);
        return date.toLocaleString('en-GB', { timeZone: 'Europe/Budapest', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).replace(',', '');
    }
    
    return (
        <div>
            <h3>{title}</h3>
            <strong>Helyszín: {room_name}, Kezdés: {convertDateTime(showtime)}, Foglalt székek száma: {seat_count}, Helyek: {seatnames}</strong>
            <button onClick={() => onDelete(id)}>Delete</button>
        </div>
    );
}

export default ReservApp;
