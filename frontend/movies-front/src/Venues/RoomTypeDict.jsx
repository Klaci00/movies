function RoomTypeDict(room_name) {
  return {
    'roomContainer': `roomContainer_${room_name}`,
    'screen': `screen_${room_name}`,
    'corridor': `corridor_${room_name}`,
    'seatsandentrance': `seatsandentrance_${room_name}`,
    'seats_container': `seats_container_${room_name}`,
    'entrance_and_gaps': `entrance_and_gaps_${room_name}`,
    'gap_upper': `gap_upper_${room_name}`,
    'entrance': `entrance_${room_name}`,
    'leftverticalcorridor': `leftverticalcorridor_${room_name}`,
    'gap_lower': `gap_lower_${room_name}`
  };
}

export default RoomTypeDict;
