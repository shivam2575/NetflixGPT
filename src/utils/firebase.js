// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBovVSytCIdfkmTOCOCASOy6G5bes3MlDs",
  authDomain: "netflixgpt-fadcf.firebaseapp.com",
  projectId: "netflixgpt-fadcf",
  storageBucket: "netflixgpt-fadcf.firebasestorage.app",
  messagingSenderId: "870149663491",
  appId: "1:870149663491:web:43cb1e042fac53713cd736",
  measurementId: "G-SFP6P1SLXF",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
