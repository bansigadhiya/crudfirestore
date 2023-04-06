import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDse59QdrM-wBCW59_kXuMQQEhQ9dZ_IJk",
  authDomain: "auth-dd38b.firebaseapp.com",
  projectId: "auth-dd38b",
  storageBucket: "auth-dd38b.appspot.com",
  messagingSenderId: "642246333370",
  appId: "1:642246333370:web:3faf382594024099f18383"
};

// Initialize Firebase
const myFirebase = initializeApp(firebaseConfig);
export const auth = getAuth(myFirebase);
export const db = getFirestore(myFirebase);
