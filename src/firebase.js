import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyDWoG8DQazekIjHVSCZWrAb90_cPsQieoc",
  authDomain: "timeline04-bd8bc.firebaseapp.com",
  projectId: "timeline04-bd8bc",
  storageBucket: "timeline04-bd8bc.appspot.com",
  messagingSenderId: "162469162688",
  appId: "1:162469162688:web:83179bed4c504581e30725",
};

const app = initializeApp(firebaseConfig);

const db = getFirestore(app);

export default db;
