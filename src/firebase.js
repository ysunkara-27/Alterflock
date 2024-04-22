// Import Firebase modules
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getAnalytics } from "firebase/analytics";

// Firebase configuration from your Firebase project settings
const firebaseConfig = {
    apiKey: "AIzaSyAOIA1IEIIp-S3Ubnw41meFPWhHHBha7W4",
    authDomain: "alterflock-8c81f.firebaseapp.com",
    projectId: "alterflock-8c81f",
    storageBucket: "alterflock-8c81f.appspot.com",
    messagingSenderId: "1069107667760",
    appId: "1:1069107667760:web:54feb999e86c11cf3a1ef5",
    measurementId: "G-Y32W9C0KR0"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

// Initialize Firebase services
const db = getFirestore(app);
const auth = getAuth(app);
const analytics = getAnalytics(app);

// Export the Firebase services for use in other parts of your application
export { app, db, auth, analytics };