// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyD9hhQspeTyXi3sO3faGzWZaaDsAMxVTWo",
  authDomain: "voicetodoapp.firebaseapp.com",
  projectId: "voicetodoapp",
  storageBucket: "voicetodoapp.appspot.com",
  messagingSenderId: "967304382377",
  appId: "1:967304382377:web:8d21f73f9c3595f3e3e6b8",
  measurementId: "G-P9WYCRSMCX",
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
