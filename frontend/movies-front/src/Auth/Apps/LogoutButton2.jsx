import React from 'react';
import { logout2 } from '../Functions/Logout2';
import { deleteCookie } from '../Functions/CookieHandler';
import { Link } from 'react-router-dom';

const LogoutButton2 = ({setIsAuth,setIsAdmin,setUserName}) => {
    const handleLogout = async () => {
        const confirmDelete=window.confirm('Biztosan ki szeretne jelentkezni?');
        if(confirmDelete){
        await logout2();
        setIsAuth(false);
        setUserName('');
        setIsAdmin(false);
        deleteCookie('username');};
        // Optionally redirect the user after logout
        //window.location.href = "/";
    };

    return (
        <p id='logout' onClick={handleLogout}>
            Kijelentkezés
        </p>
    );
};

export default LogoutButton2;
