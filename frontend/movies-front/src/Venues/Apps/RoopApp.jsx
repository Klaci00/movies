import React from 'react';
import '../../Cascade Style Sheets/VenueDetail.css';
import { NumSeatCheck } from '../Functions/toggleSeat';

function RoomApp(props) {
    var stop = false;
    const target = 1;
    const indices = props.seats.map((item, index) => (item.seat === target ? index : -1))
        .filter(index => index !== -1);
    for (let i = 0; i < indices.length - 1; i++) {
        if (Math.abs(indices[i] - indices[i + 1]) == 2) {
            stop = true;
            props.seats[indices[i+1]].setSeat(0);
            window.alert('Egy helyet nem lehet kihagyni a foglalt helyek között!');
            indices.pop(indices[i+1]);
            props.setSeatNum(props.seatNum+1);
                }
    }
    const isButtonDisabled = stop || indices.length === 0 || props.seatNum != 0 && NumSeatCheck(props.seatNum) != 0;
    console.log(`seatsandentrance_${props.room_name_without_spaces}`)
    return (
        <div className='venuedetail_main'>
            <h1>{props.show.title}</h1>
            <img className='poster' src={props.show.poster} alt={props.show.title} />
            <p>Showtime: {new Date(props.venue.showtime).toLocaleString()}</p>
            <p>Jegyek száma: {props.seatNum}</p>
            <div className={`screen_${props.room_name_without_spaces}`}>Screen</div>
            <div className={`corridor_${props.room_name_without_spaces}`}></div>
            <div className={`seatsandentrance_${props.room_name_without_spaces}`}>
                <div className={`leftverticalcorridor_${props.room_name_without_spaces}`}> </div>
                <div className={`seats_container_${props.room_name_without_spaces}`}>
                    {props.seats.slice(0, props.venue.capacity).map(({ seat, setSeat }, index) => (
                        <div
                            key={index}
                            className='seat'
                            onClick={() =>props.toggleSeat(seat, setSeat, props.seatNum, props.setSeatNum)}
                            style={{
                                width: '20px',
                                height: '20px',
                                backgroundColor: seat === 0 ? 'green' : seat === 1 ? 'red' : 'gray',
                                cursor: seat !== 2 ? 'pointer' : 'not-allowed',
                            }}
                        ></div>
                    ))}
                </div>
                <div className={`entrance_and_gaps_${props.room_name_without_spaces}`}>
                    <div className={`gap_upper_${props.room_name_without_spaces}`}></div>
                    <div className={`entrance_${props.room_name_without_spaces}`}>BEJÁRAT</div>
                    <div className={`gap_lower_${props.room_name_without_spaces}`}></div>
                </div>
            </div>
            <button onClick={() => props.reserveSeats(props)} disabled={isButtonDisabled}>Reserve Seats</button>
        </div>
    );
}

export default RoomApp;