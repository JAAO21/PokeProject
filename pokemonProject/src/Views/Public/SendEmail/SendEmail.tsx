import { useState } from "react";

//componentes
import {
  TextComponent,
  CardComponent,
  ButtonComponent,
  BoxComponent,
  TypographyComponent,
} from "../../../Components";

//servicios de api
import ApiAuth from "../../../Services/Axios/Api/Auth/apiAuth";
import { Container } from "@mui/material";
const SendEmail = () => {
  const [email, setEmail] = useState("");
  const apiAuth = new ApiAuth();
  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    if (email) {
      const apiAxiosSendEmail = await apiAuth.postSendEmailForgotPassword(
        email
      );
      if (apiAxiosSendEmail.status === 200) {
        localStorage.setItem("email", email);
        alert("mensaje enviado");
      } else {
        alert("Su cuenta no existe en el sistema");
      }
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
        minHeight: "100vh", // Esto asegura que el modal esté centrado verticalmente
      }}
    >
      <BoxComponent
        sx={{
          display: "flex",
          width: "500px",

          flexDirection: "column",
          justifyContent: "center",
          borderRadius: 2,
          backgroundColor: "#ffffff",
        }}
      >
        <CardComponent sx={{ width: "500px" }}>
          <TypographyComponent variant="h5">
            Recuperar contraseña
          </TypographyComponent>
          <TypographyComponent variant="inherit" sx={{ margin: "15px" }}>
            Escriba su correo para buscar su cuenta
          </TypographyComponent>
          <form onSubmit={handleSendEmail} style={{ color: "gray" }}>
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
                nameText="email"
                labelText="Email"
                typeText="email"
                valueText={email}
                onChange={(e) => setEmail(e.target.value)}
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
      </BoxComponent>
    </Container>
  );
};

export default SendEmail;
