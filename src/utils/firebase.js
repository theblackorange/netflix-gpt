// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAcwXtAZuLpgUPqNt0NwM-UJtZwe6lIbs4",
  authDomain: "netflixgpt-1a6ef.firebaseapp.com",
  projectId: "netflixgpt-1a6ef",
  storageBucket: "netflixgpt-1a6ef.appspot.com",
  messagingSenderId: "778240944475",
  appId: "1:778240944475:web:bdea64361b688b417ed27e",
  measurementId: "G-1RH3GYG3EJ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const auth = getAuth();