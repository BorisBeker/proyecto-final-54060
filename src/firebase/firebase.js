// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getDocs, getFirestore, query, where, addDoc } from "firebase/firestore";

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

const db = getFirestore(app);

export async function getProducts(){
    const response = await getDocs(collection(db, 'games'));
    const listGames = [];
    response.forEach(doc => listGames.push({id:doc.id, ...doc.data()}));
    return listGames;
}

export async function filterCategory(cat){
    const querySnapshot = await getDocs(query(collection(db, 'games'), where('category', '==', cat)));
    const filter = [];
    querySnapshot.forEach(doc => filter.push({id:doc.id, ...doc.data()}))
    return filter;
}

// orden de compra

export async function sendOrder(order){
    const ordersCollection = collection(db, 'orders');
    const docRef = await addDoc(ordersCollection, order)
    console.log("docref: " + docRef)
}