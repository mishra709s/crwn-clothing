import firebase from "firebase/app";
import "firebase/firestore";
import "firebase/auth";

const config = {
  apiKey: "AIzaSyBpmjQMx_zh9vFUvEOFoiM1YjCWXRTX7fs",
  authDomain: "crown-db-56e33.firebaseapp.com",
  databaseURL: "https://crown-db-56e33.firebaseio.com",
  projectId: "crown-db-56e33",
  storageBucket: "crown-db-56e33.appspot.com",
  messagingSenderId: "817571040474",
  appId: "1:817571040474:web:d169d4cc1f64c43f36e9e3",
  measurementId: "G-VKQ7SWJ12V",
};

export const createUserProfileDocument = async (userAuth, additionalData) => {
  if (!userAuth) return;

  const userRef = firestore.doc(`users/${userAuth.uid}`);

  const snapShot = await userRef.get();

  if (!snapShot.exists) {
    const { displayName, email } = userAuth;
    const createdAt = new Date();

    try {
      await userRef.set({
        displayName,
        email,
        createdAt,
        ...additionalData,
      });
    } catch (error) {
      console.log("Error Creating User", error.message);
    }
  }
  return userRef;
};

firebase.initializeApp(config);

// Google authentication
export const auth = firebase.auth();
export const firestore = firebase.firestore();

const provider = new firebase.auth.GoogleAuthProvider();
provider.setCustomParameters({ prompt: "select_account" });

export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
