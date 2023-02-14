import React from 'react';
//icon
import google from '../assets/google.svg'

import styles from './Login.module.css'

const Login = () => {
    return (
        
        <div className={styles.loginPage}>
<div className={styles.loginCard}>
<h2>Welcome to Webichat!</h2>

<div className={styles.button}>
<img alt='google' src={google}/> sign in with google
</div>
</div>
        </div>  );
}
 
export default Login;