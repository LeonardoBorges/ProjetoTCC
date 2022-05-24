import { initializeApp } from "firebase/app";
import {getAuth,signOut} from "firebase/auth"

const firebaseConfig = {
    apiKey: "AIzaSyBaDj0Ua5aCRIJ-rGHiAC2ZwOOZWgl2YfM",
    authDomain: "teste-web-b951d.firebaseapp.com",
    projectId: "teste-web-b951d",
    storageBucket: "teste-web-b951d.appspot.com",
    messagingSenderId: "708517102930",
    appId: "1:708517102930:web:8b11e20d358ebe49a7668b",
    measurementId: "G-BQ2S02YNK9"
  };

  const app = initializeApp(firebaseConfig);

  export const auth = getAuth(app);
