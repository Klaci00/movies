import styles from './FormApp.module.css';
const FormApp=(props)=>{
    return( <form onSubmit={props.handleSubmit} className={props.darkMode?styles.light:styles.dark}>
    <div >
        <label><p>Title:</p></label>
        <input type="text" value={props.title} onChange={(e) => props.setTitle(e.target.value)} required />
    </div>
    <div>
        <label><p>Description:</p></label>
        <textarea value={props.description} onChange={(e) => props.setDescription(e.target.value)} required />
    </div>
    <div>
        <label>Rating:</label>
        <select value={props.selectedRestriction} onChange={props.handleDropdownChange} required>
            <option value="" disabled>Select a restriction</option>
            {props.Restrictions.map(restriction => (
                <option key={restriction} value={restriction}>{restriction}</option>
            ))}
        </select>
    </div>
    <div>
        <label>Playtime:</label>
        <input type="number" value={props.playtime} 
        onChange={(e) => props.setPlaytime(Number(e.target.value))} 
        onFocus={props.handlePlaytimeFocus}
        required />
    </div>
    <div>
        <label>Poster:</label>
        <input type="file" onChange={(e) => props.setPoster(e.target.files[0])} required />
    </div>
    <button type="submit">Add Show</button>
</form>)
}

export default FormApp;