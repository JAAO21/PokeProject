import React, { FC } from "react";

import { Typography } from "@mui/material";

import { ChildrenSxInterface } from "../../Layout/Types/ChildrenSxInterface";
const TypographyComponent: FC<ChildrenSxInterface> = ({
  children,
  sx,
  variant,
  color,
  align,
}) => {
  return (
    <Typography variant={variant} sx={sx} color={color} align={align}>
      {children}
    </Typography>
  );
};

export default TypographyComponent;
