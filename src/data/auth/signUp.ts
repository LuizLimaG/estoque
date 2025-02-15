import dbConfig from '../firebase/firebaseConfig'
import { createUserWithEmailAndPassword, getAuth } from "firebase/auth";

const auth = getAuth(dbConfig)

export async function SignUp(email: string, password: string) {
    let result = null
    let error = null

    try {
        result = await createUserWithEmailAndPassword(auth, email, password)
    } catch (err) {
        error = err
    }

    return {
        result,
        error
    }
}
