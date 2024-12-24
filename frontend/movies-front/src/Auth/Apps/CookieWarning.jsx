import React, { useState, useEffect } from 'react';

const CookieWarning = (props) => {

    const cookieWarning = {
        'position': 'fixed',
        'bottom': 0,
        'width': '100%',
        'backgroundColor': '#333',
        'color': '#fff',
        'padding': '10px',
        'textAlign': 'center',
        'zIndex': 1000
    }
    const cookieWarningButton = {
        'marginLeft': '10px',
        'padding': '5px 10px',
        'backgroundColor': '#007bff',
        'color': '#fff',
        'border': 'none',
        'cursor': 'pointer'
    }

    useEffect(() => {
        const cookiesAccepted = localStorage.getItem('cookiesAccepted');
        if (!cookiesAccepted) {
            props.setShowWarning(true);
        }
    }, []);

    const handleAcceptCookies = () => {
        localStorage.setItem('cookiesAccepted', true);
        props.setShowWarning(false);
    };

    const handleRejectCookies = () => {
        localStorage.setItem('cookiesAccepted', false);
        props.setShowWarning(false);
    };

    return (
        props.showWarning && (
            <div className="cookie-warning" style={cookieWarning}>
                <p>We use cookies to improve your experience. By using our site, you agree to our use of cookies.</p>
                <button onClick={handleAcceptCookies} style={cookieWarningButton} >Accept</button>
                <button onClick={handleRejectCookies} style={cookieWarningButton} >Reject</button>
            </div>
        )
    );
};

export default CookieWarning;
