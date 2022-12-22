// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDKbhSnOH5F2Kf5_M2A_vHWBcAlJQ7rc6Q",
  authDomain: "proyectoreact-2208e.firebaseapp.com",
  projectId: "proyectoreact-2208e",
  storageBucket: "proyectoreact-2208e.appspot.com",
  messagingSenderId: "116638006311",
  appId: "1:116638006311:web:fcea61a20e9e5b61e6a202",
  measurementId: "G-H5J6KMFESZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
export const db = getFirestore(app)