// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";
import { getAnalytics, isSupported } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBGDf2Qt57xhNF3XuFDsc7TWYA7jLxxYVU",
  authDomain: "myapp-51e53.firebaseapp.com",
  projectId: "myapp-51e53",
  storageBucket: "myapp-51e53.firebasestorage.app",
  messagingSenderId: "564027719986",
  appId: "1:564027719986:web:2ab2cdf08eeecba107172b",
  measurementId: "G-FZMM0KQKWZ"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Auth & Firestore
const auth = getAuth(app);
const db = getFirestore(app);

// Initialize Analytics only if supported
let analytics;
isSupported().then((supported) => {
  if (supported) {
    analytics = getAnalytics(app);
    console.log("Firebase Analytics initialized");
  } else {
    console.warn("Firebase Analytics is not supported in this environment.");
  }
}).catch((error) => {
  console.warn("Error checking Firebase Analytics support:", error);
});

export { auth, db, analytics };