import { initializeApp } from "firebase/app";
import 'firebase/firestore'


const firebaseConfig = {
  apiKey: "AIzaSyATxSYkN80EsRbPmGMKKKuzo169ZXvQI54",
  authDomain: "kryptonig.firebaseapp.com",
  databaseURL: "https://kryptonig-default-rtdb.firebaseio.com",
  projectId: "kryptonig",
  storageBucket: "kryptonig.appspot.com",
  messagingSenderId: "789240259240",
  appId: "1:789240259240:web:8e38290746f416c186189d",
  measurementId: "G-CH68R1PMBX"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export default app
