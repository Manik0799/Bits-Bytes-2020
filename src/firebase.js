import * as firebase from 'firebase';

const settings = {timestampsInSnapshots: true};

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const config = {
    apiKey: "AIzaSyDOTQyJXGJoHhMXwesi2CSFGNMRMqIK0YY",
    authDomain: "blogbitsandbytes.firebaseapp.com",
    databaseURL: "https://blogbitsandbytes.firebaseio.com",
    projectId: "blogbitsandbytes",
    storageBucket: "blogbitsandbytes.appspot.com",
    messagingSenderId: "501709774452",
    appId: "1:501709774452:web:04e90f6fa1731807fabb21",
    measurementId: "G-EQT3ST6KT4"
  };


firebase.initializeApp(config);


export default firebase;