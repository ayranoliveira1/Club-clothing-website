import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCNV_vKMa68XWm7xB8msOX3Ldp1jlX__YM",
  authDomain: "club-clothing-3ddbc.firebaseapp.com",
  projectId: "club-clothing-3ddbc",
  storageBucket: "club-clothing-3ddbc.appspot.com",
  messagingSenderId: "922248480457",
  appId: "1:922248480457:web:53bf44e546dfbae8362f18",
  measurementId: "G-GJL1JDBLLP",
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
export const db = getFirestore(app);