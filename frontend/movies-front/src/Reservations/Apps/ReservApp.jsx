import React from 'react';
function ReservApp({ id, title, room_name, showtime, seat_count, onDelete, seatnames, BASE_URL, setReservationData, reservationData, error, setError }) {
    function convertDateTime(datetime) {
        const date = new Date(datetime);
        const year = date.getFullYear();
        const month = ('0' + (date.getMonth() + 1)).slice(-2);
        const day = ('0' + date.getDate()).slice(-2);
        const hours = ('0' + date.getHours()).slice(-2);
        const minutes = ('0' + date.getMinutes()).slice(-2);
        return `${year}-${month}-${day} ${hours}:${minutes}`;
    }

    const confirmDelete = () => {
        return window.confirm('Biztosan törölni szeretné a foglalást?');
    }

    return (
        <div>
            <h2>{title}</h2>
            <strong>Helyszín: {room_name},<br></br> Kezdés: {convertDateTime(showtime)},<br></br> Foglalt székek száma: {seat_count},<br></br> Helyek:
                <ul>
                    {typeof seatnames === 'string' && seatnames.split(';').map(
                        seatname => 
                        <li key={seatname} >{seatname}</li>)
                        }
                </ul>
            </strong>
            <button onClick={() => { if (confirmDelete()) onDelete(BASE_URL, id, setReservationData, reservationData, error, setError); }}>Foglalás törlése</button>
        </div>
    );
}

export default ReservApp;
