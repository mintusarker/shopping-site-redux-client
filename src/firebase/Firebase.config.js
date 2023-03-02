import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyCTSv0HoqypAeDuPYCgExVhM4bzWBxHt9E",
  authDomain: "shopping-site-49617.firebaseapp.com",
  projectId: "shopping-site-49617",
  storageBucket: "shopping-site-49617.appspot.com",
  messagingSenderId: "229558081780",
  appId: "1:229558081780:web:7bea66968e9eb18681e6a1"
};

const app = initializeApp(firebaseConfig);

const auth = getAuth(app)

export default auth;