import { Link } from "react-router-dom";
import LogoutButton2 from "../../Auth/Apps/LogoutButton2";
import styles from './NavApp.module.css';
export const NavApp = ({ isAuth, setIsAuth, isAdmin, setIsAdmin, username, setUserName, setShowWarning,setVisible,setHideNav,hideNav}) => {
    const cookiesAccepted = localStorage.getItem('cookiesAccepted') === 'true';
    
    return (
        <nav className={`${styles.nav} ${hideNav ? styles.hidden : ''}`}>
            <Link to='/contact'><p>Kapcsolat</p></Link>
            <Link to='/'><p>Kezdőoldal</p></Link>
            {!isAuth ? (
                <>
                    <Link to={cookiesAccepted ? '/register' : ''}>
                        <p onClick={() => {
                            setShowWarning(!cookiesAccepted);
                            setTimeout(() => {
                            setVisible(true);},500)
                            }}>Regisztráció</p>
                    </Link>
                    <Link to={cookiesAccepted ? '/login2' : ''}><p onClick={() => {
                        setShowWarning(!cookiesAccepted);
                        setTimeout(() => {
                        setVisible(true);},500)
                        }}>Bejelentkezés</p>
                    </Link>
                </>
            ) : (
                <>
                    <Link><p>Üdvözöljük!, {username}!</p></Link>
                    <Link to='/reservations'><p>Foglalások</p></Link>
                    {isAdmin && (
                        <Link to='/administration'><p>Admin Felület</p></Link>
                    )}
                    <LogoutButton2 setIsAuth={setIsAuth} setIsAdmin={setIsAdmin} setUserName={setUserName} />
                   
                </>
                
            )}
             <button className={styles.hideNavButton} onClick={() => setHideNav(true)}>Menü elrejtése</button>
        </nav>
    );
};
