import React from 'react';


const JumpUpButton = (props) => {
    const styles = {
        position: 'fixed',
        bottom: '20px',
        right: '20px',
        width: '80px',
        height: '80px',
        backgroundColor: '#000',
        color: '#fff',
        display: 'flex',
        justifyContent: 'center',
        alignItems: 'center',
        borderRadius: '50%',
        cursor: 'pointer',
        fontSize: '24px',
        zIndex: 1000,
    };
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };
    props.innerWidth<600 ? styles.width='50px' : styles.width='80px';
    props.innerWidth<600 ? styles.height='50px' : styles.height='80px';

    return (
        <div style={styles} onClick={scrollToTop}>
            &#8679;
        </div>
    );
};

export default JumpUpButton;