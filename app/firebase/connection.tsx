// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
import { getFirestore } from "firebase/firestore";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBpOjwOsJwK_mMVZyMq0xa_90n8y3zaQxg",
  authDomain: "chat-engine-95078.firebaseapp.com",
  projectId: "chat-engine-95078",
  storageBucket: "chat-engine-95078.appspot.com",
  messagingSenderId: "1006522151016",
  appId: "1:1006522151016:web:e56ae418dc7ffcf2434bdd",
  measurementId: "G-16Z95FL4Z5"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// const analytics = getAnalytics(app);
const Firestore = getFirestore(app);

export { Firestore };