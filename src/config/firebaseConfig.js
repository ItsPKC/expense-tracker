// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCQ2Uj1_CsKfMA6n32qhZ-B__BPLqs6jKU",
  authDomain: "expense-tracker-2702.firebaseapp.com",
  projectId: "expense-tracker-2702",
  storageBucket: "expense-tracker-2702.appspot.com",
  messagingSenderId: "88338440476",
  appId: "1:88338440476:web:e853e62f881c250c189ad9",
  measurementId: "G-W7YLGLNMC6",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const analytics = getAnalytics(app);
export const auth = getAuth(app);
export const db = getFirestore(app);
getAnalytics(app);
