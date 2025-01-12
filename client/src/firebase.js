// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: import.meta.env.VITE_FIREBASE_API_KEY,
  authDomain: "mern-blog-be0af.firebaseapp.com",
  projectId: "mern-blog-be0af",
  storageBucket: "mern-blog-be0af.firebasestorage.app",
  messagingSenderId: "350344239414",
  appId: "1:350344239414:web:e61ee520d41a2061a07b97"
};

// Initialize Firebase
export const app = initializeApp( firebaseConfig );
