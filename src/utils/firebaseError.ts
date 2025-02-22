import { FirebaseErrorCode, FirebaseErrorMessage } from "@/types/firebase";

const firebaseErrors: Record<FirebaseErrorCode, FirebaseErrorMessage> = {
  [FirebaseErrorCode.INVALID_EMAIL]: {
    message: "O endereço de e-mail é inválido.",
    action: "Por favor, verifique o formato do e-mail e tente novamente.",
  },
  [FirebaseErrorCode.MISSING_PASSWORD]: {
    message: "O campo de senha não pode ser vazio",
    action: "Por favor, digite a senha."
  },
  [FirebaseErrorCode.WRONG_PASSWORD]: {
    message: "Senha incorreta.",
    action: "Por favor, verifique sua senha e tente novamente.",
  },
  [FirebaseErrorCode.USER_NOT_FOUND]: {
    message: "Não existe usuário com este e-mail.",
    action: "Verifique o e-mail ou crie uma nova conta.",
  },
  [FirebaseErrorCode.EMAIL_ALREADY_IN_USE]: {
    message: "Este e-mail já está em uso.",
    action: "Tente fazer login ou use outro e-mail.",
  },
  [FirebaseErrorCode.WEAK_PASSWORD]: {
    message: "A senha é muito fraca.",
    action: "Use uma senha com pelo menos 6 caracteres.",
  },
  [FirebaseErrorCode.POPUP_CLOSED]: {
    message: "O popup de autenticação foi fechado.",
    action: "Por favor, mantenha a janela aberta durante o processo.",
  },
  [FirebaseErrorCode.TOO_MANY_REQUESTS]: {
    message: "Muitas tentativas. Acesso temporariamente bloqueado.",
    action: "Aguarde alguns minutos antes de tentar novamente.",
  },
  [FirebaseErrorCode.NETWORK_ERROR]: {
    message: "Erro de conexão.",
    action: "Verifique sua conexão com a internet.",
  },
  [FirebaseErrorCode.EXPIRED_ACTION_CODE]: {
    message: "O código de ação expirou.",
    action: "Solicite um novo código.",
  },
  [FirebaseErrorCode.INVALID_ACTION_CODE]: {
    message: "O código de ação é inválido.",
    action: "Verifique o link recebido ou solicite um novo.",
  },
} as const;

export {
    firebaseErrors
}