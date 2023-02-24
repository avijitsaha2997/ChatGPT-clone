/** @format */

import { getApp, getApps, initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyC5D03J1M_OZWhCTWCIU7tlk-Q0B6_094A",
  authDomain: "chatgpt-clone-007.firebaseapp.com",
  projectId: "chatgpt-clone-007",
  storageBucket: "chatgpt-clone-007.appspot.com",
  messagingSenderId: "1050264095218",
  appId: "1:1050264095218:web:25813a891a7c25830a036b",
};

// Initialize Firebase
const app = getApps().length ? getApp() : initializeApp(firebaseConfig);
const db = getFirestore(app);

export { db };
