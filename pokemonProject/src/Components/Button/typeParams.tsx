import { ButtonProps } from "@mui/material/Button";
import { SvgIconProps } from "@mui/material/SvgIcon";
import { ElementType } from "react";

export type ButtonParams = {
  type?: "button" | "submit" | "reset"; // Especifica los valores permitidos
  variant?: ButtonProps["variant"]; // Usa los tipos de Material-UI para `variant`
  buttonText?: string;
  style?: React.CSSProperties; // Tipo para estilos CSS en línea
  onclick?: React.MouseEventHandler<HTMLButtonElement>; // Tipo específico para eventos de clic
  Icon?: ElementType<SvgIconProps>; // Asegura que `Icon` sea un componente SVG de MUI
  isSend?: boolean;
  component?: React.ElementType; // Para soportar cualquier tipo de componente
  to?: string; // `null` es innecesario si `to` es opcional
};
