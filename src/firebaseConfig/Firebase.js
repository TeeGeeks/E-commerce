// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

import { getStorage } from "firebase/storage";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBwXU38m39CTAO8yXb_xGA1adKlsRfPYj4",
  authDomain: "react-http-9f1d7.firebaseapp.com",
  databaseURL: "https://react-http-9f1d7-default-rtdb.firebaseio.com",
  projectId: "react-http-9f1d7",
  storageBucket: "react-http-9f1d7.appspot.com",
  messagingSenderId: "625890050497",
  appId: "1:625890050497:web:52c72e24102db68a272f40",
  measurementId: "G-T91485KVLP",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const storage = getStorage(app);
export const db = getFirestore(app);
export const auth = getAuth();
export const provider = new GoogleAuthProvider();
