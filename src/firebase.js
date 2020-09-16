import firebase from 'firebase/app';
import "firebase/auth";
import "firebase/database";
import "firebase/storage";

var firebaseConfig = {
    apiKey: "AIzaSyAe9cUS2_lXz6cOF2cOKJ7fb0WGGk3mPCU",
    authDomain: "react-slack-clone-3981b.firebaseapp.com",
    databaseURL: "https://react-slack-clone-3981b.firebaseio.com",
    projectId: "react-slack-clone-3981b",
    storageBucket: "react-slack-clone-3981b.appspot.com",
    messagingSenderId: "285156870703",
    appId: "1:285156870703:web:b8cff2c3ce2d4b59"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;