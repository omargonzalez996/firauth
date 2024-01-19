// Import the functions you need from the SDKs you need
import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-auth.js"
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries


// Configuración de firebase
const firebaseConfig = {
    apiKey: "AIzaSyBBi9CnxXRnRFOIPEgobGt95KLamhpaieI",
    authDomain: "firauth-9fa67.firebaseapp.com",
    projectId: "firauth-9fa67",
    storageBucket: "firauth-9fa67.appspot.com",
    messagingSenderId: "525449977926",
    appId: "1:525449977926:web:a47cc264867b7729992a47"
};

// Inicializar y exportar firebase
export const app = initializeApp(firebaseConfig)
export const auth = getAuth(app)