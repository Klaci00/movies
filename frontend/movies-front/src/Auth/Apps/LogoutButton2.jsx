import React from 'react';
import { logout2 } from '../Functions/Logout2';

const LogoutButton2 = ({setIsAuth,setIsAdmin}) => {
    const handleLogout = async () => {
        await logout2();
        // Optionally redirect the user after logout
        setIsAuth(false);
        setIsAdmin(false);
        //window.location.href = "/";
    };

    return (
        <button onClick={handleLogout}>
            Logout
        </button>
    );
};

export default LogoutButton2;
