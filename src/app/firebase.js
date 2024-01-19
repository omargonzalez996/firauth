import { initializeApp } from "https://www.gstatic.com/firebasejs/10.7.2/firebase-app.js";

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