import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getStorage } from "firebase/storage";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDtAYXIOyFHQ23oHRnJ4e0-vZllF58J3QY",
  authDomain: "chat-app-4d909.firebaseapp.com",
  projectId: "chat-app-4d909",
  storageBucket: "chat-app-4d909.appspot.com",
  messagingSenderId: "1021237324952",
  appId: "1:1021237324952:web:c3720a3eebff435ac774ed",
  measurementId: "G-S10EKJHV5S"
};

// Initialize Firebase
export const app = initializeApp(firebaseConfig);
export const auth = getAuth();
export const storage = getStorage();
export const db = getFirestore()
