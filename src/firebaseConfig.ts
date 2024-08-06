// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// const firebaseConfig = {
//   apiKey: import.meta.env.VITE_API_KEY,
//   authDomain: import.meta.env.VITE_AUTH_DOMAIN,
//   projectId: import.meta.env.VITE_PROJECT_ID,
//   storageBucket: import.meta.env.VITE_STORAGE_BUCKET,
//   messagingSenderId: import.meta.env.VITE_MESSAGINGSENDER_ID,
//   appId: import.meta.env.VITE_APP_ID
// };
const firebaseConfig = {
  apiKey: "AIzaSyAqbanPMJMAqc6G_F55UcEtRoOkzxe1ACY",
  authDomain: "eagles-5d693.firebaseapp.com",
  projectId: "eagles-5d693",
  storageBucket: "eagles-5d693.appspot.com",
  messagingSenderId: "672585550344",
  appId: "1:672585550344:web:765f5df0092ef41c129fbd"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);