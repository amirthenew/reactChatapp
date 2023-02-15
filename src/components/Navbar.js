import React from 'react';

//styles
import styles from './Navbar.module.css'



const Navbar = ({logoutHandler}) => {
    return (<div className={styles.container}>
        <div className={styles.name}>
        Webichat
        </div>
        <div className={styles.logout} onClick={logoutHandler}>
        Logout
        </div>
        </div>  );
}
 
export default Navbar;