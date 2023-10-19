// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// import { getAnalytics } from "firebase/analytics";
import { getAuth, GoogleAuthProvider } from "firebase/auth";
// import { getFirestore } from "@firebase/firestore";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCmk1SE8B_d6SahhgiksGj12rDFhKEC_k0",
  authDomain: "chatapp-28ec4.firebaseapp.com",
  projectId: "chatapp-28ec4",
  storageBucket: "chatapp-28ec4.appspot.com",
  messagingSenderId: "595596152354",
  appId: "1:595596152354:web:9540d97761343fb619047b",
  measurementId: "G-D8CE658RS8",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
export const db = getFirestore(app);
export const auth = getAuth(app);
export const provider = new GoogleAuthProvider();
