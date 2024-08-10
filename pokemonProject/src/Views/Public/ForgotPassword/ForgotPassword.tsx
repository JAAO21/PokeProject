import { useState } from "react";
import { useNavigate } from "react-router-dom";
import { Container } from "@mui/material";
import ApiAuth from "../../../Services/Axios/Api/Auth/apiAuth";

import {
  CardComponent,
  ButtonComponent,
  TextComponent,
  BoxComponent,
  TypographyComponent,
} from "../../../Components";

const ForgotPassword = () => {
  const [passwordState, setPasswordState] = useState({
    password: "",
    confirmPassword: "",
  });
  const navigate = useNavigate();
  const apiAuth = new ApiAuth();

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setPasswordState({
      ...passwordState,
      [event.target.name]: event.target.value,
    });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    if (passwordState.password === passwordState.confirmPassword) {
      const data = {
        email: localStorage.getItem("email"),
        password: passwordState.password,
      };
      const apiAxiosForgotPassword = await apiAuth.postForgotPassword(data);
      if (apiAxiosForgotPassword.status(200)) {
        localStorage.removeItem("email");
        alert("Su contraseña ha sido actualizada");
        navigate("/login");
      } else {
        alert("Error en el servidor"); //manejar errores
      }
    } else {
      alert("Las contraseñas no son iguales");
    }
  };

  return (
    <Container
      component="main"
      maxWidth="xs"
      sx={{
        display: "flex",
        justifyContent: "center",
        alignItems: "center",
      }}
    >
      <CardComponent
        sx={{
          padding: "20px",
          borderRadius: "10px",
          boxShadow: "0px 4px 10px rgba(0, 0, 0, 0.1)",
          backgroundColor: "#ffffff",
        }}
      >
        <TypographyComponent
          variant="h5"
          sx={{
            marginBottom: "15px",
            color: "#333",
            textAlign: "center",
            fontWeight: "bold",
          }}
        >
          Escriba su nueva contraseña
        </TypographyComponent>
        <form onSubmit={handleSubmit}>
          <BoxComponent
            sx={{
              display: "flex",
              alignItems: "center",
              gap: "7px",
              flexDirection: "column",
              padding: "15px",
            }}
          >
            <TextComponent
              nameText="password"
              labelText="Contraseña"
              typeText="password"
              valueText={passwordState.password}
              onChange={handleChange}
              required={true}
            />
            <TextComponent
              nameText="confirmPassword"
              labelText="Contraseña"
              typeText="password"
              valueText={passwordState.confirmPassword}
              onChange={handleChange}
              required={true}
            />
            <BoxComponent>
              <ButtonComponent
                type="submit"
                variant="contained"
                buttonText="Enviar"
                isSend={true}
              />
            </BoxComponent>
          </BoxComponent>
        </form>
      </CardComponent>
    </Container>
  );
};

export default ForgotPassword;
