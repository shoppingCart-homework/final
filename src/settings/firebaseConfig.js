// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
export const config = {
  apiKey: "AIzaSyB3EuucPFsW92-c8eyA1Mdhnpczdzz4qro",
  authDomain: "appcart-39b32.firebaseapp.com",
  projectId: "appcart-39b32",
  storageBucket: "appcart-39b32.appspot.com",
  messagingSenderId: "334869830598",
  appId: "1:334869830598:web:163b837129f1b5c4f070c7",
  measurementId: "G-Q2XLR6R1QL"
};

// Initialize Firebase
const app = initializeApp(config);
const analytics = getAnalytics(app);