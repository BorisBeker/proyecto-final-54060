// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
import { collection, getDocs, getDoc, updateDoc, doc, getFirestore, query, where, addDoc } from "firebase/firestore";

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

export const sendOrder = async (order) => {
    try {
        const ordersCollection = collection(db, 'orders');
        const docRef = await addDoc(ordersCollection, order)
        console.log("Orden enviada con ID: ", docRef.id);
    } catch (e) {
        console.error("Error añadiendo documento: ", e);
        throw e;
    }
};

export const updateStock = async (productId, cantidad) => {
    try {
        console.log(`Intentando actualizar el stock para el producto ID: ${productId}, Cantidad: ${cantidad}`);
        const productRef = doc(db, "games", productId);
        const productSnap = await getDoc(productRef);

        if (productSnap.exists()) {
            const newStock = productSnap.data().stock - cantidad;
            console.log(`Nuevo stock calculado para el producto ID: ${productId} es ${newStock}`);

            if (newStock >= 0) {
                await updateDoc(productRef, {
                    stock: newStock
                });
                console.log("Stock actualizado para el producto:", productId);
            } else {
                throw new Error(`Stock insuficiente para el producto: ${productId}`);
            }
        } else {
            throw new Error(`Producto no encontrado: ${productId}`);
        }
    } catch (error) {
        console.error(`Error al actualizar el stock para el producto ID: ${productId}`, error);
        throw error;  // Re-lanza el error para que pueda ser manejado más arriba si es necesario
    }
};