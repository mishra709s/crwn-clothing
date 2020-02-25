import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyARHM74GYmZqvrREv-d3Nf-raaKnpwNJXA",
  authDomain: "crwn-db-e17e4.firebaseapp.com",
  databaseURL: "https://crwn-db-e17e4.firebaseio.com",
  projectId: "crwn-db-e17e4",
  storageBucket: "crwn-db-e17e4.appspot.com",
  messagingSenderId: "738632917515",
  appId: "1:738632917515:web:98c72516999fa115455d0e",
  measurementId: "G-VN9P16B16C"
};

firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
