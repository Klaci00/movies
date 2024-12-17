export const DeleteVenueApp = (props) => {
    return (<form onSubmit={props.handleSubmit}>
        <div>
            <label>Select Show:</label>
            <select value={props.selectedShow} onChange={props.handleDropdownChange} required>
                <option value="" disabled>Select a show</option>
                {props.shows.map(show => (
                    <option key={show.id} value={show.id}>{show.title}</option>
                ))}
            </select>
        </div>
        <div>
            <label>Select Venue:</label>
            <select value={props.selectedVenue} onChange={props.handleDropdownChange2} required>
                <option value="" disabled>Select a venue</option>
                {props.venues && props.venues.map(venue => (
                    <option key={venue.id} value={venue.id}>{`${venue.showtime} - ${venue.room_name}-${venue.title}`}</option>
                ))}
            </select>
        </div>
        <button type="submit">Delete Venue</button>
    </form>)
}