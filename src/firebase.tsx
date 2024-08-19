import { initializeApp } from "firebase/app";
import { getDatabase } from "firebase/database";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const apikey = import.meta.env.VITE_NOTAPI_KEY;

const firebaseConfig = {
  apiKey: apikey,
  authDomain: "zealliance-88a9b.firebaseapp.com",
  databaseURL:
    "https://zealliance-88a9b-default-rtdb.asia-southeast1.firebasedatabase.app/",
  projectId: "zealliance-88a9b",
  storageBucket: "zealliance-88a9b.appspot.com",
  messagingSenderId: "520191220772",
  appId: "1:520191220772:web:a83c732990e667d161ccb1",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getDatabase(app);
const fdb = getFirestore(app);
export { auth, db, fdb };
