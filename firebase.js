import firebase from "firebase";

const firebaseConfig = {
  apiKey: "AIzaSyCQCEIQtpfTpeBTm47611b9lRKRUv9dDIA",
  authDomain: "e-clone-50e45.firebaseapp.com",
  projectId: "e-clone-50e45",
  storageBucket: "e-clone-50e45.appspot.com",
  messagingSenderId: "1016652709910",
  appId: "1:1016652709910:web:6b42bebe1b63f4e2637537",
};

const app = !firebase.apps.length
  ? firebase.initializeApp(firebaseConfig)
  : firebase.app();

const db = app.firestore();

export default db;
