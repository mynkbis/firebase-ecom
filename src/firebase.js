import firebase from 'firebase/app';

import {initializeApp}  from "firebase/app";
import  {getAuth, onAuthStateChanged} from "firebase/auth"
import { getDoc, getFirestore, doc, setDoc } from "firebase/firestore"
import { useEffect, useState } from 'react';
import { getStorage } from "firebase/storage"

const firebaseConfig = {
  
  // apiKey: "AIzaSyChAO87rX4XbB9LQF3tnNugJIKlT61XjQY",
  // authDomain: "ecommerce-578c6.firebaseapp.com",
  // projectId: "ecommerce-578c6",
  // storageBucket: "ecommerce-578c6.appspot.com",
  // messagingSenderId: "616320999448",
  // appId: "1:616320999448:web:8f4df449fe0c7119be636d",
  // measurementId: "G-BEYFPFHZHC"

apiKey: process.env.REACT_APP_FIREBASE_API_KEY,
authDomain: process.env.REACT_APP_AUTH_DOMAIN,
 projectId: process.env.REACT_APP_PROJECT_ID,
 storageBucket: process.env.REACT_APP_STORAGE_BUCKET,
 messagingSenderId:process.env.REACT_APP_MESSAGING_SENDER_ID,
 appId: process.env.REACT_APP_APP_ID,
measurementId: process.env.REACT_APP_MEASUREMENT_ID
}

const app = initializeApp(firebaseConfig)
export const db=getFirestore(app)
export const auth = getAuth(app);
export const storage = getStorage(app);

//console.log(db)
