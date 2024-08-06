// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

// https://firebase.google.com/docs/web/setup#available-libraries

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
  apiKey: "AIzaSyAWRMGQr1N62tAM9oDnLc23G054RHI3vjc",
  authDomain: "eagles-47f14.firebaseapp.com",
  projectId: "eagles-47f14",
  storageBucket: "eagles-47f14.appspot.com",
  messagingSenderId: "220420106875",
  appId: "1:220420106875:web:e441348becd59abe7b50de"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
// Initialize Firebase Authentication and get a reference to the service
export const auth = getAuth(app);
// Initialize Cloud Firestore and get a reference to the service
export const db = getFirestore(app);