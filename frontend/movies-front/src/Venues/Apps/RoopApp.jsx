import React from 'react';
import '../../Cascade Style Sheets/VenueDetail.css';
import { NumSeatCheck } from '../Functions/toggleSeat';

function RoomApp(props) {

    const StyleDict =props.venue.room_style[0].style_dict;
    console.log(StyleDict)
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
    return (
        <div className='venuedetail_main'>
            <h1>{props.show.title}</h1>
            <img className='poster' src={props.show.poster} alt={props.show.title} />
            <p>Showtime: {new Date(props.venue.showtime).toLocaleString()}</p>
            <p>Jegyek száma: {props.seatNum}</p>
            <div style={StyleDict.screen}>Screen</div>
            <div style={StyleDict.corridor}></div>
            <div style={StyleDict.seats_and_entrance}>
            <div>
                <div style={StyleDict.gap_upper_left}> </div>
                <div style={StyleDict.entrance_left}>left</div>
            </div>
                <div style={StyleDict.seats_container}>
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
                <div >
                    <div style={StyleDict.gap_upper}></div>
                    <div style={StyleDict.entrance}>BEJÁRAT</div>
                    
                </div>
            </div >
            <div className='backwall'  ><div style={StyleDict.entrance_back}>back</div>
            <div style={StyleDict.back_corridor}></div>
            </div>
            <button onClick={() => props.reserveSeats(props)} disabled={isButtonDisabled}>Reserve Seats</button>
        </div>
    );
}

export default RoomApp;