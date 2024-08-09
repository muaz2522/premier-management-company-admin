import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";

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
const analytics = getAnalytics(app);