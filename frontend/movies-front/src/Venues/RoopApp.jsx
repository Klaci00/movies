import React from 'react';
import '../Cascade Style Sheets/VenueDetail.css';
import { toggleSeat } from './Functions/toggleSeat';
function RoomApp(props) {
    var stop=false;
    const target = 1;
    const indices = props.seats.map((item,index)=>(item.seat === target ? index : -1))
    .filter(index=>index !== -1);
    console.log(indices.length);
    for (let i = 0; i < indices.length - 1; i++) {
        if (Math.abs(indices[i] - indices[i + 1]) == 2) {
          stop=true;
          window.alert('Egy helyet nem lehet kihagyni a foglalt helyek között!');
        }
      }
    const isButtonDisabled = stop || indices.length === 0;

        return (
        <div className='venuedetail_main'>
            <h1>{props.title}</h1>
            <img className='poster' src={props.poster} alt={props.title} />
            <p>Showtime: {new Date(props.showtime).toLocaleString()}</p>
            <p>Jegyek száma: {props.seatnum}</p>
                <div className={props.roomDict['screen']}>Screen</div>
                <div className={props.roomDict['corridor']}></div>
                <div className={props.roomDict['seatsandentrance']}>
                    <div className={props.roomDict['leftverticalcorridor']}> </div>
                    <div className={props.roomDict['seats_container']}>
                        {props.seats.slice(0, props.numSeatsToDisplay).map(({ seat, setSeat }, index) => (
                            <div
                                key={index}
                                className='seat'
                                onClick={() =>props.toggleSeat(seat, setSeat,props.seatNum,props.setSeatNum)}
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
            <button onClick={() => props.reserveSeats(props)} disabled={isButtonDisabled}>Reserve Seats</button>
        </div>
    );
}

export default RoomApp;
