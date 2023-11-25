// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBKGPGJL1Yjo-Kb_Nb4MsUuKlwQ2sVeTow",
  authDomain: "nulark-db04c.firebaseapp.com",
  projectId: "nulark-db04c",
  storageBucket: "nulark-db04c.appspot.com",
  messagingSenderId: "224861818757",
  appId: "1:224861818757:web:000c1c2feb394bdae5beec",
  measurementId: "G-NYDZTQ5LM2",
  databaseURL: "https://nulark-db04c-default-rtdb.firebaseio.com "
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);