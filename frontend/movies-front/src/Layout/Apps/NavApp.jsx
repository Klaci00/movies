import { Link } from "react-router-dom"
import LogoutButton2 from "../../Auth/Apps/LogoutButton2"

export const NavApp = ({isAuth, setIsAuth,isAdmin, setIsAdmin,username,setUserName}) => {

    return <nav className='nav'>
        <Link to='/'><p>Home</p></Link>

        {!isAuth ? (
            <>
                <Link to='/register'><p>Register</p></Link>
                <Link to='/login2'>Login</Link>

            </>
        ) : (
            <>
                <span>Welcome, {username}!</span>
                <Link to='/reservations'><p>Reservations</p></Link>
                {isAdmin ? (
                    <>
                        <Link to='/addshow'><p>Add Show</p></Link>
                        <Link to='/addvenue'><p>Add Venue</p></Link>
                    </>)
                    :
                    (<></>)}
                <LogoutButton2 setIsAuth={setIsAuth} setIsAdmin={setIsAdmin}setUserName={setUserName}/>

            </>
        )}
    </nav>
}