import styles from './ContactsApp.module.css';
export const ContactsApp=(props)=>{
    return <div className={ `${!props.darkMode?styles.dark:''} ${styles.contacts}`}>
    <h2 >Műszaki támogatás, oldal adminisztráció:</h2>
    <a href="mailto:kenyolaszlosuli@gmail.com">kenyolaszlosuli@gmail.com</a>
    <h3>MOVIES<sup>TM</sup> Kft.</h3>
    <h4>4025 Debrecen, Széchenyi u. 58.</h4>
    <iframe width="900" height="911" frameBorder="0" scrolling="no" marginHeight="0" marginWidth="0" id="gmap_canvas" src="https://maps.google.com/maps?width=520&amp;height=400&amp;hl=en&amp;q=Sz%C3%A9chenyi%20u.%2058%20Debrecen+(Movies%20Kft.)&amp;t=&amp;z=12&amp;ie=UTF8&amp;iwloc=B&amp;output=embed"></iframe>
    </div>
}