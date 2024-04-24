import firebase from "firebase/app";
import 'firebase/firestore';

const firebaseConfig = {
    apiKey: process.env.FIREBASE_API_KEY,
    authDomain: "vue-live-chat-d23a3.firebaseapp.com",
    projectId: "vue-live-chat-d23a3",
    storageBucket: "vue-live-chat-d23a3.appspot.com",
    messagingSenderId: "211290804876",
    appId: "1:211290804876:web:71aa07fa696899d475e1a9"
};

firebase.initializeApp(firebaseConfig);

const projectFirestore = firebase.firestore();

const timestamp = firebase.firestore.FieldValue.serverTimestamp();

export { projectFirestore, timestamp }