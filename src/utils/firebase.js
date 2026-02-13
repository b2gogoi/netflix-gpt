// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyA7z7QyBPiMt24I1CXQ0RvM0Fq-qquE7WY",
  authDomain: "netflix-gpt-ab0b4.firebaseapp.com",
  projectId: "netflix-gpt-ab0b4",
  storageBucket: "netflix-gpt-ab0b4.firebasestorage.app",
  messagingSenderId: "684759230564",
  appId: "1:684759230564:web:eccdcc5b3dd6e6355a5771",
  measurementId: "G-1C5ZSD3LVP"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);

export const auth = getAuth();

// signInWithEmailAndPassword(auth, email, password)
//   .then((userCredential) => {
//     // Signed in 
//     const user = userCredential.user;
//     // ...
//   })
//   .catch((error) => {
//     const errorCode = error.code;
//     const errorMessage = error.message;
//   });