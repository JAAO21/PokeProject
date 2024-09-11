import React, { FC } from "react";
import { TextField, SxProps, Theme } from "@mui/material";
import { TextFieldProps } from "@mui/material/TextField";

interface PropsText {
  nameText: string;
  labelText: string;
  typeText?: string;
  valueText: string | Number;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
  sx?: SxProps<Theme>;
  placeholder?: string;
  variantText?: TextFieldProps["variant"];
}

const TextComponent: FC<PropsText> = ({
  nameText,
  labelText,
  typeText,
  valueText,
  onChange,
  required,
  autoFocus,
  autoComplete,
  sx,
  placeholder,
  variantText,
}) => {
  return (
    <TextField
      autoFocus={autoFocus}
      name={nameText}
      label={labelText}
      type={typeText}
      fullWidth
      margin="normal"
      value={valueText}
      onChange={onChange}
      required={required}
      autoComplete={autoComplete}
      sx={sx}
      placeholder={placeholder}
      variant={variantText || "outlined"}
    />
  );
};

export default TextComponent;
