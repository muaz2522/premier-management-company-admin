import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";
import { getAuth } from "firebase/auth";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
    apiKey: "AIzaSyBJoc-nJ6Jrf0pPHR5d6o5Wr046lx71uE8",
    authDomain: "premier-management-company.firebaseapp.com",
    projectId: "premier-management-company",
    storageBucket: "premier-management-company.appspot.com",
    messagingSenderId: "691143331300",
    appId: "1:691143331300:web:807c8ea1d39ff04fe94bf1",
    measurementId: "G-S5G7R14RT9"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth();
const db = getFirestore(app);

export { app, auth, db };