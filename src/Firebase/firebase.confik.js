// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
 apiKey: "AIzaSyCFA8wE1MfgXPyLYUxDGcwieGwISVRph0Y",
  authDomain: "assingment-4494e.firebaseapp.com",
  projectId: "assingment-4494e",
  storageBucket: "assingment-4494e.firebasestorage.app",
  messagingSenderId: "876882528090",
  appId: "1:876882528090:web:a46daa59ce2a567f9c5563"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase Authentication and get a reference to the service
 export const auth = getAuth(app);