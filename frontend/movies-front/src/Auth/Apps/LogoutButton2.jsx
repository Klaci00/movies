import React from 'react';
import { logout2 } from '../Functions/Logout2';
import { deleteCookie } from '../Functions/CookieHandler';

const LogoutButton2 = ({setIsAuth,setIsAdmin,setUserName}) => {
    const handleLogout = async () => {
        await logout2();
        setIsAuth(false);
        setUserName('');
        setIsAdmin(false);
        deleteCookie('username');
        // Optionally redirect the user after logout
        //window.location.href = "/";
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton2;
