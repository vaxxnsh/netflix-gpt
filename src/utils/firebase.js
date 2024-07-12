// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDd1ure4W8QvEanswMsbbXSIWOJqNp-fKo",
  authDomain: "netflixgpt-5666f.firebaseapp.com",
  projectId: "netflixgpt-5666f",
  storageBucket: "netflixgpt-5666f.appspot.com",
  messagingSenderId: "656033141351",
  appId: "1:656033141351:web:a5db0a864e546a63b63ac2",
  measurementId: "G-M7CY8W2LLK"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();