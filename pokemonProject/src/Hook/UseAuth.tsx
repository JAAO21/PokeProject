import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Layout/AuthProvider/AuthProvider";
import { useLoading } from "./UseLoading";
import { useInfoState } from "./UseInfoState";
import { apiAuth } from "../Layout/Functions/ApiAuth";

type AuthParams = {
  authApiType: string;
  firstName?: string;
  lastName?: string;
  email: string;
  age?: number;
  gender?: string;
  password?: string;
  IdentificationType?: string;
  identificationNumber?: number;
};

export const useAuth = () => {
  const [auth, setAuth] = useState<Partial<AuthParams>>({});
  const { handleLogin } = useContext(AuthContext);
  const { loading, setLoading } = useLoading();
  const { errors, setErrors, succes, setSucces } = useInfoState();
  const navigate = useNavigate();

  const UserAuth = async (authApiType: string) => {
    const { login, register, resetPassword, sendEmail } = await apiAuth({
      setSucces,
      setLoading,
      setErrors,
      handleLogin,
      auth,
      navigate,
    });
    try {
      setLoading(true);

      switch (authApiType) {
        case "Login":
          await login();
          break;

        case "Reset Password":
          await resetPassword();
          break;

        case "Send Email":
          await sendEmail();
          break;

        case "Register":
          await register();
          break;

        default:
          setErrors(`EL tipe autenticación es invalid :${authApiType}`);
          break;
      }
    } catch (error) {
      console.error(error);
      setErrors(`${authApiType} failed` + error);
    } finally {
      setLoading(false);
    }
  };
  return {
    UserAuth,
    setSucces,
    setAuth,
    setErrors,
    setLoading,
    succes,
    auth,
    loading,
    errors,
  };
};
