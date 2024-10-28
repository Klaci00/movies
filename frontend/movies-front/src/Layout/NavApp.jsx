import { Link } from "react-router-dom"
import Logout from "../Auth/Logout"

export const NavApp = (props) => {
    return <nav className='nav'>
        <Link to='/'><p>Home</p></Link>
        {!props.isAuth ? (
            <>
                <Link to='/register'><p>Register</p></Link>
                <Link to='/login'><p>Login</p></Link>
            </>
        ) : (
            <>
                <span>Welcome, {props.username}!</span>
                <Link to='/reservations'><p>Reservations</p></Link>
                {props.isAdmin ? (
                    <>
                        <Link to='/addshow'><p>Add Show</p></Link>
                        <Link to='/addvenue'><p>Add Venue</p></Link>
                    </>)
                    :
                    (<></>)}
                <Logout setAuth={props.setIsAuth} />
            </>
        )}
    </nav>
}