import React, { FC } from "react";
import { createTheme, ThemeProvider } from "@mui/material/styles";
import Button from "@mui/material/Button";
import SendIcon from "@mui/icons-material/Send";

import { ButtonParams } from "./typeParams.tsx";

let theme = createTheme({
  // Theme customization goes here as usual, including tonalOffset and/or
  // contrastThreshold as the augmentColor() function relies on these
});
theme = createTheme(theme, {
  // Custom colors created with augmentColor go here
  palette: {
    dark: theme.palette.augmentColor({
      color: {
        main: "#000000",
      },
      name: "dark",
    }),
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
      >
        {buttonText}
      </Button>
    </ThemeProvider>
  );
};

export default ButtonComponent;
