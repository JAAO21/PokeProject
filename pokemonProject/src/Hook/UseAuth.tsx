import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../Layout/AuthProvider/AuthProvider";
import ApiAuth from "../Services/Axios/Api/Auth/apiAuth";
import { useLoading } from "./UseLoading";
import { useInfoState } from "./UseInfoState";

type AuthParams = {
  email: string;
  password?: string;
};

export const useAuth = () => {
  const [auth, setAuth] = useState<Partial<AuthParams>>({});
  const api = new ApiAuth();
  const { handleLogin } = useContext(AuthContext);
  const { loading, setLoading } = useLoading();
  const { errors, setErrors, succes, setSucces } = useInfoState();
  const navigate = useNavigate();

  const login = async () => {
    try {
      setLoading(true);
      const apiAxiosSignIn = await api.postLogin(auth);
      if (apiAxiosSignIn.token) {
        handleLogin(apiAxiosSignIn.token);
      } else {
        console.error("Data no found");
        setErrors("Login failed: token not found");
      }
    } catch (err) {
      console.error(err);
      setErrors("Login failed" + err);
    } finally {
      setLoading(false);
    }
  };

  const resetPassword = async () => {
    try {
      setLoading(true);
      const apiResetPassword = await api.postForgotPassword(auth);
      if (apiResetPassword) {
        alert("Su contraseña ha sido actualizada");
        localStorage.removeItem("email");
        navigate("/login");
      }
    } catch (err) {
      console.error(err);
      setErrors("Reset password failed" + err);
    } finally {
      setLoading(false);
    }
  };

  const sendEmail = async () => {
    //terminar
    try {
      setLoading(true);
      if (auth.email) {
        const apiAxiosSendEmail = await api.postSendEmailForgotPassword(
          auth.email
        );
        if (apiAxiosSendEmail.status === 200) {
          localStorage.setItem("email", auth.email);
          setSucces("El correo fue enviado ...");
        } else {
          setErrors("Your email no exist in the system");
        }
      }
    } catch (err) {
      console.error(err);
      setErrors("Send email failed" + err);
    } finally {
      setLoading(false);
    }
  };
  return {
    login,
    resetPassword,
    sendEmail,
    setAuth,
    setErrors,
    setLoading,
    loading,
    auth,
    errors,
    succes,
  };
};
