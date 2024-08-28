//contexto y estado
import { useState } from "react";

import { Avatar, Container } from "@mui/material";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";

//context modal
import { useModal } from "../../../Context/ModalContext.tsx";

//hook
import { useAuth } from "../../../Hook/UseAuth.tsx";

//views
import Register from "../Register/Register.tsx";

import SendEmail from "../SendEmail/SendEmail.tsx";

//components
import {
  TextComponent,
  CardComponent,
  ButtonComponent,
  BoxComponent,
  ModalComponent,
} from "../../../Components";

import "./main.css";

const Login = () => {
  const [auth, setAuth] = useState({
    email: "",
    password: "",
  });
  const [optionModal, setOptionModal] = useState("");

  const { login } = useAuth();
  const { openModal } = useModal();

  const handleOpenModalRegister = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOptionModal("Register");
    e.preventDefault();
    openModal();
    return;
  };
  const handleOpenModalSendEmail = (e: React.MouseEvent<HTMLButtonElement>) => {
    setOptionModal("ForgotPassword");
    e.preventDefault();
    openModal();
    return;
  };

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setAuth({ ...auth, [event.target.name]: event.target.value });
  };

  const handleLoginForm = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (!auth.email || !auth.password) {
      alert("Digite su usuario o contraseña");
    } else {
      login(auth);
    }
  };

  return (
    <Container component="main" maxWidth="xs">
      <BoxComponent
        sx={{
          marginTop: 8,
          display: "flex",
          flexDirection: "column",
          justifyContent: "center",
          alignItems: "center",
          padding: 3,
          filter: "drop-shadow(0 0 15px rgba(0,0,0,.8))",
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

        <CardComponent
          sx={{ backgroundColor: "rgba(255, 255, 255, 0.8)", height: "350px" }}
        >
          <BoxComponent
            sx={{
              mt: 1,
            }}
          >
            <form onSubmit={handleLoginForm} className="containerLoginForm">
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
            </form>
            <BoxComponent
              sx={{
                display: "flex",
                justifyContent: "center",
                flexDirection: "column",
              }}
            >
              <ButtonComponent
                type={"link"}
                buttonText={"¿Olvidaste tu contraseña?"}
                sx={{ color: "black", textDecoration: "none" }}
                onclick={handleOpenModalSendEmail}
              />

              <ButtonComponent
                type={"link"}
                sx={{ color: "red", textDecoration: "none" }}
                buttonText={"Regístrate"}
                onclick={handleOpenModalRegister}
              />
            </BoxComponent>
            <ModalComponent>
              {optionModal === "Register" ? <Register /> : <SendEmail />}
            </ModalComponent>
          </BoxComponent>
        </CardComponent>
      </BoxComponent>
    </Container>
  );
};

export default Login;
