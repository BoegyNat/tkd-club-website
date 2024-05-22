// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyBeybXIOg2B3BxOIDXNNpEezvZnSXBLjgg",
  authDomain: "tkd-web-eb522.firebaseapp.com",
  projectId: "tkd-web-eb522",
  storageBucket: "tkd-web-eb522.appspot.com",
  messagingSenderId: "113600377945",
  appId: "1:113600377945:web:e90a1362b2b2beb5beed48",
  measurementId: "G-DW32VRRDZJ",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
