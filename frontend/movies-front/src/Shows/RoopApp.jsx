import React from 'react';

function RoomApp(props) {
    return (
        <div className='venuedetail_main'>
            <h1>{props.title}</h1>
            <img src={props.poster} alt={props.title} />
            <p>Showtime: {new Date(props.showtime).toLocaleString()}</p>
                <div className={props.roomDict['screen']}>Screen</div>
                <div className={props.roomDict['corridor']}></div>
                <div className={props.roomDict['seatsandentrance']}>
                    <div className={props.roomDict['leftverticalcorridor']}> </div>
                    <div className={props.roomDict['seats_container']}>
                        {props.seats.slice(0, props.numSeatsToDisplay).map(({ seat, setSeat }, index) => (
                            <div
                                key={index}
                                className='seat'
                                onClick={() => props.toggleSeat(seat, setSeat)}
                                style={{
                                    width: '20px',
                                    height: '20px',
                                    backgroundColor: seat === 0 ? 'green' : seat === 1 ? 'red' : 'gray',
                                    cursor: seat !== 2 ? 'pointer' : 'not-allowed',
                                }}
                            ></div>
                        ))}
                    </div>
                    <div className={props.roomDict['entrance_and_gaps']}>
                        <div className={props.roomDict['gap_upper']}></div>
                        <div className={props.roomDict['entrance']}>BEJÁRAT</div>
                        <div className={props.roomDict['gap_lower']}></div>
                    </div>
                </div>
            <button onClick={() => props.reserveSeats(props)}>Reserve Seats</button>
        </div>
    );
}

export default RoomApp;
