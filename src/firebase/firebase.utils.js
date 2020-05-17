import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyAELZyKrQfyB2e00Y65U62GbfX-PAa7aLw",
    authDomain: "crown-clothing-806da.firebaseapp.com",
    databaseURL: "https://crown-clothing-806da.firebaseio.com",
    projectId: "crown-clothing-806da",
    storageBucket: "crown-clothing-806da.appspot.com",
    messagingSenderId: "566750696448",
    appId: "1:566750696448:web:00667e9191254f5c3b34e5",
    measurementId: "G-VJ40Y4XMMZ"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({prompt: 'select_account'});

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;