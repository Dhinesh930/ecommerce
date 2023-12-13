import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyACyszqN57sIselpyH-ffEulVIUpHrqess",
  authDomain: "e-commerce-bac3b.firebaseapp.com",
  projectId: "e-commerce-bac3b",
  storageBucket: "e-commerce-bac3b.appspot.com",
  messagingSenderId: "372199750915",
  appId: "1:372199750915:web:dfb37e45b8f9ca0a487d36",
};

const app = initializeApp(firebaseConfig);
export const auth = getAuth(app);
