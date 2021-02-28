import firebase from 'firebase'

const firebaseConfig = {
    apiKey: "AIzaSyCGHIlRNbEstR3Lb09N3zcmQKBiNmZhhuw",
    authDomain: "react-auth-f14c6.firebaseapp.com",
    databaseURL: "https://react-auth-f14c6-default-rtdb.firebaseio.com",
    projectId: "react-auth-f14c6",
    storageBucket: "react-auth-f14c6.appspot.com",
    messagingSenderId: "159851579945",
    appId: "1:159851579945:web:dc7314c5c415a92a35aa38"
};
// Initialize Firebase
firebase.initializeApp(firebaseConfig);

export default firebase;