export enum FirebaseErrorCode {
  INVALID_EMAIL = "auth/invalid-email",
  MISSING_PASSWORD = "auth/missing-password",
  WRONG_PASSWORD = "auth/invalid-credential",
  USER_NOT_FOUND = "auth/user-not-found",
  EMAIL_ALREADY_IN_USE = "auth/email-already-in-use",
  WEAK_PASSWORD = "auth/weak-password",
  POPUP_CLOSED = "auth/popup-closed-by-user",
  TOO_MANY_REQUESTS = "auth/too-many-requests",
  NETWORK_ERROR = "auth/network-request-failed",
  EXPIRED_ACTION_CODE = "auth/expired-action-code",
  INVALID_ACTION_CODE = "auth/invalid-action-code",
}

export type FirebaseErrorMessage = {
    message: string,
    action?: string
}