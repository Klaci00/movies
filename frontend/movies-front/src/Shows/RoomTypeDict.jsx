function RoomTypeDict(room_name){
    if (room_name == 'Kisterem'){
      return {
        'screen': 'screen_small',
        'corridor': 'corridor_small',
        'seatsandentrance': 'seatsandentrance_small',
        'seats_container': 'seats_container_small',
        'entrance_and_gaps': 'entrance_and_gaps_small',
        'gap_upper': 'gap_upper_small',
        'entrance': 'entrance_small',
        'gap_lower': 'gap_lower_small'
      }
    }
    else if (room_name == 'Közepes terem'){
        return {
        'screen': 'screen_medium',
        'corridor': 'corridor_medium',
        'seatsandentrance': 'seatsandentrance_medium',
        'seats_container': 'seats_container_medium',
        'entrance_and_gaps': 'entrance_and_gaps_medium',
        'gap_upper': 'gap_upper_medium',
        'entrance': 'entrance_medium',
        'gap_lower': 'gap_lower_medium'
        }
    }
  }

  export default RoomTypeDict;