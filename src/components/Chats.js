import React from 'react';
import Navbar from './Navbar';
import styles from './Chats.module.css'
import { auth } from '../firebase';
import { useHistory } from 'react-router-dom';
import { ChatEngine } from 'react-chat-engine';

const Chats = () => {

const history = useHistory()

    const logoutHandler = async ()=>{

        await auth.signOut()
        history.push('/')

    }

    return (<div className={styles.container}>
        <Navbar logoutHandler={logoutHandler}/>

        <ChatEngine
        height='calc(100vh - 50px)'
        projectID='ab189720-9648-46d3-bd2f-5b2e11c172f3'
        userName='.'
        userSecret='.'
        

        />
        </div>  );
}
 
export default Chats;