import { initializeApp } from "firebase/app";

import {
  getAuth
} from "firebase/auth";

import {
  getFirestore
} from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyAbdXxqWMLdGM3COIMldwggKOKcSkxqn7k",

  authDomain: "alifer-academy.firebaseapp.com",

  projectId: "alifer-academy",

  storageBucket: "alifer-academy.firebasestorage.app",

  messagingSenderId: "926507297448",

  appId: "1:926507297448:web:d5e642f5585332fc53309d",

  measurementId: "G-HKSWM9L7MC"
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);

export const db = getFirestore(app);