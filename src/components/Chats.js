import React from 'react';
import Navbar from './Navbar';
import styles from './Chats.module.css'
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';

const Chats = () => {

const history = useHistory()

    const logoutHandler = async ()=>{

        await auth.signOut()
        history.push('/')

    }

    return (<div className={styles.container}>
        <Navbar logoutHandler={logoutHandler}/>
        </div>  );
}
 
export default Chats;