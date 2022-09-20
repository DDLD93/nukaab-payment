// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBHUfko63cc9WPw6a11rhAf5Dt1gYkFto0",
  authDomain: "ddld93.firebaseapp.com",
  databaseURL: "https://ddld93-default-rtdb.europe-west1.firebasedatabase.app",
  projectId: "ddld93",
  storageBucket: "ddld93.appspot.com",
  messagingSenderId: "772087817009",
  appId: "1:772087817009:web:087070f2572e7acfbf0610"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
export default app