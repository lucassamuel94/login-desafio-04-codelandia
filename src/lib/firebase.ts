import { initializeApp } from "firebase/app";
import { getAuth } from 'firebase/auth';

const firebaseConfig = {
  apiKey: "AIzaSyBwFQELMDfpXaT3QKMSOnN_u65hUrLDdUY",
  authDomain: "login-desafio-04-codelandia.firebaseapp.com",
  projectId: "login-desafio-04-codelandia",
  storageBucket: "login-desafio-04-codelandia.appspot.com",
  messagingSenderId: "1086847518500",
  appId: "1:1086847518500:web:a0054743b2ec6cbb8f95b1"
};

// Initialize Firebase
const initFirebase = initializeApp(firebaseConfig);
const auth = getAuth(initFirebase);

export { auth };

