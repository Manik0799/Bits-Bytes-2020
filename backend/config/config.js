import firebase from "firebase/app";
import "firebase/auth";
import "firebase/firestore";

const firebaseConfig = {
  //Your config values
  apiKey: "AIzaSyDOTQyJXGJoHhMXwesi2CSFGNMRMqIK0YY",
  authDomain: "blogbitsandbytes.firebaseapp.com",
  databaseURL: "https://blogbitsandbytes.firebaseio.com",
  projectId: "blogbitsandbytes",
  storageBucket: "blogbitsandbytes.appspot.com",
  messagingSenderId: "501709774452",
  appId: "1:501709774452:web:04e90f6fa1731807fabb21",
  measurementId: "G-EQT3ST6KT4",
};

const config = process.env.NODE_ENV === "production" ? prodConfig : devConfig;

class Firebase {
  constructor() {
    firebase.initializeApp(config);
    this.auth=firebase.auth();
  }
  doCreateUserWithEmailAndPassword = (email, password) =>
  this.auth.createUserWithEmailAndPassword(email, password);

doSignInWithEmailAndPassword = (email, password) =>
  this.auth.signInWithEmailAndPassword(email, password);

doSignOut = () => this.auth.signOut();

doPasswordReset = email => this.auth.sendPasswordResetEmail(email);

doPasswordUpdate = password =>
  this.auth.currentUser.updatePassword(password);


}


export default Firebase;
