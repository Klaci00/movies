export const VenueDataMaker =(selectedShowObject,SelectedRoomTypeObject,showtime)=>{
   return {
        'title': selectedShowObject.title,
        'room_name': SelectedRoomTypeObject.room_name,
        'showtime': showtime,
        'show_id': selectedShowObject.id,
        'room_style_id': SelectedRoomTypeObject.id
    }
}