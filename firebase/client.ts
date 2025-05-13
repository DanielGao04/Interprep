// Import the functions you need from the SDKs you need
import { initializeApp, getApp, getApps } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB7zEd3cCJDpBIN9jKSjNLAPCE_G4Zpaug",
  authDomain: "interprep-a0978.firebaseapp.com",
  projectId: "interprep-a0978",
  storageBucket: "interprep-a0978.firebasestorage.app",
  messagingSenderId: "187107111161",
  appId: "1:187107111161:web:f067290f4818840a8c3228",
  measurementId: "G-R2T06CZGF9"
};

// Initialize Firebase
const app = !getApps.length ? initializeApp(firebaseConfig) : getApp();

export const auth = getAuth(app);
export const db = getFirestore(app);