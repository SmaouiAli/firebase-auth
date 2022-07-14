import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import App from "./App";

// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyDl39R8eVfNMKiGX5tjVCeMG9tc4qVVI3E",
  authDomain: "fir-reactnative-auth-21da0.firebaseapp.com",
  projectId: "fir-reactnative-auth-21da0",
  storageBucket: "fir-reactnative-auth-21da0.appspot.com",
  messagingSenderId: "257272149325",
  appId: "1:257272149325:web:91e4c76e8d7a9ec2eff304",
  measurementId: "G-0KF18M6DGY",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

const auth = getAuth(app);
export default { auth };



export { auth };