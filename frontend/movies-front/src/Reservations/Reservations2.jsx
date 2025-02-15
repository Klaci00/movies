import { useEffect, useState } from 'react';
import ReservApp from './Apps/ReservApp';
import { FetchReservations } from './HTTP/FetchReservations';
import { DeleteReservation } from './HTTP/DeleteReservation';
import { BASE_URL } from '../Settings';
import styles from './Apps/ReservApp.module.css'

const Reservations2 = (props) => {
    const [reservationData, setReservationData] = useState([]);
    const [error, setError] = useState(null);

    useEffect(() => {
        FetchReservations(BASE_URL,props.username,setReservationData,setError);
    }, [props.username]);
 
    function reservParser(x) {
        return (
            <div key={x.id} >
                <ReservApp
                    id={x.id}
                    title={x.title}
                    owner={x.owner}
                    room_name={x.room_name}
                    showtime={x.showtime}
                    seat_count={x.seat_count}
                    seatnames={x.seatnames}
                    BASE_URL={BASE_URL}
                    setReservationData={setReservationData}
                    reservationData={reservationData}
                    error={error}
                    setError={setError}
                    onDelete={DeleteReservation}
                    darkMode={props.darkMode}
                />
            </div>
        );
    }

    return (
        <>
            <h1 className={`${!props.darkMode? styles.dark:''} ${styles.reservations}`} >Foglalások</h1>
            {error && <p>{error}</p>}
            {reservationData.length > 0 ? (
                <div className={styles.main}>
                    {reservationData.map(reservParser)}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

export default Reservations2;
