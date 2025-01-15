// src/firebase.js
import { initializeApp } from "firebase/app";
import { getAuth, GoogleAuthProvider } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAYO-f8dUyRa55eM7ey982-EhokohVcbyc",
  authDomain: "healthquick-da0be.firebaseapp.com",
  projectId: "healthquick-da0be",
  storageBucket: "healthquick-da0be.firebasestorage.app",
  messagingSenderId: "567261029897",
  appId: "1:567261029897:web:80501a86fe29e72005fad8",
  measurementId: "G-8XGRV8EBNW"
};


const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export const googleProvider = new GoogleAuthProvider();
export default app;


