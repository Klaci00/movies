import {useEffect } from 'react';

export const NightModeButton = (props) => {
    
    useEffect(() => {
        document.body.style.transition = 'background-color 0.5s';
    }, [props.isDark]);

    const toggleDarkMode = () => {
        props.setIsDark(!props.isDark);
        document.body.style.backgroundColor = props.isDark? 'black':'white';
        
    };

    const buttonStyles = {
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: props.innerWidth < 600 ? '50px' : '80px',
        height: props.innerWidth < 600 ? '50px' : '80px',
        backgroundColor: props.isDark ? '#000' : '#fff',
        color: props.isDark ? '#fff' : '#000',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '24px',
        zIndex: 1000,
    };

    return (
        <div style={buttonStyles} onClick={toggleDarkMode}>
            {props.isDark ? '🌜' : '☀️'}
        </div>
    );
};
