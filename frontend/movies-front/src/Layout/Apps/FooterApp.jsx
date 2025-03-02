import { FaInstagram,FaFacebook } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { Link } from 'react-router-dom';
import React from 'react';
import styles from './FooterApp.module.css'; // Import the CSS module

const FooterApp = () => {
    return (
        <footer className={styles.footer}>
            <div className={styles.footerContainer}>

                    <h2 className={styles.heading}>About Us</h2>
                    <p>We're passionate about providing the best service. Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio.</p>

                    <h2 className={styles.heading}>Quick Links</h2>
                    <div className={styles.quickLinks}>
                        <a href="#" className={styles.a}>Home</a>
                        <a href="#" className={styles.a}>Services</a>
                        <a href="#" className={styles.a}>Contact</a>
                        <a href="#" className={styles.a}>Blog</a>
                    </div>


                    <h2 className={styles.heading}>Follow Us</h2>
                    <div className={styles.socialLinks}>
                        <Link   target="blank" to={"https://instagram.com"}><FaInstagram id={styles.insta} /></Link>
                        <Link to={"https://facebook.com"}><FaFacebook /></Link>
                        <Link to={"https://twitter.com"}><FaXTwitter /></Link>

                </div>
            </div>
            <div className={styles.footerBottom}>
                &copy; 2025 YourCompany | Designed by YourName
            </div>
        </footer>
    );
};

export default FooterApp;
