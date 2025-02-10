import { initializeApp } from "firebase/app";
import { getFirestore } from "firebase/firestore";

const firebaseConfig = {
  apiKey: "AIzaSyCTJJ2_2ik-RWKdabNzLUKFxjKC1Mo1URU",
  authDomain: "estoque-f052c.firebaseapp.com",
  projectId: "estoque-f052c",
  storageBucket: "estoque-f052c.firebasestorage.app",
  messagingSenderId: "170058850726",
  appId: "1:170058850726:web:0f81bcd765c87564462f67",
  measurementId: "G-HMTFTQ61F1"
};

const app = initializeApp(firebaseConfig);
const db = getFirestore(app)

export { db }
export default app