export const DeleteShowApp=(props)=>{
    return( <form onSubmit={props.handleSubmit}>
        <div>
            <label>Title:</label>
            <select value={props.selectedShow} onChange={props.handleDropdownChange} required>
                <option value="" disabled>Select a show to delete</option>
                {props.shows.map(show => (
                    <option key={show.id} value={show.id}>{show.title}</option>
                ))}
            </select>
        </div>
        <button type="submit">Delete Show</button>
    </form>)
}