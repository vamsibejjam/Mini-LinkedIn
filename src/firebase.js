import { initializeApp } from "firebase/app";
import { getAuth } from "firebase/auth";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyBNnOaPuW6YIWIB5a8B9yZoryAfHMOgnR8",
  authDomain: "linkedin-clone-3be96.firebaseapp.com",
  projectId: "linkedin-clone-3be96",
  storageBucket: "linkedin-clone-3be96.firebasestorage.app",
  messagingSenderId: "200470150888",
  appId: "1:200470150888:web:ad06aca227ad1de0c1d35d",
};

const app = initializeApp(firebaseConfig);

export const auth = getAuth(app);
export const db = getFirestore(app);
