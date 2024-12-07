import { initializeApp } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-app.js";
import { getAuth } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-auth.js";
import { getFirestore } from "https://www.gstatic.com/firebasejs/11.0.2/firebase-firestore.js";

// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyABFOpfTdXtNOU7TZCvxb0c4-lw4Mf1ZkA",
  authDomain: "medical-c6ebb.firebaseapp.com",
  projectId: "medical-c6ebb",
  storageBucket: "medical-c6ebb.firebasestorage.app",
  messagingSenderId: "221803052041",
  appId: "1:221803052041:web:f1f154e38670ecce92ccd8",
  measurementId: "G-TJX8X3X2BC"
};

const app = initializeApp(firebaseConfig);
const auth = getAuth(app);
const db = getFirestore(app);

export { auth, db };



