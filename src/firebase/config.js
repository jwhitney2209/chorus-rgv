// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyDB2KCuTTiShnlSf1sezRw0sLjPv1dl80Y",
  authDomain: "chorusrgv-d8382.firebaseapp.com",
  projectId: "chorusrgv-d8382",
  storageBucket: "chorusrgv-d8382.appspot.com",
  messagingSenderId: "795002220165",
  appId: "1:795002220165:web:94ea0b36206dbee08e03ec"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);

export { app }