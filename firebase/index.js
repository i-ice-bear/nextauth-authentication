// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDLz_VfBSF9vRAePornvLMMXmvDlldJ2L4",
  authDomain: "linkhive.firebaseapp.com",
  databaseURL: "https://linkhive-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "linkhive",
  storageBucket: "linkhive.appspot.com",
  messagingSenderId: "471684977391",
  appId: "1:471684977391:web:0c69454664cb2b127fc11a",
  measurementId: "G-QWWHTHL7QR"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);