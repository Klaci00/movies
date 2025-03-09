import React from 'react';
import styles from './JumpUpButton.module.css';


const JumpUpButton = (props) => {
    
    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    };

    return (
        <div className={`${styles.JumpUpButton} ${!props.darkMode? styles.dark : ''}`} onClick={scrollToTop}>
            &#8679;
        </div>
    );
};

export default JumpUpButton;