import { Link } from "react-router-dom";

export const ListVenuesApp = (show, isAuth, seatNum, handleChange, venues, id) => {
  if (!show) return <div>Loading...</div>;
  else if (isAuth) return (
    <div className='listvenues_main'>
      <h1 className='textinmiddle'>{show.title}</h1>
      <div className='listvenues_img'>
        <img className='poster' src={show.poster} alt={show.title} />
      </div>

      <p className='textinmiddle'>Korhatár: {show.rating}</p>
      <p className='textinmiddle'>Műsoridő: {show.playtime} perc</p>

      <h2 className='textinmiddle'>Vetítések</h2>
      <div>
        <h3 className='ticketcount'>Foglalja le a helyeket</h3>
        <label className='ticketcount'>
          Hány helyet szeretne lefoglalni?
          <select className='ticket_select' value={seatNum} onChange={handleChange}>
            {Array.from({ length: 30 }, (_, i) => i + 1).map((number) => (
              <option key={number} value={number}>
                {number}
              </option>
            ))}
          </select>
        </label>
      </div>

      {venues.length > 0 ? (
        <ul className='textinmiddle'>
          {venues.map(venue => (
            <li key={venue.id}>
              <Link to={`/${id}/venues/${venue.id}`}>
                <p>A terem neve: {venue.room_name}</p>
                <p>Vetítés kezdete: {new Date(venue.showtime).toLocaleString('hu-HU', { timeZone: 'Europe/Budapest' })}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className='textinmiddle'>No venues available for this show.</p>
      )}

    </div>
  );
  else return (<div className='listvenues_main'>
    <h1 className='textinmiddle'>{show.title}</h1>
    <div className='listvenues_img'>
      <img className='poster' src={show.poster} alt={show.title} />
    </div>
    <p className='textinmiddle'>Korhatár: {show.rating}</p>
    <p className='textinmiddle'>Műsoridő: {show.playtime} perc</p>

    <h2 className='textinmiddle'>Venues</h2>
    {venues.length > 0 ? (
      <ul className='textinmiddle'>
        <strong>A foglaláshoz be kell jelentkeznie!</strong>
        {venues.map(venue => (
          <li key={venue.id}>
            <p>A terem neve: {venue.room_name}</p>
            <p>Vetítés kezdete: {new Date(venue.showtime).toLocaleString('hu-HU', { timeZone: 'Europe/Budapest' })}</p>
          </li>
        ))}
      </ul>
    ) : (
      <p className='textinmiddle'>No venues available for this show.</p>
    )}
  </div>
  )
}