type ApiAuthErrorsParams = {
  errorType: number;
  message: string;
  setErrors: (error: string) => void;
};

export const ApiAuthErrors = ({
  errorType,
  message,
  setErrors,
}: ApiAuthErrorsParams) => {
  switch (errorType) {
    case 401: {
      console.log(`Login failed status ${errorType}:` + message);
      setErrors(`Login failed status ${errorType}:` + message);
      break;
    }
    case 400: {
      console.log(`Login failed status ${errorType}:` + message);
      setErrors(`Login failed status ${errorType}:` + message);
      break;
    }
    case 404: {
      console.log(`Login failed status ${errorType}:` + message);
      setErrors(`Login failed status ${errorType}:` + message);
      break;
    }
    default:
      console.log("Login failed:" + message);
      setErrors("Login failed:" + message);
  }
};
