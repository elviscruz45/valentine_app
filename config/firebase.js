// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyAQKt6KMCoky8Ml9o7rlzplzuniPZJWALs",
  authDomain: "valentine-app-ac496.firebaseapp.com",
  projectId: "valentine-app-ac496",
  storageBucket: "valentine-app-ac496.appspot.com",
  messagingSenderId: "191954620560",
  appId: "1:191954620560:web:5d81ff9ad15a2474a40815",
  measurementId: "G-GY683QDL8D",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const dbase = getFirestore(app);
