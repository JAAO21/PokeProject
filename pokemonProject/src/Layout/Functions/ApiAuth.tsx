import ApiAuth from "../../Services/Axios/Api/Auth/apiAuth";
type AuthpParams = {
  setSucces: (succes: string) => void;
  setLoading: (state: boolean) => void;
  setErrors: (error: string) => void;
  handleLogin: (token: string) => void;
  auth: any;
  navigate: any;
};
export const apiAuth = async ({
  setSucces,
  setLoading,
  setErrors,
  handleLogin,
  auth,
  navigate,
}: AuthpParams) => {
  const api = new ApiAuth();

  const login = async () => {
    console.log("is login");
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
      } else {
        setErrors("Porfavor digite su correo");
      }
    } catch (err) {
      console.error(err);
      setErrors("Send email failed" + err);
    } finally {
      setLoading(false);
    }
  };

  const register = async () => {
    try {
      setLoading(true);
      if (!auth) {
        setErrors("Los campos son obligatorios");
      } else {
        const apiAxiosRegister = await api.postRegister(auth);
        if (apiAxiosRegister) {
          setSucces("Su cuenta fue creada");
          navigate("/login");
        } else {
          setErrors("Error en el sistema");
        }
      }
    } catch (err) {
    } finally {
      setLoading(false);
    }
  };
  return { login, resetPassword, sendEmail, register };
};
