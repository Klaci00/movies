import React from 'react';


const DarkModeButton = (props) => {
    const styles = {
        position: 'fixed',
        top: '20px',
        right: '20px',
        width: '80px',
        height: '80px',
        backgroundColor: props.darkMode?'#f2f2f2' :'#000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '24px',
        zIndex: 1000,
        transition: 'all 0.5s',
    };
    
    
    props.innerWidth<600 ? styles.width='50px' : styles.width='80px';
    props.innerWidth<600 ? styles.height='50px' : styles.height='80px';

    return (
        <div style={styles} onClick={props.toggleDarkMode}>
            {props.darkMode ? '🌜' : '☀️'}
        </div>
    );
};

export default DarkModeButton;