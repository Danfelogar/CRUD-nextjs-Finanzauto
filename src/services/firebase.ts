// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
import { APP_ID, KEY, MESSAGING_SENDER_ID } from "../utils/enviroments";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: KEY,
  authDomain: "disney-plus-v2.firebaseapp.com",
  projectId: "disney-plus-v2",
  storageBucket: "disney-plus-v2.appspot.com",
  messagingSenderId: MESSAGING_SENDER_ID,
  appId: APP_ID,
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const authGeneric = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
