import React, { FC } from "react";
import { TextField, SxProps, Theme } from "@mui/material";

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
    />
  );
};

export default TextComponent;
