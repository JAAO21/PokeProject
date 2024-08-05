import React, { FC } from "react";

import { Typography } from "@mui/material";

import { ChildrenSxInterface } from "../../Layout/Types/ChildrenSxInterface";
const TypographyComponent: FC<ChildrenSxInterface> = ({
  children,
  sx,
  variant,
}) => {
  return (
    <Typography variant={variant} sx={sx}>
      {children}
    </Typography>
  );
};

export default TypographyComponent;
