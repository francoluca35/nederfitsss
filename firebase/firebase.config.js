// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
 // Asegúrate de importar el módulo de firestore desde tu archivo firebase


const firebaseConfig = {
  apiKey: "AIzaSyApZWUSkhCEUxvhz0U0yXzWhiFo8G2cY_Q",
  authDomain: "nederfitssv2.firebaseapp.com",
  projectId: "nederfitssv2",
  storageBucket: "nederfitssv2.appspot.com",
  messagingSenderId: "371940046666",
  appId: "1:371940046666:web:ae5bc9f06f0cfd8a5df3b3",
  measurementId: "G-N665DYN129"
};

const app = initializeApp(firebaseConfig);

// Exportar instancias de Auth y Firestore
 const auth = getAuth(app);
export const db = getFirestore(app);

// Inicializar y exportar Firebase Storage
export const storage = getStorage(app);  // Esta es la línea corregida
export {auth};
