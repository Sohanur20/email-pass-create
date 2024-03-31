// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBwLalX245-kCpgN1Ge5BAThBLOjP_qffs",
  authDomain: "auth-email-password-2af50.firebaseapp.com",
  projectId: "auth-email-password-2af50",
  storageBucket: "auth-email-password-2af50.appspot.com",
  messagingSenderId: "48636361591",
  appId: "1:48636361591:web:2972eb83c7afb57cad7f72"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
// export default app ;
const auth = getAuth(app);

export default auth ;