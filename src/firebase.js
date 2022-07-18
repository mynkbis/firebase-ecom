import firebase from 'firebase/app';

import {initializeApp}  from "firebase/app";
import  {getAuth, onAuthStateChanged} from "firebase/auth"
import { getDoc, getFirestore, doc, setDoc } from "firebase/firestore"
import { useEffect, useState } from 'react';

const firebaseConfig = {
  
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

console.log(db)