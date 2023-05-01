// create firebase config here and export the db object
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyB9fZlLigif9jnRSnDVFh4Gew_aCMBRaYY",
  authDomain: "fir-init-2b120.firebaseapp.com",
  projectId: "fir-init-2b120",
  storageBucket: "fir-init-2b120.appspot.com",
  messagingSenderId: "682452828151",
  appId: "1:682452828151:web:28b71b25497d3b004eb8f2",
};

const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);
