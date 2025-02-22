'use client'

import { FirebaseErrorCode, FirebaseErrorMessage } from "@/types/firebase"
import { firebaseErrors } from "@/utils/firebaseError"
import { useState } from "react"

export function useFirebaseError() {
    const [error, setError] = useState<FirebaseErrorMessage | null>(null)

    const handleFirebaseError = (error: any) => {
        const errorCode = error.code as FirebaseErrorCode
        const firebaseError = firebaseErrors[errorCode] || {
            message: "Ocorreu um erro inesperado.",
            action: "Por favor, tente novamente mais tarde."
        }
        setError(firebaseError)
        return firebaseError
    } 

    const clearError = () => setError(null)

    return {
        error,
        handleFirebaseError,
        clearError
    }
}