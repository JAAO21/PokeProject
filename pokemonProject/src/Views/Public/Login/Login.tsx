import { useContext, useState } from "react"; //contexto y estado

import { Avatar, Box, Typography, Link, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

import { AuthContext } from "../../../Layout/AuthProvider/AuthProvider.tsx"; //redux login(token), logout

//Apiaxios
import ApiAuth from "../../../Services/Axios/Api/Auth/apiAuth.tsx";

//components
import {
  TextComponent,
  CardComponent,
  ButtonComponent,
} from "../../../Components";

//estilos
import "./main.css";

const Login = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const postLogin = new ApiAuth();
  const { handleLogin } = useContext(AuthContext);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth({ ...auth, [event.target.name]: event.target.value });
  };

  const handleLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!auth.email || !auth.password) {
      alert("Digite su usuario o contraseña");
    } else {
      const apiAxiosSignIn = await postLogin.postLogin(auth);
      if (apiAxiosSignIn.status === 200 || apiAxiosSignIn !== "undefined") {
        handleLogin(apiAxiosSignIn.data.token);

        console.log(apiAxiosSignIn.data.token);
      } else {
        console.log("error en el servidor");
      }
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <Box
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          padding: 3,
          boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
          borderRadius: 2,
          backgroundColor: "#ffffff",
          backgroundImage:
            'url("https://i.pinimg.com/564x/fa/cc/e6/facce6ffa1e95f3ec5ea68a6721009ad.jpg")', // Aquí va la URL de la imagen de fondo
          backgroundSize: "cover",
          backgroundPosition: "center",
          position: "relative",
        }}
      >
        <Avatar
          sx={{
            m: 1,
            bgcolor: "secondary.main",
            width: 56,
            height: 56,
            backgroundColor: "grey.800",
          }}
        >
          <LockOutlinedIcon fontSize="large" />
        </Avatar>
        <Typography
          component="h1"
          variant="h5"
          sx={{ color: "red", fontWeight: "bold" }}
        >
          Iniciar Sesión
        </Typography>
        <CardComponent sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)" }}>
          <Box
            component="form"
            onSubmit={handleLoginForm}
            noValidate
            sx={{
              mt: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <TextComponent
              required
              nameText="email"
              labelText="Email"
              typeText="email"
              valueText={auth.email}
              onChange={handleChange}
              autoFocus
            />
            <TextComponent
              required
              nameText="password"
              labelText="Contraseña"
              typeText="password"
              valueText={auth.password}
              onChange={handleChange}
              autoComplete="current-password"
            />
            <ButtonComponent
              type="submit"
              variant="contained"
              buttonText="Enviar"
              isSend={true}
              sx={{ mt: 3, mb: 2 }}
            />
            <Link
              href="http://localhost:5173/ForgotPassword"
              variant="body2"
              sx={{ color: "black", textDecoration: "none", mt: 1 }}
            >
              ¿Olvidaste tu contraseña?
            </Link>
            <Typography
              variant="body2"
              color="textSecondary"
              align="center"
              sx={{ mt: 2 }}
            >
              ¿No tienes una cuenta?{" "}
              <Link
                href="http://localhost:5173/register"
                variant="body2"
                sx={{ color: "red", textDecoration: "none" }}
              >
                Regístrate
              </Link>
            </Typography>
          </Box>
        </CardComponent>
      </Box>
    </Container>
  );
};

export default Login;
