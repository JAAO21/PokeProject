import React, { FC } from "react";
import { TextField } from "@mui/material";

interface PropsText {
  nameText: string;
  labelText: string;
  typeText?: string;
  valueText: string;
  onChange: (event: React.ChangeEvent<HTMLInputElement>) => void;
  required?: boolean;
  autoFocus?: boolean;
  autoComplete?: string;
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
    />
  );
};

export default TextComponent;
