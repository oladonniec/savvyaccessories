import firebase from "firebase/compat/app";
import "firebase/compat/auth";
import "firebase/compat/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBS-Xrq5uGf-EZyVFMXRaV0aW8OA0AodMQ",
  authDomain: "savvy-accessories-web-app.firebaseapp.com",
  projectId: "savvy-accessories-web-app",
  storageBucket: "savvy-accessories-web-app.appspot.com",
  messagingSenderId: "334969764002",
  appId: "1:334969764002:web:74cd73153911bd83e73ffb",
  measurementId: "G-67E0SE93GM",
};

const firebaseApp = firebase.initializeApp(firebaseConfig);

const db = firebaseApp.firestore();
const auth = firebase.auth();

export { db, auth };
