// Footer.js

import React from 'react';
import styles from './FooterApp.module.css'; // Import the CSS module

const FooterApp = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>
                <div className={styles.footerSection}>
                    <h2 className={styles.heading}>About Us</h2>
                    <p>We're passionate about providing the best service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>
                </div>
                <div className={styles.footerSection}>
                    <h2 className={styles.heading}>Quick Links</h2>
                    <ul className={styles.ul}>
                        <li className={styles.li}><a href="#" className={styles.a}>Home</a></li>
                        <li className={styles.li}><a href="#" className={styles.a}>Services</a></li>
                        <li className={styles.li}><a href="#" className={styles.a}>Contact</a></li>
                        <li className={styles.li}><a href="#" className={styles.a}>Blog</a></li>
                    </ul>
                </div>
                <div className={styles.footerSection}>
                    <h2 className={styles.heading}>Follow Us</h2>
                    <div className={styles.socialLinks}>
                        <a href="#" className={styles.icon}><i className="fab fa-facebook"></i></a>
                        <a href="#" className={styles.icon}><i className="fab fa-twitter"></i></a>
                        <a href="#" className={styles.icon}><i className="fab fa-instagram"></i></a>
                        <a href="#" className={styles.icon}><i className="fab fa-linkedin"></i></a>
                    </div>
                </div>
            </div>
            <div className={styles.footerBottom}>
                &copy; 2025 YourCompany | Designed by YourName
            </div>
        </footer>
    );
};

export default FooterApp;
