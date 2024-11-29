import AddShow from "../AddShow"
import { AddVenue } from "../AddVenue"
import { Link } from "react-router-dom"

export const AdminInterface=()=>{
    return <>
            <nav className='nav'>
            <Link to='/addshow'>Add Show</Link>
            <Link to='/addvenue'>Add Venue</Link>
            <Link to='/deleteshow'>Delete Show</Link>
            <Link to='/deletevenue'>Delete Venue</Link>
            </nav>
    </>
}