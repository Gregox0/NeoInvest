import {  initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
    apiKey: "AIzaSyBCv2SKreONfqbsD3-_Ay0RWXQTN9Br59E",
    authDomain: "neoinvest-e2902.firebaseapp.com",
    projectId: "neoinvest-e2902",
    storageBucket: "neoinvest-e2902.firebasestorage.app",
    messagingSenderId: "215843745485",
    appId: "1:215843745485:web:ce2c86502f27d7f8aa0384",
    measurementId: "G-5BJHVTMP62"
  }

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };