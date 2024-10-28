export const FormApp_Venue=(props)=>{
    return (
        <form onSubmit={props.handleSubmit}>
            <div>
                <label>Show:</label>
                <select value={props.selectedShow} onChange={handleDropdownChange} required>
                    <option value="" disabled>Select a show</option>
                    {shows.map(show => (
                        <option key={show.id} value={show.id}>{show.title}</option>
                    ))}
                </select>
            </div>
            <div>
                <label>Room Name:</label>
                <select value={selectedRoomName} onChange={handleDropdownChange2} required>
                    <option value="" disabled>Select a room</option>
                    {roomNames.map(roomname => (
                        <option key={roomname} value={roomname}>{roomname}</option>
                    ))}
                </select>

            </div>
            <div>
                <label>Showtime (Budapest Time):</label>
                <input type="datetime-local" value={showtime} onChange={(e) => setShowtime(e.target.value)} required />
            </div>
            <button type="submit">Post Venue</button>
        </form>
    );
}