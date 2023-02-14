import firebase from 'firebase/app'
import 'firebase/auth'

export const auth = firebase.initializeApp({
    apiKey: "AIzaSyDS0k0bCazxpgaaX9eJvaLMjulob65QjC4",
    authDomain: "webichat-90a2a.firebaseapp.com",
    projectId: "webichat-90a2a",
    storageBucket: "webichat-90a2a.appspot.com",
    messagingSenderId: "677601888585",
    appId: "1:677601888585:web:dc954fa9335976fb9db298"
  }).auth();