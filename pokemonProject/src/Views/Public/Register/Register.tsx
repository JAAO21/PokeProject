// Material mui
import {
  Select,
  MenuItem,
  InputLabel,
  FormControl,
  SelectChangeEvent,
  Container,
} from "@mui/material";

import { useAuth } from "../../../Hook/UseAuth";
//components
import {
  TextComponent,
  CardComponent,
  ButtonComponent,
  BoxComponent,
  TypographyComponent,
  AlertMessage,
} from "../../../Components";

const Register = () => {
  const {
    auth,
    errors,
    succes,
    loading,
    setErrors,
    setSucces,
    setLoading,
    setAuth,
    UserAuth,
  } = useAuth();

  const handleChange = (event: SelectChangeEvent<string>) => {
    setAuth({ ...auth, [event.target.name]: event.target.value });
  };

  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();
    // Logica de formulario

    await UserAuth("Register");
  };

  return (
    <Container component="main" maxWidth="xs">
      <AlertMessage
        stateAlert={errors ? errors : succes}
        setErrors={errors ? setErrors : setSucces}
        loading={loading}
        setLoading={setLoading}
      />
      <BoxComponent
        sx={{
          display: "flex",
          gap: "8px",
          mt: "8px",
          width: "500px",

          flexDirection: "column",
          padding: 3,
          boxShadow: "0px 0px 15px rgba(0,0,0,0.2)",
          borderRadius: 2,
          backgroundColor: "#ffffff",
        }}
      >
        <CardComponent sx={{ width: "500px", height: "600px" }}>
          <TypographyComponent variant="h5">Registrate</TypographyComponent>
          <TypographyComponent variant="inherit" sx={{ margin: "15px" }}>
            Es facil y rapido
          </TypographyComponent>
          <form onSubmit={handleSubmit} className="formRegister">
            <BoxComponent
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                gap: "3px",
              }}
            >
              <TextComponent
                nameText="firstName"
                labelText="First Name"
                valueText={auth.firstName || ""}
                onChange={handleChange}
                sx={{ width: "100%" }}
                required={true}
              />
              <TextComponent
                nameText="lastName"
                labelText="Last Name"
                valueText={auth.lastName || ""}
                onChange={handleChange}
                sx={{ width: "100%" }}
                required={true}
              />
            </BoxComponent>
            <BoxComponent
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="IdentificationType-select">
                  Tipo de identificación
                </InputLabel>
                <Select
                  labelId="IdentificationType-select"
                  id="IdentificationType"
                  name="IdentificationType"
                  value={auth.IdentificationType}
                  label="Tipo de identificación"
                  onChange={handleChange}
                  required={true}
                >
                  <MenuItem value={""}></MenuItem>
                  <MenuItem value={"c.c"}>C.C</MenuItem>
                  <MenuItem value={"c.e"}>C.E</MenuItem>
                  <MenuItem value={"t.i"}>T.I</MenuItem>
                  <MenuItem value={"other"}>Otro</MenuItem>
                </Select>
              </FormControl>
              <TextComponent
                nameText="identificationNumber"
                labelText="Identificación"
                typeText="number"
                valueText={auth.identificationNumber || 0}
                onChange={handleChange}
                required={true}
                sx={{ width: "100%" }}
              />
            </BoxComponent>
            <BoxComponent
              sx={{
                display: "grid",
                gridTemplateColumns: "repeat(2,1fr)",
                alignItems: "center",
                gap: "3px",
              }}
            >
              <FormControl fullWidth>
                <InputLabel id="gender-select">Genero</InputLabel>
                <Select
                  labelId="gender-select"
                  id="gender"
                  name="gender"
                  value={auth.gender}
                  label=" Genero"
                  onChange={handleChange}
                  required={true}
                >
                  <MenuItem value={""}></MenuItem>
                  <MenuItem value={"male"}>Hombre</MenuItem>
                  <MenuItem value={"female"}>Mujer</MenuItem>
                  <MenuItem value={"other"}>Otro</MenuItem>
                </Select>
              </FormControl>
              <TextComponent
                nameText="age"
                labelText="Edad"
                typeText="number"
                valueText={auth.age || 0}
                onChange={handleChange}
                required={true}
                sx={{ width: "100%" }}
              />
            </BoxComponent>
            <BoxComponent>
              <TextComponent
                nameText="email"
                labelText="Correo"
                valueText={auth.email || ""}
                onChange={handleChange}
                required={true}
                sx={{ width: "100%" }}
              />
              <TextComponent
                nameText="password"
                labelText="Contraseña"
                typeText="password"
                valueText={auth.password || ""}
                onChange={handleChange}
                required={true}
                sx={{ width: "100%" }}
              />
            </BoxComponent>

            <BoxComponent
              sx={{
                display: "flex",
                justifyContent: "center",
                padding: "5px",
                marginTop: "20px",
              }}
            >
              <ButtonComponent
                type="submit"
                variant="contained"
                buttonText="Registrarte"
              />
            </BoxComponent>
          </form>
        </CardComponent>
      </BoxComponent>
    </Container>
  );
};

export default Register;
