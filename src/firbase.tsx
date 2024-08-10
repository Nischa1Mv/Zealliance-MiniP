import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: process.env.NOTAPI_KEY,
  authDomain: "zealliance-88a9b.firebaseapp.com",
  projectId: "zealliance-88a9b",
  storageBucket: "zealliance-88a9b.appspot.com",
  messagingSenderId: "520191220772",
  appId: "1:520191220772:web:a83c732990e667d161ccb1",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
