import firebase from 'firebase'

const firebaseApp = firebase.initializeApp({
    apiKey: "AIzaSyCSgTIFPBWVXyzGO6Nd0zfG3VDu6FMbEOg",
    authDomain: "todo-app-ns-5852a.firebaseapp.com",
    databaseURL: "https://todo-app-ns-5852a.firebaseio.com",
    projectId: "todo-app-ns-5852a",
    storageBucket: "todo-app-ns-5852a.appspot.com",
    messagingSenderId: "137472007804",
    appId: "1:137472007804:web:f71f109fa729f6778833f9",
    measurementId: "G-FX4X8EM1T4"
})

const db = firebaseApp.firestore()

export default db;