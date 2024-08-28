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
    sendEmail,
    auth: { email },
    errors,
    setAuth,
    setErrors,
    loading,
    setLoading,
  } = useAuth();

  const handleSendEmail = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      await sendEmail();
    } catch (err) {
      setErrors("Porfavor digite su correo");
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
        errors={errors}
        loading={loading}
        setLoading={setLoading}
        setErrors={setErrors}
      />
    </Container>
  );
};

export default SendEmail;
