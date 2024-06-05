// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
    apiKey: "AIzaSyBJSIzy3BCKnIA0SKloPNsxs-ZqvxQY6f8",
    authDomain: "proyecto-final-54060.firebaseapp.com",
    projectId: "proyecto-final-54060",
    storageBucket: "proyecto-final-54060.appspot.com",
    messagingSenderId: "383922602826",
    appId: "1:383922602826:web:bfa9f78b156d188146f7b3",
    measurementId: "G-V9TV98HGNS"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const db = getFirestore(app);




