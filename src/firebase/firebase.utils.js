import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';

const config = {
    apiKey: "AIzaSyDjtBFzthDeWmJ-ZKT4w91MErhr4ITJnKQ",
    authDomain: "crown-clothing---db.firebaseapp.com",
    projectId: "crown-clothing---db",
    storageBucket: "crown-clothing---db.appspot.com",
    messagingSenderId: "635655642576",
    appId: "1:635655642576:web:9901e2d5606a0a135cedd5",
    measurementId: "G-P2S2XCEWC9"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: 'select_account' });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;