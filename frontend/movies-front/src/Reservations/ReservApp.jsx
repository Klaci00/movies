function ReservApp(props){
    return <div>
       <div> {props.title}</div>
         Helyszín: {props.room_name}{", "}
          Kezdés: {props.showtime}{", "}
          Foglalt székek száma: {props.seat_count}
    </div>
}

export default ReservApp;