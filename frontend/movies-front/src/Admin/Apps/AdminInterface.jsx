import React from 'react';
import { Link } from "react-router-dom";
import styles from './AdminInterface.module.css';


export const AdminInterface = () => {
    return (
        <div >
            <nav className={styles.navadmin}>
                <Link to='/addshow'>Add Show</Link>
                <Link to='/addvenue'>Add Venue</Link>
                <Link to='/deleteshow'>Delete Show</Link>
                <Link to='/deletevenue'>Delete Venue</Link>
            </nav>
        </div>
    );
};