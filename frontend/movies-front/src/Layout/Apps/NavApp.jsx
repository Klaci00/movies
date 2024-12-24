import { Link } from "react-router-dom";
import LogoutButton2 from "../../Auth/Apps/LogoutButton2";

export const NavApp = ({ isAuth, setIsAuth, isAdmin, setIsAdmin, username, setUserName, setShowWarning }) => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
    return (
        <nav className='nav'>
            <Link to='/contact'>Contact us</Link>
            <Link to='/'><p>Home</p></Link>
            {!isAuth ? (
                <>
                    <Link to={cookiesAccepted ? '/register' : ''}>
                        <p onClick={() => setShowWarning(!cookiesAccepted)}>Register</p>
                    </Link>
                    <Link to={cookiesAccepted ? '/login2' : ''}><p onClick={() => setShowWarning(!cookiesAccepted)}>Login</p>
                    </Link>
                </>
            ) : (
                <>
                    <span>Welcome, {username}!</span>
                    <Link to='/reservations'><p>Reservations</p></Link>
                    {isAdmin && (
                        <Link to='/administration'>Admin Interface</Link>
                    )}
                    <LogoutButton2 setIsAuth={setIsAuth} setIsAdmin={setIsAdmin} setUserName={setUserName} />
                </>
            )}
        </nav>
    );
};
