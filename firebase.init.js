// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyCR15DBGwWmXss16M95frKgErEOTURzYfc",
  authDomain: "course-master-41375.firebaseapp.com",
  projectId: "course-master-41375",
  storageBucket: "course-master-41375.firebasestorage.app",
  messagingSenderId: "60989887442",
  appId: "1:60989887442:web:66a5936051349779dcae0b"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const auth = getAuth(app)

export default auth