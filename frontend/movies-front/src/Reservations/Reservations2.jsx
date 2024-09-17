import { useEffect, useState } from "react";
import axios from "axios";
import ReservApp from "./ReservApp";

const Reservations2 = () => {
    const [reservationData, setReservationData] = useState([]);
    const [username, setUsername] = useState('');
    const [isAuth, setIsAuth] = useState(false);
    const [error, setError] = useState(null);

    const authToken = localStorage.getItem('token');

    useEffect(() => {
        const fetchUsername = async () => {
            if (authToken) {
                setIsAuth(true);
                try {
                    const userResponse = await axios.get('http://127.0.0.1:8000/user/', {
                        headers: {
                            Authorization: `Token ${authToken}`
                        }
                    });
                    setUsername(userResponse.data.username);
                } catch (error) {
                    setError('There was an error fetching the user info!');
                    console.error('Error fetching user info:', error);
                }
            }
        };

        const fetchReservations = async () => {
            if (username) {
                try {
                    const response = await axios.get(`http://127.0.0.1:8000/reservations/${username}`, {
                        headers: {
                            Authorization: `Token ${authToken}`,
                        }
                    });
                    setReservationData(response.data);
                } catch (error) {
                    setError('There was an error fetching the reservations!');
                    console.error('Error fetching reservations:', error);
                }
            }
        };

        fetchUsername().then(fetchReservations);
    }, [authToken, username]);

    function reservParser(x) {
        return (
            <div key={x.id}>
                <ReservApp title={x.title} owner={x.owner} room_name={x.room_name} showtime={x.showtime} seat_count={x.seat_count} />
            </div>
        );
    }

    return (
        <>
            <h1>Reservations</h1>
            {error && <p>{error}</p>}
            {reservationData.length > 0 ? (
                <div>
                    {reservationData.map(reservParser)}
                </div>
            ) : (
                <div>Loading...</div>
            )}
        </>
    );
};

export default Reservations2;
