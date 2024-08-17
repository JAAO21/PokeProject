import AppError from "../AppError";
class AuthError extends AppError {
  constructor(message = "Access token is missing", status = 404) {
    super(message, status);
  }
}

export default AuthError;
