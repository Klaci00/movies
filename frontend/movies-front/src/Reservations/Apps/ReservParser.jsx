import ReservApp from "./ReservApp";

export const ReservParser=(BASE_URL,token,reservationData,setReservationData,error,setError,DeleteReservation)=> {
    return ( function RP(x){
        <div key={x.id}>
            <ReservApp
                id={x.id}
                title={x.title}
                owner={x.owner}
                room_name={x.room_name}
                showtime={x.showtime}
                seat_count={x.seat_count}
                seatnames={x.seatnames}
                BASE_URL={BASE_URL}
                token={token}
                setReservationData={setReservationData}
                reservationData={reservationData}
                error={error}
                setError={setError}
                onDelete={DeleteReservation}
            />
        </div>}
    );
}