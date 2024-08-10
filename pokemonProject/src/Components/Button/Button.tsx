import React, { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import { ButtonParams } from "./typeParams.tsx";

let theme = createTheme({
  palette: {
    primary: {
      main: "#000000", // Negro
      contrastText: "#ffffff", // Blanco para el texto
    },
  },
});

const ButtonComponent: FC<ButtonParams> = ({
  type,
  variant,
  buttonText,
  style,
  onclick,
  Icon,
  isSend,
  component,
  to,
  sx,
}) => {
  return (
    <ThemeProvider theme={theme}>
      <Button
        component={component || "button"}
        type={type}
        variant={variant}
        onClick={onclick}
        startIcon={isSend ? <SendIcon /> : Icon ? <Icon /> : null}
        style={style}
        {...(to ? { to } : {})}
        sx={sx}
      >
        {buttonText}
      </Button>
    </ThemeProvider>
  );
};

export default ButtonComponent;
