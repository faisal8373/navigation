// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDFnv48CEEvJt1eXGCTUC50-Iw8Em30NIQ",
  authDomain: "navigation-b37d0.firebaseapp.com",
  projectId: "navigation-b37d0",
  storageBucket: "navigation-b37d0.appspot.com",
  messagingSenderId: "54137550393",
  appId: "1:54137550393:web:d3f8711fe9951509adffe8"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export const storage = getStorage(app)
export const db = getFirestore(app);