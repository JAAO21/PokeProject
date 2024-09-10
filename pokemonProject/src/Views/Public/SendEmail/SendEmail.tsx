import { useAuth } from "../../../Hook/UseAuth";

//componentes
import {
  TextComponent,
  CardComponent,
  ButtonComponent,
  BoxComponent,
  TypographyComponent,
  AlertMessage,
} from "../../../Components";

import { Container } from "@mui/material";
const SendEmail = () => {
  const {
    UserAuth,
    setAuth,
    setErrors,
    setLoading,
    setSucces,
    loading,
    succes,
    auth: { email },
    errors,
  } = useAuth();

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();

    await UserAuth("Send Email");
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
                valueText={email || ""}
                placeholder="..."
                onChange={(e) =>
                  setAuth((prev) => ({ ...prev, email: e.target.value }))
                }
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
      <AlertMessage
        stateAlert={errors ? errors : succes}
        setErrors={errors ? setErrors : setSucces}
        loading={loading}
        setLoading={setLoading}
      />
    </Container>
  );
};

export default SendEmail;
