import React from 'react';
function ReservApp({ id, title, room_name, showtime, seat_count, onDelete, seatnames,BASE_URL,setReservationData,reservationData,error,setError }) {
    function convertDateTime(datetime) {
        const date = new Date(datetime);
        return date.toLocaleString('hu-HU', { timeZone: 'Europe/Budapest', year: 'numeric', month: '2-digit', day: '2-digit', hour: '2-digit', minute: '2-digit' }).replace(',', '');
    }

    return (
        <div>
            <h3>{title}</h3>
            <strong>Helyszín: {room_name}, Kezdés: {convertDateTime(showtime)}, Foglalt székek száma: {seat_count}, Helyek: {seatnames}</strong>
            <button onClick={() => onDelete(BASE_URL,id,setReservationData,reservationData,error,setError)}>Foglalás törlése</button>
        </div>
    );
}

export default ReservApp;
