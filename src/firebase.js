import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyAOPBPNbOaBaTcHoBTdzm2_hNQeQBKPQGQ",
  authDomain: "e-commerce-login-auth.firebaseapp.com",
  projectId: "e-commerce-login-auth",
  storageBucket: "e-commerce-login-auth.appspot.com",
  messagingSenderId: "994989581756",
  appId: "1:994989581756:web:846ba686c9e67cebd4f7b9"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig)
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
