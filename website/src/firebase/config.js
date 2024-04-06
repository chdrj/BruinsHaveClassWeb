// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyCDC6_Abv-2YD-Nv2gogakE8V2PhJCXIDY",
  authDomain: "bruinhaveclass.firebaseapp.com",
  databaseURL: "https://bruinhaveclass-default-rtdb.firebaseio.com",
  projectId: "bruinhaveclass",
  storageBucket: "bruinhaveclass.appspot.com",
  messagingSenderId: "6199150270",
  appId: "1:6199150270:web:fd3198a9c7d7e0a54480ef",
  measurementId: "G-3WB2VGJF7G"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);