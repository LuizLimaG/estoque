import { getAuth, signInWithEmailAndPassword } from "firebase/auth";
import app from "../firebase/firebaseConfig";

const auth = getAuth(app);

export async function SignIn(email: string, password: string) {
  let result = null;
  let error = null;

  try {
    result = await signInWithEmailAndPassword(auth, email, password);
  } catch (err) {
    error = err;
  }

  return {
    result,
    error,
  };
}
