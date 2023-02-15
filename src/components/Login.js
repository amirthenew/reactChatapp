import React from 'react';
import  firebase  from 'firebase/app';
import { auth } from '../firebase';

//icon
import google from '../assets/google.svg'

import styles from './Login.module.css'

const Login = () => {
    return (
        
        <div className={styles.loginPage}>
<div className={styles.loginCard}>
<h2>Welcome to Webichat!</h2>

<div onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}>
<img alt='google' src={google}/> sign in with google
</div>
</div>
        </div>  );
}
 
export default Login;