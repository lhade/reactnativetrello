// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore"

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBt6AkaCnnIj_AIbVxT5wk-bFIaEAaL9mc",
  authDomain: "projettrelo.firebaseapp.com",
  projectId: "projettrelo",
  storageBucket: "projettrelo.appspot.com",
  messagingSenderId: "373590907804",
  appId: "1:373590907804:web:8926e7f3a75c9867cd4659"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth =getAuth(app);
export const db = getFirestore(app);